export default function Stars({ value }) {
    let rating = ["", "", "", "", "", "", "", "", "", "", ""];

    return (
        <span className="font-icons text-np">
            {rating[value]} <span className="font-roboto font-semibold text-black">{value / 2}</span>
        </span>
    );
}
