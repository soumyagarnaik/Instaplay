import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import TopNavbar from './components/TopNavbar';

function App() {
  return (
    <BrowserRouter>
    <TopNavbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies/:id' element={<MovieDetailPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
