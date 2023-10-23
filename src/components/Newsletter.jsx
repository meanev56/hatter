import React, { useState } from 'react'


const Newsletter = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];


  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  
    return (
    <div className="absolute w-[1446px] h-[410px] top-[4405px] left-0">
    <div className="relative w-[1440px] h-[410px] bg-[#f8f1ef]">
      <div className="absolute top-[48px] left-[628px] [font-family:'Poppins',Helvetica] font-light text-[#957674] text-[16px] text-center tracking-[0] leading-[normal]">
        Keep up-to-date on us
      </div>
      <div className="absolute w-[738px] h-[44px] top-[287px] left-[228px]">
        <div className="absolute w-[236px] top-[-140px] left-[320px] [font-family:'Poppins',Helvetica] font-light text-[#dbcac5] text-[28px] text-center tracking-[0] leading-[normal]">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
       
        </div>
       
      </div>
      <div className="absolute h-[110px] top-[53px] left-[471px] [font-family:'Playfair_Display',Helvetica] font-bold text-dark-copy text-[102px] text-center tracking-[0] leading-[110px] whitespace-nowrap">
        Newsletter
      </div>
      
    </div>
  </div>
  )
}

export default Newsletter
