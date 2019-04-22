import React, { Component } from 'react'

class ImageCard extends Component {
  constructor(props) {
    super()

    this.state = { spans: 0 }

    this.imgRef = React.createRef()
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight
    const spans = Math.ceil(height / 10 + 1)

    this.setState({ spans })
  }

  render() {
    const { urls, description } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} src={urls.regular} alt={description} />
      </div>
    )
  }
}

export default ImageCard
