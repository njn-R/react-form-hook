import React from 'react'

const Contact = ({
  contact: { id, name, email, phone, favorite },
  onDelete,
  toggleFavorite,
}) => {
  return (
    <div
      className='card rounded shadow text-center'
      style={{ width: '18rem', height: '230px', margin: '10px' }}
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
        <h6 className='card-subtitle mb-2 text-muted'>Name: {name}</h6>

        <a href='#' className='card-link'>
          {email}
        </a>
        <p className='card-text'>Phone: {phone}</p>
        <a href='#' className='btn btn-danger' onClick={() => onDelete(id)}>
          Delete
        </a>
      </div>
    </div>
  )
}

export default Contact
