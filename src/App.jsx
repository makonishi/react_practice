export const App = () => {
  const onClickButton = () => {
    alert();
  }
  return (
    <div>
      <h1>hello, world!</h1>
      <p>hogefuga</p>
      <button onClick={onClickButton}>アラートボタン</button>
    </div>
  );
};