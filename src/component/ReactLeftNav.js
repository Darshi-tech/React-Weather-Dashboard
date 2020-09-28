import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './create';
import Edit from './edit';
import Login from '../component/Login';
import SignUp from '../components/SignUp';
import CustomLink from '../components/CustomLink';
import SignIn from '../components/SignIn';
import SignupForm from '../components/SignupForm';
import Profile from '../components/Profile';
import Customize from '../components/Customize';
import Search from '../components/Search';
import '../style.css';
import '../index.css'; 
import { Button} from 'react-bootstrap';
class ReactLeftNav extends Component {
render() {
return ( 
   
<nav className="navbar-primary">
   <ul class="navbar-primary-menu">
      <li>
         <CustomLink type="text" tag={Link} to='/' className="img menu" onClick={ this.handleSubmit }></CustomLink>
      </li>
      <li>
         <CustomLink type="text" tag={Link} to='/Profile' className="img sign-in" onClick={ this.handleSubmit }></CustomLink>
      </li>
      <li>
         <CustomLink type="text" tag={Link} to='/Search' className="img search" onClick={ this.handleSubmit }></CustomLink>
      </li>
      <li>
         <CustomLink type="text" tag={Link} to='/Report' className="img map" onClick={ this.handleSubmit }></CustomLink>
      </li>
      <li>
         <CustomLink type="text" tag={Link} to='/Customize' className="img settings" onClick={ this.handleSubmit }></CustomLink>
      </li>
   </ul>
</nav>
  
);
}
}
export default ReactLeftNav;