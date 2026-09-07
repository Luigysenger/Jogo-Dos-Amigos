import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    onValue,
    runTransaction,
    onDisconnect,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD_-S0j1L-YVF6ynKiF8NcTU_4_pCn-S3Q",
    authDomain: "jogo-dos-amigos-ca3f5.firebaseapp.com",
    databaseURL: "https://jogo-dos-amigos-ca3f5-default-rtdb.firebaseio.com",
    projectId: "jogo-dos-amigos-ca3f5",
    storageBucket: "jogo-dos-amigos-ca3f5.firebasestorage.app",
    messagingSenderId: "817678231030",
    appId: "1:817678231030:web:1e406c32d15e0ec7a953d7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);

export { app, auth, db };

export {
    ref,
    get,
    set,
    update,
    remove,
    onValue,
    runTransaction,
    onDisconnect,
    serverTimestamp,
    signInAnonymously,
    onAuthStateChanged
};
