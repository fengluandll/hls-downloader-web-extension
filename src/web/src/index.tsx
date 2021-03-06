import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import { Provider } from "react-redux";
import { createStore } from "@hls-downloader/core/lib/adapters/redux/configure-store";
import * as serviceWorker from "./serviceWorker";
import { CryptoDecryptor } from "./services/crypto-decryptor";
import { InMemoryFS } from "./services/in-memory-fs";
import { FetchLoader } from "./services/fetch-loader";
import { M3u8Parser } from "./services/m3u8-parser";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

ReactDOM.render(
  <Provider
    store={createStore({
      decryptor: CryptoDecryptor,
      fs: InMemoryFS,
      loader: FetchLoader,
      parser: M3u8Parser,
    })}
  >
    <React.StrictMode>
      <ColorModeProvider value="dark">
        <ThemeProvider>
          <CSSReset></CSSReset>
          <App />
        </ThemeProvider>
      </ColorModeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
