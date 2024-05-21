import React from "react";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <>
      <Card border="primary" className="w-[18rem]  text-black text-center">
        <Card.Header>User</Card.Header>
        <Card.Body>
          <Card.Title>Total Member</Card.Title>
          <Card.Text className="text-5xl ">10</Card.Text>
        </Card.Body>
      </Card>
      <Card
        border="primary"
        className="w-[18rem] bg-gray-400   text-white text-center"
      >
        <Card.Header>User</Card.Header>
        <Card.Body>
          <Card.Title>Active Member</Card.Title>
          <Card.Text className="text-5xl ">8</Card.Text>
        </Card.Body>
      </Card>
      <Card
        border="primary"
        className="w-[18rem] bg-[#db133b] text-white text-center"
      >
        <Card.Header>Fee</Card.Header>
        <Card.Body>
          <Card.Title>Fee Pending</Card.Title>
          <Card.Text className="text-5xl ">2</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
