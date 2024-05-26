// create a context  (warehouse) ✅
// provider ✅
// consumer / useContext ✅
import React, { useContext, useReducer } from "react";
const AppContext = React.createContext();
import reducer from "./reducer";

const initialState = {
  name: " ",
  image: " ",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Swapnil Gautam",
        image: "./Images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "About me",
        image: "./Images/about.jpg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
