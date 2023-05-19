import React from "react";


function Learn() {
  return (
    <div>
       <div className="container">
          <div className="d-flex flex-column">
            <h3 className="py-5 text-success">Learn Cyber Security</h3>
            <h2>What is Cyber Security?</h2>
            <p className="text-tertiary">Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing, and can be divided into a few common categories.</p>
            <img className="m-auto" src="https://i.postimg.cc/k4JZpxYx/cyver-security1.jpg" width={500}/>

            <ul className="py-5 border-end">
               <li><p> <h5>Network security</h5> is the practice of securing a computer network from intruders, whether targeted attackers or opportunistic malware.</p></li>
               <li><p> <h5> Application security</h5> focuses on keeping software and devices free of threats. A compromised application could provide access to the data its designed to protect. Successful security begins in the design stage, well before a program or device is deployed.</p></li>
               <li><p> <h5>Information security</h5> protects the integrity and privacy of data, both in storage and in transit.</p></li>
               <li><p> <h5> Operational security</h5> includes the processes and decisions for handling and protecting data assets. The permissions users have when accessing a network and the procedures that determine how and where data may be stored or shared all fall under this umbrella.</p></li>
               <li><p> <h5> Disaster recovery and business continuity</h5> define how an organization responds to a cyber-security incident or any other event that causes the loss of operations or data. Disaster recovery policies dictate how the organization restores its operations and information to return to the same operating capacity as before the event. Business continuity is the plan the organization falls back on while trying to operate without certain resources.</p></li>
               <li><p> <h5>End-user education</h5> addresses the most unpredictable cyber-security factor: people. Anyone can accidentally introduce a virus to an otherwise secure system by failing to follow good security practices. Teaching users to delete suspicious email attachments, not plug in unidentified USB drives, and various other important lessons is vital for the security of any organization.</p></li>
               
            </ul>
          </div>
       </div>
    </div>
  );
}

export default Learn;