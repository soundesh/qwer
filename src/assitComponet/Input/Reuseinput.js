import React from "react";

const Reuseinput = ({
  name,
  defaultValue,
  onchanged,
  labelname,
  inputdesign,
}) => {
  //   <Reuseinput
  //     name={Object.keys(singledata.projectdetail)[index]}
  //     type="text"
  //     onchanged={(e) => {
  //       onChangeUpdate(e);
  //     }}
  //     labelname={Object.keys(singledata.projectdetail)[index]}
  //     inputdesign="max-w-[140px] border-indigo-800 "
  //   />;
  return (
    <div>
      <div>
        <label
          htmlFor={name}
          className="text-blue-400 min-w-[100px]  max-h-[50px] text-base uppercase "
        >
          {labelname}
        </label>
      </div>

      <input
        id={name}
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={` Enter ${name} `}
        onChange={(e) => {
          onchanged(e);
        }}
        size="4"
        className={`resize-none ${inputdesign} rounded-md border-2 w-[200px] lg:w-[200px] md:w-[200px]`}
      />
    </div>
  );
};

export default Reuseinput;
