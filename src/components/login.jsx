import React from 'react';
import GooglePng from '../images/google.png';
import SignOut from '../images/icon-sign-out.svg';




function Login(){
    return(
        <>
            <section id="logged-out-view">
                <div className="container">
                    <h1 className="app-title">House of Assemble</h1>
                    
                    <div className="provider-buttons">
                        <button id="sign-in-with-google-btn" className="provider-btn">
                            <img src={GooglePng} className="google-btn-logo"/>
                            Sign in with Google
                        </button>
                    </div>
                    
                    <div className="auth-fields-and-buttons">
                        <input id="email-input" type="email" placeholder="Email"/>
                        <input id="password-input" type="password" placeholder="Password"/>
                        
                        <button id="sign-in-btn" className="primary-btn">Sign in</button>
                        <button id="create-account-btn" className="secondary-btn">Create Account</button>
                    </div>
                </div>
            </section>
            
            <section id="logged-in-view">
            <div class="container">
                <nav>
                    <button id="sign-out-btn" class="icon-btn">
                        <img src={SignOut} class="icon-img-btn"/>
                    </button>
                </nav>
                
                <div class="app-container">
                    <div class="user-section">
                        <img id="user-profile-picture"/>
                        <h2 id="user-greeting"></h2>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};


export default Login;