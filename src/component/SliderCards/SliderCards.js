import React from "react";
import { FLEX_ICON, FAV_ICON, RATING_ICON } from '../../assets/images';
import './style/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { featuredCarsData } from "../../dummyData"
class SliderCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredCarsList: [],
      carouselSettings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: "30px"
      }
    }
  }

  componentDidMount() {
    this.setState({
      featuredCarsList: featuredCarsData
    })
  }

  _handleFavorite = (index) => {
    const { featuredCarsList } = this.state;
    if (featuredCarsList && featuredCarsList.length > 0) {
      featuredCarsList.find((i, ind) => {
        if (ind === index) {
          i.isFavorite = !i.isFavorite
        }
      })
      this.setState({
        featuredCarsList
      })
    }
  }

  render() {
    const { carouselSettings, featuredCarsList } = this.state;
    return (
      <div className="featured-slider">
        <Slider {...carouselSettings}>
          {featuredCarsList && featuredCarsList.length > 0 && featuredCarsList.map((car, index) => {
            return (
              <div className="item-wrapper" key={car.id}>
                <div className="item-inner">
                  <div className="item-thumb">
                    <img src={car.image} alt="" />
                    <div className="thumb-header">
                      <div className="cat-icon">
                        {car.isFlex ? <img src={FLEX_ICON.default} alt="" /> : ""}
                      </div>
                      <div className="product-favorite-icon">
                        <button className={car.isFavorite ? "favorite" : ""} onClick={() => this._handleFavorite(index)}>
                          <img src={FAV_ICON.default} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item-content">
                    <div className="item-content-header">
                      <div className="content-header-left">
                        {car.product && car.product.providerName}
                      </div>
                      <div className="content-header-right">
                        <span className="ratings"><i><img src={RATING_ICON.default} alt="" /></i>{car.product && car.product.ratings}</span> <span className="total-trips">({car.product && car.product.totalTrips} trips)</span>
                      </div>
                    </div>
                    <div className="item-content-main">
                      {car.product && car.product.carBrandName}
                      <span className="item-price">
                        <strong>${car.product && car.product.rentPrice}</strong> / day
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}
export default SliderCards;
