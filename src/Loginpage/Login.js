import './Login.css';
import Signup from './Signup';

function Login(){

    return (

<div class= "login_page">

		<input type="checkbox" id="chk" aria-hidden="true"/>
<Signup/>
<div className="login">

<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
</form>

</div>

</div>
    );
}
export default Login

// eslint-disable-next-line no-unused-expressions
