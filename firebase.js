import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Aapki Netlify/Firebase wali config details yahan hain
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Ye line honi zaroori hai!