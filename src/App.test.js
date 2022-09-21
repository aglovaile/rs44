import App from './App'
import { render, screen } from '@testing-library/react'

describe('App.js', () => {
  test('should render without crashing', () => {
    render(<App />)
    const message = screen.getAllByText('ab')
    expect(message).toBeInTheDocument
  })
})
