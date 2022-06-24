import "./App.css";
import ToDoList from "./components/ToDoList";
import moment from "moment";

function App() {
  const dateTime = new Date();
  return (
    <div>
      <ul class="floatingBoxes">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="todo-app">
        <div className="date-container">
          <p className="date">{moment(dateTime).format("DD MMMM YYYY")}</p>
          <p className="date">{moment(dateTime).format("dddd, h:mm:ss A")}</p>
        </div>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
