import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import PageNotFound from './pages/PageNotFound'
import Navigation from './components/Navigation'
import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [contacts, setContacts] = useState([])

  const formSub = (data) => {
    setContacts([...contacts, data])
  }

  const onDelete = (id) => {
    let newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
  }

  const toggleFavorite = (id) => {
    // let newContacts = contacts.map((contact) => {
    //   if (contact.id === id) {
    //     contact.favorite = !contact.favorite
    //   }
    //   return contact
    // })
    // setContacts(newContacts)

    let newContacts = contacts.map((contact) => {
      return contact.id === id
        ? { ...contact, favorite: !contact.favorite }
        : contact
    })
    setContacts(newContacts)
  }

  return (
    <>
      <div>
        <Navigation />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                formSub={formSub}
                contacts={contacts}
                onDelete={onDelete}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites
                contacts={contacts}
                onDelete={onDelete}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
