import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './errorPage.scss';
library.add(faExclamationTriangle);

class ErrorPage extends Component {
    render() {
        return (
            <PageWrapper>
                <SidebarMenu />
                <PageContent>
                    <FontAwesomeIcon icon="exclamation-triangle" />
                    <h1>Strona nie została odnaleziona :(</h1>
                </PageContent>
            </PageWrapper>
        );
    }
}

export default ErrorPage;