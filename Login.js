import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div>
      <section className='sign-in'>
        <div className='container mt-5'>
          <div className='signin-content'>
            <div className='signin-image'>
              <figure>
                <img/>
              </figure>
              <NavLink to='/signup' className='signup-image-link'>Create an Account</NavLink>
            </div>

            <div className='signin-form'>
              <h2 className='form-title'>Sign up</h2>
              <form className='register-form' id='register-form'>

                

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login