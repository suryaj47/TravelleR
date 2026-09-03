import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationsPage";
import ExplorePage from "./pages/ExplorePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppLayout() {
  const location = useLocation();
  const showFooter = location.pathname !== "/";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<ExplorePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/destination/:slug" element={<DestinationPage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
