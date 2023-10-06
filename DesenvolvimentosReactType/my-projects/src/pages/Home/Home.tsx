import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return <div>
    <Link to="/face">Facebook</Link>
    <br />
    <Link to="/micro">Microsoft</Link>
    <br />
    <Link to="/netflix">Netflix</Link>
  </div>
};

export default Home;