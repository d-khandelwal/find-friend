import AppRouter from "./AppRouter";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import "./styles/App.scss";

function App() {
  return (
    <div className="app-container">
      <ToastContainer />
      <AppRouter />
    </div>
  );
}

export default App;
