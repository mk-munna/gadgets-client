import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase'; // Ensure the correct path to your firebase.js file
import { AuthContext } from '../../AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { user, setUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: fullName });
            setUser({ ...userCredential.user, displayName: fullName })
            toast.success("Logged in successfully!");
            navigate('/')
        } catch (error) {
            setError(error.message);
            toast.error('Error signing up');
        }
    };
    
    console.log(user?.displayName);
    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            toast.success("Google sign-in successful!");
            navigate('/')
        } catch (error) {
            setError(error.message);
            toast.error('Error signing in with Google:', error);
        }
    };

    return (
        <section className="bg-white px-6 lg:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Sign up to Gadgets
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Already have an account?{" "}
                            <a
                                href="#"
                                title=""
                                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                            >
                                Login
                            </a>
                        </p>

                        <form onSubmit={handleSignUp} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="fullName" className="text-base font-medium text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            placeholder="Enter your full name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                            className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter email to get started"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-primary focus:outline-none hover:opacity-80 focus:opacity-80"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </form>

                        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

                        <div className="mt-3 space-y-3">
                            <button
                                type="button"
                                onClick={handleGoogleSignUp}
                                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                            >
                                <div className="absolute inset-y-0 left-0 p-4">
                                    <svg
                                        className="w-6 h-6 text-rose-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                        ></path>
                                    </svg>
                                </div>
                                Sign up with Google
                            </button>
                        </div>

                        <p className="mt-5 text-sm text-gray-600">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a
                                href="#"
                                title=""
                                className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                            >
                                Privacy Policy
                            </a>{" "}
                            &{" "}
                            <a
                                href="#"
                                title=""
                                className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                            >
                                Terms of Service
                            </a>
                        </p>
                    </div>
                </div>
                <div className="lg:flex hidden bg-[#F5F5F5] items-center justify-center mx-4 my-10 sm:my-16 lg:my-24  sm:px-6 lg:px-8">
                    <div>
                        <div>
                            <img
                                className="w-[400px] mx-auto"
                                src="https://images.samsung.com/is/image/samsung/p6pim/pk/feature/164028233/pk-feature--thinsp--532104276?$FB_TYPE_A_MO_JPG$"
                                alt=""
                            />
                        </div>

                        <div className="w-full max-w-md mx-auto xl:max-w-xl">
                            <h3 className="text-2xl font-bold text-center text-black">Sign in to get all new updates!</h3>
                            <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                                Create an account or log in with your Gadgets account to access all new updates and offers!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
