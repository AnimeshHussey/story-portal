import React, { useState, useEffect } from "react";
import ModalExampleBasic from "./common/modal";
import ShowStories from "./common/grid";
import { getStories } from "../repository/storyRepository";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [stories, setStories] = useState([]);

  const getallStories = async () => {
    try {
      const allStories = await getStories();
      if (Array.isArray(allStories) && allStories.length > 0)
        console.log(allStories);
      setStories(
        allStories.sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallStories();
  }, []);

  useEffect(() => {
    if (!open) getallStories();
  }, [open]);

  return (
    <>
      <div
        style={{
          padding: "10px",
        }}
      >
        <ModalExampleBasic open={open} setOpen={setOpen} />
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: "10px",
        }}
      >
        <ShowStories stories={stories} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Products;
