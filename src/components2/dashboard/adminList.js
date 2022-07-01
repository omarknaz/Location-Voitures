import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import Sidebar from "./layouts/sidebar";
function AdminList() {

    const navigate = useNavigate();
    const [admin, setadmins] = useState([]);
    const LogoutSubmit = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');


    }
    //List admin 
    useEffect(() => {
        let isMounted = true

        const token = localStorage.getItem('token');

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + `${token}`
        }

        axios.get("http://127.0.0.1:8000/api/ShowAdmin", {
            headers: headers
        })
            .then(res => {
                console.log('heydata', res.data)
                setadmins(res.data.admins)


            }).catch(err => {
                console.log(err)
            })

        return () => {
            isMounted = false
        };

    }, [navigate]);

    function deleteOperation(id) {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + `${token}`
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
               await  axios.delete("http://127.0.0.1:8000/api/deleteadmin/" + id, {
                    headers: headers
                })
                    .then(res => {
                        console.log(res.data.message)




                    }).catch(err => {
                        console.log(err)
                    })
                window.location.reload(false);

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })



    }

    return (

        <div className="wrapper ">
            <Sidebar/>
            <div className="main-panel">
         
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title"> Admins</h4>
                                </div>
                                <div className="update ml-auto mr-auto">
                                    <Link to="/addadmins">
                                        <button className="buton" type="button"> Add Admins</button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">



                                        <table className="table">
                                            <thead className=" text-primary">
                                                <tr>
                                                    <th>
                                                        Name
                                                    </th>
                                                    <th>
                                                        Email
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {admin?.map((admins) => (
                                                    <tr>
                                                        <td>
                                                            <p>{admins.name}</p>
                                                        </td>
                                                        <td>
                                                            <p>{admins.email}</p>
                                                        </td>
                                                        &nbsp; &nbsp; &nbsp;

                                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                                            Update Admins
                                                        </button>
                                                        {/* Modal */}
                                                        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered" role="document">

                                                                <div className="modal-body">
                                                                    <div className="wheel-register-block">
                                                                        <div className="container">
                                                                            <div className="row">
                                                                                <div id="reg" className="col-md-7 padd-r0">
                                                                                    <div id="add" className="wheel-register-log marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                                                                                        <div className="modal-header">
                                                                                            <h5 id="update" className="modal-title" >Update Vehicle</h5>
                                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                <span aria-hidden="true">×</span>
                                                                                            </button>



                                                                                            <div className="wheel-header">
                                                                                                <h5>Update Admin </h5>

                                                                                            </div>
                                                                                            <form>
                                                                                                <input type="text" placeholder="First Name" required />
                                                                                                <input type="text" placeholder="Last Name" required />
                                                                                                <input type="Email" placeholder="Email" required />
                                                                                                {/* <input type="text" placeholder="Username"   />
                              <input type="text" placeholder="CIN"  /> */}
                                                                                                <input type="text" placeholder="Phone" required />
                                                                                                <input type="text" placeholder="Adresse" required />
                                                                                                <input type="password" placeholder="Password" required />

                                                                                                <label htmlFor="input-val1">
                                                                                                </label>
                                                                                                <button className="wheel-btn" >Save Changes</button>
                                                                                            </form>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>


                                                      


                                                        &nbsp; &nbsp; &nbsp;
                                                        <button id="red" className="btn btn-primary btn-round" type="button" onClick={() => deleteOperation(admins.id)} > Delete</button>
                                                        &nbsp; &nbsp; &nbsp;

                                                    </tr>
                                                ))}



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




    );
}
export default AdminList