//Import react and player stats style sheet
import React from "react";
import "../styles/playerStats.css";

//Set up Player Stats
const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>Connor Sullivan LEVEL 25</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>Fullstack Developer</h2>
    </div>
  );
};

export default PlayerStats;