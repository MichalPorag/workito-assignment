import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyBBsxh4uP6j6xHlnAAjEZ3Y6ku2ow9D2U0',
  authDomain: 'workitoassignment.firebaseio.com',
  databaseURL: 'https://workitoassignment.firebaseio.com',
  projectId: 'workitoassignment',
  storageBucket: 'workitoassignment.appspot.com',
  messagingSenderId: '456596924460',
  appId: '1:456596924460:android:db53385725c79508b04989',
  measurementId: 'G-measurement-id',
};

let app = Firebase.initializeApp(config);
export const db = app.database();

export default db;
