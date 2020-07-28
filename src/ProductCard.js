import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./ProductCard.css";

export default function ProductCard(){
    return(
        <div>
            <CardGroup>

<Card>
<Card.Title className="title">Card title</Card.Title>
  <Card.Img variant="top" src="https://www.amazon.in/images/G/31/img20/GW-BasicsForMenWomen/1_1X._SY116_CB430251838_.jpg" />
  <Card.Img variant="top" src="https://www.amazon.in/images/G/31/img20/GW-BasicsForMenWomen/1_1X._SY116_CB430251838_.jpg" />

</Card>
<Card>
<Card.Title className="title"></Card.Title>
  <Card.Img variant="top" src="https://www.amazon.in/images/G/31/img20/GW-BasicsForMenWomen/1_1X._SY116_CB430251838_.jpg" />
  <Card.Img variant="top" src="https://www.amazon.in/images/G/31/img20/GW-BasicsForMenWomen/1_1X._SY116_CB430251838_.jpg" />

</Card>
<Card>
 
</Card>
</CardGroup>
        </div>
        

    )
}