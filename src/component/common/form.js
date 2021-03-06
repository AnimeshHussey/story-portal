import { createHashHistory } from "history";
import React, { useState } from "react";
import { Button, Dropdown, Form, TextArea } from "semantic-ui-react";
import { postStory } from "../../repository/storyRepository";

const FormNewStory = () => {
  const [desc, setdesc] = useState("");
  const [point, setpoint] = useState("");
  const [Status, setStatus] = useState("STARTED");
  const [assgnTo, setassgnTo] = useState("");

  const stateOptions = [
    // { key: "CLOSED", text: "CLOSED", value: "CLOSED" },
    { key: "STARTED", text: "STARTED", value: "STARTED" },
    // { key: "IN-PROGRESS", text: "IN-PROGRESS", value: "IN-PROGRESS" },
    // { key: "DEFFERED", text: "DEFFERED", value: "DEFFERED" },
  ];
  const createStory = async () => {
    try {
      let storyData = {
        description: desc,
        storypoint: point,
        status: "STARTED",
        assignedTo: assgnTo,
      };
      const newStory = await postStory(storyData);
      if (newStory.postCreated) {
        console.log("Story Created", newStory._id);
      }
    } catch (error) {
      console.log(error);
    }
    postStory();
  };

  return (
    <Form>
      <Form.Field>
        <label style={{ color: "white" }}>Description</label>
        <TextArea
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          placeholder="Description"
        />
      </Form.Field>
      <Form.Field>
        <label style={{ color: "white" }}>Story Point </label>
        <input
          value={point}
          onChange={(e) => setpoint(e.target.value)}
          type="number"
          placeholder="Story Point"
        />
      </Form.Field>
      <Form.Field>
        <label style={{ color: "white" }}>Status</label>
        <Dropdown
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="State"
          search
          selection
          options={stateOptions}
        />
      </Form.Field>
      <Form.Field>
        <label style={{ color: "white" }}>Assigned To</label>
        <input
          value={assgnTo}
          onChange={(e) => setassgnTo(e.target.value)}
          placeholder="Assigned To"
        />
      </Form.Field>
      <Button onClick={() => createStory()} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormNewStory;
