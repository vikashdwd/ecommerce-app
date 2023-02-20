import { Link } from 'react-router-dom';
import './Login.css';
import Password from './Password';
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
					<Password/>

</form>



</div>

</div>
    );
}
export default Login

// eslint-disable-next-line no-unused-expressions
