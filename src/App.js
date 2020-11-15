import React, {Component} from 'react';
import TextInput from './components/TextInput'
import GridTable from './components/GridTable';
import Grid from './share/Grid'
import './App.css'

// Todo:
// add import/export function for grids and such

class App extends Component {
  constructor() {
    super()
    this.state = {
      grid: new Grid(),
      message: 'EINPANZERKOMMT',
      startInd: {
        digraphs: ['aa', 'bb'],
        xy: [0, 0]
      },
      offset: 5
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  handleTextChange = (e) => {
    const {value} = e.target
    const newText = value.replace(/[^a-zA-Z]/g, '').toUpperCase()
    this.setState({
      message: newText,
      offset: this.setOffset(newText.length)
    })
  }

  handleNewGrid = (e) =>{
    this.setState({ grid: new Grid() })
  }

  handleCellClick = (e) => {
    const [x, y] = e.target.id.match(/\d+/g)
    const a = this.state.grid.header.digraph
    const b = this.state.grid.side
    this.setState({
      startInd: {
        digraphs: [a[y], b[x]],
        xy: [Number(x), Number(y)]
      }
    })
  }

  setOffset = (len) => {
    return String(len).split('').map(i => Number(i)).reduce((a, c) => a + c)
  }

  populateGrid = () => {
    const letters = this.state.message.split('')
    let grid = this.state.grid.data
    let [x, y] = this.state.startInd.xy

    function inc () {
      if (y === 23) x = (x + 1) % 23
      y = (y + 1) % 24
    }

    grid.map(row => row.map(cell => cell.letter = ''))
    
    letters.map(letter => {
      while (grid[x][y].value !== 1) inc()
      grid[x][y].letter = letter
      inc()
      return [x, y]
    })
    this.setState(prevState => ({ grid: { ...prevState.grid, data: grid }}))
  }

  render() {
    return (
      <div>
        <p>Grid Id: {this.state.grid.id}</p>
        <TextInput 
          gridId={this.state.grid.id}
          text={this.state.text} 
          updateText={this.handleTextChange}
        />
        <button onClick={this.handleNewGrid}>New Grid</button>
        <GridTable 
          grid={this.state.grid}
          handleCellClick={this.handleCellClick}
        />
        <p>Your current message: {this.state.message}</p>
        <p>Your current message length: {this.state.message.length}</p>
        <p>Your current start index: {this.state.startInd.digraphs} at [{this.state.startInd.xy[0]}, {this.state.startInd.xy[1]}]</p>
        <p>Your current offset: {this.state.offset}</p>
        <button onClick={this.populateGrid}>Encrypt!</button>
      </div>
    )
  }

}

export default App;
