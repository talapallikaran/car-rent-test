import React from "react";
import './style/style.scss';
import { SEARCH_ICON, PAGE_BANNER } from '../../assets/images';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Banner extends React.Component {
  render() {
    const { toggleSearchBar } = this.props;
    return (
      <div className="section banner-section" style={{ backgroundImage: "url(" + PAGE_BANNER.default + ")" }}>
        <h1>
          Rent your <br /> neighbour's car
              </h1>
        <div className="search-form">
          <div className="search-form-outer" onClick={() => toggleSearchBar()}>
            <input type="text" placeholder="Search for your perfect rental car" />
            <button>
              <span>
                <img src={SEARCH_ICON.default} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
