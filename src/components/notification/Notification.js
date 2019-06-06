import React, { Component } from "react";
import Btn from "../../components/btn/Btn";
import "./notification.scss";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Pagination
} from "react-bootstrap";
import comments from "../../resources/comments.json";
import Axios from "axios";

class Notification extends Component {
  state = {
    node: "",
    photos: []
  };

    componentWillReceiveProps(newProps) {
        if (newProps.id !== this.props.id) {
        Axios.get(
            "https://find-pet-app.herokuapp.com/rest/announcement/" + this.props.id
        )
            .then(response => {
            this.setState({
                node: response.data,
                photos: response.data.photoURL
            });
        })
        }
    }
    
    constructor(props) {
        super(props);
    
        this.state = {
            node: "",
            photos: [],
            commentsLength: 0,
            comments: [],
            commentOnPage: 3,
            activeCommentPage: 1,
            commentValue: ""
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        Axios.get('https://find-pet-app.herokuapp.com/rest/announcement/' + this.props.id)
        .then((response) => {
            this.setState({
                node: response.data,
                photos: response.data.photoURL,
                commentsLength: response.data.comments.length
            })
        })
        this.getComments(this.state.activeCommentPage);
    }

    getComments(page) {
        Axios.get('https://find-pet-app.herokuapp.com/rest/comment/announcement/' + this.props.id + '?amount=' + this.state.commentOnPage + '&offset=' + (page-1) * this.state.commentOnPage)
        .then((response) => {
            this.setState({
                comments: response.data,
                activeCommentPage: page
            })
            console.log(response.data)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  

    changeCommentPage(e) {
        console.log(e);
        this.getComments(e);
    }

    handleChange(event) {
        this.setState({commentValue: event.target.value});
        // console.log(event.target.value);
    }
    
    handleSubmit(event) {
        Axios.post('https://find-pet-app.herokuapp.com/rest/comment/', {
            announcementId : this.props.id,
            description: this.state.commentValue,
            userId: 134
        }, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b21layIsInNjb3BlcyI6WyJVU0VSIl0sImV4cCI6MTU1OTg1MzMxM30.svAwT0n7VkVQDjkdU1mMao1eyCB_qNzI3C6TrZg3TO4p2jCURCLwnAxCxpB20Z4NYLe4iprsEcOBfpscMYCjAQ"
            }
        })
        .then((response) => {
            console.log(response);
        })
        this.getComments(this.state.activeCommentPage);
        event.preventDefault();
    }

    render() {
        const node = this.state.node;


        let items = [];
        for (let number = 1; number <= Math.ceil(this.state.commentsLength/this.state.commentOnPage); number++) {
            items.push(
                <Pagination.Item className={number} key={number} active={number === this.state.activeCommentPage} onClick={(e) => this.changeCommentPage(number)}>
                {number}
                </Pagination.Item>,
            );
        }
        
        const paginationBasic = (
            <div className="pagination">
              <Pagination>{items}</Pagination>
            </div>
        );

        let type = node.animalType;
        let src;
        if(type === "pies") src = "/images/dog.svg";
        else if(type === "kot") src = "/images/cat.svg";
        else if(type === "mysz") src = "/images/mouse.svg";
        else if(type === "papuga") src = "/images/parrot.svg";
        else if(type === "królik") src = "/images/bunny.svg";
        else src= "";
                
        return (
            
            <Container>
                <Row className="nodeHeader">
                    <Col xs={12} md={6} xl={12} className="nodeTitle">
                        {src !== "" &&
                            <img src={src} alt={type} />
                        }
                        <h1>{node.title}</h1>
                    </Col>
                    <Col xs={12} md={6} xl={12} className="nodeButtons">
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
                                {node.petColors}
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
                            {node.description}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="gallery">
                        {
                            this.state.photos.length > 0 && 
                            this.state.photos.map((img, i) => { 
                                return (
                                <img key={i} src={img} alt=""/>                     
                            )})
                        }
                    </Col>
                </Row>
                <Row>
                    <Col className="comments">
                        {this.state.comments.map((comment) => (
                            <Card key={comment.id}>
                                <Card.Header>{comment.userId}</Card.Header>
                                <Card.Body>{comment.description}</Card.Body>
                            </Card>
                        ))}
                        {paginationBasic}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Dodaj komentarz
                        </Button>

                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Notification;
