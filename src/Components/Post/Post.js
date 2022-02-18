export default function Post({ id, title, body }) {
  return (
    <div key={id}>
      <h4> {title}</h4>
      <p>{body}</p>
    </div>
  )
}