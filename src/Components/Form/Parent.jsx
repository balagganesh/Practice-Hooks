import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";

function Parent() {
  const handleSignIn = (data) => {
    console.log("Sign In Data:", data);
    alert(`Sign In Successful!\nEmail: ${data.email}`);
  };

  const handleSignUp = (data) => {
    console.log("Sign Up Data:", data);
    alert(`Sign Up Successful!\nName: ${data.name}\nEmail: ${data.email}`);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Signin onSubmit={handleSignIn} />
      <Signup onSubmit={handleSignUp} />
    </div>
  );
}

export default Parent;
