import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Btn from "../../components/btn/Btn";
import Comment from "../../components/comment/Comment";
import NotificationHeader from "../../components/notificationHeader/NotificationHeader";
import PetInfo from "../../components/petInfo/PetInfo";
import PageContent from "../../components/pageContent/PageContent";
import './notification.scss';
import { Container, Row, Col, Card, Form, Button, Pagination } from "react-bootstrap";
import comments from "../../resources/comments.json";

class Notification extends Component {
    render() {

        const node = this.props;

        const commentsList = comments.comments;

        let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                {number}
                </Pagination.Item>,
            );
        }

        const paginationBasic = (
            <div class="pagination">
              <Pagination>{items}</Pagination>
            </div>
        );
                
        return (

            

            <Container>
                <Row className="nodeHeader">
                    <Col xs={12} md={4} xl={12} className="nodeTitle">
                        <h1>{node.title}</h1>
                    </Col>
                    <Col xs={12} md={8} xl={12} className="nodeButtons">
                        <Btn text="zgłoś" variant="danger" />
                        <Btn text="kontakt" variant="success" />
                        <Btn text="..." variant="primary" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="nodeInfoList">
                            <li>
                                {node.animalType}
                            </li>
                            <li>
                                {node.color}
                            </li>
                            <li>
                                {node.status}
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            {node.desc}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="gallery">
                        {node.photoUrl.length > 0 && 
                            node.photoUrl.map((image, i) => (
                                <img src={node.photoUrl[i]} alt=""/>                     
                            ))
                        }
                    </Col>
                </Row>
                <Row>
                    <Col className="comments">
                        {commentsList.map((comment) => (
                            <Card key={comment.id}>
                                <Card.Header>{comment.user}</Card.Header>
                                <Card.Body>{comment.text}</Card.Body>
                            </Card>
                        ))}
                        {paginationBasic}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Dodaj komentarz
                        </Button>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Notification;