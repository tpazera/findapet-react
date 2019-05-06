import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Btn from "../../components/btn/Btn";
import Comment from "../../components/comment/Comment";
import NotificationHeader from "../../components/notificationHeader/NotificationHeader";
import PetInfo from "../../components/petInfo/PetInfo";
import PageContent from "../../components/pageContent/PageContent";
import './notification.scss';
import { Container, Row, Col } from "react-bootstrap";
import nodes from "../../resources/data.json";

class Notification extends Component {
    render() {

        const node = this.props;
        
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
            </Container>
            // <div id="notif0" classname="notif">
            //     <NotificationHeader text="Zgloszenie nr: 1234" fontSize={fontSize0} color={color0} />
            //     <br />
            //     <br />
            //     <NotificationHeader text="Zgubił mi się kotek w okolicach Bochnii!" fontSize={fontSize1} color={color1} />
            //     <br />
            //     <br />
            //     <div id="btngroup0" className="btngroup">
            //         <Btn text="Powrót" id="btn1" className="btn11"/>
            //         <span>      </span>
            //         <Btn text="Dane Kontaktowe" id="btn2" className="btn22"/>
            //         <span>      </span>
            //         <Btn text="cos ..." id="btn3" className="btn33"/>
            //     </div>
            //     <br />
            //     <br />
            //     <NotificationHeader text="Opis Zgłoszenia: " fontSize={fontSize2} color={color0} />
            //     <br />
            //     <br />
            //     <PetInfo text="Wódka – wysokoprocentowy napój alkoholowy uzyskiwany przez zmieszanie w odpowiednich proporcjach 
            //     spirytusu rektyfikowanego z wodą. Może mieć charakter czysty, bez dodatków, lub smakowy. Zawartość alkoholu etylowego 
            //     w wódce wynosi nie mniej niż 37,5% obj., zwykle 40% obj. Surowcami do produkcji wódek są produkty pochodzenia rolniczego, 
            //     tradycyjnie zboża lub ziemniaki. Do etapów produkcji wódki należy na ogół oczyszczenie surowców, parowanie mające na celu 
            //     upłynnienie skrobi zawartej w surowcach, zacieranie, czyli rozkład skrobi do cukrów, fermentacja cukrów przeprowadzana 
            //     przez drożdże, destylacja, rektyfikacja, mieszanie powstałego spirytusu z wodą, filtracja i rozlew." 
            //     image="http://savings.gov.pk/wp-content/plugins/ldd-directory-lite/public/images/noimage.png"/>
            //     <br />
            //     <NotificationHeader text="Komentarze: " fontSize={fontSize2} color={color0} />
            //     <br />
            //     <br />
            //     <Comment text="Ale ładny <3" who="Asia3212" whocolor={color0} color={color1} fontSizeWho={15} id="comm1" />
            //     <br />
            //     <br />
            //     <Comment text="Mam nadzieję, ze go znajdziesz" who="Andrzej583" whocolor={color0} color={color1}  fontSizeWho={15} id="comm2" />
            //     <br />
            //     <br />
            //     <Comment text="Widziałem go dzisiaj rano na brzozowej" who="Pani Krystyna" whocolor={color0} color={color1}  fontSizeWho={15} id="comm3" />
            //     <br />
            //     <br />
            // </div>
        );
    }
}

export default Notification;