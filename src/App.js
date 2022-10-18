import './App.css';
import Form from './Components2/InsuranceForm/Form';
import Content from './Components/Content/content';
import Footer from './Components/Footer/footer';
import Headers from './Components/Header/header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Router>
        <Routes>
          <Route path='/content' element={<Content/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </Router>
      <Footer/>
 
    </div>
  );
}

export default App;
