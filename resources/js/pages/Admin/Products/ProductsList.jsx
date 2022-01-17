import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from '../Components/AdminHeader'

const ProductsList = () => {
    return (
        <>
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper pt-0">
            <AdminHeader />
            <div className="main-panel mt-5">
            <div className="content-wrapper">
          <div className="card">
              <div className='card-header d-flex justify-content-between align-items-center'>
                  <h3 className='card-title mb-0 my-2'>Products</h3>

                  <Link to={'CreateProduct'}  className="btn btn-primary me-2">
                  Create New
                    </Link>
              </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table id="order-listing" className="table">
                      <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Purchased On</th>
                            <th>Customer</th>
                            <th>Ship to</th>
                            <th>Base Price</th>
                            <th>Purchased Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>1</td>
                            <td>2012/08/03</td>
                            <td>Edinburgh</td>
                            <td>New York</td>
                            <td>$1500</td>
                            <td>$3200</td>
                            <td>
                              <label className="badge badge-info">On hold</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2015/04/01</td>
                            <td>Doe</td>
                            <td>Brazil</td>
                            <td>$4500</td>
                            <td>$7500</td>
                            <td>
                              <label className="badge badge-danger">Pending</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2010/11/21</td>
                            <td>Sam</td>
                            <td>Tokyo</td>
                            <td>$2100</td>
                            <td>$6300</td>
                            <td>
                              <label className="badge badge-success">Closed</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>2016/01/12</td>
                            <td>Sam</td>
                            <td>Tokyo</td>
                            <td>$2100</td>
                            <td>$6300</td>
                            <td>
                              <label className="badge badge-success">Closed</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2017/12/28</td>
                            <td>Sam</td>
                            <td>Tokyo</td>
                            <td>$2100</td>
                            <td>$6300</td>
                            <td>
                              <label className="badge badge-success">Closed</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>2000/10/30</td>
                            <td>Sam</td>
                            <td>Tokyo</td>
                            <td>$2100</td>
                            <td>$6300</td>
                            <td>
                              <label className="badge badge-info">On-hold</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>2011/03/11</td>
                            <td>Cris</td>
                            <td>Tokyo</td>
                            <td>$2100</td>
                            <td>$6300</td>
                            <td>
                              <label className="badge badge-success">Closed</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>2015/06/25</td>
                            <td>Tim</td>
                            <td>Italy</td>
                            <td>$6300</td>
                            <td>$2100</td>
                            <td>
                              <label className="badge badge-info">On-hold</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>2016/11/12</td>
                            <td>John</td>
                            <td>Tokyo</td>
                            <td>$2100</td>
                            <td>$6300</td>
                            <td>
                              <label className="badge badge-success">Closed</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>2003/12/26</td>
                            <td>Tom</td>
                            <td>Germany</td>
                            <td>$1100</td>
                            <td>$2300</td>
                            <td>
                              <label className="badge badge-danger">Pending</label>
                            </td>
                            <td>
                              <button className="btn btn-outline-primary">View</button>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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

export default ProductsList
