
export default function RegisterForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
      };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
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
                    id="email"
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
                    id="password"
                    placeholder="Your password"
                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
            >
                Sign Up
            </button>
        </form>

    )
}
