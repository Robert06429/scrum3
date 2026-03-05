import { Link } from "react-router-dom";
import Noorderpoort from "./../assets/noorderpoort-dark.png";
export default function Nav() {
    let popup = "";
    return (
        <nav className="bg-black shadow-np border-b-4 sticky z-1000 top-0 border-np p-2 text-xl text-white flex justify-center">
            <div className="flex items-center justify-between flex-row w-full max-w-[74rem]">
                <div className="flex flex-row items-center">
                    <a href="/">
                        <img className="w-60 px-2" src={Noorderpoort} alt="noorderpoort" />
                    </a>
                    <div className="text-2xl font-roboto font-bold">
                        <Link
                            className="mx-4 transition rounded-lg p-1 font-roboto hover:bg-np hover:text-black"
                            to="/"
                        >
                            Home
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <button className="font-bold">
                        User <span className="font-icons"></span>
                    </button>
                    <div className={popup}>
                        <div className="absolute bg-black border border-white/24 rounded-lg p-2">
                            <button>Loguit</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
