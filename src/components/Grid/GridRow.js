function Row (props) {
  const {row, handleCellClick, activeCell, index} = props

  return row.map((cell, j) => {
    const cellColor = cell.value === 1 ? 'cell-white' : 'cell-black'
    const isActive = index === activeCell[0] && j === activeCell[1] ? 'cell-active' : ''
    return (
      <td
        className={`grid-cell ${cellColor} ${isActive}`}
        id={`cell-${index}-${j}`}
        key={`cell${index}${j}`}
        onClick={handleCellClick}
      >
        {cell.letter}
      </td>
    )
  })
}

export default Row