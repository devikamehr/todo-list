import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import jss from "jss";
import preset from "jss-preset-default";
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  // can write js here
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
    ]);
    setInputText("");
    
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
    return(
        <form>
        <input value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;