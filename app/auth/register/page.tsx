'use client'
import { useState} from "react";
import Image from "next/legacy/image";
import Badge from "@/components/Badge";
import { useRouter } from "next/navigation";

export default function Register() {
const [user,setUser] = useState("");
const [email , setEmail] = useState("");
const [password,setPassword] = useState("");
const [confirm , setConfirmed] = useState("");
const [message , setMessage] = useState("");
const router = useRouter();

const handleRegister = (e: React.FormEvent) => {
  e.preventDefault();
  setMessage("");
  // get the input 
  if(password !== confirm){
    setMessage("Password do not match");
    return;
  }
const storedUser = JSON.parse(localStorage.getItem('users') || "[]")
const exist = storedUser.find((user:any)=> email === user.email);
if(exist){
  setMessage("Email already registered");
  return;
}
const newUser = {username:user,email,password};
storedUser.push(newUser);

localStorage.setItem("users",JSON.stringify(storedUser))

setMessage("Registered successfully. You can now log in.");
setTimeout(() => {
  router.push("/auth/login")
}, 1000);

}
  return (
    <section className="h-screen w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left div */}
        <div className="hidden md:block relative">
          {/* Background Image */}
          <Image
            src="/assets/about/book-2.jpg"
            alt="Register Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="absolute inset-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Centered Badge + Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative flex flex-col items-center">
              {/* "Register" positioned above the Badge */}
              <h2 className="absolute top-0 -translate-y-1/2 text-white text-7xl font-bold">
                Register
              </h2>

              {/* Responsive Badge */}
              <Badge containerStyles="lg:w-[320px] lg:h-[320px] z-40 md:w-[250px] md:h-[250px] mt-10" />
            </div>
          </div>
        </div>

        {/* Right div (Register Form) */}
        <div className="h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl text-center mb-6 font-bold">Register</h2>

            <form className="space-y-4" onSubmit={handleRegister} >
              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={user}
                  onChange={(e)=>setUser(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirm}
                  onChange={(e)=>setConfirmed(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>
              <div className="h-2">
                {' '}
                {message && (
                  <p
                    className={`${
                      message.includes('success')
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {message}
                  </p>
                )}
              </div>
              {/* Login Link */}
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/auth/login" className="text-black font-semibold hover:underline">
                  Click here to Login
                </a>
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 mt-3 rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
