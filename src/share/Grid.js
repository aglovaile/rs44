// RS-44 Grid Object
//
// Todo:
//   - Make grid object from id, header, side JSON


function shuffle (array) {
  let arr = array.slice()
  for (let i = arr.length - 1; i > 0; i --) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const digraph = () => {
  const letters = ['a', 'b', 'c', 'd', 'e']
  const pairs = [].concat(...letters.map(i => letters.map(j => `${i}${j}`)))
  return shuffle(pairs)
}

function gridId (grid) {
  // Converts RS-44 grid into 5-bit binary numbers, then returns as hex
  const binNums= grid.map(row => row.map(cell => cell.value).join('')).join('').match(/.{1,5}/g)
  const hex = binNums.map(bin => parseInt(bin, 2).toString(32))
  return hex.join('')
}

const makeGrid = () => {
  let grid = []
  for (let i = 24; i > 0; i --) {
    let row = []
    let openCells = 10
    for (let j = 25; j > 0; j --) {
      if (Math.random() < openCells / j) {
        row.push({value: 1, letter: ''})
        openCells --
      } else {
        row.push({value: 0, letter: ''})
      }
    }
    grid.push(row)
  }
  return grid
}

function Grid () {
  const rows = makeGrid()
  const id = gridId(rows)
  const header = {
    digraph: digraph(),
    numbers: shuffle(Array(25).fill().map((i,j) => j))
  }
  const side = digraph().filter(i => i !== 'ee')

  this.rows = rows
  this.id = id
  this.header = header
  this.side = side
}


export default Grid