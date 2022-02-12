import { createStore } from 'redux';
import {mountsReducer} from './reducers/mount-reducer';

let store = createStore(mountsReducer);


export default store;