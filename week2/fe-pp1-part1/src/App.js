import './App.css';
// import logo from './images/logo.svg';
import IdCard from './idCardComponent/IdCard';
import Random from './RandomComponent/Random';

function App() {
  return (<div>
    <h1>Terve</h1>
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

  </div>
);
   
}

export default App;
