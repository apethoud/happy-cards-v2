import { Users, SavedCards } from "./testData";

export const fetchTestUserDataByEmail = (email) => {
  return Users.find((user) => user.email === email);
};

export const fetchTestUserDataById = (id) => {
  return Users.find((user) => user.id === id);
};

export const fetchTestSavedCardsByUserId = (id) => {
  return SavedCards.filter((card) => card.userId === id);
};

export const fetchTestSavedCardById = (id) => {
  return SavedCards.find((card) => card.id === id);
};
