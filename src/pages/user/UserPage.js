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
        list: ""
    };
    

    componentDidMount() {
        let id = this.props.match.params.id
        Axios.get("https://find-pet-app.herokuapp.com/rest/announcement/all")
            .then(response => {
                const newlist = response.data.filter(
                    // item => item.userId === 1
                    item => item.userId == id
                )
                console.log(response.data);
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
                    <div id="userPage">
                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
                        <h1>Tomek Pazera</h1>
                        <p><strong>Telefon: </strong>812 823 123</p>
                        <p><strong>Email: </strong>tomasz.pazera96@gmail.com</p>
                        <p>Curabitur ullamcorper ultricies nisi. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.</p>
                    </div>
                        
                    <SmallNodeList list={this.state.list} />
                </PageContent>
            </PageWrapper>
        );
    }
}

export default UserPage;