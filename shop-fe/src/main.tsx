import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './components/globalStyle/index.tsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalStyles>
    <App />
    <ToastContainer/>
  </GlobalStyles>
)
