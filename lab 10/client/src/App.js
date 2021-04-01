import logo from './logo.svg';
import './App.css';
import AgeSearch from "./components/AgeSearch";
import NameSeach from "./components/NameSearch";
import ReportingArea from "./components/ReportingArea";

function App() {
  return (
    <div className="App">
    <AgeSearch />
    <NameSeach />
    <ReportingArea />
    </div>
  );
}

export default App;
