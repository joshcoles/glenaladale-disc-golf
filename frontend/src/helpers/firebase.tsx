import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_GLENALADALE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_GLENALADALE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_GLENALADALE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_GLENALADALE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env
		.VITE_GLENALADALE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_GLENALADALE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_GLENALADALE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage, ref, getDownloadURL, analytics };
