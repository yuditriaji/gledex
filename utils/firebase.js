const firebase = require('firebase');
const config = require('./firebaseConfig');
const storage = require('firebase/storage');

const firebaseConfig = firebase.initializeApp(config.firebaseConfig);

module.exports = {firebaseConfig};