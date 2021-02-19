import React from "react";
import './style/style.scss';
import { BACK_BUTTON, RATING_ICON } from '../../assets/images';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class SearchForm extends React.Component {
  render() {
    const { isSearchVisible, toggleSearchBar } = this.props;
    return (
      <div className={`search-panel ${isSearchVisible ? "show" : ""}`}>
        <div className="search-panel-header">
          <div className=" back-button" onClick={() => toggleSearchBar()}>
            <span>
              <img src={BACK_BUTTON.default} alt="" />
            </span>
            Search
          </div>
        </div>
        <div className="search-panel-content">
          <div className="search-panel-tabs">
            <ul>
              <li className="active">
                <a href="#" title="Daily">Daily</a>
              </li>
              <li>
                <a href="#" title="Hourly">Hourly</a>
              </li>
              <li>
                <a href="#" title="Long Term">Long Term</a>
              </li>
            </ul>
          </div>
          <div className="search-panel-form">
            <div className="flex-row space-14">
              <div className="flex-column column-12">
                <div className="flex-group">
                  <label htmlFor="enterLocation">Pickup Location</label>
                  <input placeholder="Enter your location" id="enterLocation" type="text" />
                </div>
              </div>
              <div className="flex-column column-6">
                <div className="flex-group">
                  <label htmlFor="selectPickupDate">Pickup Date</label>
                  <input placeholder="Select Date" id="selectPickupDate" type="text" />
                </div>
              </div>
              <div className="flex-column column-6">
                <div className="flex-group">
                  <label htmlFor="selectPickupTime">Pickup Time</label>
                  <input placeholder="Select time" id="selectPickupTime" type="text" />
                </div>
              </div>
              <div className="flex-column column-6">
                <div className="flex-group">
                  <label htmlFor="selectDropOffDate">Dropoff Date</label>
                  <input placeholder="Select Date" id="selectDropOffDate" type="text" />
                </div>
              </div>
              <div className="flex-column column-6">
                <div className="flex-group">
                  <label htmlFor="selectDropOffTime">Dropoff Time</label>
                  <input placeholder="Select time" id="selectDropOffTime" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="search-panel-submit">
            <button className="btn">
              Search
                </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchForm;
