import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Sidebar from "./layouts/sidebar";
function CarsList() {
  const [modalOpen, setModalOpen] = useState(false);
  return (

    <div className="wrapper ">
      <Sidebar />
      <div className="main-panel">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title"> Les Voitures</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">


                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>
                            Id
                          </th>
                          <th>
                            Matricule
                          </th>

                          <th>
                            Kilométrage
                          </th>
                          <th>
                            Date mise en circulation
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>

                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            112TUN58960
                          </td>

                          <td>
                            80000km
                          </td>
                          <td>
                            20/02/2021
                          </td>
                          <td>
                            <button type="button" className="btn btn-primary" onClick={() => { setModalOpen(true); }} >Update </button>
                            <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            2
                          </td>
                          <td>
                            170TUN7520
                          </td>

                          <td>
                            859000Km
                          </td>
                          <td>
                            08/11/2022
                          </td>
                          <td>
                            <button type="button" className="btn btn-primary" onClick={() => { setModalOpen(true); }} >Update </button>
                            <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3
                          </td>
                          <td>
                            140TUN14563
                          </td>

                          <td>
                            2500Km
                          </td>
                          <td>
                            03/05/2022
                          </td>
                          <td>
                            <button type="button" className="btn btn-primary" onClick={() => { setModalOpen(true); }} >Update </button>
                            <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
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

      { modalOpen && 
      <div className="modalBackground" onClick={() => { 
            
            setModalOpen(false); 
            }}>
            <div className="modalContainer" onClick={e => { e.stopPropagation(); }}>
            <div className="body">
            <form >
                <div className="inputs">
                    <input type="text" name="Matricule" placeholder="Matricule" className='form-control'/>
                </div>
                <div className="inputs">
                    <input type="text" name="Kilométrage" placeholder="Kilométrage"className='form-control' />

                </div>
                <div className="inputs">
                    <input name="Date_circulation" placeholder="Date mise en circulation" type="text" className='form-control'/>
                </div>
                <button type="submit" className="sign-up-butt">Update</button>
            </form>
              </div>
            </div>
      </div>
} 
    </div>



  );
}
export default CarsList