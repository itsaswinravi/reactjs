
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-views';
import menus from "./components/tree-views/data"
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import Suggestions from './components/search-autocomplete-with-api/suggestions';
import TicTacToe from './components/tic-tact-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag/context'
import UseFetchHookTest from './components/use-fetch/test';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <RandomColor/> */}
      
      {/* <StarRating noOfStars={10}/> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"4"}/> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder/>  */}
      {/* <Suggestions/> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>    */}
      {/* <UseFetchHookTest/> */}
<Weather />

    </div>
  );
}

export default App;
