import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Saved from "./pages/Saved";
import Search from "./pages/Search";


function App() {
  return (
    <div className="App">
      
        <Router>
            <Header/>
            <Route exact path = "/" component = {Search}/>
            <Route exact path = "/saved" component = {Saved}/>
            
        </Router>
       
    </div>
  );
}

export default App;
