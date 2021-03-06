import React from "react";
import { Table } from "semantic-ui-react";
import moment from "moment";

const ShowStories = ({ stories }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Story Point</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Assigned To</Table.HeaderCell>
        <Table.HeaderCell>Created On</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {stories &&
        stories.length &&
        stories.map((item) => (
          <>
            <Table.Row>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.storypoint}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              <Table.Cell>{item.assignedTo}</Table.Cell>
              <Table.Cell>
                {moment(item.createdAt).format("DD-MM-YYYY")}
              </Table.Cell>
            </Table.Row>
          </>
        ))}
    </Table.Body>
  </Table>
);

export default ShowStories;
