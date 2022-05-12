import logo from './logo.svg'
import './App.css'
import ButtonColor from './ButtonColor'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
        <ButtonColor />
      </header>
    </div>
  )
}

export default App
