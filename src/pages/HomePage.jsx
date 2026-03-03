import Nav from "./../components/Nav.jsx";
import Comment from "./../components/Comment.jsx";
import Heading from "./../components/Heading.jsx";
import ListItem from "./../components/ListItem.jsx";

export default function HomePage() {
    return (
        <>
            <Nav></Nav>
            <div className="px-[20rem] py-3">
                <div className="bg-white border border-black/10 shadow-np rounded-lg my-3 p-2">
                    <Heading title="Test"></Heading>
                    <Comment></Comment>
                    <ListItem place={1} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                </div>
            </div>
        </>
    );
}
