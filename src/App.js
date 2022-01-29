import { Component } from "react";

class App extends Component {
  state = {
    users: [
      { name: "Luis", apellido: "Marcano" },
      { name: "Luis", apellido: "Marino" }
    ]
  };
  render() {
    return (
      <div>
        <h2>Hola mundo</h2>
      </div>
    );
  }
}

export default App;
