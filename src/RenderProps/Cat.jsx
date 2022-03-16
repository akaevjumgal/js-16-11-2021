

export default function Cat({ x, y }) {

  return (
    <img
      style={{
        width: '40px',
        height: '40px',
        position: 'fixed',
        left: x,
        top: y
      }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Black_Cat_Vector.svg/1024px-Black_Cat_Vector.svg.png"
      alt="cat"
    />
  )
}
