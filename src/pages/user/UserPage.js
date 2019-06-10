import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import FunctionMenu from "../../components/functionMenu/FunctionMenu";
import PageContent from "../../components/pageContent/PageContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './userPage.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Axios from "axios";
import SmallNodeList from "../../components/smallNodeList/SmallNodeList";
library.add(faExclamationTriangle);

class UserPage extends Component {
    
    state = {
        list: "",
        nick: "Tomek Pazera",
        phone: "810 823 823",
        email: "tomasz.pazera96@gmail.com",
        desc: "Curabitur ullamcorper ultricies nisi. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc."
    };

    handler() {
        let id = this.props.match.params.id
        Axios.get("https://find-pet-app.herokuapp.com/rest/announcement/all")
            .then(response => {
                const newlist = response.data.filter(
                    item => item.userId == id
                )
                Axios.get("https://find-pet-app.herokuapp.com/rest/user/" + id)
                    .then(res => {
                        this.setState({ 
                            list : newlist,
                            nick : res.data.nick,
                            phone : res.data.phone,
                            email : res.data.email,
                            desc : res.data.desc,
                        });
                    })
                    .catch(function(error) {
                    });
            })
            .catch(function(error) {
            });
    }
    

    componentDidMount() {
        let id = this.props.match.params.id
        Axios.get("https://find-pet-app.herokuapp.com/rest/announcement/all")
            .then(response => {
                const newlist = response.data.filter(
                    item => item.userId == id
                )
                Axios.get("https://find-pet-app.herokuapp.com/rest/user/" + id)
                    .then(res => {
                        this.setState({ 
                            list : newlist,
                            nick : res.data.nick,
                            phone : res.data.phone,
                            email : res.data.email,
                            desc : res.data.desc,
                        });
                    })
                    .catch(function(error) {
                    });
            })
            .catch(function(error) {
            });
    }

    
    render() {
        return (
            <PageWrapper>
                <Sidebar />
                <PageContent>
                    <div id="userPage">
                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
                        <h1>{this.state.nick}</h1>
                        { this.state.phone != null ? (
                            <p><strong>Telefon: </strong>{this.state.phone}</p>
                        ) : (<></>)}
                        <p><strong>Email: </strong>{this.state.email}</p>
                        { this.state.desc != null ? (
                            <p>{this.state.desc}</p>
                        ) : (<></>)}
                        
                    </div>
                        
                    <SmallNodeList handler={this.handler}  list={this.state.list} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default UserPage;