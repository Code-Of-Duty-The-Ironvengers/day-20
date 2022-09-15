import logo from "./logo.svg";
import "./App.css";
import iCanMakeOutside from "./call-whatever";

// document.qouerySelector('a').style.background = 'red'

function EitherMaximeJokeOrSomethingElse(props) {
  console.log("props:", props);
  // if we are passing to this compoennt a makeJoke prop, display a joke about maxime lying abour her age
  // otherwise just should a div saying todays dateo
  if (props.makeJoke) {
    return (
      <div>
        Make a joke about how much we all have fun making fun of maxime lying
        about her age
        <h1>ITS BEEN 4 months and she's still lying</h1>
        <h2>
          And look at her, shes laughing at us, because she doesnt want to admit
          her age
        </h2>
        <h3>Its almost as though she wants us to suffer</h3>
        <h4>Almost as much as she did when she took the studies</h4>
        <h5>
          Even though, you can make the argument she loved the studies masters
          so much, she took it twice
        </h5>
      </div>
    );
  }

  return <div>Today is the 15th of September</div>;
}

function App() {
  const hello = "hello there, daiane is feeling. hmmmm this is suspicious";

  function makeDaniSmile() {
    console.log("casa del camelo, instead of camelCase");
  }
  return (
    <div className="App">
      <EitherMaximeJokeOrSomethingElse />
      <div style={{ height: "50vh" }}></div>
      {/* {hello} */}
      <Button text="Hello" backgroundColor="blue" />
      <Button>
        <h2>INSIDE OF A BUTTON</h2>
      </Button>
      <Button text="Hello" backgroundColor="green" asemAskedAQuestion="yes" />
      {/* <Swag
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
      /> */}
      {/* <header className="App-header">
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
      </header> */}
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
  console.log("props:", props);
  const { backgroundColor = "red" } = props;
  return (
    <div>
      <button
        onClick={() => console.log("Clicked")}
        style={{ backgroundColor }}
      >
        {props.children || "Hello"}
      </button>
    </div>
  );
}
