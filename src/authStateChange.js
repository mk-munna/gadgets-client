import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Ensure the correct path to your firebase.js file


const authStateChange = (callback) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, you can get the user's details
            console.log('User is signed in:', user);

            callback(user);
        } else {
            // User is signed out
            console.log('User is signed out');
            callback(null);
        }
    });
};

export default authStateChange;
