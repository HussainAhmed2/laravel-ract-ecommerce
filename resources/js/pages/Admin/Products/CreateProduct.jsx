import React,{useState} from 'react'
import AdminHeader from '../Components/AdminHeader'
import { RMIUploader } from "react-multiple-image-uploader";
import { useHistory } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { AdminfetchMediaImagesAction } from '../../../Redux/Actions/Admin/AdminMediaImage.Actions';

const CreateProduct = () => {

    const { Admin } = useSelector((state) => state.ADMIN_LOGIN);

    const { MediaImages } = useSelector((state) => state.MEDIA_IMAGES);
    const[getMediaImages,SetMediaImages] = React.useState([])
    const [loadMediaImages , setloadMediaImages] = React.useState(false)
    const userid = Admin.user.id;
    const token = Admin?.token;
    const url = process.env.MIX_APP_URL || "";
  console.log("mediaimage",MediaImages)

    const dataSources = [
        {
          id: 1,
          dataURL: "https://picsum.photos/seed/1/600",
          image_name : "product-1.jpg"
        },
        {
          id: 2,
          dataURL: "https://picsum.photos/seed/2/600",
          image_name : "product-2.jpg"
        },
        {
          id: 3,
          dataURL: "https://picsum.photos/seed/3/600",
        },
        {
          id: 4,
          dataURL: "https://picsum.photos/seed/4/600",
        },
        {
          id: 5,
          dataURL: "https://picsum.photos/seed/5/600",
        },
        {
          id: 6,
          dataURL: "https://picsum.photos/seed/6/600",
        },
        {
          id: 7,
          dataURL: "https://picsum.photos/seed/7/600",
        },
        {
          id: 8,
          dataURL: "https://picsum.photos/seed/8/600",
        },
        {
          id: 9,
          dataURL: "https://picsum.photos/seed/9/600",
        },
        {
          id: 10,
          dataURL: "https://picsum.photos/seed/10/600",
        },
      ];


const [uploadedImage,setUploadedImages] = React.useState([]);

const [productImage,setProductImage]         =      React.useState("");
const [productName,setProductName]           =      React.useState("");
const [productPrice,setProductPrice]         =      React.useState("");
const [productQTY,setProductQTY]             =      React.useState("");
const [categoryID,setCategoryID]             =      React.useState("");
const [brandID,setBrandID]                   =      React.useState("");
const [description,setDescription]           =      React.useState("");

const history                                =      useHistory()
const dispatch                               =      useDispatch()



const SubmitCreateProduct = () => {

    const postData = new FormData()
    postData.append('product_image',productImage)
    postData.append('product_name',productName)
    postData.append('product_price',productPrice)
    postData.append('product_qty',productQTY)
    postData.append('category_id',categoryID)
    postData.append('brand_id',brandID)
    postData.append('description',description)

    postData.append('description',description)


}




      const [visible, setVisible] = useState(false);
      const handleSetVisible = () => {
        setVisible(true);
      };
      const hideModal = () => {
        setVisible(false);
      };
      const onUpload = (data) => {
        setUploadedImages(data)
      };
      const onSelect = (data) => {
        console.log("Select files", data);
      };
      const onRemove = (id) => {
        console.log("Remove image id", id);
      };



  const Description = (e) =>{
    setDescription(e.target.value);

  }

  const Submit = (e) =>{
   e.preventDefault();
    var iframe = document.getElementById('tinyMceExample_ifr');
    console.log(iframe.contentDocument.body.innerHTML);
  }

  React.useEffect(()=>{
      dispatch(AdminfetchMediaImagesAction(token,userid)).then(()=>{
        setloadMediaImages(true)
        SetMediaImages({id:MediaImages.id, dataURL:url+MediaImages.image})
      })
    console.log("loaded images",getMediaImages)
  },[loadMediaImages])
    return (
        <>
            <div className="container-scroller">
            <div className="container-fluid page-body-wrapper pt-0">
            <AdminHeader />
            <div className="main-panel mt-5">
                <div className='content-wrapper'>
                <div className="col-12 grid-margin stretch-card">
              <div className="card">
              <div className='card-header d-flex justify-content-between align-items-center'>
                  <h3 className='card-title mb-0 my-2'>Create Product</h3>
              </div>
                <div className="card-body">

                  <p className="card-description">
                    Basic form elements
                  </p>
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputName1">Product Name</label>
                      <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail3">Price</label>
                      <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword4">Quantity</label>
                      <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
                    </div>

                    <div className="form-group">
                      <label>Image</label>
                      <input type="file" name="img[]" className="file-upload-default" />
                      <div className="input-group col-xs-12">
                        <input type="text" className="form-control file-upload-info" disabled="" placeholder="Upload Image" />
                        <span className="input-group-append">
                          <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleTextarea1">Description</label>
                      <textarea id='tinyMceExample' placeholder='Description' onChange={Description}>

                  </textarea>
                    </div>
                   {!loadMediaImages ? "Loading..." :
                    <>
                      <div className="App">
                    <button onClick={handleSetVisible}>Show Me</button>
                        <RMIUploader
                            isOpen={visible}
                            hideModal={hideModal}
                            onSelect={onSelect}
                            onUpload={onUpload}
                            onRemove={onRemove}
                            dataSources={MediaImages}
                        />
                        </div>
                    </>}

                    <button  className="btn btn-primary me-2" onClick={Submit}>Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default CreateProduct
