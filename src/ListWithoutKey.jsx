import { useState } from "react"

function ListWithoutKey({ items }) {
    const [inputData, setInputData] = useState('')
    const changeHandler = (e) => setInputData(e.target.value)

    return <>
        <h3>ListWithoutKey</h3>
        <ul>
            {items.map((item) =>
              
                    <li>{item.value}
                    <input onChange={changeHandler}></input>

              </li>
              
            )}
        </ul>
    </>
}

export default ListWithoutKey