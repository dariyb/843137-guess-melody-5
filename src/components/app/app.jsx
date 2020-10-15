import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import ResultScreen from "../result-screen/result-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import GameScreen from "../game-screen/game-screen";
import questionArtistProp from "../question-artist-screen/question-artist.prop";
import questionGenreProp from "../question-genre-screen/question-genre.prop";

const App = (props) => {
  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/result">
          <ResultScreen />
        </Route>
        <Route exact path="/lose">
          <GameOverScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([questionArtistProp, questionGenreProp]).isRequired
  ),
};

export default App;
