import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import Notification from "../../components/notification/Notification";
import nodes from '../../resources/data.json';
class NodePage extends Component {
    render() {

        const { match } = this.props;
        const node = nodes.nodeList.find(
            node => node.id === +match.params.id
        );

        return (
            <PageWrapper>
                <SidebarMenu />
                <PageContent>
                    <Notification 
                        id={node.id}
                        title={node.title}
                        photoUrl={node.photoUrl}
                        animalType={node.animalType}
                        status={node.status}
                        color={node.color}
                        desc={node.desc}
                        lat={node.lat}
                        lng={node.lng}
                        userid={node.userid}
                    />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default NodePage;