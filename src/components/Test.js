import React from "react";
import { Dropdown } from "bootstrap";


function Test(){
    return (
          
          
                <dropdown as="{ButtonGroup}">
                  <button variant="success">Split Button</button>
                  <Dropdown.toggle split variant="success" id="dropdown-split-basic">
                    <Dropdown.menu>
                      <Dropdown.item href="#/action-1">Action</Dropdown.item>
                      <Dropdown.item href="#/action-2">Another action</Dropdown.item>
                      <Dropdown.item href="#/action-3">Something else</Dropdown.item>
                    </Dropdown.menu>
                  </Dropdown.toggle></dropdown>
              );
            
            }
        
export default Test