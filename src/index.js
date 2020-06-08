import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider } from '@material-ui/core/styles' 
import './index.css';
import HelloIndex from './components/hello_index';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack';
import { theme } from './theme';

const enhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3}>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/:id" component={HelloIndex} />
            </Switch>
          </BrowserRouter>
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
