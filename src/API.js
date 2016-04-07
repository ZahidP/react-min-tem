import ServerActions from './actions/ServerActions';
import { fetch } from 'whatwg-fetch';
import { get } from 'jquery';

export class API {

  fetchLinks() {
    console.log('API method');
    get('/data/links').done((resp) => {
      ServerActions.receiveLinks(resp);
    });
  }

  fetchPatients() {
    fetch('patients')
    	.then(function(res) {
    		return res.json();
    	}).then(function(json) {
    		console.log(json);
    });
  }

  fetchDoctors() {
    fetch('doctors')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        console.log(json);
    });
  }

  login(loginData) {
    fetch('/login', {
      "username": loginData.username,
      "password": loginData.password
    })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log(json);
    });
  }

  postDocument(formData) {
    fetch('/document', {
      method: 'POST',
      body: formData
    })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log(json);
    });
  }

}


export default API;
