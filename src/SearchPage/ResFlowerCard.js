import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import {Link} from 'react-router-dom';

export default function ResFlowerCard({image, name, dsc, price}) {
    return (
        <div className = "m-3">
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title className = "d-flex justify-content-center">{name}</Card.Title>
                    <Card.Text className = "d-flex justify-content-center">
                        Price: {price}
                    </Card.Text>
                    <Link to = "/reactFlowerShop/details" className = "text-decoration-none" state = {{cardImg:image, cardName:name, cardDsc:dsc, cardPrice:price}}>
                        <Button className = "d-block m-auto" variant="light">View this flower</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}