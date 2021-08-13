import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
    render(){
        return<div>
            <div class="card" style={{width: '25rem',display:'flex'}}>
  <img src="https://thumbs.dreamstime.com/b/welcome-word-written-looking-card-wood-94326261.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">Welcome! you are now in home page</p>
    <Link to="/"> <button  id="login-btn">
          Back to Login page
          </button></Link>
  </div>


            </div>
        </div>
    }
}