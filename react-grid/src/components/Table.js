import React, { Component } from "react";
import ReactDOM from 'react-dom'; 
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: "red", 
    }
    this.tableRef = React.createRef(); 
  }

  addRow = () => {
    this.setState(state => {
        return {numRows: state.numRows + 1}
    });
  }

  addColumn = () => {
    this.setState(state => {
        return {numCols: state.numCols + 1}
    });
  }
  
  removeColumn = () => {
    this.setState(state => {
      if(state.numCols>0){
        return {numCols: state.numCols - 1}
      }
    });
  }
  
  removeRow = () => {
    this.setState(state => {
      if(state.numRows > 0){
        return {numRows: state.numRows - 1}
      }
    });
  }

  fillAll = () => {
    NodeList.prototype.forEach = Array.prototype.forEach
    const table = ReactDOM.findDOMNode(this.tableRef.current).childNodes; 

    table.forEach(row => {
      for(let i = 0; i < this.state.numCols; i++) {
        row.childNodes[i].style.backgroundColor = this.state.selectedColor; 
      }
    });
  }
  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(<TableRow numCols={this.state.numCols} handleApplyColor={this.handleApplyColor} color={this.state.color}  />);
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeColumn}>Remove Column</button>      
        <button onClick={this.removeRow}>Remove Row</button>    
        <button onClick={this.fillAll}>Fill All</button>    
        <select onChange={this.handleColorChange}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <table ref={this.tableRef}>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;