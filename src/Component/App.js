import React from "react";
import Card from "./Card";

export default function App() {
    return (
        <>
            <h1>My Contacts</h1>
            {/*好比 我们调用了 Card 这个函数，并且通过 props 传入了一个对象*/}
            <Card
                name="Beyonce"
                img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                alt="avatar_img"
                tel="+123 456 789"
                email="b@beyonce.com"
            />
            <Card
                name="Jack Bauer"
                img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                alt="avatar_img"
                tel="+987 654 321"
                email="jack@nowhere.com"
            />
            <Card
                name="Chuck Norris"
                img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                alt="avatar_img"
                tel="+918 372 574"
                email="gmail@chucknorris.com"
            />
        </>
    );
}
