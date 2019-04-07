import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from "../../components/pageWrapper/PageWrapper";
class NodePage extends Component {
    render() {
        return (
            <PageWrapper>
                <div>Node Page</div>
                <Link to="/error">Error</Link>
                <Link to="/n/3">node page</Link>
                <Link to="/">home</Link>
            </PageWrapper>
        );
    }
}

export default NodePage;