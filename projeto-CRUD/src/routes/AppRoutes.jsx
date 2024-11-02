import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import Update from "../pages/Update";
import More from "../pages/More";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Feed />}></Route>
      <Route path="/more" element={<More />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/update" element={<Update />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}
