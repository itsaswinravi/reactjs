
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-views';
import menus from "./components/tree-views/data"
import QRCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <RandomColor/> */}
      
      {/* <StarRating noOfStars={10}/> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"4"}/> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
