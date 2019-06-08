import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
import PageContent from "../../components/pageContent/PageContent";
import SmallNodeList from "../../components/smallNodeList/SmallNodeList";
import ContentHeader from "../../components/contentHeader/ContentHeader";
import Axios from "axios";

class ReportedPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: "",
            value: true
        }
        this.handler = this.handler.bind(this);
    }

    handler() {
        Axios.get("https://find-pet-app.herokuapp.com/rest/announcement/all?active=false")
            .then(response => {
                const newlist = response.data;
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
        Axios.get("https://find-pet-app.herokuapp.com/rest/announcement/all?active=false")
            .then(response => {
                const newlist = response.data;
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
                    <ContentHeader>Zgłoszone ogłoszenia</ContentHeader>
                    <SmallNodeList handler={this.handler} list={this.state.list} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default ReportedPage;