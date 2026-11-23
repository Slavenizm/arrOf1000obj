import { useState } from 'react';
import './App.css';
import ListWithKey from './ListWithKey';
import ListWithoutKey from './ListWithoutKey';
// import { LanguageContext } from './MyContext';

const generateItems = () => {
  const arr = []
  for (let i = 1; i <= 1000; i++) {
    arr.push({ id: i, value: i * i })
  }
  return arr
}

function App() {
  const [arrOfElements, setarrOfElements] = useState(generateItems)
  const [changerOfList, setchangerOfList] = useState(true)


  const handleClickChangeList = () => setchangerOfList((prevState) => !prevState)

  const handleClickAddToStartList = () => setarrOfElements((prevArr) => { return [{ id: Date.now(), value: Date.now() / 777 }, ...prevArr] })

  const handleClickAddToEndList = () => setarrOfElements((prevArr) => { return [...prevArr, { id: Date.now(), value: Date.now() / 777 }] })

  const handleClickDeleteFirst = () => setarrOfElements((prevArr) => prevArr.slice(1))
  const handleClickMixList = () => setarrOfElements((prevArr) => {
    const copy = [...prevArr]
    for (let i = copy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];


    }
    return copy

  })
  const handleClickUpdateRandom = () => setarrOfElements((prevArr) => { 
    const copy = [...prevArr]
    const randomIndex = Math.floor(Math.random() * copy.length);
    copy[randomIndex] ={...copy[randomIndex],value:'значение обновилось!'}
    return copy
  
  
  })
  // console.log(arrOfElements)
  // console.log(generateItems());

  return <>
    <h1>Привет</h1>
    {changerOfList ? <ListWithKey items={arrOfElements}></ListWithKey> : <ListWithoutKey items={arrOfElements} />}

    <button onClick={handleClickChangeList}>Поменять списки</button>
    <button onClick={handleClickAddToStartList}>добавить элемент в начало</button>
    <button onClick={handleClickAddToEndList}>добавить элемент в конец</button>
    <button onClick={handleClickDeleteFirst}>удалить первый</button>
    <button onClick={handleClickMixList}>перемешать список</button>
    <button onClick={handleClickUpdateRandom}>обновить случайный элемент</button>

  </>
}

export default App

