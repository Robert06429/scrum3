import axios from "axios";
import Noorderpoort from "./../assets/noorderpoort.png";
export default function LoginPage() {
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/components/db/login.php", {
                email: e.target.email.value,
                password: e.target.password.value,
            });
            console.log("one ", response);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    return (
        <div className="h-dvh w-dvw flex bg-np justify-center items-center">
            <img className="absolute top-4 left-4 w-80 grayscale contrast-200" src={Noorderpoort} alt="Logo" />
            <div className="bg-white m-4 rounded-lg border border-black/10 shadow-np py-12 flex flex-col justify-center items-center w-[40rem]">
                <h2 className="text-4xl text-center font-bold font-roboto">Welkom</h2>
                <form className="flex flex-col items-center w-full px-2 max-w-[20rem]" onSubmit={HandleSubmit}>
                    <div className="relative my-4 w-full">
                        <label className="absolute left-5 text-black/25 font-bold top-1 text-sm" for="email">
                            <span className="font-icons">󰇮</span> E-mail
                        </label>
                        <input
                            className="w-full transition-all outline-none bg-black/2 rounded-lg pt-6 p-1 px-4 border border-black/25 focus:border-np invalid:bg-red-500/5 focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500"
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="relative my-4 w-full">
                        <label className="absolute left-5 text-black/25 font-bold top-1 text-sm" for="password">
                            <span className="font-icons"></span> Wachtword
                        </label>
                        <input
                            className="w-full transition-all outline-none bg-black/2 rounded-lg pt-6 p-1 px-4 border border-black/25 focus:border-np invalid:bg-red-500/5 focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <input
                        className="bg-np transition-all rounded-full font-bold font-roboto text-xl my-4 p-3 w-full active:bg-black active:scale-[1] active:text-np hover:scale-[1.1]"
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}
