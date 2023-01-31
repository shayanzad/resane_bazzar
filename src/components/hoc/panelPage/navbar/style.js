import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  .deskNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    list-style-type: none;
    margin: 26px 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  li {
    float: right;
  }

  li a,
  .dropbtn {
    display: inline-block;
    color: var(--gray10);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover,
  .dropdown:hover .dropbtn {
    color: var(--gray15);
  }

  li.dropdown {
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: right;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  button {
    display: flex;
    justify-content: center;
    color: var(--gray8) !important;
    width: 143px;
    height: 60px;
    font-size: 14px;
  }



  .svg-icon{
    margin-left:8px;
    color: var(--gray2);
  }

  .mobileInfo{
    position: relative;
    top:14px;   
    right:10px; 
  }

  .userInfo{
    margin-right: 2px;
    font-size: 12px;
    position: relative;
    bottom: 2px;
  }

  .svg-lign{
    position: absolute; 
  left: 0; 
  right: 0; 
  top: 5px;
  margin-left: auto; 
  margin-right: auto; 
  }

/////////responsive menu

.container {
  max-width: 1050px;
  width: 100%;
  margin: auto;
}
.navbar {
  width: 100%;
  box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
  position: fixed;
  background-color: var(--pure-white);
  z-index: 10;
  right: 0;
}
a{
  color: var(--gray6) !important;
  display: flex !important;
  align-items: center !important;
}


.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
}

.navbar .menu-items {
  display: flex;
}

.navbar .nav-container li {
  list-style: none;
}

.navbar .nav-container a {
  text-decoration: none;
  color: #0e2431;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.7rem;
}

.navbar .nav-container a:hover{
    font-weight: bolder;
}

.nav-container {
  display: block;
  position: relative;
  height: 60px;
}

.nav-container .checkbox {
  position: fixed;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  right: 20px;
  z-index: 6;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: fixed;
  top: 17px;
  right: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 10px;
  background: var(--gray8);
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  padding-top: 60px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  height: 100vh;
  width: 75%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  padding-right: 45px;
  transition: transform 0.5s ease-in-out;
  text-align: right;
  position: fixed;
  top: 0;
  z-index: 4;
  background: white;
  color: var(--gray6);
}

.navbar .menu-items li {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.logo {
  position: absolute;
  top: -5px;
  left: 15px;
  font-size: 1.2rem;
  color: #0e2431;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
  box-shadow: 1px 0px 20rem var(--gray8);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo{
  display: none;
}

@media(min-width:481px){
  .show{
    display: block;
  }
}
@media(max-width:480px){
  .show{
    display: none;
  }
}

`;
