import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCRlzfqesV3EpgN8nQrvThqWVUVC-L619M",
  authDomain: "team-voting-app-1.firebaseapp.com",
  databaseURL: "https://team-voting-app-1-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-1",
  storageBucket: "team-voting-app-1.appspot.com",
  messagingSenderId: "224611010050",
  appId: "1:224611010050:web:91297fca49852f87fb491b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();