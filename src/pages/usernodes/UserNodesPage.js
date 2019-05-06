import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import NodeList from "../../components/nodeList/NodeList";
import SortBar from "../../components/sortBar/SortBar"
import nodes from "../../resources/data.json";

class UserNodesPage extends Component {
    render() {

        let list = nodes.nodeList.filter(
            item => item.userid === 1
        ); 

        return (
            <PageWrapper>
                {console.log(list)}
                <SidebarMenu />
                <PageContent>
                    <NodeList list={list} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default UserNodesPage;