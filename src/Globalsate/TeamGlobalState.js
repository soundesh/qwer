import React, { useReducer } from "react";

export const TeamGlobalState = React.createContext();

export const TeamDataProvider = ({ children }) => {
  const initialState = {
    projectdetail: {},
    veiwdetail: true,
    editdetail: true,
    showdetail: false,
    AddDetail: true,
    createState: true,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "edit":
        return {
          ...state,
          projectdetail: action.value,
          editdetail: false,
          showdetail: true,
          createState: true,
        };
      case "view":
        return {
          ...state,
          projectdetail: action.value,
          editdetail: true,
          showdetail: true,
          createState: true,
        };

      case "delete":
        return {
          ...state,
          editdetail: true,
          showdetail: false,
        };

      case "Add":
        return {
          ...state,
          AddDetail: true,
        };
      case "createState":
        return {
          ...state,
          createState: !state.createState,
          showdetail: false,
          veiwdetail: false,
        };

      case "normal":
        return {
          ...state,
          veiwdetail: true,
          editdetail: true,
          showdetail: false,
          AddDetail: true,
          createState: true,
        };

      default:
        return state;
    }
  };
  const [singledata, Singledatadispatch] = useReducer(reducer, initialState);

  const [dataleave, datadispatchleave] = useReducer(reducer, initialState);

  const [dataCreate, datadispatCreate] = useReducer(reducer, initialState);

  const state = {
    singledata,
    Singledatadispatch,
    dataleave,
    datadispatchleave,
    dataCreate,
    datadispatCreate,
  };

  <TeamGlobalState.Provider value={state}>{children}</TeamGlobalState.Provider>;
};
