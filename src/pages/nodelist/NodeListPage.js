import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import NodeList from "../../components/nodeList/NodeList";
import nodes from "../../resources/data.json";

class NodeListPage extends Component {
    render() {
        return (
            <PageWrapper>
                <SidebarMenu />
                <PageContent>
                    <NodeList list={nodes.nodeList} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default NodeListPage;