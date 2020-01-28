import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAukoRzZF-dKYAKiHQRdtS1kxzn_sktugY",
    authDomain: "plakaten-fc6b1.firebaseapp.com",
    databaseURL: "https://plakaten-fc6b1.firebaseio.com",
    projectId: "plakaten-fc6b1",
    storageBucket: "plakaten-fc6b1.appspot.com",
    messagingSenderId: "929540516102",
    appId: "1:929540516102:web:3769ec22d13dce51ba1687",
    measurementId: "G-VPYLDSM013"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

// firebase.analytics();

export {
    storage, firebase as default
};
