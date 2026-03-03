import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <nav className="bg-white border border-black/10 rounded-lg shadow-np p-2 text-xl">
            <Link className="mx-1" to="/">
                Home
            </Link>
            <Link className="mx-1" to="/login">
                Login
            </Link>
        </nav>
    );
}
