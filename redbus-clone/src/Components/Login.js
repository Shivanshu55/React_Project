import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    if (!email.current.value || !password.current.value) {
      toast.error("All fields are required.");
    } else {
      localStorage.setItem("token", email.current.value);
      navigate("/");
    }
  }

  return (
    <section className="bg-red-300">
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-red-400 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-gray-900">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="table-row mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="table-row mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={password}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                  required=""
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="w-50 text-white bg-success focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
