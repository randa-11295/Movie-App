import Movies from "./pages/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
