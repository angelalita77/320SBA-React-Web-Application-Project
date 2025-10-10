import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {

    return (
        <header className="header">

            <a href ="/" className="logo">Matching Game</a>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/game">Game</a>
                <a href="/leaderboard">Leader Board</a>
                {/* <a href="/notfound">Not Found</a> */}
            </nav>
        </header>

    )
}