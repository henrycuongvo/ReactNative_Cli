import { initializeApp } from '@react-native-firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp();
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: 'AIzaSyAc52VJukg06EAFeJ1YgoBBtW3SCdddqtw',
//     authDomain: 'internapp-c1083.firebaseapp.com',
//     projectId: 'internapp-c1083',
//     storageBucket: 'internapp-c1083.appspot.com',
//     messagingSenderId: '777910539846',
//     appId: '1:777910539846:web:4a848c6020246870c59c47',
//     measurementId: 'G-X8HGBQYQFN',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
