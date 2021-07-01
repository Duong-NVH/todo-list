import List from "./components/List";
import NewTask from "./components/NewTask";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NewTask />
        <List />
      </div>
    </div>
  );
}

export default App;
