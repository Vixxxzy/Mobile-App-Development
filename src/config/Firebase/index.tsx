// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjRn1TFetU3ote_XtyEp2E-t6nI3wah2M',
  authDomain: 'moneytracker2024-2.firebaseapp.com',
  projectId: 'moneytracker2024-2',
  storageBucket: 'moneytracker2024-2.firebasestorage.app',
  messagingSenderId: '907390355275',
  appId: '1:907390355275:web:6ff1dd18bee09aee340ace',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
