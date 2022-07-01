import React from "react";

import { Card } from "react-bootstrap";

const Products = () => {
    const cardInfo = [


        {
            image:
                "https://img.icons8.com/glyph-neue/64/dc143c/chat.png",
            title: "Accounting Outsource",
            text: "Ignite the messaging experiences through chat SDK & messaging API that offers wide chat functionalities with enriched-features to enhance instant messaging across platforms.",
            Quality: "Internet Of Things",
            Quality2: "Cloud",
            Quality3: "Robotic Process Automation",
            Quality4: "DevOps As A Service",
            Quality5: "Full Stack Engineering",
        },
        {
            image:
                "https://img.icons8.com/glyph-neue/64/dc143c/video-call.png",
            title: "Cloud Services",
            text: "Force the ongoing correspondence through WebRTC SDK joining to any application that permits users to make great video calls with no obstruction.",
            Quality: "1 to 1 or One to Many",
            Quality2: "Own TURN Server",
            Quality3: "Low Latency",
            Quality4: "HD Quality",
            Quality5: "Data Track",
        },
        {
            image:
                "https://img.icons8.com/glyph-neue/64/dc143c/phone-office.png",
            title: "Robotics Process Automation",
            text: "Integrate voice calling functionality using voice SDK to let users interact in a clear voice quality and also make telephonic calls through SIP integration.",
            Quality: "APIs & SDKs",
            Quality2: "Voice",
            Quality3: "Chat & Messaging",
            Quality4: "Security & Complaince",
            Quality5: "video",
        },


    ];

    const renderCard = (card, index) => {
        return (
            <div className='card-set'>
                <Card key={index} className="Product-card">
                    <div className="setimg">  <Card.Img variant="top" src="holder.js/100px180" src={card.image} className='cardimg' /></div>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        <div className="text-justify qualityfont">
                            <Card.Text> <img src="https://cdn-icons-png.flaticon.com/512/753/753344.png" className="cheack" />   {card.Quality}</Card.Text>
                            <Card.Text><img src="https://cdn-icons-png.flaticon.com/512/753/753344.png" className="cheack" />  {card.Quality2}</Card.Text>
                            <Card.Text><img src="https://cdn-icons-png.flaticon.com/512/753/753344.png" className="cheack" /> {card.Quality3}</Card.Text>
                            <Card.Text><img src="https://cdn-icons-png.flaticon.com/512/753/753344.png" className="cheack" /> {card.Quality4}</Card.Text>
                            <Card.Text><img src="https://cdn-icons-png.flaticon.com/512/753/753344.png" className="cheack" /> {card.Quality5}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    };

    return <div className="card-d">{cardInfo.map(renderCard)}</div>;
};

export default Products;