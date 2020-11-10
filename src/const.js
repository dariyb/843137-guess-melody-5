const GameType = {
  ARTIST: `artist`,
  GENRE: `genre`,
};

const MAX_MISTAKE_COUNT = 3;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  LOGIN: `/login`,
  LOSE: `/lose`,
  RESULT: `/result`,
  ROOT: `/`,
  GAME: `/game`,
};

const APIRoute = {
  QUESTIONS: `/questions`,
  LOGIN: `/login`,
};

export {GameType, MAX_MISTAKE_COUNT, AuthorizationStatus, AppRoute, APIRoute};
