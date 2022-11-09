import React from "react";

const SelectorFrom = ({
  labeled,
  sizewidth,
  OptionData,
  setTrigger,
  Trigger,

  labeldesign,
  selectdesign,
  defaultValue,
  form,
  name,
}) => {
  return (
    <div className={`${selectdesign}`}>
      <div>
        <label htmlFor={name} className={`${labeldesign}`}>
          {labeled}
        </label>
      </div>
      <select
        name={name}
        id={name}
        form={form}
        defaultValue={defaultValue}
        className={`resize-none ${sizewidth} rounded-md border-2 w-[200px] lg:w-[200px] md:w-[200px]`}
        onChange={(e) => {
          setTrigger({ ...Trigger, [name]: e.target.value });
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
