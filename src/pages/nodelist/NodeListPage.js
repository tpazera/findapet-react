import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import NodeList from "../../components/nodeList/NodeList";
import SortBar from "../../components/sortBar/SortBar"
import nodes from "../../resources/data.json";
import axios from "axios";
import { Alert } from "react-bootstrap";

class NodeListPage extends Component {  
    
    state = {
        list: ""
    }

    componentDidMount() {
        axios.get('https://find-pet-app.herokuapp.com/rest/announcement/all')
        .then((response) => {

            console.log(response);
            const list = response.data;
            this.setState({ list });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    render() {


        return (
            <PageWrapper>
                <SidebarMenu />
                <PageContent>
                    <SortBar />
                    <NodeList list={this.state.list} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default NodeListPage;