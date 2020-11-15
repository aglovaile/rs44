import React from 'react';

const GridTable = (props) => {
  const {grid, handleCellClick} = props
  const {header, side} = grid

  function Rows () {
    return grid.data.map((r,i) => {
      return (
        <tr id={`row-${i}`} key={`row-${i}`}>
          {Row(r, i)}
          <th key={`side-digraph`}>{side[i]}</th>
        </tr>
      )
    })
  }

  function Row (row, i) {
    return row.map((cell, j) => {
      return (
        <td
          className={`grid-cell ${cell.value === 1 ? 'cell-white' : 'cell-black'}`}
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
        return (
          <tr id={`grid-${i}-header`} key={`grid-${i}-header`}>{header[i].map(num => <th key={`grid-header-number-${num}`}>{num}</th>)}</tr>
        )
      })
    )
  }


  

  return (
    <table>
      <tbody>
        <GridHeader />
        <Rows />
      </tbody>
    </table>
  )
}

export default GridTable // React.memo(GridTable)
