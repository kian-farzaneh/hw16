import React from "react";

function CreateContact() {
    return <>
        <div className="w-1/2 shadow-custom ">
            <div className="flex justify-center items-center p-4 font-bold text-[25px]">
                <h1>اضافه / ویرایش کاربران</h1>
            </div>
            <div className="direction-rtl p-4">
                <div>
                    <p className="font-bold text-[17px]">نام :</p>
                    <input type="text" className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="   نام ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا نام را وارد کنید</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-[17px]">نام خانوادگی :</p>
                    <input type="text" className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="   نام خانوادگی ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا نام خانوادگی را وارد کنید</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-[17px]">شماره موبایل :</p>
                    <input type="text" className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="   شماره موبایل ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا شماره موبایل را وارد کنید</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-[17px]">نسبت</p>
                    <input type="text" className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="  نسبت ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا نسبت خود را انتخاب کنید</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-[17px]">ایمیل :</p>
                    <input type="text" className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="  ایمیل ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا ایمیل را وارد کنید</p>
                </div>
                <div className="mt-4">
                    <button className="bg-[#647382] text-white p-3 rounded-md customShadow2 font-bold">اضافه کردن</button>
                </div>
            </div>
        </div>
    </>;
}

export default CreateContact;