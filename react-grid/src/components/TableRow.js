  
import TableCell from "./TableCell";

function TableRow(props) {
  let cells = [];
  
  for (let i = 0; i < props.numCols; i++) {
    cells.push(<TableCell handleApplyColor={props.handleApplyColor} />)
  }
  
  return <tr>{cells}</tr>
}

export default TableRow;