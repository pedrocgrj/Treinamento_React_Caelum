import React from "react";
import ReactDOM from "react-dom";

// CSSs Globais
import "./assets/css/reset.css";
import "./assets/css/container.css";
import "./assets/css/btn.css";
import "./assets/css/icon.css";
import "./assets/css/iconHeart.css";
import "./assets/css/notificacao.css";

import "./assets/css/novoTweet.css";
// import './index.css';

//import HomePage from "./pages/HomePage";
import * as serviceWorker from "./serviceWorker";

import { NotificacaoContextProvider } from '../src/context/NotificacaoContext'

import	store	from	"./store/index";
import	{	Provider	}	from	"react-redux";


//	Roteamento
import { BrowserRouter	} from "react-router-dom";
import Roteamento from "./routes.js";


ReactDOM.render(
  <Provider store={store}>
    <NotificacaoContextProvider>
      <BrowserRouter>
          <Roteamento />
      </BrowserRouter>
    </NotificacaoContextProvider>
  </Provider>,

    document.getElementById("root")
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
