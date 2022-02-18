import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAilV9ppXP1RoE4RuWpJEUG8Exms1pgCgc",
    authDomain: "uber-eat-auth.firebaseapp.com",
    projectId: "uber-eat-auth",
    storageBucket: "uber-eat-auth.appspot.com",
    messagingSenderId: "564746257345",
    appId: "1:564746257345:web:5b96b0b2b749d11c72a540"
};
  


firebase.initializeApp(firebaseConfig);



const auth = firebase.auth();

export { auth };