import React from "react";

export default function Signup() {
  return (
    <div>
      <section>
        <div className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">signup</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="firestname">
                      <i class="zmdi zmdi-account"></i>
                    </label>
                    <input
                      type="text"
                      name="firestname"
                      id="firestname"
                      autoComplete="off"
                      placeholder="firest name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor=" lastname">
                      <i class="zmdi zmdi-account"></i>
                    </label>
                    <input
                      type="text"
                      name="last name"
                      id="lastname"
                      autoComplete="off"
                      placeholder="last name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor=" gender">
                      <i class="zmdi zmdi-account"></i>
                    </label>
                    <input type="radio" id="MALE" name="GENDER" value="HTML" />
  <label for="html">MALE</label><br/>
  <input type="radio" id="FEMALE" name="GENDER" value="CSS"/>
  <label for="FEMALE">FEMALE</label><br/>

                  </div>
                  <div className="form-group">
                    <label htmlFor="date of birth">
                    <i class="zmdi zmdi-calendar"></i>

                    </label>
                    <input
                      type="date"
                      name="date of birth"
                      id="date of birth"
                      autoComplete="off"
                      placeholder="date of birth"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ADDRESS">
                    <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="text"
                      name="ADDRESS"
                      id="address"
                      autoComplete="off"
                      placeholder="ADDRESS"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="father name">
                    <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="father name"
                      id="father name"
                      autoComplete="off"
                      placeholder="enter father name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fatheremail">
                    <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="fatheremail"
                      id="fatheremail"
                      autoComplete="off"
                      placeholder="father email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mother name">
                    <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="mother name"
                      id="mother name"
                      autoComplete="off"
                      placeholder="enter mother name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                    <i class="zmdi zmdi-phone"></i> </label>
                    <input
                      type="TEXT"
                      name="number"
                      id="name"
                      autoComplete="off"
                      placeholder="PHONE NUMBER"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="EXTRA ACTIVITES">

                    <i class="zmdi zmdi-account-calendar"></i>  
                    </label>
                    <input
                      type="text"
                      name="EXTRA ACITIVIES"
                      id="EXTRA ACITIVIES"
                      autoComplete="off"
                      placeholder="EXTRA ACTIVITIES"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                    <i class="zmdi zmdi-account-calendar"></i>

                    </label>
                    <input
                      type="text"
                      name="password"
                      id="Password"
                      autoComplete="off"
                      placeholder="your password"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account"></i>
                    </label>
                    <input
                      type="text"
                      name="conform password"
                      id="conform"
                      autoComplete="off"
                      placeholder="your conform password"
                    ></input>
                  </div>
                  <div className="form-group form-button">
                    <button>Register</button>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
