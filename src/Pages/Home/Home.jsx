import { Link } from "react-router-dom";
import './Home.css'
export default function Home () {

    return (
        <section className="container section-home">
        <Link to='/albums'><button className="home-button">ReactRouter HomeWork</button></Link>
        </section>
    )
}