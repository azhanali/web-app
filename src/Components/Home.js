import React, { Component } from "react";
import Posts from "../Components/Posts";
import User from "../Components/User";
import { useState, useEffect } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import Friends from "./Friends";
import "./Home.css";
import { Link } from "react-router-dom";
import Chatbox from "./Chatbox";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: grey;
  size: 50;
`;
export default function Home() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("yellow");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); 
  return (
    <div className="home">
      <div className="home__friends">
      <Friends/>
      </div>
      <div className="boxs">
      {loading ? (
        <ClipLoader color={color} loading={loading} css={override} size={150} />
      ) : (
        <Posts />
      )}
    </div>
    <div className="home__chatbox">
      <a  href="/chatbox" style={{}}>Chatbox</a>
    </div>
    </div>
  );
}
