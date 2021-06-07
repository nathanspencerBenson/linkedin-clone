import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6wbqpBj4NKLPhz3n5iBSrZDotf_IZRfY",
    authDomain: "linkedin-clone-6553f.firebaseapp.com",
    projectId: "linkedin-clone-6553f",
    storageBucket: "linkedin-clone-6553f.appspot.com",
    messagingSenderId: "759569240828",
    appId: "1:759569240828:web:3fa7ad58b98340aa69fd79"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };