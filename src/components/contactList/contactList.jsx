import React, { useState, useEffect } from "react"
import { contacts, getContacts , updateContacts } from "./functionality";

function ContactList() {

    const [contactList, setContactList] = useState([]); // ذخیره‌سازی داده‌ها در state

    useEffect(() => {
        async function fetchContacts() {
            await getContacts();
            setContactList(contacts); // به روز رسانی contactList با داده‌های دریافت شده
        }
        fetchContacts();
    }, []);

    return <div className="w-1/2 flex flex-col items-center gap-5">

        <div className="flex items-center p-2 font-bold text-[25px]">
            <h1>لیست کاربران</h1>
        </div>

        <div className="bg-[#f3f4f6] w-[95%] h-[450px] m-2 p-2 shadow-2xl grid grid-cols-2 gap-2 direction-rtl overflow-y-scroll scrollbar-custom">

            {contactList.map(item => {
                return (
                    <div key={item.id} className="flex flex-col gap-2 p-2 bg-[#e6e7eb] w-[300px] h-[200px] shadow-2xl direction-ltr">
                        <div className="flex justify-end">
                            <p>{item.name}</p><p className="font-bold">: نام</p>
                        </div>
                        <div className="flex justify-end">
                            <p>{item.phoneNumber}</p><p className="font-bold">: شماره موبایل</p>
                        </div>
                        <div className="flex justify-end">
                            <p>{item.relation}</p><p className="font-bold">: نسبت</p>
                        </div>
                        <div className="flex justify-end">
                            <p>{item.email}</p><p className="font-bold">: ایمیل</p>
                        </div>
                        <div className="text-white mx-3 my-2 flex">
                            <button data-id={item.id} className="bg-red-600 p-2 rounded-tl-md rounded-bl-md">حذف</button>
                            <button data-id={item.id} className="bg-blue-600 p-2 rounded-tr-md rounded-br-md">ویرایش</button>
                        </div>
                    </div>
                )
            })
            }

        </div>

    </div>;
};

export default ContactList;