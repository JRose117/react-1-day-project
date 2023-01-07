import { useState, useEffect } from 'react'

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState(null)

  useEffect(() => {
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
    } else {
      setError(null)
    }
  }, [form.password, form.confirmPassword])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm your password" />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form