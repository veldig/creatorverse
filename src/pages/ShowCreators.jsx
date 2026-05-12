import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import Card from '../components/Card'

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    async function fetchCreators() {
      const { data } = await supabase.from('creators').select()
      setCreators(data || [])
    }
    fetchCreators()
  }, [])

  return (
    <main className="container">
      <nav>
        <ul>
          <li><strong>✨ Creatorverse</strong></li>
        </ul>
        <ul>
          <li>
            <Link to="/new" role="button">+ Add Creator</Link>
          </li>
        </ul>
      </nav>

      {creators.length === 0 ? (
        <p>No creators yet — add some!</p>
      ) : (
        <div className="grid">
          {creators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </main>
  )
}

export default ShowCreators
