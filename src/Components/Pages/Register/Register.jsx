import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const {createUser,googleLogin ,githubLogin} = useContext(AuthContext)
    const [error,setError]=useState('')
    const location=useLocation()
    const navigate=useNavigate()
   
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        if( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setError('Please write a valid email')
        }
        if(password.length < 6){
           setError('Password should be at least 6 characters');
           return;
        }
        setError('')
        createUser(email, password)
            .then((result) => {
              console.log(result.user);
              navigate(location?.state? location.state : '/')

            })
            .catch((error) => {
                console.log(error);
                setError(error.message)

            });
    }
    const handleGoogleLogin = () => {
        googleLogin()
        
            .then(result => {
                console.log(result.user);
                navigate(location?.state? location.state : '/')  // eta kaj korteche na 
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
        }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state? location.state : '/')  // eta kaj korteche na 
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
        }
      
    return (
        <div className="py-10">
            <h1 className="text-[40px] text-center font-bold"><span className="text-[red]">Register</span> Now</h1>
            <div className="flex justify-center items-center mt-4">
                <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleRegister} className="space-y-6" action="#">

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                            <input type="text" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Photo URL" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email Address" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="Enter Your Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accepting Terms & Conditions</label>
                            </div>

                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        <div className="text-sm text-red-500 dark:text-gray-300 font-bold">
                          {
                            error && <p>{error}</p>
                          }
                        </div>
                        <div className="text-md font-medium text-gray-500 dark:text-gray-300">
                            Alrady have an account ? <Link to={"/login"} className="text-blue-700 font-bold hover:underline dark:text-blue-500">Login</Link>
                        </div>
                    </form>
                    <div className="mt-4">

                        <p className="text-center text-gray-600 text-[14px] py-2">OR LOGIN WITH SOCIAL MEDIA</p>
                        <div >

                            <p onClick={handleGoogleLogin} className="gap-2 flex justify-center items-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FcGoogle /> Google </p>
                            <p onClick={handleGithubLogin} className="mt-2 gap-2 flex justify-center items-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FaGithub /> Github </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;