import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes>
     
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
