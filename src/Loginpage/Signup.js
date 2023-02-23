import './Login.css';
import dynButton from '../Elements/dynButton';
import { motion } from 'framer-motion';
function Signup(){

    return(
<div className= "Signup">
	<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>

					<motion.div
				    className="box"
     				whileHover={{ scale: 1.2 }}
      				whileTap={{ scale: 0.9 }}
      				transition={{ type: "spring", stiffness: 400, damping: 17 }}>
					<button type='submit'>Sign up</button></motion.div>
	</form>
</div>
    );
}

export default Signup;