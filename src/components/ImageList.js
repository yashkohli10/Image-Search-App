import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderimages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list">{renderimages}</div>;
}
export default ImageList;
