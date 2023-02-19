import './Login.css';


function Signup(){

    return(
<div className= "Signup">
	<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
	</form>
</div>
    );
}

export default Signup;