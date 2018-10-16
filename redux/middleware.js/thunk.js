/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: A simple middleware that passes dispatch and the state to the action creators
 */

const thunk = store => next => action =>
    typeof action === 'function' ? // Check if the action creator returns a function
        action(store.dispatch, store.getState) : // Let it dispatch as many as it wants
        next(action); // Call the next middleware

export default thunk;
