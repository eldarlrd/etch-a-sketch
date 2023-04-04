import { useState } from 'preact/hooks';
import './app.less';
import githubLogo from './assets/githubLogo.png';
const author = 'https://github.com/eldarlrd';
const rootStyle = document.documentElement.style;

export const App = () => {
  // Reset active mode
  const resetActive = () => {
    setColorActive(false);
    setRainbowActive(false);
    setEraserActive(false);
    setClearActive(false);
  };
  // Color selection
  const [ colorActive, setColorActive ] = useState(true);
  const [ color, setColor ] = useState('#2F2F2F');
  const colorSelect = (strColor: string) => {
    resetActive(); setColorActive(true); setColor(strColor);
    rootStyle.setProperty('--picked-color', strColor);
    const hexColor = strColor.replace('#', '');
    parseInt('0x' + hexColor, 16) <= parseInt('0x' + '808080', 16)
      ? rootStyle.setProperty('--contrast', 'white')
      : rootStyle.setProperty('--contrast', 'black');
  };
  // Rainbow mode
  const [ rainbowActive, setRainbowActive ] = useState(false);
  const rainbowMode = () => {
    resetActive(); setRainbowActive(true);
  };
  // Eraser
  const [ eraserActive, setEraserActive ] = useState(false);
  const eraser = () => {
    resetActive(); setEraserActive(true);
  };
  // Clear
  const [ clearActive, setClearActive ] = useState(false);
  const clear = () => {
    resetActive(); setClearActive(true);
  };
  // Grid generator
  const [ gridCount, setGridCount ] = useState(16);
  const gridGenerator = (rangeValue: string) => {
    rootStyle.setProperty('--grid-count', rangeValue);
    setGridCount(+rangeValue);
  };
  const gridField: preact.JSX.Element[] = [];
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
          <input id='color-picker' type='color' value={color}
                 onInput={e => colorSelect((e.target as HTMLInputElement).value)} />
          <button onClick={() => colorSelect(color)}
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
          <input id='grid-size' type='range'
                 min='4' max='64' value={gridCount}
                 onInput={e => gridGenerator((e.target as HTMLInputElement).value)} />
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