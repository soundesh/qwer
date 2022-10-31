import React, { useState } from "react";
import "./checkbox.css";
const CheckBoxdesign = ({
  beforeClicked,
  dataChecked,
  ValueData,
  IDvaluecheck,
  checkedState,
}) => {
  const [Checkbox, setCheckbox] = useState();
  return (
    <div className="checkinputboxcontainer">
      <label className="container ">
        <input
          type="checkbox"
          className="checkboxcontainer"
          name={IDvaluecheck}
          value={IDvaluecheck}
          onClick={ValueData}
        />
        {checkedState ? (
          <span
            style={{
              border: "2px solid white",
              backgroundColor: `${beforeClicked}`,
            }}
            className="checkmark hover:bg-sky-700 "
            onClick={() => {
              setCheckbox(!Checkbox);
            }}
          ></span>
        ) : (
          <span
            style={
              Checkbox
                ? {
                    border: "2px solid white",
                    backgroundColor: `${beforeClicked}`,
                  }
                : { border: `2px solid ${beforeClicked}` }
            }
            className="checkmark hover:bg-sky-700 "
            onClick={() => {
              setCheckbox(!Checkbox);
            }}
          ></span>
        )}
      </label>
    </div>
  );
};

export default CheckBoxdesign;
