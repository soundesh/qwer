import React from "react";

const SelectorFrom = ({ labeled, sizewidth, OptionData, datavalue }) => {
  return (
    <div>
      <div>
        <label htmlFor={labeled}>{labeled}</label>
      </div>
      <select
        name={labeled}
        id={labeled}
        value={datavalue}
        className={`w-${sizewidth} min-w-[200px] rounded-[4px] border-indigo-800 max-h-[200px] overflow-auto `}
      >
        {OptionData.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectorFrom;

//multilevel options

// <optgroup label="Swedish Cars">
// <option value="volvo">{Date} </option>
// <option value="saab">Saab</option>
// </optgroup>
// <optgroup label="German Cars">
// <option value="mercedes">Mercedes</option>
// <option value="audi">Audi</option>
// </optgroup>
