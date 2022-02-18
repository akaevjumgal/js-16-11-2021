import './Tab.css'

export default function Tab({ active, children, onClick }) {
  return (
    <div className={active ? 'tab active' : 'tab'} onClick={onClick}>
      {children}
    </div>
  )
}