import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Feed from "./component/Feed";
import SearchResult from "./component/SearchResult";
import VideoDetails from "./component/VideoDetails";

import { Appcontext } from "./assets/context";

import "./App.css";

export default function App() {
  return (
    <Appcontext>
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header /> {/* Add Header component here */}
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/searchResult/:searchQuery"
            element={<SearchResult />}
          />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Appcontext>
  );
}
