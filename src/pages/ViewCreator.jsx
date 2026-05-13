import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    async function fetchCreator() {
      const { data } = await supabase
        .from('creators')
        .select()
        .eq('name', decodeURIComponent(id))
        .single()
      setCreator(data)
    }
    fetchCreator()
  }, [id])

  if (!creator) {
    return (
      <main className="container">
        <p aria-busy="true">Loading...</p>
      </main>
    )
  }

  return (
    <main className="container creator-detail">
      <nav>
        <ul>
          <li><Link to="/">← Back to all creators</Link></li>
        </ul>
        <ul>
          <li>
            <Link to={`/creator/${encodeURIComponent(creator.name)}/edit`} role="button">Edit</Link>
          </li>
        </ul>
      </nav>

      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} />
      )}

      <h1>{creator.name}</h1>
      <p>
        <a href={creator.url} target="_blank" rel="noreferrer">
          {creator.url}
        </a>
      </p>
      <p>{creator.description}</p>
    </main>
  )
}

export default ViewCreator
