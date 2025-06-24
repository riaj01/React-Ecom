import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSeller from "./components/TopSeller";
import PopularBlogs from "./components/PopularBlogs";

const App = () => {
  return (
    <Router>
  <div className="flex h-screen">
  <Sidebar />
  
  <div className="flex w-full">
    {/* Main content area */}
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>

    {/* Right sidebar */}
    <div className="w-[25rem]">
      <TopSeller />
      <PopularBlogs />
    </div>
  </div>
</div>
</Router>

  );
};

export default App;