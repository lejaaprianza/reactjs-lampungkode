import React, { Component } from "react";

class NormalExport1 extends Component {
  render() {
    return (
      <div>
        <h1>Ini normal export ke-1</h1>
      </div>
    );
  }
}

class NormalExport2 extends Component {
  render() {
    return (
      <div>
        <h1>Ini normal export ke-2</h1>
      </div>
    );
  }
}

export { NormalExport1, NormalExport2 };
