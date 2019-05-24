import React, { Component } from "react";

export default class HomeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "https://immotors-65ac.restdb.io/rest/cars",
      fetchSettings: {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "cache-control": "no-cache",
          "content-type": "application/json",
          "x-apikey": "5ce2d6b1780a473c8df5c9ef"
        }
      },
      data: [],
      make: "",
      model: "",
      year: ""
    };
  }
  componentDidMount() {
    fetch(this.state.endpoint, this.state.fetchSettings).then(e =>
      e.json().then(result => this.setState({ data: result }))
    );
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    console.log(this.state.make);
    //map out each fetched item's property, weed out repetition with Set(), turn it back into array
    const uniqueMakerList = Array.from(
      new Set(this.state.data.map(item => item.Manufacturer))
    );
    //map out options for dropdown menu
    const makerOptions = uniqueMakerList.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

    return (
      <select
        name="make"
        defaultValue={this.state.make}
        className="hFilterDropdown make"
        onChange={this.handleChange}
      >
        <option value={null} label="-Make-" />
        {makerOptions}
      </select>
    );
  }
}
