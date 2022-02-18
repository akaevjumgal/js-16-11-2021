import './Toast.css';

export default function Toast({ index }) {
  if (index === 0) {
    // console.log(index)
    return (
      <div className="success">
        <h2>Success</h2>
        <p>Your changes are saved successfully</p>
      </div>
    )
  } else if (index === 1) {
    return (
      <div className="Error">
        <h2>Error</h2>
        <p>Error has occured while saving changes.</p>
      </div>
    )
  } else if (index === 2) {
    return (
      <div className="Info">
        <h2>Info</h2>
        <p>New setting available on your account.</p>
      </div>
    )
  } else if (index === 3) {
    return (
      <div className="Warning">
        <h2>Warning</h2>
        <p>Username you have entered is invalid.</p>
      </div>
    )
  }
}
