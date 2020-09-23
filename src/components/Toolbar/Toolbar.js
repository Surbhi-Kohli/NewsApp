import React, { Component } from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import DropDown from "../DropDown/DropDown";
import DropDown2 from "../DropDown/DropDown2";
class toolbar extends Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="toolbar_toggle_button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="toolbar_logo">
            <a href="/">The LOGO </a>
          </div>
          <DropDown
            country={this.props.whichCountry}
            style={{ marginLeft: "3px" }}
          />
          <DropDown2 category={this.props.whichCategory} />
          <form>
            <input
              className="Query"
              type="text"
              placeholder="Search"
              onChange={this.props.whichQuery}
            />
          </form>

          <div className="spacer" />
          <div className="toolbar_navigation_items">
            <ul>
              <li>
                <div
                  className="toolbar_navigation_itemsDiv"
                  onClick={() => this.props.url("al-jazeera-english")}
                >
                  AlJazeera
                </div>
              </li>
              <li>
                <div
                  className="toolbar_navigation_itemsDiv"
                  onClick={() => this.props.url("bbc-news")}
                >
                  BBC
                </div>
              </li>
              <li>
                <div
                  className="toolbar_navigation_itemsDiv"
                  onClick={() => this.props.url("cnn")}
                >
                  CNN
                </div>
              </li>

              <li>
                <div
                  className="toolbar_navigation_itemsDiv"
                  onClick={() => this.props.url("fox-news")}
                >
                  Fox News
                </div>
              </li>
              <li>
                <div
                  className="toolbar_navigation_itemsDiv"
                  onClick={() => this.props.url("techcrunch")}
                >
                  TechCrunch
                </div>
              </li>
              <li>
                <div
                  className="toolbar_navigation_itemsDiv"
                  onClick={() => this.props.url("the-hindu")}
                >
                  The Hindu
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default toolbar;
