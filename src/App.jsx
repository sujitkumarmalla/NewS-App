import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    const commonProps = {
      setProgress: this.setProgress,
      country: "us",
      pageSize: 12,
      category: "general",
    };

    return (
      <BrowserRouter>
        {/* 🔵 TOP LOADING BAR */}
        <LoadingBar color="red" progress={this.state.progress} height={3} />

        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<News key="home" {...commonProps} />} />

          {/* About → same as General */}
          <Route path="/about" element={<News key="about" {...commonProps} />} />

          {/* General */}
          <Route path="/general" element={<News key="general" {...commonProps} />} />

          {/* Other categories */}
          <Route
            path="/business"
            element={
              <News
                key="business"
                setProgress={this.setProgress}
                country="us"
                category="business"
                pageSize={12}
              />
            }
          />

          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                setProgress={this.setProgress}
                country="us"
                category="entertainment"
                pageSize={12}
              />
            }
          />

          <Route
            path="/health"
            element={
              <News
                key="health"
                setProgress={this.setProgress}
                country="us"
                category="health"
                pageSize={12}
              />
            }
          />

          <Route
            path="/science"
            element={
              <News
                key="science"
                setProgress={this.setProgress}
                country="us"
                category="science"
                pageSize={12}
              />
            }
          />

          <Route
            path="/sports"
            element={
              <News
                key="sports"
                setProgress={this.setProgress}
                country="us"
                category="sports"
                pageSize={12}
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                key="technology"
                setProgress={this.setProgress}
                country="us"
                category="technology"
                pageSize={12}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
