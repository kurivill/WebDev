import TourList from "./TourComponent/TourList";
import { tours } from "./TourComponent/toursData";
import './App.css';

function App() {
  return (
    <main>
      <TourList tours={tours} />
    </main>
  )
}

export default App;