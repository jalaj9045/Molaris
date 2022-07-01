import React from "react";

import { Card } from "react-bootstrap";

const MoreDeets = () => {
  const cardInfo = [


    {
      image:
      "https://img.icons8.com/ios-filled/50/dc143c/accounting.png",
      title: "Accounting Outsource",
      text: "We strive to achieve best in class accounting services",
    },
    {
      image:
        "https://img.icons8.com/ios-filled/50/dc143c/cloud-backup-restore--v2.png",
      title: "Cloud Services",
      text: "We deliver wide range of resources to customers via internet",
    },
    {
      image:
        "https://img.icons8.com/ios-filled/50/dc143c/robot-2.png",
      title: "Robotics Process Automation",
      text: "RPA permits mechanize tasks across applications and systems",
    },
    {
      image:
        "https://img.icons8.com/ios-filled/50/dc143c/nuke.png",
      title: "DevOps As A Service",
      text: "Tools that increases businesses ability to deliver services at high speed",
    },
    {
      image:
        "https://img.icons8.com/ios-filled/50/dc143c/web.png",
      title: "Web & App Development",
      text: "We script front end & back end portions of an web & app development",
    },
    {
      image:
        "https://img.icons8.com/ios-filled/50/dc143c/b2b.png",
      title: "Digital Marketing",
      text: "We'll ensure your site is on the top with the ideal marketing tactics",
    },

  ];

  const renderCard = (card, index) => {
    return (
      <div className='card-set'>
        <Card key={index} className="mycard">
          <div className="setimg">  <Card.Img variant="top" src="holder.js/100px180" src={card.image} className='cardimg' /></div>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return <div className="card-d">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;