import React from "react";
import Navbar from "../Navbar";
function Historical() {
      return (
        <>
        <div><Navbar /></div>
        <div>
          {/* MAIN */}
          
          <div className="wheel-start3">
           
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
         <div className="wheel-bg2">
            <div className="container padd-lr0">
              <div className="row">
                <div className="col-xs-12">
                  <div className="wheel-header text-center marg-lg-t145 marg-sm-t50 marg-lg-b90">
                  <h3>List  Reservations</h3>
          <br />
          <br />
          <br />
         <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Etat</th>
                <th scope="col">Véhicule</th>
                <th scope="col">Date début</th>
                <th scope="col">Date fin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>En cours</td>
                <td>MERCEDES-BENZ</td>
                <td>12/05/2022</td>
                <td>16/05/2022</td>
                <button type="submit" className="btn btn-primary btn-round">Update </button>
              </tr>
              <tr>
                
                <td>Validé</td>
                <td>Fiat 500</td>
                <td>03/11/2021</td>
                <td>12/11/2021</td>
               <button id="red" className="btn btn-primary btn-round"type="submit"> Delete</button>
              </tr>
              <tr>
                
                <td>Validé</td>
                <td>BMW</td>
                <td>26/08/2021</td>
                <td>31/08/2021</td>
                <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
              </tr>
                
            </tbody>
          </table>
          <button className="buton" type="button"> Add Reservation</button>
          </div>
          </div>
          </div>
          </div>
          </div>
          
          <br />
          
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="wheel-bg2">
            <div className="container padd-lr0">
              <div className="row">
                <div className="col-xs-12">
                  <div className="wheel-header text-center marg-lg-t145 marg-sm-t50 marg-lg-b90">
                  <h3>List  Complaints</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
             
                <th scope="col">Date</th>
                <th scope="col">Complaint</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
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
                  <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                </td>
              </tr>
              <tr>
              
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
                  <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="buton" type="button"> Add Complaint</button>
          </div>
          </div>
          </div>
          </div>
          </div>
        
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
        </>
      );
    }
  export default Historical