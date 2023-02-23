import { Link } from "react-router-dom";
import Signup from "./Signup";
import { motion } from "framer-motion";

export default function ForgotPass()
{
    return(

			<motion.div
  			animate={{ }}
  			transition={{ delay: 1 }}>
							<div class= "login_page">
                            <form>
							<label id="reset-pass" aria-hidden="true">Reset Password</label>
							<input type="email" name="email" placeholder="Email" required=""/>
							<motion.div
				    		className="box"
     						whileHover={{ scale: 1.2 }}
      						whileTap={{ scale: 0.9 }}
      						transition={{ type: "spring", stiffness: 400, damping: 17 }}>
							<button type='submit'>Send Verification Link</button></motion.div>
                            <Link to="/" id="forgot-password">Signup for a new account</Link>
	                    </form>

		</div>
		</motion.div>
    );

}