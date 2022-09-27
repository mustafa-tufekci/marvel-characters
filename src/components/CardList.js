import React from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const CardList = ({ heroes, loading }) => {
  const navigate = useNavigate();

  return (
    <Row md={4} xs={1}>
      {!loading ? (
        heroes.map((item) => (
          <Col className="mb-3" key={item.id}>
            <Card className="h-100" onClick={() => navigate(`/${item.id}`)}>
              <Card.Img
                className="h-100"
                variant="top"
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt="deneme"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Loading />
      )}
    </Row>
  );
};

export default CardList;
