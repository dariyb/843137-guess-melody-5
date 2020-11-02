import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {resetGame} from "../../store/action";

const ResultScreen = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick, resetGameAction} = props;
  const rightQuestionsCount = questionsCount - mistakesCount;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {rightQuestionsCount} вопросов и совершили {mistakesCount} ошибки</p>
      <button className="replay" type="button"
        onClick={() => {
          resetGameAction();
          onReplayButtonClick();
        }}
      >Сыграть ещё раз</button>
    </section>
  );
};

ResultScreen.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGameAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({GAME}) => ({
  questionsCount: GAME.step,
  mistakesCount: GAME.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
});


export {ResultScreen};

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);
