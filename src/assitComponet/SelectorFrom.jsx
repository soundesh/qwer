import React from "react";

const SelectorFrom = ({
  labeled,
  sizewidth,
  OptionData,
  setTrigger,
  Trigger,
  Triggername,
  labeldesign,
  defaultValue,
}) => {
  return (
    <div>
      <div>
        <label htmlFor={labeled} className={`${labeldesign}`}>
          {labeled}
        </label>
      </div>
      <select
        name={labeled}
        id={labeled}
        defaultValue={defaultValue}
        className={`w-${sizewidth} min-w-[200px] rounded-[4px] border-indigo-800 max-h-[200px] overflow-auto `}
        onChange={(e) => {
          setTrigger({ ...Trigger, [Triggername]: e.target.value });
        }}
      >
        {OptionData.map((item, index) => {
          return (
            <option value={item} key={index}>
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
