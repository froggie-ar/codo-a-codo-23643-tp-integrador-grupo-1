import "./Card.css";
import { Card } from "react-bootstrap";

export const Card = () => {
  return (
    <div>
      <Col sm={4} key={producto.id} className="my-4">
        <Card className="card">
            <Card.Img
                variant="top"
                src={producto.thumbnail}
                style={{
                    margin: '0 auto',
                    maxWidth: '60%',
                    maxHeight: '160px',
                }}
            />
            <Card.Body>
                <Card.Title className="titulo">{producto.title}</Card.Title>
                <Card.Text className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Text className="price mb-5">
                    ${producto.price} ARS
                </Card.Text>
                <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <Button className="btnGo mb-4">Go somewhere</Button>
                </div>
            </Card.Body>
        </Card>
      </Col>
    </div>
  )
}
