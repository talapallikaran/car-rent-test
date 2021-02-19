import React from "react";
import './style/style.scss';
import { LAND_TRANSPORT, TOKIO_MARINE } from '../../assets/images';
import Header from "../../component/Header";
import Banner from "../../component/Banner/Banner";
import SearchForm from "../../component/SearchForm/SearchForm";
import SliderCards from "../../component/SliderCards/SliderCards";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchVisible: false,
    }
  }

  _handleSearchBox = () => {
    this.setState(prevState => ({
      isSearchVisible: !prevState.isSearchVisible
    }))
  }

  render() {
    const { isSearchVisible } = this.state;
    return (
      <div className="App">
        <div className="app-container">
          <Header />
          <Banner toggleSearchBar={() => this._handleSearchBox()} />
          <SearchForm isSearchVisible={isSearchVisible} toggleSearchBar={() => this._handleSearchBox()} />
          <div className="app-sections">
            <div className="insurance-section">
              <ul className="insurance-list">
                <li>
                  <span className="ins-title">
                    Insurance provided by
                    </span>
                  <div className="ins-thumb">
                    <img src={TOKIO_MARINE.default} alt="" />
                  </div>
                </li>
                <li>
                  <span className="ins-title">
                    Approved by
                    </span>
                  <div className="ins-thumb">
                    <img src={LAND_TRANSPORT.default} alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="car-list-slider">
              <h2>
                Featured cars
                </h2>
              <SliderCards />
              <div className="bt-wrap see-all-button">
                <button className="btn">
                  View all cars
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
