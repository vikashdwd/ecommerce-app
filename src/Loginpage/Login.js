import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Password from './Password';
import Signup from './Signup';




function Login(){

	const [forgot,setForgot]= useState(0);



	if({forgot}>=1)
	{
		console.log("forgot");
		return(


<div class= "login_page">

<input type="checkbox" id="chk" aria-hidden="true"/>
<Signup/>
<div className="login">
<form>
			<label for="chk" aria-hidden="true">Login</label>
			<input type="email" name="email" placeholder="Email" required=""/>
			{/* <Password/> */}
			<button>Reset Password</button>
			{/* <Link to="/" id="forgot-password" onClick={setForgot(forgot+1)}>Forgot password?</Link> */}
</form>
</div>

</div>
	);
		}

		else
	console.log("Not forgot",{forgot});
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

							<Link to="/" id="forgot-password" onClick={()=>setForgot(forgot+1)}>Forgot password?</Link>

		</form>
		</div>

		</div>

			);



}
export default Login

// eslint-disable-next-line no-unused-expressions
