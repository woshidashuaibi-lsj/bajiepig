import React from 'react';
// import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SortableComponent from './components/Drag/dragSortable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SortableComponent></SortableComponent>
          <Button disabled>hello</Button>
          <Button autoFocus size={ButtonSize.Large}>Large</Button>
          <Button className="custom" onClick={()=>{console.log(123);
          }} size={ButtonSize.Small}>Small</Button>
          <Button target="_blank" btnType={ButtonType.Link} href="http://www.baidu.com">baidu link</Button>
          <Button btnType={ButtonType.Danger} >Danger</Button>
          <Button btnType={ButtonType.Default} >Danger</Button>
        <Button btnType={ButtonType.Primary} >Primary</Button>
        <Menu defaultIndex={0} mode="vertical" onSelect={(index) => { alert(index)}}>
          <MenuItem index={0}>
            cool link 0
          </MenuItem>
          <MenuItem  index={1} disabled>
            cool link 1
          </MenuItem>
          <MenuItem  index={2}>
            cool link 2
          </MenuItem>
        </Menu>

        <Menu defaultIndex={0} onSelect={(index) => { alert(index)}}>
          <MenuItem index={0}>
            cool link 0
          </MenuItem>
          <MenuItem  index={1} disabled>
            cool link 1
          </MenuItem>
          <MenuItem  index={2}>
            cool link 2
          </MenuItem>
        </Menu>
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
