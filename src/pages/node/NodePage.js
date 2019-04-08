import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
class NodePage extends Component {
    render() {
        return (
            <PageWrapper>
                <SidebarMenu />
            </PageWrapper>
        );
    }
}

export default NodePage;