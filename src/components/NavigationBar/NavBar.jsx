import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {

    return (
        <header className="header">

            <Link to ="/" className="logo">Matching Game</Link>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/game">Game</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/leaderboard">Leader Board</Link>
            </nav>
        </header>

    )
}