import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Provider store={store}>
  <App/>
  </Provider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

/* Cloudinary config
cloudinaryname: djw8b73np
apikey: 274559538486113
apisecret: FgkZ9u19TJ5H7S6PQFgcfkukMcc
API Environment variable: CLOUDINARY_URL=cloudinary://274559538486113:FgkZ9u19TJ5H7S6PQFgcfkukMcc@djw8b73np*/
