//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [timer, setTimer] = useState(0);
  


  return (
    <div className="container">
      <section className="scoreboard">
      <h1 className='game'>LA LIGA</h1>
        <div className="topRow">
          
          <div className="home">
            <h2 className="home__name">Real</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer" onClick = { (countFrom, id) => {
            // countFrom = new Date(countFrom).getTime();
            // var now = new Date(),
            //   countFrom = new Date(countFrom),
            //   timeDifference = (now - countFrom);
          
            // var secondsInADay = 60 * 60 * 1000 * 24,
            //   secondsInAHour = 60 * 60 * 1000;
          
            // mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
            // secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

            // var idEl = document.getElementById(id);
            // idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
            // idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

            // clearTimeout(countUpFromTime.interval);
            // countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);

          }}>{timer}</div>
          <div className="away">
            <h2 className="away__name">Barca</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = { () => {
            setHomeScore(homeScore + 7)
            }}>
              Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick = { () => {
            setHomeScore(homeScore + 3)
            }}>
              Home Field Goal
          </button>
        </div>
        <div className="resetButton">
          <button className="resetButton" onClick = { () => {
            setAwayScore(awayScore * 0);
            setHomeScore(homeScore * 0)
            }}>
              Reset Scores
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = { () => {
            setAwayScore(awayScore + 7)
            }}>
              Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick = { () => {
            setAwayScore(awayScore + 3)
            }}>
              Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
