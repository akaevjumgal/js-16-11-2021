import { Link } from "react-router-dom";
import Tabs from "../components/Tabs/Tabs";
import './main.css'

export default function HomePage() {

    const options = [{ label: 'Tab 1', value: '1' }, { label: 'Tab 2', value: '2' }]

    return (
        <div className="cont">
            <div>
                <Tabs options={options} />
            </div> 
            <div>
                <Link to='/materialpage'>Material UI</Link>
            </div>
        </div>
    )
}