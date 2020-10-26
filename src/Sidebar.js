import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';


const Sidebar = () => {


return(
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          
          <li className="nav-item">
           
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            <i class="fas fa-clock"></i>
              <span>Nyeste jobopslag </span>
          </NavLink>
          </li>  
          
        

          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/detail">
            <i class="fas fa-shopping-cart"></i>
              Detail
            </NavLink>
          </li>
         

 
          <li className="nav-item">
            <NavLink to="/salg" className="nav-link" activeClassName="active">
            <i class="fas fa-funnel-dollar"></i>
              Salg og marketing
             </NavLink>  
          </li>



          <li className="nav-item">
         <NavLink to="/kontor" className="nav-link" activeClassName="active">
            <i class="fas fa-briefcase"></i>
              Kontor og kommunikation
     </NavLink>
              
          </li>



          <li className="nav-item">
     <NavLink to="/it" className="nav-link" activeClassName="active">       
            <i class="fas fa-microchip"></i>
              IT 
      </NavLink>
       
          </li>

        </ul>
      </div>
    </nav>
)
}

export default Sidebar;