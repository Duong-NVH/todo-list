import List from "./components/List";
import NewTask from "./components/NewTask";
import "./styles.scss";
import store from "./redux";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <NewTask />
          <List />
        </div>
      </div>
    </Provider>
  );
}

export default App;
