import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

import {rootReducer} from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
