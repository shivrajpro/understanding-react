import './App.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn JS" />
      <Todo title="Learn Angular" />
      <Todo title="Learn React" />
    </div>
  );
}

export default App;
