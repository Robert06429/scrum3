import Stars from "./Stars.jsx";
export default function ListItem({ data, index }) {
    return (
        <li key={index} className="bg-white odd:bg-black/3 p-2 rounded-xl flex flex-row my-1">
            <div className="">
                <img
                    className="rounded-lg h-[6rem] object-cover aspect-[27/40]"
                    src={data.img}
                    alt={`foto van ${data.title}`}
                />
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="px-2 flex flex-col justify-between">
                    <div className="">
                        <div className="flex flex-row items-center">
                            <div className="bg-np rounded-lg flex justify-center mr-2 items-center w-7 h-7">
                                <p className="font-semibold text-sm"># {index}</p>
                            </div>
                            <p className="text-2xl font-bold">{data.title}</p>
                        </div>
                        <p>{data.created_at}</p>
                    </div>
                    <Stars value={data.like_count}></Stars>
                </div>
                <div className="flex justify-center items-center">
                    <a
                        href="#"
                        className="bg-np rounded-full w-5 h-5 flex text-center justify-center items-center font-serif"
                    >
                        <p>i</p>
                    </a>
                </div>
            </div>
        </li>
    );
}
