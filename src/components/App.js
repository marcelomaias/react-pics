import React, { Component } from 'react'
import unsplash from '../api/unsplash'

import SearchBar from './SearchBar'
import Spinner from './ui/Spinner'
import Images from './Images'

class App extends Component {
  state = {
    images: [],
    loading: false
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ loading: false })
  //   }, 1000)
  // }

  onSearchSubmit = async term => {
    this.setState({ loading: true })
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    })
    this.setState({ images: response.data.results, loading: false })
  }
  render() {
    const { loading, images } = this.state

    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {images.length > 0 && (
          <div>
            Found <strong>{this.state.images.length}</strong> images.
          </div>
        )}
        {loading && <Spinner />}
        <Images images={this.state.images} />
      </div>
    )
  }
}

export default App
