import React from 'react';

const GridTable = (props) => {
  const {grid, handleCellClick, activeCell} = props
  const {header, side} = grid

  function Rows () {
    return grid.data.map((r,i) => {
      return (
        <tr id={`row-${i}`} key={`row-${i}`}>
          {Row(r, i)}
          <th key={`side-digraph`} class="grid-digraph-side no-select">{side[i]}</th>
        </tr>
      )
    })
  }

  function Row (row, i) {
    return row.map((cell, j) => {
      const cellColor = cell.value === 1 ? 'cell-white' : 'cell-black'
      const isActive = i === activeCell[0] && j === activeCell[1] ? 'cell-active' : ''
      return (
        <td
          className={`grid-cell ${cellColor} ${isActive}`}
          id={`cell-${i}-${j}`}
          key={`cell${i}${j}`}
          onClick={handleCellClick}
        >
          {cell.letter}
        </td>
      )
    })
  }

  function GridHeader () {
    return (
      ['digraph', 'numbers'].map(i => {
        const rowId = `grid-${i}-header`
        const cellClass = `${rowId}-cell`
        return (
          <tr id={rowId} key={rowId}>
            {header[i].map(num => <th key={`grid-header-number-${num}`} className={cellClass}>{num}</th>)}
          </tr>
        )
      })
    )
  }

  return (
    <table id="grid-table">
      <GridHeader />
      <tbody id="grid-body">
        <Rows />
      </tbody>
    </table>
  )
}

export default GridTable // React.memo(GridTable)
