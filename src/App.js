import React, {useState, useEffect} from "react";
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // States

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE when the app starts
  useEffect(() => {
    getLocalTodos();

  }, []);
  // USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions and events
  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1> To do list!</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      <video
        id="my-player"
        class="video-js"
        controls
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        data-setup='{}'>
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
      <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
      <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
    </div>
  );
}

export default App;
 