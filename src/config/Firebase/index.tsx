// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCXxlDYRQTmf5aQQeqOsmElZ0pw5AffEFQ',
  authDomain: 'money-tracker-vic-14.firebaseapp.com',
  databaseURL: 'https://money-tracker-vic-14-default-rtdb.firebaseio.com',
  projectId: 'money-tracker-vic-14',
  storageBucket: 'money-tracker-vic-14.firebasestorage.app',
  messagingSenderId: '975459362202',
  appId: '1:975459362202:web:08a932b504a94e660c4623',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
