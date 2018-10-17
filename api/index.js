
/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: Talks to any enpoints. I put all the keys and secret stuff here since it is not commercial.
 */

import { firestore, storage } from 'firebase';
import 'firebase/firestore';
import { to } from '../utils/async';


export const getUsers = async () => {
    const db = firestore();
    const [error, response] = await to(db.collection('students').get());
    if (error) {
        throw new Error(error); // Maybe not a string...
    }

    // So the query snapshot does not have a map method...
    let users = [];
    response.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
    });

    return users;
};
