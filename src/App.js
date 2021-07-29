import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Welcome nama="Lampung Kode" />
      <Welcome nama="Leja Aprianza" />
    </div>
  );
};

const Welcome = (props) => {
  return (
    <div className="App">
      <h1>Selamat Datang {props.nama}</h1>
    </div>
  );
};

export default App;
