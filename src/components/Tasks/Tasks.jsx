import React, {useState} from "react";
import styles from "./tasks.module.css";


const Tasks = (props) => {

  const [line, setLine] = useState(false);
  // NOTE: do not delete `data-cy` key value pair
  const cutIt = () => {
    setLine(true);
  }
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
         
          <p style={{textDecoration: line ? "Line-through" : "none"}}>{props.task}</p>
          <div style={{paddingLeft:"20px"}}>
            <span style={{paddingLeft:"20px", paddingTop:"10px"}} class="material-symbols-sharp" onClick={cutIt}>task_alt</span>
            <span style={{paddingLeft:"20px", paddingTop:"10px"}} class="material-symbols-sharp" >delete</span>
          </div>
          
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}

      </div>
    </>
  );
};

export default Tasks;
