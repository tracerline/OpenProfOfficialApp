import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import AppRouter from './AppRouter';

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={5000} position={toast.POSITION.TOP_RIGHT} limit={3}/>
    </>
  );
}

export default App;
