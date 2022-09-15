import logo from "./logo.svg";
import "./App.css";
import iCanMakeOutside from "./call-whatever";

// document.qouerySelector('a').style.background = 'red'

function App() {
  const hello = "hello there, daiane is feeling. hmmmm this is suspicious";

  function makeDaniSmile() {
    console.log("casa del camelo, instead of camelCase");
  }
  return (
    <div className="App">
      {hello}
      <Button backgroundColor="blue" />
      <Button />
      <Button backgroundColor="green" asemAskedAQuestion="yes" />
      <Swag
        maximesAge={12}
        maximesMasters={["studies", "art history", "studies again"]}
        // isMaximeLyingAboutHerAge={false}
        // isMaximeLyingAboutHerAge={true}
        isMaximeLyingAboutHerAge
        elvanSmile={() => {
          console.log("asdkjfghsdfkljghsdfkljghfsdjkloghs");
        }}
        daniSmile={makeDaniSmile}
        thinkingOfThinking={{ isPhilosophy: true }}
        asemIsAskingForUndefined={undefined}
        someoneElseWilTryToBeFunny={null}
        makesNoSense={NaN}
        fancy={Button}
        fromOutside={iCanMakeOutside}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function Swag(props) {
  console.log("props:", props);
  props.elvanSmile();
  return <Button backgroundColor="#BaDa55" />;
}

function Button(props) {
  const { backgroundColor = "red" } = props;
  return (
    <div>
      <button style={{ backgroundColor }}>Hello</button>
    </div>
  );
}
