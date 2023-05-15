import React from 'react'
import Contact from '../components/Contact'
import Form from '../components/Form'

const HomePage = ({ formSub, contacts, onDelete, toggleFavorite, onSave }) => {
  return (
    <div className='container'>
      <div className='row justify-content-sm-center my-5'>
        <Form formSub={formSub} />
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
              toggleFavorite={toggleFavorite}
              onSave={onSave}
            />
          )
        })}
        {contacts.length === 0 && <h5>No Contacts</h5>}
      </div>
    </div>
  )
}

export default HomePage
