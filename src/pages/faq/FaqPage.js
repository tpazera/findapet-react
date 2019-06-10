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
                    <div className="container">
                        <div className="col-lg-8">
                            <div className="tab-content" id="faq-tab-content">
                                <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="accordion" id="accordion-tab-1">
                                        <div className="card">
                                            <div className="card-header" id="accordion-tab-1-heading-1">
                                                <h5>
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-1" aria-expanded="false" aria-controls="accordion-tab-1-content-1">W jakim celu stworzyliście tą aplikację?</button>
                                                </h5>
                                            </div>
                                            <div className="collapse show" id="accordion-tab-1-content-1" aria-labelledby="accordion-tab-1-heading-1" data-parent="#accordion-tab-1">
                                                <div className="card-body">
                                                    <p>Aplikacja ta ma na celu pomóc właścicielom zwierzaków w poszukiwaniu ich zaginionego pupila. Osoba taka może założyć konto, a 
                                                    następnie utworzyć zgłoszenie o zaginionym zwierzęciu. Jeżeli jakaś osoba zauważy zwierzę pasujące do profilu może odpowiedzieć na to
                                                    zgłoszenie oraz skontaktować się z jego twórca. W ten sposób zwiększona jest szybkość poszukiwań oraz szansa na odnalezienie swojego 
                                                    pupila.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="accordion-tab-1-heading-2">
                                                <h5>
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-2" aria-expanded="false" aria-controls="accordion-tab-1-content-2">Jak wpadliście na ten pomysł?</button>
                                                </h5>
                                            </div>
                                            <div className="collapse show" id="accordion-tab-1-content-2" aria-labelledby="accordion-tab-1-heading-2" data-parent="#accordion-tab-1">
                                                <div className="card-body">
                                                    <p>Pewnego razu jedna z osób tworzących aplikacje miała problem z odnalezieniem swojego pupila. Mimo, ze go odnalazła nie dawało jej 
                                                    spokoju to, ile czasu to trwało oraz to, ze mogła już nigdy swojego pieska nie zobaczyć. Dlatego też wpadła na pomysł tej aplikacji, 
                                                    a następnie skontaktowała się z resztą osób w ten projekt związany i tak oto powstała nasza aplikacja, z której państwo mogą teraz 
                                                    korzystać :)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="accordion-tab-1-heading-3">
                                                <h5>
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-3" aria-expanded="false" aria-controls="accordion-tab-1-content-3">Problemy z kontem/Ukradziono mi konto!</button>
                                                </h5>
                                            </div>
                                            <div className="collapse show" id="accordion-tab-1-content-3" aria-labelledby="accordion-tab-1-heading-3" data-parent="#accordion-tab-1">
                                                <div className="card-body">
                                                    <p>W przypadku jakichkolwiek problemów z kontem lub w sytuacji, w której by się okazało, ze państwa konto zostało skradzione. Należy 
                                                    się niezwłocznie skontaktować z naszym działem obsługi pod mailem:  <strong>pawfinder.support@gmal.com</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="accordion-tab-1-heading-4">
                                                <h5>
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-4" aria-expanded="false" aria-controls="accordion-tab-1-content-4">Jak się można z wami skontaktować?</button>
                                                </h5>
                                            </div>
                                            <div className="collapse show" id="accordion-tab-1-content-4" aria-labelledby="accordion-tab-1-heading-4" data-parent="#accordion-tab-1">
                                                <div className="card-body">
                                                    <p>Kontakt z nami możecie usyskać:</p>                               
                                                    <p>     -telefonicznie: <strong>123-456-789</strong></p>
                                                    <p>     -mail-owo: <strong>pawfinder@gmail.com</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="accordion-tab-1-heading-5">
                                                <h5>
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-5" aria-expanded="false" aria-controls="accordion-tab-1-content-5">Gdzie znajduje się państwa siedziba?</button>
                                                </h5>
                                            </div>
                                            <div className="collapse show" id="accordion-tab-1-content-5" aria-labelledby="accordion-tab-1-heading-5" data-parent="#accordion-tab-1">
                                                <div className="card-body">
                                                    <p>Nasza siedziba znajduję się w Krakowie na ulicy <strong>Warszawskiej 34</strong>.</p>                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                </PageContent>
            </PageWrapper>
        );
    }
}

export default FaqPage;