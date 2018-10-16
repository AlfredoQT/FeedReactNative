/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: A modular reducer to keep the users, follows the Ducks++ proposal: https://medium.com/@DjamelH/ducks-redux-reducer-bundles-44267f080d22
 */

// Let each define their mountpoint in the store
const STORE_MOUNT_POINT = 'expo-alfredo/users';

// Action types
const LOAD = `${STORE_MOUNT_POINT}/LOAD`;
const LOAD_SUCCESS = `${STORE_MOUNT_POINT}/LOAD_SUCCEESS`;
const LOAD_FAILURE = `${STORE_MOUNT_POINT}/LOAD_FAILURE`;

const initialState = {
    data: {},
    loaded: false,
    loading: false,
    error: null,
};


function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case LOAD:
        return {
            ...state,
            loading: true,
        };
    case LOAD_SUCCESS:
        return {
            ...state,
            loaded: true,
            loading: false,
            data: action.payload, // TODO: Change this
        }
    case LOAD_FAILURE:
        return {
            ...state,

        }
    default:
        return state;
    }
}