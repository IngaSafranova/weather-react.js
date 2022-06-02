
import './App.css';
// const api = {
//   key:
//   base:
// }
function App() {

  const dateBuilder =(d) =>{
    let months = ['January','February','March','April','May','June','July','August','September','November','December'];
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
    <main>
      <div className ="search-box">
      <input
        className = "search-bar"
        type ="text"
        placeholder ='Search ...'
      />

      </div>
      <div className ='location-box'>
      <div className ='location'> Bilston, uk</div>
      <div className ='date'>{dateBuilder(new Date())}</div>
     </div>
     <div className ='weather-box'>
       <div className ='temp'>15c</div>
     </div>
     <div className ='weather'>Sunny</div>  

    </main>
      Hi
    </div>
  );
}

export default App;
