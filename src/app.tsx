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
  // Rainbow randomizer
  const randomRGB: number[] = [];
  const colorRandomizer = () => {
    randomRGB[0] = Math.floor(Math.random() * 256);
    randomRGB[1] = Math.floor(Math.random() * 256);
    randomRGB[2] = Math.floor(Math.random() * 256);
  };
  // Eraser
  const [ eraserActive, setEraserActive ] = useState(false);
  const eraser = () => {
    resetActive(); setEraserActive(true);
  };
  // Clear
  const [ clearActive, setClearActive ] = useState(false);
  const clear = () => {
    setClearActive(true);
    setTimeout(() => setClearActive(false), 400);
    gridElement.forEach((e: any) => {
      e.style.background = 'white';
    });
  };
  // Draw
  const [ mouseDown, setMouseDown ] = useState(false);
  const draw = (e: any) => {
    if (mouseDown) {
      if (eraserActive)
        e.target.style.background = 'white';
      else if (rainbowActive) {
        colorRandomizer();
        e.target.style.background = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`;
      } else if (e.type === 'mouseover')
          e.target.style.background = color;
    }
  };
  // Grid generator
  const gridElement = Array.from(document.getElementsByClassName('grid-element'));
  const [ gridCount, setGridCount ] = useState(16);
  const gridGenerator = (rangeValue: string) => {
    gridElement.forEach((e: any) => {
      e.style.background = 'white';
    });
    rootStyle.setProperty('--grid-count', rangeValue);
    setGridCount(+rangeValue);
  };
  // Grid display
  const gridField: preact.JSX.Element[] = [];
  for (let i = 1; i <= gridCount * gridCount; i++) {
    gridField.push(
      <div class='grid-element'
           onMouseOver={(e: any) => draw(e)}
           onMouseDown={() => setMouseDown(true)}
           onMouseUp={() => setMouseDown(false)} />
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
          <button class={colorActive ? 'color-selection-active' : ''}
                  onClick={() => colorSelect(color)}>
                  Color Selection
          </button>
          <button class={rainbowActive ? 'rainbow-mode-active': ''}
                  onClick={rainbowMode}>
                  Rainbow Mode
          </button>
          <button class={eraserActive ? 'eraser-active': ''}
                  onClick={eraser}>
                  Eraser
          </button>
          <button class={clearActive ? 'clear-active': ''}
                  onClick={clear}>
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