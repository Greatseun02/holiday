import './App.css'
import Book from './Book';
import Holiday from './Holiday'
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Home';
import Movies from './Movies';


function App(){
  let newDate = new Date();


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='countries-holiday'  element={<Holiday/>}/>
          <Route path='restaurant-booking' element={<Book/>}/>
          <Route path='movies'  element={<Movies/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
