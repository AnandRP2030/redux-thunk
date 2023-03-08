import Todo from "./Compoenents/JsonComponents/Todo";
import TodoInput from "./Compoenents/JsonComponents/TodoInput";
function App() {
  const styles = {
    margin: "auto",
    width: "50%",
  };
  return (
    <div style={styles} className="App">
      <TodoInput />
     
    </div>
  );
}

export default App;
