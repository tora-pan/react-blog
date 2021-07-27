import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePostPage from "./pages/singlePost/SinglePostPage";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <SinglePostPage /> */}
      <Write />
    </div>
  );
}

export default App;
