import React, { Fragment, useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.search(search);
    setSearch("");
  };

  return (
    <Fragment>
      <Form onSubmit={submitHandler}>
        <Row className="justify-content-center mt-3 mb-4">
          <Col md={3}></Col>
          <Col md={6}>
            <Form.Control
              placeholder="Hero Name"
              aria-label="Hero Name"
              aria-describedby="basic-addon2"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Col>

          <Col md={3}>
            <Button variant="outline-danger" id="button-addon2" onClick={submitHandler}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default SearchBar;
