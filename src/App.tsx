import Movies from "./pages/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <section className="bg-gray-900 min-h-screen py-6 text-gray-100">
      <div className="container mx-auto  px-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
