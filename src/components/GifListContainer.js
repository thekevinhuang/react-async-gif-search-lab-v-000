import React, {Component} from 'react';

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifList : []
    }
  }

  searchHandle(query) {
    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
    .then(response => response.json())
    .then(({gifs}) => this.setState({gifList : gifs}))
  }

  render() {

    return (

    )

  }
}
