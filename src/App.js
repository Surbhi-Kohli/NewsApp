import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Articles from "./components/Articles/Articles";
import BackDrop from "./components/Backdrop/Backdrop";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    blog: [],
    country: "us",
    dummySource: "",
    dummyCategory: "&category=general",
    category: "",
    query: ""
  };
  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      console.log("key in saveToLocalStorage is " + key);
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  refreshStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }
  componentDidMount() {
    console.log("componentDidMount called in App.js");

    this.fetchNews();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }
  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }
  fetchNews() {
    console.log("fetch news called");

    console.log(
      `https://newsapi.org/v2/top-headlines?country=${this.state.country}${
        this.state.dummyCategory
      }${this.state.query}&apiKey=632ebc1f26634946b76679cf8fbb05ae`
    );
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${this.state.country}${
          this.state.dummyCategory
        }${this.state.query}&apiKey=632ebc1f26634946b76679cf8fbb05ae`
      )
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.setState({ blog: response.data.articles });
      })
      .catch(error => {
        this.refreshStateWithLocalStorage();
      });
  }
  fetchNews2() {
    console.log("fetch news 2 called");
    console.log(
      `https://newsapi.org/v2/top-headlines?${
        this.state.dummySource
      }&apiKey=632ebc1f26634946b76679cf8fbb05ae`
    );
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?${
          this.state.dummySource
        }&apiKey=632ebc1f26634946b76679cf8fbb05ae`
      )
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.setState({ blog: response.data.articles });
      })
      .catch(error => {
        this.refreshStateWithLocalStorage();
      });
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  whichUrl = name => {
    this.setState({ dummySource: "sources=" + name }, () => {
      this.fetchNews2();
    });
  };
  whichCategory = event1 => {
    this.setState(
      {
        category: event1.target.value,
        dummyCategory: "&category=" + event1.target.value
      },
      () => {
        //  console.log("in whichCategory function ->" + event1.target.value);
        //  console.log("category updates to ");
        this.fetchNews();
        //
      }
    );
  };
  whichCountry = event => {
    this.setState({ country: event.target.value }, () => {
      this.fetchNews();
    });
    console.log("in country with country name=" + event.target.value);
  };
  whichQuery = event => {
    this.setState({ query: "&q=" + event.target.value }, () => {
      this.fetchNews();
    });
    console.log("in whichQuery with query= " + event.target.value);
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    console.log("in render of app.js");
    console.log("publishedAt in app.js " + this.state.blog.publishedAt);
    return (
      <div className="App">
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          url={this.whichUrl}
          whichCategory={this.whichCategory}
          whichCountry={this.whichCountry}
          whichQuery={this.whichQuery}
        />
        <SideDrawer show={this.state.sideDrawerOpen} url={this.whichUrl} />
        {backdrop}
        <main style={{ marginTop: "64px" }} />
        <div className="outer">
          <Articles blog={this.state.blog} />
        </div>
      </div>
    );
  }
}

export default App;
