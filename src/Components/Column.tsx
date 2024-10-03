import {v4 as uuid} from 'uuid';
import { ColumnType, Task } from "../types/types";
import { Tasks } from "./Tasks";
import { useEffect, useState } from "react";

const dataMock : Task[] = [
{   
    id: '12345',
    title: 'Sprint bugfix1',
    description: "",
    status: ColumnType.BACKLOG,
},
{   
    id: '12345',
    title: 'Sprint bugfix',
    description: "",
    status: ColumnType.FINISHED,
},
{   
    id: '12345',
    title: 'Sprint bugfix',
    description: "",
    status: ColumnType.FINISHED,
},
]


export function Column({column} : {column : ColumnType}) {
      
 
    const [taskList, setTaskList] = useState(() => {
        const savedTasks = localStorage.getItem('taskList');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    useEffect(() => {
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);
  
    const [showInputForm, setShowInputForm] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [showDpopdown, setShowDpopdown] = useState(false);
    
    const ColumnTasks = 
        taskList.filter((item : Task) => item.status == column).map((item: Task) => {return <Tasks {...item} />})
    
   function handleInputChange(e : any) {
    setInputValue(e.target.value);
   }

   function handleAddCard(e : any) {
    e.preventDefault();
    if (inputValue === "") {
        setShowInputForm(!showInputForm);
        return;
    }
    else setTaskList([...taskList, 
        {   
            id: uuid(),
            title: inputValue,
            description: "",
            status: ColumnType.BACKLOG,
        }
    ]);
    setShowInputForm(!showInputForm);
   }

    function handleAddFromList(e : any) {
        e.preventDefault();
        setShowDpopdown(!showDpopdown);

    
   }



    return (
        <div className="column">
            <h3>{column}</h3>
            {(column == "Backlog") && ColumnTasks
            }
            {!showInputForm && (column == "Backlog") &&
            <button onClick={() => setShowInputForm(!showInputForm)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z" fill="#5E6C84"/>
            </svg>
            Add card</button>}
            {showInputForm &&
                <>
                    <input className="taks-item" type="text" onChange={handleInputChange} contentEditable="true"/>
                    <button className="submin_button" onClick={handleAddCard}>Submit</button>
                </>
            }
            {!showInputForm && ((column == "Ready") || (column == "In progress") ||(column == "Finished")) &&
            <button >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z" fill="#5E6C84"/>
            </svg>
            Add card</button>}
        </div>
    )
}