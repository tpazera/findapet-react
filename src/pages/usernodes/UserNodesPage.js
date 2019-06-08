import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
import PageContent from "../../components/pageContent/PageContent";
import SmallNodeList from "../../components/smallNodeList/SmallNodeList";
import ContentHeader from "../../components/contentHeader/ContentHeader";
import Axios from "axios";

class UserNodesPage extends Component {

    state = {
        list: ""
    };
    
    componentDidMount() {
        Axios.get("https://find-pet-app.herokuapp.com/rest/announcement/all")
            .then(response => {
                const newlist = response.data.filter(
                    // item => item.userId === 1
                    item => item.userId === localStorage.getItem('id')
                )
                this.setState({ list : newlist });
            })
            .catch(function(error) {
            });
    }

    render() {
 

        return (
            <PageWrapper>
                <Sidebar />
                <PageContent>
                    <ContentHeader>Twoje ogłoszenia</ContentHeader>
                    <SmallNodeList list={this.state.list} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default UserNodesPage;