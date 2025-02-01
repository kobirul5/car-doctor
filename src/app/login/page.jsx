import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';
import LoginForm from './components/LoginForm';
export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
                {/* Illustration Section */}
                <div className="hidden w-1/2 bg-gray-200 p-8 md:flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <img
                            src="/security-illustration.svg" // Replace with your illustration
                            alt="Security Illustration"
                            className="w-3/4 h-auto"
                        />
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full p-8 md:w-1/2">
                    <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">Login</h2>

                    <LoginForm></LoginForm>

                    <div className="mt-4 text-center text-gray-600">Or Login with</div>
                    <div className="mt-4 flex items-center justify-center space-x-4">
                        <button className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700">
                            <FaFacebook size={20} />
                        </button>
                        <button className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600">
                            <FaLinkedin size={20} />
                        </button>
                        <button className="rounded-full bg-red-500 p-2 text-white hover:bg-red-600">
                            <FaGoogle size={20} />
                        </button>
                    </div>

                    <div className="mt-4 text-center text-sm text-gray-500">
                        Don’t have an account?{' '}
                        <a href="/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
