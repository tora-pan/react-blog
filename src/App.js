import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePostPage from "./pages/singlePost/SinglePostPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <SinglePostPage />
    </div>
  );
}

export default App;
