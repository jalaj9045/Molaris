import React from "react";

import { Card } from "react-bootstrap";

const MoreDeets = () => {
    const cardInfo = [


        {
            image:
                "https://media.gettyimages.com/vectors/illustration-of-a-diverse-group-of-friends-or-colleagues-in-a-video-vector-id1253096084?k=20&m=1253096084&s=612x612&w=0&h=vDDhJ7C8E9ko0y6IhfDfJvkhXDsHrOuVUlZV1uyPZhg=",
            title: "Accounting Outsource",
            text: "For decades, the focus of the search was to match the keywords to the search query. In 2012, google introduced an Intelligent model where the real-world entities and their relationships are",
        },
        {
            image:
                "https://media.gettyimages.com/vectors/illustration-of-workspace-with-young-woman-having-discussion-on-vector-id1219996043?k=20&m=1219996043&s=612x612&w=0&h=mkmxv6FBERLP7ne3lO858EjQVca-SS6O7fA1xs93bns=",
            title: "Practices to increase the loading speed of the website with Magento CMS",
            text: "The survey shows that 42% of consumers who leave the sites will leave the sites which load longer than a 3 minute. If the website of the company takes time to load, it can be a big loss",
        },
        {
            image:
                "https://media.gettyimages.com/illustrations/businesswoman-working-at-computer-illustration-id1264127433?k=20&m=1264127433&s=612x612&w=0&h=RXXl32k82YcXisD4wyim90B8cvbde2Hv0CuI84GCPyQ=",
            title: "The State of Higher Education CMS",
            text: "Schools are adopting the advanced methods in various fields of theirs to mitigate their traditional system. Name it any field, from notetaking to learning resources, teaching",
        },


    ];

    const renderCard = (card, index) => {
        return (
            <div className='card-set'>
                <Card className="blogcard">
                    <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text className="qualityfont2">
                            {card.text}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        );
    };

    return <div className="card-d">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;