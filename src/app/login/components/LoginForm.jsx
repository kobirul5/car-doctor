"use client"

import { registerUser } from "@/app/actions/auth/registerUser";

export default function LoginForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const formData = {email, name, password}
        registerUser(formData)
        console.log(formData)
      };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
            >
                Login
            </button>
        </form>

    )
}
