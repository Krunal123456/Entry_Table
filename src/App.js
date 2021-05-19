import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import orderBy from "lodash/orderBy";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

injectTapEventPlugin();

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: []
  };

 
  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          <Table
            handleSort={this.handleSort}
            
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "US City",
                prop: "us"
              },
              {
                name: "State",
                prop: "states"
              },
              {
                name: "Population",
                prop: "pop"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
