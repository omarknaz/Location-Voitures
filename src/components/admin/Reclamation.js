import React from "react";
import { Link } from 'react-router-dom';
function Reclamation() {
      return (
  
        <div className="wrapper ">
          <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
              <a className="simple-text logo-mini">
                <div className="logo-image-small">
                <img src="assets/images/logo-small.png" />
                </div> 
                <p />
              </a>
              <a className="simple-text logo-normal">
                WheelCar Backoffice
                <div className="logo-image-big">
                </div>
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li>
                  <a><i className="nc-icon nc-bank" />
                    <Link to="/admin">Dashboard</Link></a>
                  
                </li>

                <li>
                  <a><i className="nc-chart-bar-32" />
                   <Link to="/datatables">Data tables</Link></a>
                    
                  
                </li>

               
              

                <li className="active ">
                  <a> <i className="nc-icon nc-bell-55" />
                    <p>Complaint</p></a>
                   
                  
                </li>
                <li>
              <a><i className="nc-icon nc-single-02" />
                    <Link to="/clients">Clients</Link>
                  </a>
                    
                </li>
                <li>
              <a><i className="nc-icon nc-single-02" />
                    <Link to="/voitures">Voitures</Link>
                  </a>
                    
                </li>
              </ul>
            </div>
          </div>
          <div className="main-panel" style={{height: '100vh'}}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
              <div className="container-fluid">
                <div className="navbar-wrapper">
                  <div className="navbar-toggle">
                    
                  </div>
                  <h3>List  Complaints</h3>
                </div>
                
                
              </div>
            </nav>
            {/* End Navbar */}
            <div className="wheel-bg2">
            <div className="container padd-lr0">
              <div className="row">
                <div className="col-xs-12">
                  <div className="wheel-header text-center marg-lg-t145 marg-sm-t50 marg-lg-b90">
                  <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Date</th>
                  <th scope="col">Complaint</th>
                  <th scope="col">User</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>22/06/2019</td>
                  <td> Objet : Demande d'indemnisation
                    Le 21/06/2019, j'ai effectu?? une r??servation par internet aupr??s de votre agence pour une location du 21/06 au 25/06.
                    Comme vous le constaterez sur le document ci-joint, j'ai choisi le v??hicule ****, ce qui correspond chez vous ?? la cat??gorie A. J'avais ??galement opt?? pour les options ****.
                    Or, lorsque je me suis pr??sent?? pour r??cup??rer le v??hicule, celui-ci n'??tait plus disponible. Vous m'avez alors propos?? un v??hicule d'une cat??gorie inf??rieure, le **** et vous m'avez alors refus??e toute remise commerciale.
                    Par la pr??sente, je vous mets en demeure de me verser un d??dommagement ?? hauteur de [montant] euros pour le pr??judice subi auquel s'ajoutera la diff??rence de tarif entre les deux cat??gories soit **** euros.
                    A d??faut de r??ponse de votre part dans un d??lai de 8 jours, je me verrai dans l'obligation d'alerter la direction d??partementale de la concurrence, de la consommation et de la r??pression des fraudes ?? propos de vos agissements ainsi que d'engager un recours devant les tribunaux comp??tents.
                    Je vous prie de croire, Madame, Monsieur, ?? mes sinc??res salutations.</td>
                  <td>
                    <br />
                    <br />
                    <br />
                    Omar Knaz
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>03/11/2020</td>
                  <td>Objet : R??clamation au sujet de la facture 
                    Madame, Monsieur,
                    Pour la p??riode du  au, j'ai lou?? un v??hicule aupr??s de votre agence de location de voiture sous le contrat num??ro.
                    Lors de la restitution du v??hicule, nous avons proc??d?? ?? un ??tat des lieux contradictoire du v??hicule et constat?? que le kilom??trage ??tait de.
                    Or vous m'avez factur?? un kilom??trage nettement sup??rieur ainsi qu'une r??paration d'une rayure non constat??e sur l'??tat des lieux et une p??nalit?? pour des frais de carburant, ce que je conteste vivement. Par cons??quent, je vous mets en demeure de revoir le montant de votre facture.
                    Sans r??ponse de votre part dans un d??lai de 8 jours, je me verrai dans l'obligation d'alerter la direction d??partementale de la concurrence, de la consommation et de la r??pression des fraudes ?? propos de vos agissements ainsi que d'engager un recours devant les tribunaux comp??tents.
                    Je vous prie de croire, Madame, Monsieur, ?? mes sinc??res salutations.</td>
                  <td>
                    <br />
                    <br />
                    <br />
                    Sadek Toumi
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
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
        
      );
    }
  export default Reclamation