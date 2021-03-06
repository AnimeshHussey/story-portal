import React, { useState, useEffect } from "react";
import ModalExampleBasic from "./common/modal";

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        {/* <button class="ui button">Create Story</button> */}
        <ModalExampleBasic open={open} setOpen={setOpen} />
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flex: 1,
        }}
      ></div>
    </>
  );
};

export default Products;
