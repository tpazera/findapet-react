import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
import PageContent from "../../components/pageContent/PageContent";
import SmallNodeList from "../../components/smallNodeList/SmallNodeList";
import ContentHeader from "../../components/contentHeader/ContentHeader";
import Axios from "axios";

class UserNodesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: "",
            value: true
        }
        this.handler = this.handler.bind(this);
    }

    handler() {
        let id;
        Axios.get("https://find-pet-app.herokuapp.com/rest/announcement/all")
            .then(response => {

                id = parseInt(localStorage.getItem('id'));
                const newlist = response.data.filter(
                    item => item.userId === id
                )
                this.setState(prevState => (
                    {
                        list: newlist,
                        value: !prevState.value
                    }
                ))
            })
            .catch(function(error) {
            });
    }
    
    
    componentDidMount() {
        let id;
        Axios.get("https://find-pet-app.herokuapp.com/rest/announcement/all")
            .then(response => {
                id = parseInt(localStorage.getItem('id'));
                const newlist = response.data.filter(
                    item => item.userId === id
                )
                console.log(newlist);
                this.setState(prevState => (
                    {
                        list: newlist,
                        value: !prevState.value
                    }
                ))  
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
                    <SmallNodeList handler={this.handler} list={this.state.list} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default UserNodesPage;