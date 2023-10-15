import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

  const [num, setNum] = useState(0);

  const countUpButton = () => {
    setNum(num + 1);
  }
  const countDownButton = () => {
    setNum(num - 1);
  }

  useEffect(() => {alert();}, [num]); // numの値が変わった場合のみalert()を実行

  return (
    <div>
      <h1 style={{color: "red"}}>hello, world!</h1>
      <ColoredMessage color="blue">howdy?</ColoredMessage>
      <ColoredMessage color="pink">hogefuga</ColoredMessage>
      <button onClick={countUpButton}>カウントアップ</button>
      <button onClick={countDownButton}>カウントダウン</button>
      <p>{num}</p>
    </div>
  );
};