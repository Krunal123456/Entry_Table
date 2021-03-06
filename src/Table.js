import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
}from "material-ui/Table";
import DownArrow from "material-ui/svg-icons/navigation/arrow-drop-down";
import UpArrow from "material-ui/svg-icons/navigation/arrow-drop-up";
import InlineForm from "./InlineForm";

const row = (
  x,
  i,
  header,
  editIdx,
  handleSave,
  stopEditing
) => {
  const currentlyEditing = editIdx === i;

  return currentlyEditing ? (
    <TableRow key={`inline-form-${i}`}>
      <InlineForm
        handleSave={handleSave}
        header={header}
        x={x}
        i={i}
        stopEditing={stopEditing}
      />
    </TableRow>
  ) : (
    <TableRow key={`tr-${i}`}>
      {header.map((y, k) => (
        <TableRowColumn key={`trc-${k}`}>{x[y.prop]}</TableRowColumn>
      ))}
    
    </TableRow>
  );
};

export default ({
  data,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleSave,
  stopEditing,
  handleSort,
  sortDirection,
  columnToSort,
}) => (
  <Table>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        {header.map((x, i) => (
          <TableHeaderColumn key={`thc-${i}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => handleSort(x.prop)}
            >
              <span>{x.name}</span>
              {columnToSort === x.prop ? (
                sortDirection === "asc" ? (
                  <UpArrow />
                ) : (
                  <DownArrow />
                )
              ) : null}
            </div>
          </TableHeaderColumn>
        ))}
        <TableHeaderColumn />
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {data.map((x, i) =>
        row(
          x,
          i,
          header,
          handleRemove,
          startEditing,
          editIdx,
          handleSave,
          stopEditing
        )
      )}
    </TableBody>
  </Table>
);
