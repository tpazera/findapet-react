import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./addAnnouncementForm.scss";
import { FormErrors } from "../../formErrors/FormError";


class AddAnnouncementForm extends Component {
  state = {
    colors: [],
    statuses: [],
    types: [],
    type: "",
    desc: "",
    latitude: 0,
    longtitude: 0,
    color: "",
    images: "",
    status: "",
    title: "",
    typeValid: true,
    descValid: true,
    latitudeValid: true,
    longitudeValid: true,
    colorValid: true,
    titleValid: false,
    imagesValid: false,
    statusValid: true,
    formValid: false,
    formErrors: {type: '', desc: '', latitude: '', longitude: '', color: '', images: '', status: '', title: ''},
  };

  componentWillReceiveProps(newProps) {
    if (newProps.coords.lat && newProps.coords.lng) {
      this.setState({
        latitude: newProps.coords.lat,
        longtitude: newProps.coords.lng
      })
      document.querySelector(".latvalue").innerHTML = this.state.latitude;
      document.querySelector(".lngvalue").innerHTML = this.state.longtitude;
    }
  }


  onFormSubmit = () => {

    if (this.state.formValid) {
      let photos = this.state.images.split('\n');
      axios.post('https://find-pet-app.herokuapp.com/rest/announcement', {
        active: true,
        animalType: this.state.type,
        category: "string",
        comments: [],
        description: this.state.desc,
        id: 0,
        latitude: this.state.latitude,
        localDateTime: "2019-06-07T15:23:56.552Z",
        longitude: this.state.longtitude,
        petColors: [
          this.state.color
        ],
        photoURL: photos,
        status: this.state.status,
        title: this.state.title,
        userId: localStorage.getItem('id')
      }, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization":localStorage.getItem('token')
        }
      })
      .then((response) => {
        Alert.success("Dodano ogłoszenie", {
          position: "bottom-left",
          effect: "slide",
          timeout: 1500
        });
        setTimeout(function() {
          window.location.reload();
        }, 1500)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    
  };

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let typeValid = this.state.typeValid;
    let descValid = this.state.descValid;
    let latitudeValid = this.state.latitudeValid;
    let longitudeValid = this.state.longitudeValid;
    let colorValid = this.state.colorValid;
    let titleValid = this.state.titleValid;
    let imagesValid = this.state.imagesValid;
    let statusValid = this.state.statusValid;
  
    switch(fieldName) {
      case 'images':
        if (images == "") {
          fieldValidationErrors.images = 'Conajmniej jedno zdjęcie!';
          imagesValid = false;
          break;
        }
        let tmp = true;
        let images = value.split('\n');
        for (var i = 0; i < images.length; i++) {
          if(!images[i].match(/\.(jpeg|jpg|gif|png)$/)) {
            fieldValidationErrors.images = 'Błędna wartość. Jeden link na linijkę! Rozszerzenie: jpeg, jpg, gif, png';
            imagesValid = false;
            tmp = false;
            break;
          }
        }
        if (tmp == false) break;
        if(images.length > 5) {
          fieldValidationErrors.images = 'Maksymalnie 5 zdjęć!';
          imagesValid = false;
          break;
        }
        imagesValid = true;
        fieldValidationErrors.images = '';
        break;
      case 'title':
        if(value.length >= 30) {
          fieldValidationErrors.title = 'Tytuł jest za długi';
          titleValid = false;
          break;
        } else if (value.length <= 3) {
          fieldValidationErrors.title = 'Tytuł jest za krótki';
          titleValid = false;
          break;
        } else if (!value.match(/^([a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 _-]+)$/)) {
          fieldValidationErrors.title = 'Tytuł może składać się tylko z liter, \'_\', \'-\' i cyfr';
          titleValid = false;
            break;
          }
          titleValid = true;
        fieldValidationErrors.title = '';
        break;
      case 'desc':
          if (value.length >= 500) {
            fieldValidationErrors.desc = 'Max 500 znaków';
            descValid = false;
            break;
          }
          descValid = true;
          fieldValidationErrors.desc = "";
          break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    typeValid: typeValid,
                    descValid: descValid,
                    latitudeValid: latitudeValid,
                    longitudeValid: longitudeValid,
                    colorValid: colorValid,
                    titleValid: titleValid,
                    imagesValid: imagesValid,
                    statusValid: statusValid,
                  }, this.validateForm);
  }

  componentDidMount() {
    axios.get(`https://find-pet-app.herokuapp.com/rest/announcement/colors`, {port: 8080})
        .then(res => {
            const colors = res.data;
            this.setState({ colors });
            this.setState({ color: res.data[0]});
        })
    axios.get(`https://find-pet-app.herokuapp.com/rest/announcement/status`)
        .then(res => {
            const statuses = res.data;
            this.setState({ statuses });
            this.setState({ status: res.data[0]});
        })
    axios.get(`https://find-pet-app.herokuapp.com/rest/announcement/types`)
        .then(res => {
            const types = res.data;
            this.setState({ types });
            this.setState({ type: res.data[0]});
        })
  }  

  validateForm() {
    this.setState({formValid: this.state.typeValid && this.state.descValid && this.state.latitudeValid && this.state.longitudeValid && this.state.colorValid && this.state.statusValid && this.state.imagesValid && this.state.titleValid});
  }

  render() {
    return (
      <div id="notificationForm">
        <Alert />
        <Form.Group controlId="formtype">
          <Form.Label>Tytuł*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Podaj tytuł ogłoszenia"
            name="title"
            value={this.state.title}
            onChange={(event) => this.handleUserInput(event)}
          />
        </Form.Group>
        <Form.Group controlId="selectColor">
        <Form.Label>Kolor</Form.Label>
        <Form.Control as="select" name="color" value={this.state.value}
            onChange={(event) => this.handleUserInput(event)}>
            {this.state.colors.map((item,i) => (
                <option value={item} key={item + i}>{item}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="selectType">
        <Form.Label>Typ</Form.Label>
        <Form.Control as="select" name="type" value={this.state.value}
            onChange={(event) => this.handleUserInput(event)}>
            {this.state.types.map((item,i) => (
                <option value={item} key={item + i}>{item}</option>
            ))}
        </Form.Control>
        </Form.Group>                    
        
        <Form.Group controlId="selectStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control as="select" name="status" value={this.state.value}
            onChange={(event) => this.handleUserInput(event)}>
            {this.state.statuses.map((item,i) => (
                <option value={item} key={item + i}>{item}</option>
            ))}
        </Form.Control>
        </Form.Group> 
        <Form.Group controlId="formcolors">
          <Form.Label>Zdjęcia*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Jeden link na linijkę"
            name="images"
            value={this.state.images}
            onChange={(event) => this.handleUserInput(event)}
          />
        </Form.Group>
        <Form.Group controlId="formlongitude">
          <Form.Label>Lokalizacja</Form.Label>
          <p className="locationInfo">Wciśnij dwukrotnie punkt na mapie</p>
          <p>
            <strong>Lat: </strong> <span className="latvalue">0</span><br></br>
            <strong>Long: </strong> <span className="lngvalue">0</span>
          </p>
        </Form.Group>
        <Form.Group controlId="formdesc">
          <Form.Label>Opis</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Krótki opis. Max 500 znaków."
            value={this.state.desc}
            name="desc"
            onChange={(event) => this.handleUserInput(event)}
          />
        </Form.Group>

        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <Button
          className="float-right"
          variant="primary"
          onClick={this.onFormSubmit}
          disabled={!this.state.formValid}
        >
          Dodaj ogłoszenie
        </Button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  coords: store.coordinates
});

export default connect(mapStateToProps)(AddAnnouncementForm);