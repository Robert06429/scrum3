import { Link } from "react-router-dom";
import Noorderpoort from "./../assets/noorderpoort-dark.png";
export default function Nav() {
    return (
        <nav className="bg-black shadow-np border-b-4 border-np p-2 text-xl text-white flex justify-center">
            <div className="flex items-center justify-between flex-row w-full max-w-[74rem]">
                {" "}
                <div className="flex flex-row items-center">
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
                </div>
                <div>
                    <p className="font-bold">
                        User <span className="font-icons"></span>
                    </p>
                </div>
            </div>
        </nav>
    );
}
