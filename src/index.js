import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
// To Do: no strict mode issue with dnd package. if needed, here is info on fork that fixes problem
// https://stackoverflow.com/questions/71819073/react-beautiful-dnd-unable-to-find-draggable-with-id-x
root.render(<App />);
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
