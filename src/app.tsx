import './app.less';

export const App = () => {
  const gridField: preact.JSX.Element[] = [];
  for (let i = 4; i < 8; i++) {
    gridField.push(
      <div class="grid-elem" key={i}>Grid {i}</div>
    );
  }
  return (
    <>
      {gridField}
    </>
  );
};