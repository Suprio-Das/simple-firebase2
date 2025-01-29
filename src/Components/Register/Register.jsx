import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked
        console.log(name, email, password)

        setErrorMessage('');
        setSuccess(false);

        if (!terms) {
            setErrorMessage('Please accept terms and conditions.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters.')
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Give a valid password. Example: Test123@');
            return;
        }

        // creating user with email address and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
                setSuccess(false)
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg" onSubmit={handleRegister}>
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                    />
                </div>

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

                {/* <div className="mb-4">
                    <label
                        htmlFor="profileImage"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Profile Image
                    </label>
                    <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        className="file-input w-full file-input-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                    />
                </div> */}

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
                <div className="mb-3">
                    <input type="checkbox" name="terms" className="checkbox" />
                    <span className="ml-2">Accept Term and Conditions.</span>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                >
                    Register
                </button>
                {
                    errorMessage && <p className="text-red-600 my-2 text-center">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-600 my-2 text-center">Account created successfully!</p>
                }
                <p className="text-center mt-5">Already Have an Account? <Link to="/login" className="text-blue-600 font-semibold">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;