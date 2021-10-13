import React from "react";
import "./Home.css";

import { HomeIntro } from "../component/home-intro/HomeIntro";

export default function Home() {
  return (
    <div className="home">
      <HomeIntro />
    </div>
  );
}
