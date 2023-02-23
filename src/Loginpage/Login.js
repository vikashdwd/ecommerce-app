//import { useState } from 'react';
import { json, Link } from 'react-router-dom';
import './Login.css';
//import Password from './Password';
import Signup from './Signup';
import { motion, useMotionValue, useTransform } from 'framer-motion';
//import dynButton from '../Elements/dynButton';
import { useFormik } from 'formik';
import { useDragControls } from 'framer-motion';


function Login(){

//	const controls = useDragControls();
	const x = useMotionValue(0);
	const xInput = [-100, 0, 100];
	const background =  useTransform(x, xInput, [
		"linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
		"linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
		"linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
	  ]);


	const formik= useFormik({initialValues:{email:'',password:''},onSubmit: values=>{JSON.stringify(values,null,2)}});
	const validate = (values) => {
		const errors = {};
		if (!values.email) {
		  errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		  errors.email = 'Invalid email address';
		}
		return errors;
	};

	//controls.start(event, { snapToCursor: true })
	return (


	  <motion.div className="example-container" style={{ background }}>
      <motion.div
        className="box1"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}>
			<div class= "login_page">
				<input type="checkbox" id="chk" aria-hidden="true"/>
				<Signup/>
				<div className="login">
					<form onSubmit={formik.handleSubmit}>
						<label for="chk" aria-hidden="true" >Login</label>
						<input type="email" name="email" placeholder="Email" onChange={formik.handleChange} values={formik.values.email} required=""/>
						{formik.errors.email ? <div>{formik.errors.email}</div> : null}
						<input type="password" name="pswd" placeholder="Password" onChange={formik.handleChange} values={formik.values.password} required=""/>

						<motion.div
				    	className="box"
     					whileHover={{ scale: 1.2 }}
      					whileTap={{ scale: 0.9 }}
      					transition={{ type: "spring", stiffness: 400, damping: 17 }}>
						<button type='submit' onClick={()=>{console.log(formik)}} >Login</button></motion.div>
						<Link to="/forgotpass" id="forgot-password" >Forgot password?</Link>

					</form>
				</div>
			</div>

			</motion.div>
			</motion.div>

			);



}
export default Login

// eslint-disable-next-line no-unused-expressions
