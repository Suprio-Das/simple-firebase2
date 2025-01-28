import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { useState } from "react";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

        setErrorMessage('');

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters.')
            return;
        }

        // creating user with email address and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
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

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                    />
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
            </form>
        </div>
    );
};

export default Register;