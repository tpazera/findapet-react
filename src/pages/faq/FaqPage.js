import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
import PageContent from "../../components/pageContent/PageContent";
import ContentHeader from "../../components/contentHeader/ContentHeader";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import { Accordion, Card } from 'react-bootstrap/'
import './faqPage.scss';

class FaqPage extends Component {
    render() {
        return (
            <PageWrapper>
                <Sidebar />
                <PageContent>
                    <ContentHeader>FAQ</ContentHeader>
                    <Accordion id="faqList" defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            W jakim celu stworzyliście tą aplikację?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><p>Aplikacja ta ma na celu pomóc właścicielom zwierzaków w poszukiwaniu ich zaginionego pupila. Osoba taka może założyć konto, a 
                                                    następnie utworzyć zgłoszenie o zaginionym zwierzęciu. Jeżeli jakaś osoba zauważy zwierzę pasujące do profilu może odpowiedzieć na to
                                                    zgłoszenie oraz skontaktować się z jego twórca. W ten sposób zwiększona jest szybkość poszukiwań oraz szansa na odnalezienie swojego 
                                                    pupila.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Jak wpadliście na ten pomysł?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body><p>Pewnego razu jedna z osób tworzących aplikacje miała problem z odnalezieniem swojego pupila. Mimo, ze go odnalazła nie dawało jej 
                                                    spokoju to, ile czasu to trwało oraz to, ze mogła już nigdy swojego pieska nie zobaczyć. Dlatego też wpadła na pomysł tej aplikacji, 
                                                    a następnie skontaktowała się z resztą osób w ten projekt związany i tak oto powstała nasza aplikacja, z której państwo mogą teraz 
                                                    korzystać :)</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                            Problemy z kontem/Ukradziono mi konto!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body><p>W przypadku jakichkolwiek problemów z kontem lub w sytuacji, w której by się okazało, ze państwa konto zostało skradzione. Należy 
                                                    się niezwłocznie skontaktować z naszym działem obsługi pod mailem:  <strong>pawfinder.support@gmal.com</strong></p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            Jak się można z wami skontaktować?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body><p>Kontakt z nami możecie usyskać:</p>
                                        <ul>
                                            <li>
                                            tel:: <strong>123-456-789</strong>
                                            </li>
                                            <li>
                                            email: <strong>pawfinder@gmail.com</strong>
                                            </li>
                                        </ul>                             
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                            Gdzie znajduje się państwa siedziba?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body><p>Nasza siedziba znajduję się w Krakowie na ulicy <strong>Warszawskiej 34</strong>.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </PageContent>
            </PageWrapper>
        );
    }
}

export default FaqPage;