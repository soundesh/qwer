import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
import CheckBoxdesign from "./Checkbox/CheckBoxdesign";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ReuseButton from "../button/ReuseButton";
import "./CrudTable.css";
const CrudTable = ({
  initialData,
  headerData,
  title,
  Design,
  tableDesign,
  tableheight,
  FiliterComponent,
  Adding,
  editing,
  CheckDeletecolor,
  editbtnview,
  checkbtnview,
  DeleteBtnview,
  fontbtnview,
  backbtnview,
  fontcheckbtnonly,
  dispatcheddata,
}) => {
  const [fronthidden, setFronthidden] = useState(fontbtnview);
  const [backhidden, setbackhidden] = useState(backbtnview);
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(allData);
  //adding
  const [addState, setAddState] = useState(Adding);
  const [add, setAdd] = useState(false);
  // edit
  const [editState, setEditState] = useState(editing);
  const [edit, setEdit] = useState(true);
  const [editItem, setEditItem] = useState();
  const [EditData, setEditData] = useState();
  const [editHidden, setEditHidden] = useState(editbtnview);

  //delete
  const [Deletehidden, setDeletehidden] = useState(DeleteBtnview);
  //checked state
  const [allCheck, setAllCheck] = useState(false);
  const [selectedNotEmpty, setSelectedNotEmpty] = useState();
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [selectedAllCheckbox, setSelectedAllCheckbox] = useState([]);
  const [CheckHidden, setCheckhidden] = useState(checkbtnview);
  const [checkbtnonlyview] = useState(fontcheckbtnonly);
  const [checktrue, setchecktrue] = useState(false);
  const [selectedcheckdelete, setSelectedcheckdelete] = useState();

  // filtering date ,project ,state
  const [showfilterData, setshowfilterData] = useState(false);
  //golbal state
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const result = allData.filter((item) => {
      const data = () => {
        for (const user in item) {
          if (item[user].includes(value)) {
            return item;
          }
        }
      };
      return data();
    });
    setFilteredData(result);
  };
  const onhandleDelete = (deleteItem) => {
    if (window.confirm("please conform to delete")) {
      const data = allData.filter((item) => {
        return Object.values(item)[0] !== Object.values(deleteItem)[0];
      });
      setAllData(data);
      setFilteredData(data);
      console.log("You pressed OK!");
    }
  };

  const onallcheckhandleDelete = () => {
    // const checkedData = allData.filter((element) =>
    //   filteredData.includes(element)
    // );
    if (window.confirm("please conform to delete")) {
      const balancedata = allData.filter(
        (element) => !filteredData.includes(element)
      );
      setAllData(balancedata);
      setFilteredData(balancedata);
      setAllCheck(!allCheck);
      console.log("You pressed OK!");
    }
  };

  const onSelectedcheckdelete = () => {
    //console.log(selectedCheckbox);
    const intersection = allData.filter(
      (element) => !selectedCheckbox.includes(element)
    );
    setFilteredData(intersection);
    setSelectedNotEmpty(false);
  };

  const OnhandleEdit = (item) => {
    setEditData([item]);
    setEdit(!edit);
  };

  const onSelectedAllCheck = (e) => {
    if (e.target.checked) {
      setAllCheck(true);
      setSelectedAllCheckbox([...selectedAllCheckbox, ...filteredData]);
    } else {
      setAllCheck(false);
      setSelectedAllCheckbox([]);
    }
  };

  const onselectcheck = (e) => {
    if (e.target.checked) {
      let canceltoken;
      if (typeof canceltoken != typeof undefined) {
        canceltoken.cancel("cancel previous request of token");
      }
      const { value } = e.target;
      const result = allData.filter((item) => {
        const data = () => {
          for (const user in item) {
            if (item[user].includes(value)) {
              return item;
            }
          }
        };
        return data();
      });

      setSelectedCheckbox([...selectedCheckbox, ...result]);
    } else {
      const { value } = e.target;
      setSelectedCheckbox(
        selectedCheckbox.filter((item) => Object.values(item)[0] !== value)
      );
    }
  };

  useEffect(() => {
    if (selectedCheckbox.length !== 0) {
      setSelectedNotEmpty(true);
      setSelectedcheckdelete(false);
    } else {
      setSelectedNotEmpty(false);
    }
    if (selectedAllCheckbox.length !== 0) {
      setSelectedNotEmpty(true);
      setSelectedcheckdelete(true);
    }
  }, [
    selectedCheckbox,
    allCheck,
    showfilterData,
    setshowfilterData,
    selectedAllCheckbox,
  ]);
  return (
    <div
      className={` ${Design} Scrollbardesign  border-2 border-gray-400   rounded-lg overflow-auto`}
    >
      <h1 className="headerfont bg-indigo-700 text-white mt-2 py-2 pl-2 lg:text-2xl md:text-xl text-xl  ">
        {title}
      </h1>
      {/* 
      {addState ? (
        add ? (
          <div>
            {
              <Addingcomponent
                initialState={[filteredData[0]]}
                trigger={add}
                settrigger={setAdd}
              />
            }
          </div>
        ) : null
      ) : null} */}
      {editState ? edit ? null : <div>hello</div> : null}
      <Paper elevation={2} className="mb-3 mx-0.5 lg:min-h-[30px]">
        <div className="flex lg:flex-row flex-wrap items-center justify-between mx-2 -mb-2 lg:text-lg p-2">
          <div className="flex flex-row items-center space-x-4">
            <label htmlFor="search">
              <Tooltip title="search">
                <input
                  id="search"
                  type="text"
                  placeholder="search"
                  size="12"
                  onChange={(event) => handleSearch(event)}
                  className="resize-none border-amber-800 rounded-md border-2 max-w-[200px] md:min-w-[200px] lg:min-w-[200px] p-2 lg:h-10"
                />
              </Tooltip>
            </label>
          </div>
          <div className="mr-3.5 flex flex-row  flex-wrap items-center space-y-1">
            <div>
              {selectedNotEmpty ? (
                selectedcheckdelete ? (
                  <ReuseButton
                    btncolor="red"
                    onclicked={onallcheckhandleDelete}
                    btntype="button"
                    btnname="delete all"
                  />
                ) : (
                  <ReuseButton
                    btncolor="red"
                    onclicked={onSelectedcheckdelete}
                    btntype="button"
                    btnname="selected delete"
                  />
                )
              ) : null}
            </div>

            <div>
              {addState ? (
                <ReuseButton
                  btncolor="blue"
                  onclicked={() => {
                    dispatcheddata({
                      type: "createState",
                    });
                  }}
                  btntype="button"
                  btnname="Create"
                />
              ) : null}
            </div>

            <div>
              <ReuseButton
                btncolor="blue"
                onclicked={() => {
                  setshowfilterData(true);
                }}
                btntype="button"
                btnname="filter"
              />
              {showfilterData ? (
                <div className="-ml-20">
                  <FiliterComponent
                    trigger={showfilterData}
                    settrigger={setshowfilterData}
                  />
                </div>
              ) : null}
            </div>
            <div>
              <ReuseButton
                btncolor="blue"
                onclicked={() => {
                  setShow(!show);
                }}
                btntype="button"
                btnname="show"
              />
            </div>
          </div>
        </div>
      </Paper>
      <div
        className={
          show
            ? `py-3 lg:px-4 text-xs md:text-base lg:text-lg Scrollbardesign overflow-auto `
            : `py-3 lg:px-4 text-xs md:text-base lg:text-lg ${tableheight}  Scrollbardesign overflow-auto `
        }
      >
        <table
          className={` ${tableDesign} text-gray-800 font-light CrudTable Scrollbardesign`}
        >
          <thead className=" text-base  uppercase headerfont   ">
            <tr>
              {headerData.map((item, index) => {
                if (Object.keys(item)[0] === Object.keys(item)[index]) {
                  return (
                    <React.Fragment key={index}>
                      {fronthidden ? (
                        <>
                          {CheckHidden ? (
                            <th key={Object.values(item)}>
                              <div className="min-w-[40px] ">
                                <CheckBoxdesign
                                  beforeClicked={`${CheckDeletecolor}`}
                                  checktrigger={checktrue}
                                  setchecktrigger={setchecktrue}
                                  checkedState={allCheck}
                                  ValueData={(e) => {
                                    onSelectedAllCheck(e, item);
                                  }}
                                />
                              </div>
                            </th>
                          ) : null}
                          {checkbtnonlyview ? (
                            <>
                              {editHidden ? (
                                <th
                                  key="editor"
                                  className=" min-w-[30px] text-xs p-2.5 text-white bg-indigo-600 drop-shadow-2xl"
                                >
                                  Edit
                                </th>
                              ) : null}
                              {Deletehidden ? (
                                <th
                                  key="deletor"
                                  className=" min-w-[30px] max-w-[60px] text-xs p-2.5 text-white bg-indigo-600 drop-shadow-2xl"
                                >
                                  Delete
                                </th>
                              ) : null}
                            </>
                          ) : null}
                        </>
                      ) : null}
                    </React.Fragment>
                  );
                }
                return (
                  <React.Fragment key={index}>
                    <th className="  text-xs p-2.5 text-white bg-indigo-600 ">
                      {item}
                    </th>
                  </React.Fragment>
                );
              })}

              {backhidden ? (
                <>
                  {editHidden ? (
                    <th
                      key="editor"
                      className=" min-w-[30px] text-xs p-2.5 text-white bg-indigo-600 drop-shadow-2xl"
                    >
                      Edit
                    </th>
                  ) : null}
                  {Deletehidden ? (
                    <th
                      key="deletor"
                      className=" min-w-[30px] max-w-[50px] text-xs p-2.5 text-white bg-indigo-600 drop-shadow-2xl"
                    >
                      Delete
                    </th>
                  ) : null}
                </>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="text-gray-700 text-xs lg:text-base    "
                >
                  {Object.keys(item).map((data, index) => {
                    if (Object.keys(item)[0] === Object.keys(item)[index]) {
                      return (
                        <React.Fragment key={index}>
                          {/* side edit delete */}
                          {fronthidden ? (
                            <>
                              {CheckHidden ? (
                                <td key={Object.values(item)}>
                                  <div className="-ml-2">
                                    <CheckBoxdesign
                                      IDvaluecheck={Object.values(item)[0]}
                                      beforeClicked={`${CheckDeletecolor}`}
                                      checktrigger={checktrue}
                                      setchecktrigger={setchecktrue}
                                      checkedState={allCheck}
                                      ValueData={(e) => {
                                        onselectcheck(e, item);
                                      }}
                                    />
                                  </div>
                                </td>
                              ) : null}

                              {/*front  side edit delete hided by checkbtnonly  */}
                              {checkbtnonlyview ? (
                                <>
                                  {editHidden ? (
                                    <td key="editortd">
                                      <div>
                                        <Tooltip
                                          title="edit"
                                          onClick={() => {
                                            dispatcheddata({
                                              type: "edit",
                                              value: item,
                                            });
                                          }}
                                        >
                                          <IconButton
                                            form="my_form1"
                                            type="submit"
                                          >
                                            <i className="material-icons text-pink-600">
                                              create
                                            </i>
                                          </IconButton>
                                        </Tooltip>
                                      </div>
                                    </td>
                                  ) : null}
                                  {Deletehidden ? (
                                    <td key="deletortd">
                                      <div>
                                        <Tooltip
                                          title="Delete"
                                          className="border-0"
                                          onClick={() => onhandleDelete(item)}
                                        >
                                          <IconButton>
                                            <i className="material-icons text-pink-600">
                                              delete
                                            </i>
                                          </IconButton>
                                        </Tooltip>
                                      </div>
                                    </td>
                                  ) : null}
                                </>
                              ) : null}
                            </>
                          ) : null}
                        </React.Fragment>
                      );
                    }

                    return (
                      <Tooltip
                        key={index}
                        title={`${Object.keys(item)[index]}`}
                        onClick={() => {
                          dispatcheddata({ type: "view", value: item });
                        }}
                      >
                        <td>
                          <p className="leading-2">{item[data]}</p>
                        </td>
                      </Tooltip>
                    );
                  })}
                  {/*back side edit delete */}
                  {backhidden ? (
                    <>
                      {editHidden ? (
                        <td key="editortd">
                          <div>
                            <Tooltip
                              title="edit"
                              onClick={() => OnhandleEdit(item)}
                            >
                              <IconButton form="my_form1" type="submit">
                                <i className="material-icons text-pink-600">
                                  create
                                </i>
                              </IconButton>
                            </Tooltip>
                          </div>
                        </td>
                      ) : null}
                      {Deletehidden ? (
                        <td key="deletortd">
                          <div>
                            <Tooltip
                              title="Delete"
                              className="border-0"
                              onClick={() => onhandleDelete(item)}
                            >
                              <IconButton>
                                <i className="material-icons text-pink-600">
                                  deleteoutline
                                </i>
                              </IconButton>
                            </Tooltip>
                          </div>
                        </td>
                      ) : null}
                    </>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudTable;
