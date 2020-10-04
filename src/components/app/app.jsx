import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import ResultScreen from "../result-screen/result-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtistScreen />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenreScreen />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/result">
          <ResultScreen />
        </Route>
        <Route exact path="/lose">
          <GameOverScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;