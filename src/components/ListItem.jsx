export default function ListItem({ place, item, img }) {
    return (
        <div className="bg-white border border-black/10 rounded-lg shadow-np flex flex-row p-2 my-2 items-center">
            <p className="text-4xl px-2 w-10 text-center text-np">{place}</p>
            <div>
                <img className="rounded-full w-10 object-cover aspect-square" src={img} alt={`foto van ${item}`} />
            </div>
            <p className="px-2 text-xl">{item}</p>
        </div>
    );
}
