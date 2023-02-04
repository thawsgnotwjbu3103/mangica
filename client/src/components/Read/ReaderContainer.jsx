import ScrollReader from "./ScrollReader"
import VerticalReader from "./VerticalReader"

export default ({ images, option }) => {
  return (
    <>  
    {images && option >= 0 ? (
      <>
        {option == 0 && <ScrollReader images={images} />}
        {option == 1 && <VerticalReader dir={"ltr"} images={images}/>}
        {option == 2 && <VerticalReader dir={"rtl"} images={images}/>}
      </>
    ) : ""}
    </>
  )
}