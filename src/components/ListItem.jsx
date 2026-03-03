import Stars from "./Stars.jsx";
export default function ListItem({ place, rating, item, img }) {
    return (
        <div className="bg-white border border-black/10 p-2 rounded-lg shadow-np flex flex-row my-2">
            <div className="">
                <img className="rounded-lg h-[6rem] object-cover aspect-[27/40]" src={img} alt={`foto van ${item}`} />
            </div>
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
        </div>
    );
}
