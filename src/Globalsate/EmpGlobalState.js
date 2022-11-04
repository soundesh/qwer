import React, { useReducer } from "react";

const initialState = {
  projectdetail: [
    () => {
      if (window.location.pathname === "/emptask") {
        return {
          id: "1233",
          taskdate: "",
          taskgiven: "",
          taskassigned: "",
          project: "",
          task: "",
          Approverremarks: "",
          empremarks: "",
          worked: "",
          clocked: "",
          utilised: "",
          efficiency: "",
          taskStatus: "",
          approvedstatus: "",
        };
      }
      if (window.location.pathname === "/empleave") {
        return {
          id: "23546432",
          user: "",
          empId: "",

          date: "",
          from: "",
          to: "",
          lop: "",
          Days: "",
          leaveType: "",
          reason: "",
          reasonleave: "",
          L1aproverandremarks: "",
          L2aproverandremarks: "",
          L3aproverandreamarks: "",
        };
      }
    },
  ],
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
export const EmpGlobalState = React.createContext();

export const EmpDataProvider = ({ children }) => {
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
  return (
    <EmpGlobalState.Provider value={state}>{children}</EmpGlobalState.Provider>
  );
};
