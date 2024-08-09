import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../../Hook/useAuth";


const Register = () => {
    const { createUser, createGoogleUser, createUpdateProfile, createLogout } = useAuth();
    const naviget = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // console.log(data.name);
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                toast('Your sign-up successful');
                createLogout()
                    .then(() => {
                        console.log('Log out');
                        naviget('/login')
                    })
                    .catch((error) => {
                        console.error(error);
                    })

                createUpdateProfile(data.name, data.photo)
                    .then((result) => {
                        console.log(result.user);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            })
            .catch((error) => {
                console.error(error);
                toast('Email already use')
            })
    }

    const handleGoogleSignup = () => {
        createGoogleUser()
            .then(() => {
                toast('Your sign-up successful');
                createLogout()
                    .then(() => {
                        console.log('Log out');
                        naviget('/login')
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-orange-50 rounded-lg shadow-md dark:bg-gray-800 mt-10">
            <div className="px-6 py-4">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://i.ibb.co/Th5fTgx/graduation-cap.png" alt="" />
                </div>

                <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Register or create account</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Your Name" aria-label="Email Address" {...register('name', { required: true })} />
                        {errors.name && <span className="text-red-500 text-base">Pleace Enter Your Name Requier*</span>}
                    </div>

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500 text-base">Pleace Enter Your Email Requier*</span>}
                    </div>

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" {...register("password", { required: true, minLength: 6, maxLength: 10, pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*\W)(?!.* )/ })} />
                        {errors.password?.type === 'required' && <span className="text-red-500 text-base">Pleace Enter Your Passwor Requier*</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-500 text-base">Password Must Be 6 Characters*</span>}
                        {errors.password?.type === 'maxLength' && <span className="text-red-500 text-base">Password Must Be Less then 10 Characters*</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-500 text-base">Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter,*</span>}
                    </div>

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="url" placeholder="Photo Url" aria-label="url" {...register("photo", { required: true })} />
                        {errors.photo && <span className="text-red-500 text-base">Pleace Enter Your Photo Url Requier*</span>}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <button className="px-6 py-2 w-full text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Register
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        or login with Social Media
                    </a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>
                <div className="flex items-center mt-6 -mx-2">
                    <button onClick={handleGoogleSignup} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account?</span>

                <Link to="/login"><p className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</p></Link>
            </div>
        </div>
    );
};

export default Register;