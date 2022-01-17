import Grid from './Grid.js'

/*
RS44 grid should be an object like so:
{
  rows: [[]...],
  id,
  header,
  side
}

*/

describe('RS44 Grid Object', () => {
  const grid = new Grid()

  test('should have a valid grid id', () => {
    expect(grid.id).toBeTruthy()
    expect(grid.id.length).toEqual(120)
    expect(grid.id).toMatch(/[0-9a-v]{120}/)
  })
  
  test('should have a valid rows array', () => {
    expect(grid.rows.length).toEqual(24)
    grid.rows.map(row => {
      expect(row.length).toEqual(25)
      row.map(cell => {
        expect(String(cell.value)).toMatch(/[01]/)
      })
    })
  })
  
  test('should have a valid header with digraphs and numbers', () => {
    const {digraph, numbers} = grid.header

    expect(digraph.length).toBe(25)
    expect(numbers.length).toBe(25)
  })
})