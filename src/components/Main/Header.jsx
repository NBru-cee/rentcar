import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="flex flex-col">
            {/* <div className="hidden sm:block md:block w-full bg-emerald-700 p-2">
                <RiMenu3Line className="text-2xl cursor-pointer active:rotate-[360deg] duration-500 absolute top-3 left-2 text-white" />
            </div> */}

            <div className="flex justify-between px-8 items-center py-2 w-full bg-emerald-700 text-white md:text-sm sm:text-xs lg:text-lg text-sm">
                <div className="flex items-center gap-1">
                    <span>Need Help</span>
                    <div className="w-8 h-8 bg-white text-emerald-700  rounded-full items-center flex justify-center  mx-1">
                        <i className="ri-phone-fill"></i>
                    </div>
                    <span>250-765-432-1000 </span>
                </div>

                <div className="flex items-center gap-4 ">
                    <div className="flex gap-1 items-center">
                        <i className="ri-login-box-line text-xl cursor-pointer hover:scale-[1.2] duration-500"></i>
                        <span>Login</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <i className="ri-user-line cursor-pointer hover:scale-[1.2] duration-500"></i>
                        <span>Register</span>
                    </div>
                </div>
            </div>

            <div className="gap-2 items-center text-emerald-700 flex justify-evenly my-4">
                <div className="flex items-center gap-2 font-bold ">
                    <i className="ri-car-line text-2xl"></i>
                    <h4 className="flex flex-col">
                        RentCar <span>Service</span>
                    </h4>
                </div>

                <div className="flex items-center justify-between gap-2 ">
                    <i className="ri-earth-line text-2xl"></i>
                    <h4 className="flex flex-col">
                        Rwanda <span>Kigali City, Rwanda</span>
                    </h4>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <i className="ri-time-line text-2xl"></i>
                    <h4 className="flex flex-col">
                        Monday to Friday <span>8am - 10pm</span>
                    </h4>
                </div>

                <div className="flex items-center justify-between gap-2 bg-emerald-700 rounded-lg text-white p-2 hover:opacity-90">
                    <i className="ri-phone-line cursor-pointer"></i>
                    <span>Request A Call</span>
                </div>
            </div>
            <section className="flex items-center justify-between p-4 bg-emerald-700 text-white w-full">
                <Navbar />
                <div className="flex border-2 border-white rounded-2xl p-2">
                    <i className="ri-search-line"></i>
                    <input
                        type="text"
                        autoFocus
                        placeholder="Search..."
                        className=" px-2 bg-transparent text-white outline-none border-none placeholder:text-gray-200"
                    />
                </div>
            </section>
        </header>
    );
};

export default Header;
