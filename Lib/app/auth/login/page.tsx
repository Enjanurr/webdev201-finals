'use client';
import Image from 'next/legacy/image';
import Badge from '@/components/Badge';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth/login`  , {
        method: 'POST',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();// json from the backend
  
      if (res.ok) {
        console.log("Login was successful");
        setMessage('Login successful');
        setMessageType('success');
       
        setTimeout(() => {
          router.push('/'); 
        }, 1000);

      } else {
        setMessage(data.message || 'Login failed');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Something went wrong');
      setMessageType('error');
      console.error(error);
    }
  };
  


  return (
    <section className="h-screen w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left div */}
        <div className="hidden md:block relative">
          {/* Background Image */}
          <Image
            src="/assets/about/book-2.jpg"
            alt="Login Background"
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
              {/* "Login" positioned above the Badge */}
              <h2 className="absolute top-0 -translate-y-1/2 text-white text-7xl font-bold">
                Login
              </h2>

              {/* Responsive Badge */}
              <Badge containerStyles="lg:w-[320px] lg:h-[320px] z-40 md:w-[250px] md:h-[250px] mt-10" />
            </div>
          </div>
        </div>

        {/* Right div (Login Form) */}
        <div className="h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl text-center mb-6 font-bold">Sign in</h2>

            <form className="space-y-4" onSubmit={handleLogin}> {/* onSubmit={handleLogin} */}
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {/* Register Link */}
              <p className="text-sm text-gray-600">
                Don't have an account yet?{' '}
                <a
                  href="/auth/register"
                  className="text-black font-semibold hover:underline"
                >
                  Click here to Register
                </a>
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 mt-3 rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
