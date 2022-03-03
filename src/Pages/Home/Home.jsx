import { Link } from "react-router-dom";
import './Home.css'
export default function Home () {

    return (
        <section className="container section-home">
        <Link to='/albums'><button className="home-button">ReactRouter HomeWork</button></Link>
        <Link to='/renderProps'><button className="home-button">Render Props HomeWork</button></Link>

        </section>
    )
}