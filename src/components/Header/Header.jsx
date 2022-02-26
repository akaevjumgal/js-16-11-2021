import { Link } from "react-router-dom";
import './Header.css'
export default function Header () {
    
    const styles = {
        width: "100%",
        color: 'white',
        background: 'rgb(49, 173, 132)',
        position: 'sticky',
        top: 0,
        left: 0
    }
    return (
        <header style={styles}>
            <div className="container">
                <Link to='/'><p>Home</p></Link>
                <Link to='/albums'><p>ReactRouter<br></br>HomeWork</p></Link>
            </div>
        </header>
    )
}