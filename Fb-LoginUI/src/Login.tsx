import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Login.css'

function Login() {
    return (
        <>
            <div className='row'>
            <div className="name-content col-lg-12 col-md-12 col-sm-12">
                <h1 className="logo">facebook</h1>
            </div>
            </div>

            <div className='row'>
            <div className="content">
                <div className="flex-div col-lg-12 col-md-12 col-sm-12">                        
                    <form>
                        <h1>Log in to Facebook</h1>
                        <input type="text" placeholder="Email Address or Phone Number" required />
                        <input type="password" placeholder="Password" required />
                        <button className="login">Log In</button>
                        <a href="#">Forgot Password ?</a>
                        <a href="#">Sign up for Facebook</a>
                        <hr />
                    </form>
                </div>
            </div>
            </div>
        
        </>
    );
}


export default Login;