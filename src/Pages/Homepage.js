import React, { useState, useEffect } from 'react'
import image from '../../src/chuck-norris.png'
// import { useParams } from 'react-router-dom'

const API = 'http://api.icndb.com/jokes/random?limitTo=[nerdy,explicit]'

const getImpersonatedJokeUrl = (firstName = '', lastName = '') => {
  return `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
}

function Homepage() {
  const [randomJokes, setRandomJokes] = useState([])
  const [nameForImpersonation, setNameForImpersonation] = useState('')
  // const [selectedValue, setSelectedValue] = useState(randomJokes[0])
  // const [categories, setCategories] = useState([])

  const getRandomJokes = async () => {
    let url = API
    if (nameForImpersonation !== '') {
      const [firstName, lastName] = nameForImpersonation.split(' ')
      console.log(firstName, lastName)
      url = getImpersonatedJokeUrl(firstName, lastName)
    }
    console.log(url)
    //check if we have firstname and lastname
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

  // const category = () => {
  //   randomJokes.filter((item) => item.categories[1] === selectedValue)
  // }
  // console.log(category)

  const handleInputChange = (e) => {
    e.preventDefault()
    setNameForImpersonation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getRandomJokes()
  }
  console.log(`The name changed into ${nameForImpersonation}`)

  const handleSelectionChange = (e) => {
    //  to do category changes
  }

  return (
    <div>
      <img src={image} className='chuck-norris' alt='chuck norris' />
      <p className='description'>{randomJokes.joke}</p>
      <div className='subcontainer'>
        <select className='option' onChange={handleSelectionChange}>
          {/* <option value={selectedValue}>{selectedValue}</option> */}
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
