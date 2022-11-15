import React, { useState, useEffect } from "react";

function useUpdateform({ singledata, Singledatadispatch }) {
  const [updateTaskData, setUpdateTaskData] = useState();
  useEffect(() => {
    if (singledata.projectdetail !== {}) {
      setUpdateTaskData(singledata.projectdetail);
    }
  }, [singledata]);
  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({
      ...updateTaskData,
      [name]: value,
    });
    console.log(updateTaskData);
  };
  const ontaskUpdateSubmit = (e) => {
    console.log(updateTaskData);

    e.preventDefault();

    Singledatadispatch({
      type: "normal",
    });
  };

  return [onChangeUpdate, ontaskUpdateSubmit];
}

export default useUpdateform;
