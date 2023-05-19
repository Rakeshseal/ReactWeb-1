import React from "react";
import Navigation from "./Navigation";
import Learn from "./Learn";


function Home() {
  return (
    <div>
      
     <Navigation/>
     
     
     <div className="container-fluid  gx-0" style={{backgroundImage: `url("https://i.postimg.cc/ZYrkDPmg/background-banner.png")`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'100vh'}}>
        <div className="container d-flex justify-content-between">
             <div className="container px-5 d-flex flex-column gx-0">
                <h1 className="text-info  fs-1 text" style=     {{marginTop:"13%"}}>CyberSaint</h1>
                <h4 className=" py-3">Learn Cyber Security</h4>
                <p >In the U.S., the National Institute of Standards and Technology (NIST) has created a cyber-security framework. To combat the proliferation of malicious code and aid in early detection, the framework recommends continuous, real-time monitoring of all electronic resources.</p>
                <a >
                  <button type="button" className="btn btn-outline-primary my-5" style={{width:"120px"}} >Start Now</button>
                </a>
             </div>
           <img className="my-5" src="https://i.postimg.cc/02vjKzHv/dexk-1.png" alt="" style={{height:"50%"}}/>
        </div> 
     </div>
     <div className="container-fluid h-auto">
       <Learn/>
     </div>
   </div>
    
  );
}

export default Home;