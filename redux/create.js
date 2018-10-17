import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './modules/reducer';
import thunk from './middleware/thunk';

const configureStore = () => {
    const middlewares = [];

    // Call them as the actions propagate through them
    middlewares.push(thunk);
    // middlewares.push(logger);

    const store = createStore(
        rootReducer,
        {},
        applyMiddleware(...middlewares),
    );

    return store;
};

export default configureStore;
