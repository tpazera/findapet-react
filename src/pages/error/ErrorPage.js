import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import FunctionMenu from "../../components/functionMenu/FunctionMenu";
import PageContent from "../../components/pageContent/PageContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './errorPage.scss';
import Sidebar from "../../components/sidebar/Sidebar";
library.add(faExclamationTriangle);

class ErrorPage extends Component {
    render() {
        return (
            <PageWrapper>
                <Sidebar />
                <PageContent>
                    <div id="errorPage">
                        <FontAwesomeIcon icon="exclamation-triangle" />
                        <h1>Strona nie została odnaleziona :(</h1>
                    </div>
                        
                </PageContent>
            </PageWrapper>
        );
    }
}

export default ErrorPage;