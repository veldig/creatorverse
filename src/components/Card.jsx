import { Link } from 'react-router-dom'

function Card({ creator }) {
  const { id, name, url, description, imageURL } = creator

  return (
    <article>
      {imageURL && <img src={imageURL} alt={name} />}
      <hgroup>
        <h3>
          <Link to={`/creator/${id}`}>{name}</Link>
        </h3>
        <p>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
      </hgroup>
      <p>{description}</p>
      <footer>
        <Link to={`/creator/${id}`} role="button" className="secondary outline">
          View
        </Link>{' '}
        <Link to={`/creator/${id}/edit`} role="button">
          Edit
        </Link>
      </footer>
    </article>
  )
}

export default Card
