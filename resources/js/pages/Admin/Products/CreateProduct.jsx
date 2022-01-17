import React,{useState} from 'react'
import AdminHeader from '../Components/AdminHeader'

const CreateProduct = () => {

 const [getDescription,setDescription] = useState();

  const Description = (e) =>{
    setDescription(e.target.value);

  }

  const Submit = (e) =>{
   e.preventDefault();
    var iframe = document.getElementById('tinyMceExample_ifr');
    console.log(iframe.contentDocument.body.innerHTML);
  }

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
