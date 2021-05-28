import React, { useState, useEffect } from 'react'
import image from '../../src/chuck-norris.png'

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
      <img src={image} className='chuck-norris' alt='chuck norris' />
      <p className='description'>{randomJokes.joke}</p>
      <label htmlFor='categories'>Select Categories</label>
      <div className='selectStyle'>
        <select name='categories' id='categories'>
          <option value='explicit'>Explicit</option>
          <option value='nerdy'>Nerdy</option>
        </select>
      </div>
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
