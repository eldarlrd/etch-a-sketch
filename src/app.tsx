import './app.less';
import githubLogo from './assets/github-logo.png';
const author = 'https://github.com/eldarlrd';

export const App = () => {
  const gridField: preact.JSX.Element[] = [];
  for (let i = 4; i < 8; i++) {
    gridField.push(
      <div class='grid-element' key={i}>Grid {i}</div>
    );
  }

  return (
    <>
      <header>
        <h1>Etch A Sketch</h1>
      </header>

      <main>
        <div id='tools'>
          <input id='color-picker' type='color' value='#2F2F2F' />
          <button>Color Selection</button>
          <button>Rainbow Mode</button>
          <button>Eraser</button>
          <button>Clear</button>
          <label for='grid-size'>4 x 4</label>
          <input id='grid-size' type='range' />
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