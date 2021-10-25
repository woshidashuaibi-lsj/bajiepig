import React from 'react';
// import './App.css';
import Button, {ButtonType,ButtonSize} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Button disabled>hello</Button>
          <Button autoFocus size={ButtonSize.Large}>Large</Button>
          <Button className="custom" onClick={()=>{console.log(123);
          }} size={ButtonSize.Small}>Small</Button>
          <Button target="_blank" btnType={ButtonType.Link} href="http://www.baidu.com">baidu link</Button>
          <Button btnType={ButtonType.Danger} >Danger</Button>
          <Button btnType={ButtonType.Default} >Danger</Button>
          <Button btnType={ButtonType.Primary} >Primary</Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
