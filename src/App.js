import './App.css';
import Button from "./components/UI/button/Button";

function App() {
  return (
    <div className="App">
      <Button action={() => console.log("Присоединиться к команд")} type="primary">
          Присоединиться к команде
      </Button>
    </div>
  )
}

export default App;
