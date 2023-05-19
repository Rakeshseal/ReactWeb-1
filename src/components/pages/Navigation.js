import React from "react";


function Navigation() {
  return (
    
    
        <div className="container-fluid border-bottom">
            <div className="container">
                <nav class="navbar navbar-expand-lg bg-body-tertiary gx-0">
                   <div class="container-fluid gx-0">
                     <a class="navbar-brand text-decoration-none text-primary fs-3 text" href="/">CyberSaint</a>
                     <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon ">
                          
                       </span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                             <li class="nav-item">
                                 <a className="nav-link active text-dark" aria-current="page" href="/">Home</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link text-dark" href="/">About us</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link text-dark" href="/">Contact us</a>
                             </li>
                         </ul>
                         <div class="d-flex " style={{gap:"10px"}}>
                           <button class="btn btn-outline-info " type="submit">Login</button>
                           <button class="btn btn-outline-info " type="submit">Signeup</button>
                           
                         </div>
                     </div>
                   </div>
                </nav>
            </div>
       </div>
    
   
    
  );
}

export default Navigation;