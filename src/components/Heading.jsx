export default function Heading({ title }) {
    return (
        <>
            <h2 className="h-[4px] bg-black relative w-full">
                <span className="absolute text-2xl uppercase top-[-14.5px] font-bold">{title}</span>
            </h2>
        </>
    );
}
