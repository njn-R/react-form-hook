import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import PageNotFound from './pages/PageNotFound'
import Navigation from './components/Navigation'
import './App.css'
import { useState, useEffect } from 'react'

const url = 'http://localhost:3000/contacts'

function App() {
  const [contacts, setContacts] = useState([])
  
  useEffect(() => { 
    fetchContacts().then(result => {
      const resFromServer = result
      setContacts(resFromServer)
    })
  }, [])

  const formSub = async(data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const resData = await res.json()

    res.ok ? setContacts([...contacts, resData]) : alert('Error')
  }

  const fetchContacts = async () => { 
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

   const getContact = async (id) => {
     const res = await fetch(`${url}/${id}`)
     const data = await res.json()
     return data
   }

  const onDelete = async(id) => {
     const res = await fetch(`${url}/${id}`, {
       method: 'DELETE',
     })
    
    if (res.status === 200) {
      let newContacts = contacts.filter((contact) => contact.id !== id)
      setContacts(newContacts)
      alert('Contact deleted')
    }
    else alert('Error')
    
  }

  const toggleFavorite = async (id) => {
    const singleContact = await getContact(id)
    const updateTask = { ...singleContact, favorite: !singleContact.favorite }
    
     const res = await fetch(`${url}/${id}`, {
       method: 'PUT',
       body: JSON.stringify(updateTask),
       headers: {
         'Content-Type': 'application/json',
       },
     })
      
     if (res.status === 200) {
        let newContacts = contacts.map((contact) => {
          return contact.id === id
            ? { ...contact, favorite: !contact.favorite }
            : contact
        })
        setContacts(newContacts)
     }
     
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
