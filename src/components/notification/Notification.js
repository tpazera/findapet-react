import React, { Component } from "react";
import ContentHeader from "../../components/contentHeader/ContentHeader";
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
import Axios from "axios";
import { Link } from "react-router-dom";
import Alert from "react-s-alert";
import { connect } from "react-redux";
import { goToCoords } from "../../modules/store/actions/coordinate";

class Notification extends Component {

    componentWillReceiveProps(newProps) {
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
    
    constructor(props) {
        super(props);
    
        this.state = {
            node: "",
            photos: [],
            commentsLength: 0,
            comments: [],
            commentOnPage: 3,
            activeCommentPage: 1,
            commentValue: "",
            ref: 'test'
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reportNode = this.reportNode.bind(this);
    }

    componentDidMount() {
        Axios.get('https://find-pet-app.herokuapp.com/rest/announcement/' + this.props.id)
        .then((response) => {
            this.props.goToCoords(response.data.latitude, response.data.longitude);
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
        })
        .catch(function(error) {
          console.log(error);
        });
        Axios.get('https://find-pet-app.herokuapp.com/rest/comment/' + this.props.id + '/amount')
        .then((response) => {
            this.setState({
                commentsLength: response.data
            })
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
            userId: localStorage.getItem("id")
        }, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization":localStorage.getItem('token')
            }
        })
        .then((response) => {
            Alert.success("Dodano komentarz", {
                position: "bottom-left",
                effect: "slide",
                timeout: 3000
            });
        })
        this.getComments(this.state.activeCommentPage);
        event.preventDefault();
    }

    reportNode(e) {
        console.log(this.state.node);
        Axios.post('https://find-pet-app.herokuapp.com/rest/announcement/' + this.state.node.id + '/report', {
            id : this.state.node.id
        }, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization":localStorage.getItem('token')
            }
        })
        .then((response) => {
            Alert.error("Zgłoszono", {
                position: "bottom-left",
                effect: "slide",
                timeout: 3000
            });
        })
        this.getComments(this.state.activeCommentPage);
        e.preventDefault();
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

        let lnk = "/user/" + node.userId;
        let ifowner = false;
        if (localStorage.getItem("id") == node.userId) ifowner = true;
        if (localStorage.getItem("admin")) ifowner = true;
                
        return (
            
            <Container id="notification">
                <Alert show={this.state.showModal}/>
                <Row className="nodeHeader">
                    <ContentHeader>{src !== "" &&
                            <img src={src} alt={type} />
                        }
                        {node.title}
                        </ContentHeader>
                    <Col xs={12} md={12} xl={12} className="nodeTitle">
                        
                    </Col>
                    <Col xs={12} md={12} xl={12} className="nodeButtons">
                        {localStorage.getItem("token") ? (
                            <>
                                <Button onClick={this.reportNode} variant="warning">zgłoś</Button>
                            </>
                        ) : ( <></> )}
                        <Link to={lnk}><Button variant="success">kontakt</Button></Link>
                        {ifowner ? (
                            <>
                                <Button onClick={this.deleteNode} text="Usuń" variant="danger">usuń</Button>
                            </>
                        ) : ( <></> )}
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="nodeInfoList">
                            <li>
                                <strong>Gatunek: </strong>{node.animalType}
                            </li>
                            <li>
                                <strong>Kolor: </strong>{node.petColors}
                            </li>
                            <li>
                                <strong>Status: </strong>{node.status}
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="nodeDescription">
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
                    <div className="card">
                        <div className="card-header">
                            Komentarze
                        </div>
                        <div className="panel-body">
                            {localStorage.getItem("token") ? (
                                <>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows="3" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                        Dodaj komentarz
                                    </Button>
                                    <div className="clearfix"></div>
                                    <hr />
                                </>
                            ) : ( <></> )}
                            <ul className="media-list">
                                {this.state.comments.map((comment, i) => (
                                    <li className="media" key={i}>
                                        <a href="#" className="pull-left">
                                            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
                                        </a>
                                        <div className="media-body">
                                            <Link to={"/user/" + comment.userId}><strong>@{comment.userName}</strong></Link>
                                            <span className="text-muted pull-right">
                                                <small className="text-muted">{comment.date.replace('T', ' ').substring(0, comment.date.lastIndexOf(':'))}</small>
                                            </span>
                                            <p>
                                                {comment.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {paginationBasic}
                        </div>
                    </div>
                </Row>

            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    goToCoords: (latitude, longitude) =>
        dispatch(goToCoords(latitude, longitude))
});

export default connect(
null,
mapDispatchToProps,
)(Notification);