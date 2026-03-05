import Stars from "./Stars.jsx";
export default function ListItem({ place, rating, item, img }) {
    return (
        <div className="bg-white odd:bg-black/3 p-2 rounded-xl flex flex-row my-1">
            <div className="">
                <img className="rounded-lg h-[6rem] object-cover aspect-[27/40]" src={img} alt={`foto van ${item}`} />
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="px-2 flex flex-col justify-between">
                    <div className="">
                        <div className="flex flex-row items-center">
                            <div className="bg-np rounded-lg flex justify-center mr-2 items-center w-7 h-7">
                                <p className="font-semibold text-sm"># {place}</p>
                            </div>
                            <p className="text-2xl font-bold">{item}</p>
                        </div>
                        <p>2026-03-030</p>
                    </div>
                    <Stars value={rating}></Stars>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-np rounded-full w-5 h-5 flex justify-center items-center font-serif">
                        <a href="#">i</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
