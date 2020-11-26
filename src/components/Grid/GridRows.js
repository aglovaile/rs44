import Row from './GridRow'

function Rows (props) {
  const {grid, handleCellClick, activeCell, side} = props

  return grid.rows.map((row, index) => {
    return (
      <tr id={`row-${index}`} key={`row-${index}`}>
        <Row 
          row={row}
          handleCellClick={handleCellClick}
          activeCell={activeCell}
          index={index}
        />
        <th key={`side-digraph`} class="grid-digraph-side no-select">{side[index]}</th>
      </tr>
    )
  })
}

export default Rows