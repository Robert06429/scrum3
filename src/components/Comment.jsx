import Stars from "./Stars.jsx";
export default function Comment() {
    return (
        <div className="bg-white border border-black/10 rounded-lg shadow-np p-2">
            <p className="font-semibold">
                User: <Stars value={7}></Stars>
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quod veniam beatae ab tenetur
                eveniet quaerat, odit ratione quam quos in repellat. Nostrum quasi quibusdam velit reiciendis assumenda
                repellendus nihil.
            </p>
        </div>
    );
}
