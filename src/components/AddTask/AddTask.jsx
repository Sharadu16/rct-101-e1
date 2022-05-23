import React, { useState } from "react";
import styles from "./addTask.module.css";
import Button from '@mui/material/Button';
import Tasks from "../Tasks/Tasks";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
     setItem(event.target.value);
  }

  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    })
    setItem("");
  }

  return (
    <div className={styles.todoForm}>
    
      <h1 style={{textAlign:"center"}}>ToDo List</h1>
      <input data-cy="add-task-input" type="text" onChange={itemEvent} value={item} className={styles.input} />
      {/* <button data-cy="add-task-button"></button> */}
      <Button className={styles.addButton} data-cy="add-task-button" variant="contained" href="#contained-buttons" onClick={listOfItems}>Add</Button>
      <br/>
      <div>
        
        {
          newItem.map((val,index) => {
             return <Tasks key={index} task = {val}/>
          })
        }
      </div>
    </div>
  );
};

export default AddTask;
