import React from 'react'
import Contact from '../components/Contact'

const Favorites = ({ contacts, onDelete, toggleFavorite }) => {
  return (
    <div className='container'>
      <div className='row justify-content-sm-center my-5'>
        <div className='col-sm-8'>
          <h2>Favorites</h2>
          {contacts.filter((contact) => contact.favorite).length === 0 && <h5>No Favorites Contacts</h5>}
          {contacts.map((contact) => {
            return (
              contact.favorite && (
                <Contact
                  key={contact.id}
                  contact={contact}
                  onDelete={onDelete}
                  toggleFavorite={toggleFavorite}
                />
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Favorites