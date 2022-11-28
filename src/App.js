import './App.css';
import ReactPlayer from 'react-player'


function App() {
  return (
    <>
      <ReactPlayer
                playing
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
      />
    </>
  );
}

export default App;
