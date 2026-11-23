import { useState } from "react"

function ListWithKey({ items }) {
    const [inputData, setinputData] = useState('')
    const inputHandler = (e) => setinputData(e.target.value)

    return <>
        <h3>ListWithKey</h3>
        <ul>
            {items.map((item) =>

                <li key={item.id}>{item.value}
                    <input onChange={inputHandler} ></input>
                </li>
            )}


        </ul>
    </>
}

export default ListWithKey
