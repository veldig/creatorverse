import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  })

  useEffect(() => {
    async function fetchCreator() {
      const { data } = await supabase
        .from('creators')
        .select()
        .eq('name', decodeURIComponent(id))
        .single()
      if (data) setForm(data)
    }
    fetchCreator()
  }, [id])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleUpdate(e) {
    e.preventDefault()
    await supabase.from('creators').update(form).eq('name', decodeURIComponent(id))
    navigate(`/creator/${encodeURIComponent(form.name)}`)
  }

  async function handleDelete() {
    if (!window.confirm(`Delete ${form.name}? This cannot be undone.`)) return
    await supabase.from('creators').delete().eq('name', decodeURIComponent(id))
    navigate('/')
  }

  return (
    <main className="container">
      <nav>
        <ul>
          <li><Link to={`/creator/${id}`}>← Back</Link></li>
        </ul>
      </nav>

      <h2>Edit Creator</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
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
            required
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL <small>(optional)</small>
          <input
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>

      <button className="delete-btn" onClick={handleDelete}>
        Delete Creator
      </button>
    </main>
  )
}

export default EditCreator
