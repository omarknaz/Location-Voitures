import React from "react";
function Historical() {
      return (
        <div>
          {/* MAIN */}
          <div className="wheel-menu-wrap ">
            <div className="container-fluid wheel-bg1">
              <div className="row">
                <div className="col-sm-3">
                  <div className="wheel-logo">
                    <a><img src="assets/images/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-sm-9 col-xs-12 padd-lr0">
                  <div className="wheel-top-menu clearfix">
                    <div className="wheel-top-menu-info">
                      <div className="top-menu-item"><a href="#"><i className="fa fa-phone" /><span> 73 363 562</span></a></div>
                      <div className="top-menu-item"><a href="#"><i className="fa fa-envelope" /><span>Wheelcar@gmail.com</span></a></div>
                    </div>
                    <div className="wheel-top-menu-log">
                      <div className="top-menu-item">
                        <div className="dropdown wheel-user-ico">
                          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Account
                            <span className="caret" />
                          </button>
                          <ul className="dropdown-menu">
                            <li><a routerlink="/login">LogOut</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9 ">
                  <div className="wheel-navigation">
                    <nav id="dl-menu">
                      {/* class="dl-menu" */}
                      <ul className="main-menu dl-menu">
                        <li className="menu-item   current-menu-parent menu-item-has-children    ">
                          <a>Home</a>
                        </li>
                        <li className="menu-item current-menu-parent menu-item-has-children  ">
                          <a routerlink="/list"> Listing </a>
                          {/*class=" dl-submenu "*/}
                        </li><li>
                          <ul>
                            <li className="menu-item "><a>contact</a></li>
                            <li className="menu-item  "><a routerlink="/reservation">Reservation</a></li>
                            <li className="menu-item"><a routerlink="/profile">Profil</a></li>
                            <li className="menu-item active-color"><a>Historical</a></li>
                            <li className="menu-item "><a routerlink="/complaint">Complaint</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wheel-start3">
            <img src="assets/images/bg6.jpg" alt="" className="wheel-img" />
            <div className="container">
              <div className="row">
                <div className="col-xs-12 padd-lr0">
                  <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                    <h3>Historical</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h2>Reservations</h2>
          <br />
          <br />
         <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Etat</th>
                <th scope="col">Véhicule</th>
                <th scope="col">Date début</th>
                <th scope="col">Date fin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>En cours</td>
                <td>MERCEDES-BENZ</td>
                <td>12/05/2022</td>
                <td>16/05/2022</td>
                <button type="submit" className="btn btn-primary btn-round">Update </button>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Validé</td>
                <td>Fiat 500</td>
                <td>03/11/2021</td>
                <td>12/11/2021</td>
                <button className="button" type="button"> Delete</button>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Validé</td>
                <td>BMW</td>
                <td>26/08/2021</td>
                <td>31/08/2021</td>
                <button className="button" type="button"> Delete</button>
              </tr><tr>
                <th scope="row">4</th>
                <td>Validé</td>
                <td>Golf 7</td>
                <td>17/01/2019</td>
                <td>01/02/2019</td>
                <button className="button" type="button"> Delete</button>
              </tr>
            </tbody>
          </table>
          <br />
          <button className="buton" type="button"> Add Reservation</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Complaints</h2>
          <br />
          <br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Date</th>
                <th scope="col">Complaint</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>22/06/2019</td>
                <td> Objet : Demande d'indemnisation
                  Le 21/06/2019, j'ai effectué une réservation par internet auprès de votre agence pour une location du 21/06 au 25/06.
                  Comme vous le constaterez sur le document ci-joint, j'ai choisi le véhicule ****, ce qui correspond chez vous à la catégorie A. J'avais également opté pour les options ****.
                  Or, lorsque je me suis présenté pour récupérer le véhicule, celui-ci n'était plus disponible. Vous m'avez alors proposé un véhicule d'une catégorie inférieure, le **** et vous m'avez alors refusée toute remise commerciale.
                  Par la présente, je vous mets en demeure de me verser un dédommagement à hauteur de [montant] euros pour le préjudice subi auquel s'ajoutera la différence de tarif entre les deux catégories soit **** euros.
                  A défaut de réponse de votre part dans un délai de 8 jours, je me verrai dans l'obligation d'alerter la direction départementale de la concurrence, de la consommation et de la répression des fraudes à propos de vos agissements ainsi que d'engager un recours devant les tribunaux compétents.
                  Je vous prie de croire, Madame, Monsieur, à mes sincères salutations.</td>
                <td>
                  <br />
                  <br />
                  <br />
                  <button className="button" type="button"> Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>03/11/2020</td>
                <td>Objet : Réclamation au sujet de la facture 
                  Madame, Monsieur,
                  Pour la période du  au, j'ai loué un véhicule auprès de votre agence de location de voiture sous le contrat numéro.
                  Lors de la restitution du véhicule, nous avons procédé à un état des lieux contradictoire du véhicule et constaté que le kilométrage était de.
                  Or vous m'avez facturé un kilométrage nettement supérieur ainsi qu'une réparation d'une rayure non constatée sur l'état des lieux et une pénalité pour des frais de carburant, ce que je conteste vivement. Par conséquent, je vous mets en demeure de revoir le montant de votre facture.
                  Sans réponse de votre part dans un délai de 8 jours, je me verrai dans l'obligation d'alerter la direction départementale de la concurrence, de la consommation et de la répression des fraudes à propos de vos agissements ainsi que d'engager un recours devant les tribunaux compétents.
                  Je vous prie de croire, Madame, Monsieur, à mes sincères salutations.</td>
                <td>
                  <br />
                  <br />
                  <br />
                  <button className="button" type="button"> Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="buton" type="button"> Add Complaint</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="wheel-footer-info wheel-bg6">
            <div className="container">
              <div className="row">
                <div className="wheel-soc">
                  <a className="fa fa-twitter" />
                  <a className="fa fa-facebook" />
                  <a className="fa fa-linkedin" />
                  <a className="fa fa-instagram" />
                  <a className="fa fa-share-alt" />
                  <ul>
                    <li><span><i className="fa fa-map-marker" /> 06 Rue de perfection Sousse 
                        Tunisia</span>
                    </li> <br />
                    <li><a href="#"><span><i className="fa fa-phone" /> 73 363 562</span></a></li> <br />
                    <li><a href="#"><span><i className="fa fa-envelope" /> Wheelcar@gmail.com</span></a></li>
                  </ul>
                  <div className="col-lg-8 col-sm-6  padd-lr0"><span> ©   All rights reserved WHEEL 2022  |</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  export default Historical