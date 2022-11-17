import React from "react";
import Card from "./Card";

export default function App() {
    return (
        <>
            <h1>My Contacts</h1>
            <Card
                name="Beyonce"
                img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                alt="avatar_img"
                tel="+123 456 789"
                email="b@beyonce.com"
            />
        </>
    );
}
