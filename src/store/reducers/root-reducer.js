import {combineReducers} from "redux";
import {gameProcess} from "./game-process/game-process";
import {gameData} from "./game-date/game-date";
import {user} from "./user/user";

const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess,
  [NameSpace.USER]: user,
});

export {NameSpace};
