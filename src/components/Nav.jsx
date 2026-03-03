import { Link } from "react-router-dom";
import Noorderpoort from "./../assets/noorderpoort.png";
export default function Nav() {
    return (
        <nav className="bg-white border border-black/10 rounded-lg shadow-np p-2 text-xl flex items-center justify-between flex-row">
            <a href="/">
                <img className="w-70 px-2" src={Noorderpoort} alt="noorderpoort" />
            </a>
            <div className="text-2xl uppercase font-roboto font-bold">
                <Link className="mx-1 font-roboto" to="/">
                    Home
                </Link>
                <Link className="mx-1" to="/login">
                    Login
                </Link>
            </div>
        </nav>
    );
}
