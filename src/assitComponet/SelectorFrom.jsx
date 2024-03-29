import React from "react";

const SelectorFrom = ({
  labeled,
  sizewidth,
  OptionData,
  setTrigger,
  Trigger,
  Triggername,
  labeldesign,
  selectdesign,
  defaultValue,
  form,
}) => {
  return (
    <div className={`${selectdesign}`}>
      <div>
        <label htmlFor={labeled} className={`${labeldesign}`}>
          {labeled}
        </label>
      </div>
      <select
        name={labeled}
        id={labeled}
        form={form}
        defaultValue={defaultValue}
        className={`resize-none ${sizewidth} rounded-md border-2 max-w-[200px] lg:min-w-[200px] md:min-w-[200px]`}
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
