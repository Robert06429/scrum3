export default function Heading({ title }) {
    return (
        <>
            <h2 className="h-[4px] bg-black/75 relative my-4 w-full">
                <span className="absolute text-2xl text-black/75 uppercase left-[5rem] px-2 top-[-14.5px] bg-white font-bold">
                    {title}
                </span>
            </h2>
        </>
    );
}
