import "./App.css";

const PanggilFungsi = () => {
  console.log("selamat datang");
};

const PanggilFungsiParam = (nama) => {
  console.log("ini ", nama);
};

const App = () => {
  return (
    <div className="App">
      <button onClick={() => console.log("tes console log")}>
        tombol console log
      </button>
      <button onClick={PanggilFungsi}>Panggil fungsi</button>
      <button onClick={() => PanggilFungsiParam("Budi")}>
        Panggil fungsi dengan parameter
      </button>
    </div>
  );
};

export default App;
