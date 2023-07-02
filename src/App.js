import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './index.scss'
import Rotas from './routes/Rotas';
import { BackgroundProvider } from './Pages/BackgroundContext';


function App() {
  return (
    <BackgroundProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Rotas />
      </BrowserRouter>

    </BackgroundProvider>

  );
}

export default App;
