import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function AddCreator() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await supabase.from('creators').insert([form])
    navigate('/')
  }

  return (
    <main className="container">
      <nav>
        <ul>
          <li><Link to="/">← Back</Link></li>
        </ul>
      </nav>

      <h2>Add a Creator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. MrBeast"
            required
          />
        </label>
        <label>
          URL
          <input
            name="url"
            type="url"
            value={form.url}
            onChange={handleChange}
            placeholder="https://youtube.com/@..."
            required
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="What kind of content do they make?"
            required
          />
        </label>
        <label>
          Image URL <small>(optional)</small>
          <input
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
            placeholder="https://..."
          />
        </label>
        <button type="submit">Add Creator</button>
      </form>
    </main>
  )
}

export default AddCreator
