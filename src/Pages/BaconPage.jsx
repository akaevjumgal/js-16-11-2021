import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BaconContext from '../bacon.context';

export default function BaconPage() {
  const { bacons, setBacons } = useContext(BaconContext)

  const mapBaconToIds = (bacon, index) => ({ id: index + 1, bacon });

  const fetchBacons = async () => {
    const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
    const result = await response.json();

    setBacons(result.map(mapBaconToIds));
  }

  useEffect(() => {
    if (!bacons.length) {
      fetchBacons();
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

  return (
    <div style={container}>
      {bacons.map(({ id, bacon }) => (
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