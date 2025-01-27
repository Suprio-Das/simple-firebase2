import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAtFPRNYL8pivyUuVyjTx-Av3I4YRqLBzQ",
    authDomain: "fir-email-pass-fc8d9.firebaseapp.com",
    projectId: "fir-email-pass-fc8d9",
    storageBucket: "fir-email-pass-fc8d9.firebasestorage.app",
    messagingSenderId: "304396284493",
    appId: "1:304396284493:web:28a9300a28ee81a34c6204"
};

const app = initializeApp(firebaseConfig);
export default app;