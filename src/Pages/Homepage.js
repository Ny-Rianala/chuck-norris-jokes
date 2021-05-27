import React, { useState, useEffect } from 'react'
import { axios } from 'axios'

// const API = 'http://api.icndb.com/jokes/random'

function Homepage() {
  const [randomJokes, setRandomJokes] = useState({})
  console.log(randomJokes.value)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://api.icndb.com/jokes/random')
      console.log(result)
      setRandomJokes(result.randomJokes)
    }

    fetchData()
  }, [])

  //   const getRandomJokes = async () => {
  //     const res = await fetch(API)
  //     const listOfJokes = await res.json()
  //     console.log(listOfJokes)
  //     setRandomJokes(listOfJokes)
  //   }

  //   useEffect(() => {
  //     getRandomJokes()
  //   }, [])

  return (
    <div>
      {/* {randomJokes.jokes.map((joke) => (
        <li key={joke.id}>
          <q>{joke.joke}</q>
        </li>
      ))} */}
      <p>Homepage</p>
    </div>
  )
}

export default Homepage
