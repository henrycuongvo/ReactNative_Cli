import { initializeApp } from 'firebase/app';
// import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp();
export const db = getFirestore(app);

// import { getAnalytics } from 'firebase/analytics';
// const firebaseConfig = {
//     apiKey: 'AIzaSyAc52VJukg06EAFeJ1YgoBBtW3SCdddqtw',
//     authDomain: 'internapp-c1083.firebaseapp.com',
//     projectId: 'internapp-c1083',
//     storageBucket: 'internapp-c1083.appspot.com',
//     messagingSenderId: '777910539846',
//     appId: '1:777910539846:web:4a848c6020246870c59c47',
//     measurementId: 'G-X8HGBQYQFN',
// };
// if (!firebase.app.length) {
//     firebase.initializeApp(firebaseConfig);
// }
// // const analytics = getAnalytics(app);
// export { firebase };
