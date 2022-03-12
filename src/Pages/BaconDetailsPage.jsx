import { useNavigate, useParams } from "react-router-dom"
import { useContext } from 'react';
import BaconContext from "../bacon.context";

export default function BaconDetailsPage() {
  const { baconId } = useParams();
  const { bacons } = useContext(BaconContext);
  const navigate = useNavigate();

  const baconDetails = bacons.find((bacon) => bacon.id === Number(baconId))

  if (!baconDetails) {
    return <div>No bacon page</div>
  }

  return <div>
    {baconDetails.bacon}
    <br />
    <button onClick={() => navigate(-1)}>back</button>
  </div>
}