import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea sirve para conectar nuestra App con la extension REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore (
    reducer, composeEnhancer(applyMiddleware(thunkMiddleware))
    //Esta linea sirve para que podamos hacer peticiones a una Api/servidor
);

export default store;