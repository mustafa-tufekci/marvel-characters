import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Col, Image, ListGroup } from "react-bootstrap";

const CardDetail = ({ id }) => {
  const publicApiKey = process.env.REACT_APP_PUBLIC_API_KEY;
  const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${publicApiKey}&hash=116b4552e8cd7f038bc9a7b31e114695`;
  const [character, setCharacter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setCharacter(response.data.data.results[0]);
    };
    fetchData();
  }, [url]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {!character ? (
        ""
      ) : (
        <Row>
          <Col md={6}>
            <Image
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              fluid
            />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{character.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                {character.description
                  ? character.description
                  : "No description provided"}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CardDetail;
