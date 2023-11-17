import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './App.css';

const prices = {
  free: "$0/month",
  plus: "$9/month",
  pro: "$49/month",
};

const btnContent = [
  ["✔Single Users", "✔50GB Storage", "✔Unlimited Public Projects",
  "✔Community Access", "X Unlimited Private Projects", "X Dedicated Phone Support",
  "X Free Subdomain", "X Monthly Status Reports"],
  ["✔5 Users", "✔50GB Storage", "✔Unlimited Public Projects",
  "✔Community Access", "✔ Unlimited Private Projects", "✔ Dedicated Phone Support",
  "✔ Free Subdomain", "X Monthly Status Reports"],
  ["✔Unlimited Users", "✔50GB Storage", "✔Unlimited Public Projects",
  "✔Community Access", "✔ Unlimited Private Projects", "✔ Dedicated Phone Support",
  "✔ Free Subdomain", "✔ Monthly Status Reports"]
];


const cardsData = [
  { title: 'Free', price: prices.free, content: btnContent[0] },
  { title: 'Plus', price: prices.plus, content: btnContent[1] },
  { title: 'Pro', price: prices.pro, content: btnContent[2] },
];

function App() {
  return (
    <>
      <div className='container'>
        <div className='row'>
        {cardsData.map((card, index) => (
        <Card key={index} className='p-1 col-3 m-2' style={{ width: '18rem',borderRadius:'20px' }}>
          <Card.Text>{card.title}</Card.Text>
          <Card.Title>{card.price}</Card.Title>
          <hr />
          <Card.Body>
          <Card.Text style={{ textAlign:'left' }}>
              {card.content.map((content, i) => (
                <div key={i}>{` ${content}`}</div>
              ))}
            </Card.Text>
            <Button className='primary'>Button</Button>
          </Card.Body>
        </Card>
      ))}
        </div>
      </div>
    </>
  );
}

export default App;
