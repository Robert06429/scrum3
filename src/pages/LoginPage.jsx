import { Axios } from "axios";
import Noorderpoort from "./../assets/noorderpoort.png";
export default function LoginPage() {
    function HandleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="h-dvh w-dvw flex justify-center items-center">
            <img className="absolute top-4 left-4 w-80 grayscale contrast-200" src={Noorderpoort} alt="Logo" />
            <div className="bg-white rounded-lg border border-black/10 shadow-np py-12 flex flex-col justify-center items-center w-[40rem]">
                <h2 className="text-4xl text-center font-bold font-roboto">Welkom</h2>
                <form className="flex flex-col items-center w-2/3" onSubmit={HandleSubmit}>
                    <div className="relative my-4 w-full">
                        <label className="absolute left-5 text-black/25 top-1 text-sm" for="email">
                            <span className="font-icons">󰇮</span> E-mail
                        </label>
                        <input
                            className="w-full outline-none bg-black/2 rounded-lg pt-5 p-1 px-4 border border-black/25"
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="relative my-4 w-full">
                        <label className="absolute left-5 text-black/25 top-1 text-sm" for="password">
                            <span className="font-icons"></span> Wachtword
                        </label>
                        <input
                            className="w-full outline-none bg-black/2 rounded-lg pt-5 p-1 px-4 border border-black/25"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <input
                        className="bg-np rounded-full font-bold font-roboto text-xl my-4 p-3 w-full"
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}
