import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import Notification from "../../components/notification/Notification";
import Axios from "axios";
class NodePage extends Component {

    render() {

        const { match } = this.props;


        return (
            <PageWrapper>
                <SidebarMenu />
                <PageContent>
                    <Notification 
                        id={match.params.id}
                    />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default NodePage;