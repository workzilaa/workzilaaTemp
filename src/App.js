import './App.css';
import Mainbg from './components/mainbg/mainbg';
import { FaArrowUp } from 'react-icons/fa';
import Services from './components/services/services';
import Operation from './components/operation/operation';
import Footer from './components/footer/footer';

function App() {


  return (
    <div className="App">
      <Mainbg />
      {/* <div className="arrowUp"><FaArrowUp className='arrow' /></div> */}
      <Services />
      <Operation />
      <Footer/>
    </div>
  );
}

export default App;
