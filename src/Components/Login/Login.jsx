import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess(false)
        setErrorMessage(false)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccess('Logged-in Successfully!!!')
                console.log(user)
            })
            .catch(error => {
                setErrorMessage(error.message)
                setSuccess(false)
            })

        // console.log(email, password)
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                    />
                </div>
                <div className="mb-4 relative">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                    />
                    <p
                        className="btn bg-white shadow-none outline-0 border-0 btn-xs absolute left-[370px] top-[33px]"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </p>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                >
                    Login
                </button>
                {
                    errorMessage && <p className="text-red-600 my-2 text-center">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-600 my-2 text-center">Sign-In successfully!</p>
                }
                <p className="text-center mt-5">New Here? <Link to="/register" className="text-green-600 font-semibold">Sign-Up</Link></p>
            </form>
        </div>
    );
};

export default Login;