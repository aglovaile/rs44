import React from 'react';
import GridHeader from './GridHeader'
import Rows from './GridRows'

const GridTable = (props) => {
  const {grid, handleCellClick, activeCell} = props
  const {header, side} = grid

  return (
    <table id="grid-table">
      <tbody>
        <GridHeader header={header} />
      </tbody>
      <tbody id="grid-body">
        <Rows 
          grid={grid}
          handleCellClick={handleCellClick}
          activeCell={activeCell}
          side={side}
        />
      </tbody>
    </table>
  )
}

export default GridTable // React.memo(GridTable)
