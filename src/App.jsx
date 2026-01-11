import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<News key="general" country="us" category="general" pageSize={12} />}
          />
        <Route
            path="/about"
            element={<News key="general-about" country="us" category="general" pageSize={12} />}
          />
          <Route
            path="/business"
            element={<News key="business" country="us" category="business" pageSize={12} />}
          />

          <Route
            path="/entertainment"
            element={<News key="entertainment" country="us" category="entertainment" pageSize={12} />}
          />

          <Route
            path="/general"
            element={<News key="general2" country="us" category="general" pageSize={12} />}
          />

          <Route
            path="/health"
            element={<News key="health" country="us" category="health" pageSize={12} />}
          />

          <Route
            path="/science"
            element={<News key="science" country="us" category="science" pageSize={12} />}
          />

          <Route
            path="/sports"
            element={<News key="sports" country="us" category="sports" pageSize={12} />}
          />

          <Route
            path="/technology"
            element={<News key="technology" country="us" category="technology" pageSize={12} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
