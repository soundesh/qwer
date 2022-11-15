import React from "react";
import ReuseButton from "../button/ReuseButton";
const Footerbtn = ({ singledata, Singledatadispatch }) => {
  return (
    <div>
      <div>
        {singledata.editdetail ? (
          <div className="max-h-[40px] w-full  flex flex-row items-center justify-center">
            <ReuseButton
              btncolor="blue"
              onClick={() => {
                Singledatadispatch({
                  type: "view",
                  value: singledata.projectdetail,
                  showdetail: true,
                });
              }}
              btntype="button"
              btnname="view"
            />

            <ReuseButton
              btncolor="blue"
              onclicked={() => {
                Singledatadispatch({
                  type: "edit",
                  value: singledata.projectdetail,
                  showdetail: true,
                });
              }}
              btntype="button"
              btnname="edit"
            />

            <ReuseButton
              btncolor="red"
              onclicked={() => {
                Singledatadispatch({
                  type: "delete",
                  value: singledata.projectdetail,
                });
              }}
              btntype="button"
              btnname="delete"
            />
          </div>
        ) : (
          <div className="flex flex-row justisy-center">
            <ReuseButton btncolor="blue" btntype="submit" btnname="submit" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footerbtn;
