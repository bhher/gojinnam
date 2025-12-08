import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정
// 환경 변수에서 가져오거나 직접 설정하세요
const firebaseConfig = {
    apiKey: "AIzaSyD7gaNAjh1yZPMdWGhWXzFAi6_TfahqHpI",
    authDomain: "gojinnam-33174.firebaseapp.com",
    projectId: "gojinnam-33174",
    storageBucket: "gojinnam-33174.firebasestorage.app",
    messagingSenderId: "258495202232",
    appId: "1:258495202232:web:530fd919179aac43d6054d",
    measurementId: "G-37LJZ44C55"
  };

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 초기화
export const db = getFirestore(app);

