// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const activeClassName = isActive ? 'active-container' : 'item-container'
  const onChangeImage = () => {
    changeImage(id)
  }

  return (
    <li className={activeClassName}>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onChangeImage}
          className="img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
