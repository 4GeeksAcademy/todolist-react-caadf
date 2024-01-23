import React, { useState } from 'react'

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
                            onChange={e => setInputvalue(e.target.value)}
                            value={inputvalue}
                            onKeyPress
                            placeholder="What needs to be done"></input>
                    </li>
                    <li>Make the bed</li>
                    <li>Wash my hands</li>
                    <li>Eat</li>
                    <li>Walk the dog</li>


                </ul>
            </div>

        </>
    )
}

export default Home