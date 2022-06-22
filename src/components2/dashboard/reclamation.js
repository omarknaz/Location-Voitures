import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "./layouts/sidebar";
function Reclamation() {
    return (

        <div className="wrapper ">
            <Sidebar />
            <div className="main-panel" style={{ height: '100vh' }}>

            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"> Les Reclamations</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        
                      <table className="table">
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
        </div>

    );
}
export default Reclamation