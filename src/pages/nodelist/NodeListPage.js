import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import NodeList from "../../components/nodeList/NodeList";
import SortBar from "../../components/sortBar/SortBar"
import nodes from "../../resources/data.json";

class NodeListPage extends Component {
    render() {
        return (
            <PageWrapper>
                <SidebarMenu />
                <PageContent>
                    <SortBar />
                    <NodeList list={nodes.nodeList} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default NodeListPage;