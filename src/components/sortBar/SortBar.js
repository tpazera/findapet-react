import React, { Component } from 'react';
import "./sortBar.scss"
import { Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from "react-redux";
import { addFilters } from "../../modules/store/actions/filters";

class SortBar extends Component {

    state = {
        colors: [],
        status: [],
        types: [],
        activeColor: 'all',
        activeType: 'all',
        activeStatus: 'all',
    }

    componentDidMount() {
        axios.get(`https://find-pet-app.herokuapp.com/rest/announcement/colors`, {port: 8080})
            .then(res => {
                const colors = res.data;
                this.setState({ colors });
            })
        axios.get(`https://find-pet-app.herokuapp.com/rest/announcement/status`)
            .then(res => {
                const status = res.data;
                this.setState({ status });
            })
        axios.get(`https://find-pet-app.herokuapp.com/rest/announcement/types`)
            .then(res => {
                const types = res.data;
                this.setState({ types });
            })
    }

    change(select, e) {
        switch (select) {
            case 'color':
                this.setState({activeColor: e.target.value});
                this.props.addFilters(e.target.value, this.state.activeType, this.state.activeStatus);
                return;
            case 'type':
                this.setState({activeType: e.target.value});
                this.props.addFilters(this.state.activeColor, e.target.value, this.state.activeStatus);
                return;
            case 'status':
                this.setState({activeStatus: e.target.value});
                this.props.addFilters(this.state.activeColor, this.state.activeType, e.target.value);
                return;
            default:
                return;
        }
    }

    render() {

        return (
            <div>
                <Form.Row>
                    <Form.Group as={Col} controlId="selectColor">
                    <Form.Label>Kolor</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.change('color', e)} value={this.state.value}>
                        <option value='all' key='allcolors'>wszystkie</option>
                        {this.state.colors.map((item,i) => (
                            <option value={item} key={item + i}>{item}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="selectType">
                    <Form.Label>Typ</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.change('type', e)} value={this.state.value}>
                        <option value='all' key='alltypes'>wszystkie</option>
                        {this.state.types.map((item,i) => (
                            <option value={item} key={item + i}>{item}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>                    
                    
                    <Form.Group as={Col} controlId="selectStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.change('status', e)} value={this.state.value}>
                        <option value='all' key='allstatuses'>wszystkie</option>
                        {this.state.status.map((item,i) => (
                            <option value={item} key={item + i}>{item}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>

                </Form.Row>
                {/* <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                    <Button variant="primary" type="submit">
                        Sortuj
                    </Button>
                    </Form.Group>

                </Form.Row> */}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
        addFilters: (color, type, status) =>
        dispatch(addFilters(color, type, status))
    });
  
export default connect(
    null,
    mapDispatchToProps
)(SortBar);
  
// export default PetInfo;
