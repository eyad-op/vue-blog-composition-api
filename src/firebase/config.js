import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnzPTglLLgDawqByabPkIMYK52vrCy-m4",
  authDomain: "vue-blog-project-68414.firebaseapp.com",
  projectId: "vue-blog-project-68414",
  storageBucket: "vue-blog-project-68414.appspot.com",
  messagingSenderId: "675792948841",
  appId: "1:675792948841:web:549928d937930386895cf8",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
