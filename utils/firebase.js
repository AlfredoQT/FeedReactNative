// Setup firebase
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';

export const init = () => {
    const config = {
        apiKey: "AIzaSyBsTKKGLYqaCO_ZqZ3KAzXvOnMwDvBHxIU",
        authDomain: "users-feed.firebaseapp.com",
        databaseURL: "https://users-feed.firebaseio.com",
        projectId: "users-feed",
        storageBucket: "users-feed.appspot.com",
        messagingSenderId: "1071106630367"
    };
    
    firebase.initializeApp(config);
    firestore().settings({ timestampsInSnapshots: true });
};
