import { useState, useEffect } from 'react'

const Form3 = () => {
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [ error, setError ] = useState(null)

  const handleChange = (event) => {
    console.log(event)
    const { name, value } = event.target
    console.log(`name ${name}, value ${value}`)
    setForm({
      ...form,
      [name]: value,
    })
  }
  console.log(`form, ${JSON.stringify(form)}`)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`handleSubmit form - ${form}`) 
  }

  useEffect(() => {
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
    } else {
      setError(null)
    }
  }, [form.password, form.confirmPassword])


  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"/>
      </label>
      < br/>
      <label>
        Email:
        <input type="email" name="email" value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"/>
      </label>
      < br/>
      <label>
        Password:
        <input type="password" name="password" value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"/>
      </label>
      < br/>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"/>
      </label>
      <br/>
      {error && <div>{error}</div>} 
      <button type='submit'> Submit </button>
    </form>
  )
}

export default Form3