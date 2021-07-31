import "./App.css";

export const panggilFungsi = () => {
  console.log("selamat datang");
  return "tes";
};

const panggilFungsiParam = (nama) => {
  console.log("ini ", nama);
};

const App = () => {
  return (
    <div className="App">
      {/* {panggilFungsi()} */}
      <button onClick={() => console.log("tes console log")}>
        tombol console log
      </button>
      <button onClick={panggilFungsi}>Panggil fungsi</button>
      <button
        onClick={() => {
          panggilFungsiParam("Budi");
        }}
      >
        Panggil fungsi dengan parameter
      </button>
    </div>
  );
};

export default App;
