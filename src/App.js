import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Branditem from './components/Branditem';

function App() {
  return (
    <>
    <main className="maincontainer">
    <div className='container'>
      <Branditem/>
    </div>
    </main>
    <Footer/>
    </>
  );
}

export default App;
