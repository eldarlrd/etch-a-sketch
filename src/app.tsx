import './app.less';
import githubLogo from './assets/githubLogo.png';
const author = 'https://github.com/eldarlrd';

export const App = () => {
  console.log('Draw a penguin!');
  const gridField: preact.JSX.Element[] = [];
  for (let i = 1; i <= 16 * 16; i++) {
    gridField.push(
      <div class='grid-element' />
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
          <p>16 x 16</p>
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