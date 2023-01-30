import ScrollReader from "./ScrollReader"

export default ({ images, option }) => {

  return (
    <>  
    {images && option ? (
      <>
        {option == 0 && <ScrollReader images={images} />}
        {option == 1 && <></>}
        {option == 2 && <></>}
      </>
    ) : ""}
    </>
  )
}