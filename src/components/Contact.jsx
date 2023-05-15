import React, { useState } from 'react'

const Contact = ({
  contact: { id, name, email, phone, favorite },
  onDelete,
  toggleFavorite,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(name)
  const [editedEmail, setEditedEmail] = useState(email)
  const [editedPhone, setEditedPhone] = useState(phone)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    onSave({
      id,
      name: editedName,
      email: editedEmail,
      phone: editedPhone,
      favorite
    })
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    // You can reset the edited fields to the original values
    setEditedName(name)
    setEditedEmail(email)
    setEditedPhone(phone)
  }

  return (
    <div
      className='card rounded shadow text-center'
      style={{ width: '18rem', height: '270px', margin: '10px' }}
    >
      <div className='card-body'>
        <div style={{ cursor: 'pointer' }} onClick={() => toggleFavorite(id)}>
          {favorite ? (
            <i className='fa-solid fa-star text-warning'></i>
          ) : (
            <i className='fa-regular fa-star'></i>
          )}
        </div>

        <h5 className='card-title'>ID: {id} </h5>
        {isEditing ? (
          <input
            className='form-control m-2'
            type='text'
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          <h6 className='card-subtitle mb-2 text-muted'>{name}</h6>
        )}

        {isEditing ? (
          <input
            className='form-control m-2'
            type='email'
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        ) : (
          <a href='#' className='card-link'>
            {email}
          </a>
        )}

        {isEditing ? (
          <input
            className='form-control m-2'
            type='tel'
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
          />
        ) : (
          <p className='card-text'>Phone: {phone}</p>
        )}

        {isEditing ? (
          <>
            <button className='btn btn-success m-2' onClick={handleSaveClick}>
              Save
            </button>
            <button
              className='btn btn-secondary m-2'
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className='btn btn-primary m-2' onClick={handleEditClick}>
              Edit
            </button>
            <button className='btn btn-danger m-2' onClick={() => onDelete(id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Contact
