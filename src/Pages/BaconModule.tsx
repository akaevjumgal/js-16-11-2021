import { CircularProgress } from "@mui/material"
import { Component, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Props } from "react-select"
import { baconsSelector } from "../store/counter/counterSelectors"
import { getBaconsThunk } from "../store/counter/counterThunk"

export default function BaconModule() {
  const { bacons, loading } = useSelector(baconsSelector)
  const dispatch = useDispatch()

  const fetchBacons = () => {
    dispatch(getBaconsThunk())
  }

  useEffect(() => {
    if (!bacons.length) {
      fetchBacons()
    }
  }, [])

  const container = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
    gap: '1rem'
  }

  const baconStyles = {
    border: '1px solid #e8e8e8',
    borderRadius: '6px',
    padding: '1rem'
  }

  const text = bacons.reduce<{ value: string }>(
    (prevValue, { bacon }) => {
    prevValue.value += bacon.split('. ')[0];

    return prevValue;
  }, { value: '' })
  console.log(text);
  return (
    <div style={container}>
      {loading && <CircularProgress size={20} />}
      {bacons.map<JSX.Element>(({ id, bacon }) => (
        <Link key={id} to={`/bacon/${id}`}>
          <div style={baconStyles}>
            {bacon.split('. ')[0]}
          </div>
        </Link>
      ))}
      <button onClick={fetchBacons}>Next</button>
    </div>
  )
}