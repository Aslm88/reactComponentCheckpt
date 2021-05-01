import React from "react";
import './App.css';
import Myname from "./Component/profile/FullName.js";
import ProfilePhoto from "./Component/profile/ProfilePhoto.js";
import MyAdress from "./Component/profile/Address.js";

function App() {
  return (
<>
<div className="container">
<h1>My Profile</h1>
 <br/>
<ProfilePhoto/>
<br/>
<Myname/>
<br/>
<MyAdress/>
</div>
</>
  );
}

export default App;
