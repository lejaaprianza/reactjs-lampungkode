import React, { Component } from "react";

export class NormalExport extends Component {
  render() {
    return (
      <div>
        <h1>Ini contoh normal export</h1>
      </div>
    );
  }
}

export default class ExportDefault extends Component {
  render() {
    return (
      <div>
        <h1>Ini Contoh Export Default</h1>
      </div>
    );
  }
}
