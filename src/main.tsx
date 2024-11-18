import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {HotkeysProvider} from "@blueprintjs/core";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HotkeysProvider>
        <App/>
      </HotkeysProvider>
    </Provider>
  </StrictMode>,
)
