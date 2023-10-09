import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  }

  return (
    <div>
      <h1 style={{color: "red"}}>hello, world!</h1>
      <ColoredMessage color="blue">howdy?</ColoredMessage>
      <ColoredMessage color="pink">hogefuga</ColoredMessage>
      <button onClick={onClickButton}>アラートボタン</button>
    </div>
  );
};