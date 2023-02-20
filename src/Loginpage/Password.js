import { Link } from "react-router-dom";


function Password(){


    return(
        <div>
    <input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>

	<Link to="/forgotpass" id="forgot-password" onClick={()=>{}}>Forgot password?</Link>
    </div>
    );

}

export default Password;