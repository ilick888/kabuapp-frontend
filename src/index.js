import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider } from '@material-ui/core/styles' 
import './index.css';
import firebase from 'firebase/app'
import StockDetail from './components/stock_detail/stock_detail';
import Signin from './components/signin';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack';
import { theme } from './theme';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { firebaseConfig } from './config/firebase_conf';

const enhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(reducer, enhancer)
const rrfConfig = {
  userProfile: 'users'
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3}>
      <React.StrictMode>
        <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/:id" component={StockDetail} />
              </Switch>
            </BrowserRouter>
          </ReactReduxFirebaseProvider>
        </Provider>
      </React.StrictMode>
    </SnackbarProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
