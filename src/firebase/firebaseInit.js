import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBPRQlmXfWWIk90GlhAaQh-IFFZvPhTR4",
  authDomain: "fireblogsyt-bcfac.firebaseapp.com",
  projectId: "fireblogsyt-bcfac",
  storageBucket: "fireblogsyt-bcfac.appspot.com",
  messagingSenderId: "767345749189",
  appId: "1:767345749189:web:046457b714ff1c8de6d4ac",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
