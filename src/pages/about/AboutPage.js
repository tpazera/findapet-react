import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
import PageContent from "../../components/pageContent/PageContent";
import Logo from "../../components/logo/Logo";
import ContentHeader from "../../components/contentHeader/ContentHeader";
import './aboutPage.scss';

class AboutPage extends Component {
    render() {
        return (
            <PageWrapper>
                <Sidebar />
                <PageContent>
                    <ContentHeader>O nas</ContentHeader>
                    <Logo id="logo"></Logo>
                    <div id="aboutContent">
                    <strong><p>PAWFINDER jest to aplikacja stworzona z myślą o posiadaczach róznego rodzaju zwierząt. Ma ona na celu umożliwienie właścicielowi na utworzenie zgłoszenia
                    o zaginięciu ich ukochanego pupila. Każda osoba, która zobaczy zwierzę bezpańsko poruszające się po okolicy jest wstanie w naszej aplikacji to zgłosić. Jezeli 
                    zwierzę to będzie pasowało do opisu podanego w czyimś zgłoszeniu może o tym poinformować twórcę tego zgłoszenia, a następnie się z nim skontaktować, aby pomóc mu
                    w odnalezieniu ukochanego zwierzęcia. Mamy nadzieję, ze nasza aplikacja pomoże jak największej ilości osób oraz także i tobie w odnalezieniu swojego zagionego 
                    zwierzaka!</p></strong>
                    </div>
                </PageContent>
            </PageWrapper>
        );
    }
}

export default AboutPage;
