import { useState } from 'preact/hooks';
import './app.less';
import githubLogo from './assets/githubLogo.png';
const author = 'https://github.com/eldarlrd';

export const App = () => {
  // Color selection
  const [ colorActive, setColorActive ] = useState(true);
  const colorSelect = () => {
    setEraserActive(false);
    setRainbowActive(false);
    setClearActive(false);
    setColorActive(true);
  };
  // Rainbow mode
  const [ rainbowActive, setRainbowActive ] = useState(false);
  const rainbowMode = () => {
    setEraserActive(false);
    setColorActive(false);
    setClearActive(false);
    setRainbowActive(true);
  };
  // Eraser
  const [ eraserActive, setEraserActive ] = useState(false);
  const eraser = () => {
    setColorActive(false);
    setRainbowActive(false);
    setClearActive(false);
    setEraserActive(true);
  };
  // Clear
  const [ clearActive, setClearActive ] = useState(false);
  const clear = () => {
    setColorActive(false);
    setRainbowActive(false);
    setEraserActive(false);
    setClearActive(true);
  };
  // Grid generator
  const gridField: preact.JSX.Element[] = [];
  const [ gridCount, setGridCount ] = useState(16);
  const gridGenerator = (props: any) => {
    document.documentElement.style.setProperty('--grid-count', props);
    setGridCount(props);
  };
  for (let i = 1; i <= gridCount * gridCount; i++) {
    gridField.push(
      <div class='grid-element' />
    );
  };

  return (
    <>
      <header>
        <h1>Etch A Sketch</h1>
      </header>

      <main>
        <div id='tools'>
          <input id='color-picker' type='color' value='#2F2F2F' />
          <button onClick={colorSelect}
                  class={colorActive ? 'color-selection-active' : ''}>
                  Color Selection
          </button>
          <button onClick={rainbowMode}
                  class={rainbowActive ? 'rainbow-mode-active': ''}>
                  Rainbow Mode
          </button>
          <button onClick={eraser}
                  class={eraserActive ? 'eraser-active': ''}>
                  Eraser
          </button>
          <button onClick={clear}
                  class={clearActive ? 'clear-active': ''}>
                  Clear
          </button>
          <p>{gridCount} x {gridCount}</p>
          <input onInput={e => gridGenerator((e.target as HTMLInputElement).value)} value={gridCount} min='4' max='64' step='1'
          id='grid-size' type='range' />
        </div>
        <div id='grid'>
          {gridField}
        </div>
      </main>

      <footer>
        by <a target='_blank'
              rel='noreferrer'
              href={author}>
              <img src={githubLogo} />
              eldarlrd </a>
      </footer>
    </>
  );
}

console.log('Draw a penguin!');