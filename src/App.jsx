import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageHOC from './components/LikeImageHOC';
import LikePost from './components/LikePost';
import LikePostHOC from './components/LikePostHOC';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      {/* using render props */}
     {/* <div className='buttons'>
        <Wrapper render={(counter, handleIncrement)=>{
          return <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncrement}/>}}/>

        <Wrapper render={(counter, handleIncrement)=>{
          return <LikePost LikePostCounter={counter} handlePostCount = {handleIncrement}/>}}/>
      </div> */}

      <div className='buttons'>
        {/* using hoc */}
        <LikeImageHOC/>
        <LikePostHOC/>
      </div>
    </div>
  );
}

export default App;
