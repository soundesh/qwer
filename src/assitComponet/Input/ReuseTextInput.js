import React from "react";

const ReuseTextInput = ({
  name,
  defaultValue,
  onchanged,
  labelname,
  inputdesign,
  maxLength,
  rows,
  cols,
}) => {
  // <ReuseTextInput  name="empremarks"
  //   defaultValue=""
  //   onChange={0}
  //   labelname="Employee remarks"
  //   inputdesign=" border-indigo-800 "
  //   maxLength="70"
  //   rows="2"
  //   cols="30"/>

  console.log(labelname);
  return (
    <div>
      <div key={name}>
        <div>
          <label
            htmlFor={name}
            className="text-blue-400  max-h-[50px] text-base uppercase "
          >
            {labelname}
          </label>
        </div>

        <textarea
          id={name}
          name={name}
          type="text"
          defaultValue={defaultValue}
          rows={rows}
          cols={cols}
          placeholder={`enter ${labelname}`}
          onChange={(e) => {
            onchanged(e);
          }}
          className={`resize-none ${inputdesign} rounded-md border-2 w-[200px] lg:w-[200px] md:w-[200px]`}
          maxLength={maxLength}
        ></textarea>
      </div>
    </div>
  );
};

export default ReuseTextInput;
