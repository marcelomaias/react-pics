import React from 'react'

const Images = props => {
  console.log(props.images)
  const images = props.images.map(({ id, description, urls }) => {
    return (
      <div key={id}>
        <img src={urls.regular} alt={description} />
      </div>
    )
  })
  return <div>{images}</div>
}

export default Images
