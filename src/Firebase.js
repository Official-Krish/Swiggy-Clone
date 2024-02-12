import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


// const firebaseConfig = {
//   apiKey: "AIzaSyAqlZDRhrDUGEhr36YgnTAkbm50XL5yZ8E",
//   authDomain: "swiggy-b87f6.firebaseapp.com",
//   projectId: "swiggy-b87f6",
//   storageBucket: "swiggy-b87f6.appspot.com",
//   messagingSenderId: "502614518036",
//   appId: "1:502614518036:web:8afeacda6f1584b52ffa01"
// }

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export default firebase


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfgHL59aO2b-xUpxf9A9Y14tEDwnI0AeY",
  authDomain: "swiggy-clone-7cc47.firebaseapp.com",
  projectId: "swiggy-clone-7cc47",
  storageBucket: "swiggy-clone-7cc47.appspot.com",
  messagingSenderId: "1041855684812",
  appId: "1:1041855684812:web:2264d1d7c3dbe6df2be269",
  measurementId: "G-G9X92L2XZW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase