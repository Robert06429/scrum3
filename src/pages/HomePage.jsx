import { useState } from "react";
import Nav from "./../components/Nav.jsx";
import Heading from "./../components/Heading.jsx";
import ListItem from "./../components/ListItem.jsx";

export default function HomePage() {
    let [arr, setArr] = useState();
    fetch(`#`)
        .then((data) => data.json())
        .then((data) => setArr(data));
    return (
        <>
            <Nav></Nav>
            <div className=" px-2 md: px-[7rem] lg:px-[12rem] xl:px-[20rem] py-3">
                <Heading title="Films"></Heading>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="md:order-2">
                        <h3 className="text-2xl font-bold">Kies uit catagorie</h3>
                    </div>

                    <div className="col-span-2 md:order-1">
                        <ListItem place={1} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                        <ListItem place={2} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                        <ListItem place={3} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                        <ListItem place={4} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                        <ListItem place={6} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                        <ListItem place={7} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                        <ListItem place={8} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                        <ListItem place={9} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                        <ListItem place={10} rating={9} img="https://placehold.co/400x600" item="Film"></ListItem>
                    </div>
                </div>
            </div>
        </>
    );
}
