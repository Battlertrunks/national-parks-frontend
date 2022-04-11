import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./context/AuthContextProvider";
import AttendedParksContextProvider from "./context/AttendedParkContextProvider";
import CommentContextProvider from "./context/CommentContextProvider";

const rootEl = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootEl!);
root.render(
  <AuthContextProvider>
    <AttendedParksContextProvider>
      <CommentContextProvider>
        <App />
      </CommentContextProvider>
    </AttendedParksContextProvider>
  </AuthContextProvider>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
