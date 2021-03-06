import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import FormNewStory from "../common/form";

function ModalCreateStory({ open, setOpen }) {
  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={<Button>Create Story</Button>}
    >
      <Header>Create Story</Header>
      <Modal.Content>
        <FormNewStory />
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalCreateStory;
