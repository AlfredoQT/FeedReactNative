/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: A modular reducer to keep the users, follows the Ducks++ proposal: https://medium.com/@DjamelH/ducks-redux-reducer-bundles-44267f080d22
 */


import { normalize } from 'normalizr';
import * as schema from '../schema';

import * as api from '../../api';
import { to } from '../../utils/async';

// Let each define their mountpoint in the store
const STORE_MOUNT_POINT = 'expo-alfredo/users';

// Action types
const LOAD = `${STORE_MOUNT_POINT}/LOAD`;
const LOAD_SUCCESS = `${STORE_MOUNT_POINT}/LOAD_SUCCEESS`;
const LOAD_FAIL = `${STORE_MOUNT_POINT}/LOAD_FAILURE`;

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
            loaded: false,
        };
    case LOAD_SUCCESS:
        const incoming = action.payload.entities.users || action.payload.entities;
        const data = {
            ...state.data,
            ...incoming
        }
        return {
            ...state,
            loaded: true,
            loading: false,
            data,
        }
    case LOAD_FAIL:
        return {
            ...state,
            error: action.payload,
        }
    default:
        return state;
    }
}

// Action creators
const loadUsers = () => async dispatch => {
    dispatch({
        type: LOAD,
    });

    const [error, response] = await to(api.getUsers());

    if (error) {
        console.log(error);
        dispatch({
            type: LOAD_FAIL,
            payload: error,
        });
        return;
    }

    dispatch({
        type: LOAD_SUCCESS,
        payload: normalize(response, schema.arrayOfUsers),
    });
};

const getUsers = state => {
    return Object.values(state[STORE_MOUNT_POINT].data);
};

const getUser = (state, id) => {
    return state[STORE_MOUNT_POINT].data[id];
};

const isLoading = state =>
    state[STORE_MOUNT_POINT].loading;

const getError = state =>
    state[STORE_MOUNT_POINT].error;

const isLoaded = state =>
    state[STORE_MOUNT_POINT].loaded;


// A simple interface
export default {
    mountPoint: STORE_MOUNT_POINT,
    selectors: { getUser, getUsers, isLoading, isLoaded, getError },
    actionCreators: { loadUsers },
    reducer,
};
