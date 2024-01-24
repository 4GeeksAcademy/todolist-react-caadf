import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Home = () => {
    const [inputvalue, setInputvalue] = useState("");
    const [todo, setTodo] = useState([]);
    


    return (
        <>
            <div className="container">
                <h2>To do list</h2>
                <ul>
                    <li>
                        <input type="text"
                            onChange={(e) => setInputvalue(e.target.value)} value={inputvalue}
                            onkeypress={(e) => {
                                if (e.key === "Enter") {
                                    setTodo(todo.concat(inputvalue));
                                }
                            }}
                            placeholder="What needs to be done" ></input>
                    </li>
                  
                </ul>
                <div>{todo.length} tasks</div>
            </div >

        </>
    )
}

export default Home