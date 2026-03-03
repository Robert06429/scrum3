import Nav from "./../components/Nav.jsx";
import Comment from "./../components/Comment.jsx";
import Heading from "./../components/Heading.jsx";

export default function HomePage() {
    return (
        <>
            <div className="px-[20rem] py-3">
                <Nav></Nav>
                <div className="bg-white border border-black/10 shadow-np rounded-lg my-3 p-2">
                    <Heading title="Test"></Heading>
                    <Comment></Comment>
                </div>
            </div>
        </>
    );
}
