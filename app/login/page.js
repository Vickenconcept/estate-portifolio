
import Link from 'next/link'

export default function Page() {
  return (

    <div className="bg-gray-900 min-h-screen flex box-border justify-center items-center">

      <div className="mx-auto container flex items-center" id="nav">
        <div className="w-full pt-2 p-4">

          <div className="mx-auto md:p-6 md:w-2/5">
            <div className="flex flex-wrap justify-between">
              <h1 className="text-2xl text-orange-500 hover:text-orange-500 transition duration-500 p-4">
                <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
                Sign-in
              </h1>
              <Link href="/" className="mt-8 text-orange-400 hover:text-orange-600 transition duration-500">
                <svg className=" w-6 h-6 inline-block align-bottom" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Back to Home
                <i className="fas fa-chevron-circle-left fa-fw"></i>
              </Link>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form method="POST" action="#login">
                <div className="mb-8">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                    <span className="text-red-500">&nbsp;*</span>
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <input id="email" className="  outline-none block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                    <span className="text-red-500">&nbsp;*</span>
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <input name="password" id="password" type="text" className="outline-none block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-gray-500 font-bold" htmlFor="remember">
                        <input className=" mr-2 w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 " type="checkbox" id="remember" name="remember" />
                        <span className="text-sm">
                          Remember me
                        </span>
                      </label>
                    </div>
                    <div>
                      <a className="font-bold text-sm text-orange-500 hover:text-orange-800" href="#password-request">
                        forgot password
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <button className="transition grow w-full duration-500 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Login
                  </button>
                </div>
                <hr />
                <div className="mt-8">
                  <p className="text-sm space-x-1">
                    No account?
                    <Link href="/register" className="font-bold text-sm text-orange-500 hover:text-orange-800 hover:underline" >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

