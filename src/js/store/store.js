import {createStore, compose} from 'redux';
import {rootReducer} from './redusers/rootReducer'
// инициализация хранилища
export const store = createStore(rootReducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

