import React from "react";
import { CiLight } from "react-icons/ci";

function Header() {
    return <div className="w-full h-10 p-6 bg-[url('/headerImage.jpg')] bg-cover bg-center flex items-center text-white">
        <div className="flex justify-center items-center gap-[440px]">
            <span className="bg-white rounded-full"><CiLight className="w-6 h-6 font-black text-black" /></span>
            <p className="text-[30px] font-bold">وب اپلیکیشن مدیریت مخاطبین</p>
        </div>
    </div>;
};

export default Header;