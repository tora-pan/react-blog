import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import SinglePostPage from "./pages/singlePost/SinglePostPage";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <SinglePostPage /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      <Login />
    </div>
  );
}

export default App;
