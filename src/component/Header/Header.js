import React from "react";
import './style/style.scss';
import { LOGO, USER_ICONS } from '../../assets/images';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <header className="page-header">
        <div className="flex-container">
          <div className="flex-row align-items-center">
            <div className="flex-column column-6">
              <div className="app-logo">
                <a href="javascript:void(0)" title="">
                  <img src={LOGO.default} alt="" />
                </a>
              </div>
            </div>
            <div className="flex-column column-6">
              <div className="user-toggle">
                <button className="user-toggle-icon">
                  <img src={USER_ICONS.default} alt="" />
                </button>
                {/* <ul className="user-navigation">
                      <li>

                      </li>
                    </ul> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
