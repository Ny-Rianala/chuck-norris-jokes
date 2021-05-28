import React, { useState, useEffect } from 'react'
// import { axios } from 'axios'

const API = 'http://api.icndb.com/jokes/random'

function Homepage() {
  const [randomJokes, setRandomJokes] = useState([])

  const getRandomJokes = async () => {
    const res = await fetch(API)
    const listOfJokes = await res.json()
    console.log(listOfJokes.value)
    setRandomJokes(listOfJokes.value)
  }

  useEffect(() => {
    getRandomJokes()
  }, [])

  return (
    <div>
      <p>{randomJokes.joke}</p>
      <label for='categories'>Select Categories</label>
      <select name='categories' id='categories'>
        <option value='explicit'>Explicit</option>
        <option value='nerdy'></option>
      </select>
      <form>
        <label for='name'>Name:</label>
        <input type='text' id='name' name='name'></input>
      </form>
      <button>Draw a random chuck norris jokes</button>
    </div>
  )
}

export default Homepage

// const data = {
//   type: 'success',
//   value: {
//     id: 412,
//     joke: 'Chuck Norris knows the last digit of pi.',
//     categories: ['nerdy'],
//   },
// }

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('http://api.icndb.com/jokes/random')
//       console.log(result)
//       setRandomJokes(result.randomJokes)
//     }

//     fetchData()
//   }, [])
