"use client"

import Sidebar from '@/components/Sidebar';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';

export default function Page() {
    
    return (

        <div className="bg-gray-900 min-h-screen flex box-border justify-center items-center">
            <div className="bg-gray-900 flex h-screen">
                <Sidebar />

                <div className="flex h-full w-full flex-col">
                    <header className="relative flex flex-col items-center bg-gray-800 px-4 py-4 shadow sm:flex-row md:h-20">
                        <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
                            <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
                                <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" className=""></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                                </svg>
                                <input type="name" name="search" className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500" placeholder="Search for anything" />
                            </div>

                            <ul className="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
                                <li className="">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <div className="h-full overflow-hidden md:pl-10">
                        <main id="dashboard-main" className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10">
                            <main />
                            <h1 className="text-2xl font-black text-gray-300">Good Morning!</h1>
                            <p className="mb-6 text-gray-500">Here's an overview of your monthly transactions.</p>


                            <div className="flex flex-wrap gap-x-2 gap-y-12 px-2 mt-16">
                                <div className="flex w-full md:w-72 ">
                                    <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                                        <div className="p-3 relative">
                                            <div className=" absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div className="pt-1 text-right">
                                                <p className="text-sm font-light capitalize">Pageviews</p>
                                                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl text-orange-500">14,000</h4>
                                            </div>
                                        </div>
                                        <hr className="opacity-50" />
                                        <div className="p-4">
                                            <p className="font-light"><span className="text-sm font-bold text-green-600">+22% </span>vs last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full md:w-72">
                                    <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                                        <div className="p-3 relative">
                                            <div className=" absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div className="pt-1 text-right">
                                                <p className="text-sm font-light capitalize">Users</p>
                                                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl text-orange-500">2,300</h4>
                                            </div>
                                        </div>
                                        <hr className="opacity-50" />
                                        <div className="p-4">
                                            <p className="font-light"><span className="text-sm font-bold text-green-600">+3% </span>vs last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full md:w-72">
                                    <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                                        <div className="p-3 relative">
                                            <div className=" absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 text-center text-white shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="pt-1 text-right">
                                                <p className="text-sm font-light capitalize">Sales</p>
                                                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl text-orange-500">$5,360</h4>
                                            </div>
                                        </div>
                                        <hr className="opacity-50" />
                                        <div className="p-4">
                                            <p className="font-light"><span className="text-sm font-bold text-red-600">-3% </span>vs last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 mt-10">

                                <div className="h-auto  rounded-xl bg-gray-200 p-10 shadow-md">
                                    <LineChart />
                                </div>
                                <div className="h-auto  rounded-xl bg-gray-200 p-10 shadow-md">
                                    <BarChart />
                                </div>
                                <div className="h-56 w-full rounded-xl bg-gray-800 p-10 shadow-md">
                                    
                                </div>
                            </div>

                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}




