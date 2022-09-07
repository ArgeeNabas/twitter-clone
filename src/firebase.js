import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyAQ4cEeukTbG7coSeoIJj6fI4CH5j4fnP0",
	authDomain: "twitter-clone-75862.firebaseapp.com",
	projectId: "twitter-clone-75862",
	storageBucket: "twitter-clone-75862.appspot.com",
	messagingSenderId: "670326786013",
	appId: "1:670326786013:web:daf503adfdea719c9e5834"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;