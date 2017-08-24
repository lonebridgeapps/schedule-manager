import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAWOg5f1-LbuwVRrrsG0ieCorsZDJRp2CM",
  authDomain: "schedulemanager-6b9e1.firebaseapp.com",
  databaseURL: "https://schedulemanager-6b9e1.firebaseio.com",
  projectId: "schedulemanager-6b9e1",
  storageBucket: "schedulemanager-6b9e1.appspot.com",
  messagingSenderId: "72383904243"
};

var fire = firebase.initializeApp(config);

export default fire;