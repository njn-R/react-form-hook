import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({formSub}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    data.id = new Date().getTime()
    data.favorite = true
    reset()
    formSub(data)
  }

  return (
    <div>
      <form
        className='col-sm-4 shadow p-3 mb-5 bg-white rounded'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='text-center text-secondary'>Add Contact</h2>
        <div className='form-group'>
          <label htmlFor='name' className='col-form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            {...register('name', { required: true })}
          />
          {errors.name && (
            <small className='text-danger'>Name is required</small>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='col-form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email',
              },
            })}
          />
          {errors.email && (
            <small className='text-danger'>{errors.email.message}</small>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='phone' className='col-form-label'>
            Phone
          </label>
          <input
            type='text'
            className='form-control'
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number format',
              },
            })}
          />
          {errors.phone && (
            <small className='text-danger'>{errors.phone.message}</small>
          )}
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
