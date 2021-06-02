import React, { useState, useEffect } from 'react'
import image from '../../src/chuck-norris.png'

const API = 'http://api.icndb.com/jokes/random?limitTo=[nerdy,explicit]'

const getImpersonatedJokeUrl = (firstName = '', lastName = '') => {
  return `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
}

function Homepage() {
  const [randomJokes, setRandomJokes] = useState([])
  const [nameForImpersonation, setNameForImpersonation] = useState(
    'Impersonate Chuck Norris'
  )

  const getRandomJokes = async () => {
    let url = API
    if (nameForImpersonation !== '') {
      const [firstName, lastName] = nameForImpersonation.split(' ')
      console.log(firstName, lastName)
      url = getImpersonatedJokeUrl(firstName, lastName)
    }
    const res = await fetch(url)
    const listOfJokes = await res.json()
    console.log(listOfJokes.value)
    setRandomJokes(listOfJokes.value)
  }

  useEffect(() => {
    getRandomJokes()
  }, [])

  useEffect(() => {
    setNameForImpersonation()
  }, [])

  const handleInputChange = (e) => {
    e.preventDefault()
    setNameForImpersonation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getRandomJokes()
  }

  return (
    <div>
      <img src={image} className='chuck-norris' alt='chuck norris' />
      <p className='description'>{randomJokes.joke}</p>
      <div className='subcontainer'>
        <select className='option'>
          <option>Select category</option>
          <option>Nerdy</option>
          <option>Explicit</option>
        </select>
        <form onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            name='nameForImpersonation'
            value={nameForImpersonation}
            onChange={handleInputChange}
          />
        </form>
        <button onClick={getRandomJokes} className='button'>
          Draw a random chuck norris jokes
        </button>
        <div className='buttonContainer'>
          <div className='counterButton'>
            <button>+</button>
            <h1 className='count'>0</h1>
            <button>-</button>
          </div>
          <button className='saveButton'>Save jokes</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage
