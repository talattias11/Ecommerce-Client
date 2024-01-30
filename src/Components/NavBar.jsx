import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav>
        <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/products'>catalog</Link></li>
            <li><Link to='/storage'>demo</Link></li>
            <li><Link to='/users'>users</Link></li>
        </ul>
    </nav>;
}