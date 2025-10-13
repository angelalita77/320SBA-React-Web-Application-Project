import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {

    return (
        <header className="header">

            <a href ="/" className="logo">Matching Game</a>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/game">Game</Link>
                <Link to="/leaderboard">Leader Board</Link>
                {/* <a href="/notfound">Not Found</a> */}
            </nav>
        </header>

    )
}