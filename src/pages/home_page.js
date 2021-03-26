import React from "react";

import axios from "axios";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{}]
    };
  }
  componentWillMount() {
    console.log("0-----ini mau diapasang");
    const url = "https://al-quran-8d642.firebaseio.com/data.json?print=pretty";

    axios.get(url).then((data) => {
      console.log(data);

      this.setState({});
    });
  }
  render() {
    console.log("1-----ini sedang diapasang");
    return (
      <div>
        {this.state.users.map((user, idx) => {
          return <div key={idx}>{user.nama} </div>;
        })}
      </div>
    );
  }
}

export default HomePage;
