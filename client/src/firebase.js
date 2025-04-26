// Import Firebase core and storage
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // ✅ Required for file uploads
// Optional: Analytics
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS4Zf8YQG_0_SYfe6_L2ZHmvk9WZBjrJg",
  authDomain: "test-podify-danish.firebaseapp.com",
  projectId: "test-podify-danish",
  storageBucket: "test-podify-danish.firebasestorage.app",
  messagingSenderId: "440094172694",
  appId: "1:440094172694:web:c22b40ccd04f62c69fb737",
  measurementId: "G-M6S0R49653",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Storage and export it
export const storage = getStorage(app);

export default app;
