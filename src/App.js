import React, {Component} from 'react';
import TextInput from './components/TextInput'
import GridTable from './components/Grid/GridTable';
import Grid from './share/Grid'
import InfoBox from './components/InfoBox'
import Output from './components/Output'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      grid: new Grid(),
      message: 'GRUENGRUENGRUENSINDALLEMEINEKLEIDERGRUENGRUENGRUENSINDALLESWASICHHAB',
      cipherText: '',
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
asdf
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
    let grid = this.state.grid.rows
    let [x, y] = this.state.startInd.xy

    function inc () {
      if (y === 24) x = (x + 1) % 23
      y = (y + 1) % 25
    }

    grid.map(row => row.map(cell => cell.letter = ''))
    
    letters.map(letter => {
      while (grid[x][y].value !== 1) inc()
      grid[x][y].letter = letter
      inc()
      return [x, y]
    })
    this.setState(prevState => ({ grid: { ...prevState.grid, rows: grid }}))
  }

  encrypt = () => {
    this.populateGrid()
    const grid = this.state.grid.rows
    const headerNums = this.state.grid.header.numbers
    const startY = this.state.startInd.xy[1]
    const {offset} = this.state
    const startIndex = headerNums[startY + offset]

    function getColumnLetters(ind) {
      return grid.map(row => row[ind].letter).filter(i => i !== '')
    }

		let cipherTextArray = []

		for (let a = 0; a < 25; a += 1) {
      const currentColumn = (startIndex + a) % 25
      const currentIndex = headerNums.indexOf(currentColumn)
      console.log(`Looking for ${currentColumn} at index ${currentIndex}`)
      cipherTextArray.push(getColumnLetters(currentIndex).join(''))
		}
    const cipherText = cipherTextArray.join('')
    this.setState(prevState => ({ cipherText: cipherText }))
  }

  render() {
    return (
      <div>
				<InfoBox 
					message={this.state.message} 
					gridId={this.state.grid.id}
					startInd={this.state.startInd}
					offset={this.state.offset}
				/>
        <TextInput 
          gridId={this.state.grid.id}
          text={this.state.text} 
          updateText={this.handleTextChange}
        />
        <button onClick={this.handleNewGrid}>New Grid</button>
        <GridTable 
          grid={this.state.grid}
          handleCellClick={this.handleCellClick}
          activeCell={this.state.startInd.xy}
        />
        <p>Your current message: {this.state.message}</p>
        <p>Your encrypted message: {this.state.cipherText}</p>
        <p>Your message/ciphertext length: {`${this.state.message.length}/${this.state.cipherText.length}`}</p>
				<Output cipherText={this.state.cipherText} />
				<button onClick={this.encrypt}>Encrypt!</button>
      </div>
    )
  }
}

export default App;
