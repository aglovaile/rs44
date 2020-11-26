function GridHeader (props) {
  const {header} = props

  return (
    ['digraph', 'numbers'].map(i => {
      const rowId = `grid-${i}-header`
      const cellClass = `${rowId}-cell no-select`
      
      return (
        <tr id={rowId} key={rowId}>
          {header[i].map(num => {
            const tag = i === 'numbers' ? num + 1 : num
            return <th key={`grid-header-number-${num}`} className={cellClass}>{tag}</th>})}
        </tr>
      )
    })
  )
}

export default GridHeader