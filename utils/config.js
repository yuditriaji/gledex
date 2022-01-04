const admin = require('firebase-admin');
var serviceAccount = require("./serAcc.json");

const serviceConfig = {
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gledex-d4404.appspot.com"
  };
  

module.exports = {serviceConfig};