import './App.css';
import Row from './Row';

import Requests from './request';

import Banner from './banner';



function App() {
  return (

    <div className="App">
    <Banner/>
      <Row title='Trading this year' fetchurl={Requests.fetchTrending } isLargeRow></Row>
      <Row title='top rated' fetchurl={Requests.fetchTopRated}></Row>
      <Row title='trend of this week' fetchurl={Requests.fetchWeekTrend}></Row>
      
      
    </div>
  );
}

export default App;
