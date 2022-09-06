import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Component/Footer';
import Header from './Component/Header';
import Landingpage from './Component/Landingpage';
import SignUpPage from './Component/SignUpPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='topp'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landingpage />}/>
            <Route path='/signup' element={<SignUpPage />}/>
          </Routes>
        </BrowserRouter>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
