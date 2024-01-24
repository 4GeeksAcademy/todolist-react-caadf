import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Home = () => {
    const [inputvalue, setInputvalue] = useState("");
    const [todo, setTodo] = useState([]);

    /*  concat: agregar a un array */

    const borrar = (index) => {
        const nuevalista = [...todo]
        nuevalista.splice(index, 1);
        setTodo(nuevalista)
    }

    return (
        <>
            <div className="container">
                <h2>To do list</h2>
                <ul>
                    <li>
                        <input type="text"
                            onChange={(e) => setInputvalue(e.target.value)} value={inputvalue}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    setTodo(todo.concat(inputvalue));
                                }
                            }
                            }
                            placeholder="What needs to be done" ></input>
                    </li>
                    {todo.map((item, index) => (
                        <li key={index}>{item}
                            <i className="trash" onClick={() => borrar(index)} ><FaTrashAlt /></i>
                        </li>
                    )
                    )}
                </ul>
                <div>{todo.length} tasks</div>
            </div >

        </>
    )
}

export default Home