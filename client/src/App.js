import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Landingpage from './Component/Landingpage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container topp'>
        <Landingpage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
