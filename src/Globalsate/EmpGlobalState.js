import React, { useReducer } from "react";

export const EmpGlobalState = React.createContext();

export const EmpDataProvider = ({ children }) => {
  const initialState = {
    projectdetail: [{}],
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
          showdetail: action.showdetail,
          createState: true,
        };
      case "view":
        return {
          ...state,
          projectdetail: action.value,
          editdetail: true,
          showdetail: action.showdetail,
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
      //normal table holiday
      case "editState":
        return {
          ...state,
          createState: false,
          editdetail: false,
          projectdetail: action.value,
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
  const [dataholiday, datadispatcholiday] = useReducer(reducer, initialState);

  const state = {
    singledata,
    Singledatadispatch,
    dataleave,
    datadispatchleave,
    dataCreate,
    datadispatCreate,
    dataholiday,
    datadispatcholiday,
  };
  return (
    <EmpGlobalState.Provider value={state}>{children}</EmpGlobalState.Provider>
  );
};
