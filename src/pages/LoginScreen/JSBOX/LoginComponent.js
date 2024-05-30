import React from 'react';
import '../CSBOX/LoginComponent.css';

const LoginComponent = () => {

    return (
        <>
            <div class="container logincomp">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                            <h1 className='title'> InvoBill </h1>
                            {/* <div class="d-flex justify-content-end social_icon">
                                <span><i class="fab fa-facebook-square"></i></span>
                                <span><i class="fab fa-google-plus-square"></i></span>
                                <span><i class="fab fa-twitter-square"></i></span>
                            </div> */}
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="input-group form-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="username" />

                                </div>
                                <div class="input-group form-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" />
                                </div>
                                {/* <div class="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                </div> */}
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        {/* <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div class="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div> */}
        </>
    );

};

export default LoginComponent;