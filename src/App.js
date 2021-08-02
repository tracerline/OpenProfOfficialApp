import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import AppRouter from './AppRouter';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={2000} position={toast.POSITION.TOP_RIGHT} limit={1}/>
   </>
  );
}

export default App;
