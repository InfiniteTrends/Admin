/** @format */

import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/compat/storage';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAbrifxwmgAOIVErFkHDaqyBgpK7fp8Wng',
	authDomain: 'infinite-trends.firebaseapp.com',
	projectId: 'infinite-trends',
	storageBucket: 'infinite-trends.appspot.com',
	messagingSenderId: '193253684201',
	appId: '1:193253684201:web:e29b18b528b9fe07ccd178',
	measurementId: 'G-VBC9X1RQQ0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default firebase;
