import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import Notification from "../../components/notification/Notification"
class NodePage extends Component {
    render() {

        return (
            <PageWrapper>
                <SidebarMenu />
                <PageContent>
                    <Notification />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default NodePage;