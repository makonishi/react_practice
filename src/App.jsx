export const App = () => {
  const onClickButton = () => {
    alert();
  }

  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  }
  return (
    <div>
      <h1 style={{color: "red"}}>hello, world!</h1>
      <p style={contentStyle}>hogefuga</p>
      <button onClick={onClickButton}>アラートボタン</button>
    </div>
  );
};