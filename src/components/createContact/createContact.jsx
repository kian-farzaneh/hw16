import React, { useEffect, useState } from "react";
import { updateContacts } from '../contactList/functionality'
import { addContact } from "./functionalityCreate";


function CreateContact({ setEdit, refreshContacts, clearContactToEdit }) {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [relation, setRelation] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (setEdit) {
            setName(setEdit.name);
            setPhoneNumber(setEdit.phoneNumber);
            setRelation(setEdit.relation);
            setEmail(setEdit.email);
        };
    }, [setEdit])

    const handleSubmit = async () => {
        if (setEdit) {
            try {
                const updatedContact = await updateContacts(setEdit.id, name, phoneNumber, relation, email);
                console.log('contact updated : ', updatedContact)
                if (refreshContacts) refreshContacts();
                if (clearContactToEdit) clearContactToEdit();
                setName("");
                setPhoneNumber("");
                setRelation("");
                setEmail("");
            }
            catch (err) {
                console.error('error in update contact', err)
            }
        } else {
            try {
                const newContact = await addContact(name, phoneNumber, relation, email);
                console.log('contact added:', newContact);
                if (refreshContacts) refreshContacts();
                setName("");
                setPhoneNumber("");
                setRelation("");
                setEmail("");
            } catch (err) {
                console.error('error in adding contact', err);
            }
        }
        if (clearContactToEdit) clearContactToEdit();

    }










    return <>
        <div className="w-1/2 shadow-custom ">
            <div className="flex justify-center items-center p-4 font-bold text-[25px]">
                <h1>اضافه / ویرایش کاربران</h1>
            </div>
            <div className="direction-rtl p-4">
                <div>
                    <p className="font-bold text-[17px]">نام :</p>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="   نام ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا نام را وارد کنید</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-[17px]">نام خانوادگی :</p>
                    <input type="text" className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="   نام خانوادگی ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا نام خانوادگی را وارد کنید</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-[17px]">شماره موبایل :</p>
                    <input type="text" onChange={(e) => { setPhoneNumber(e.target.value) }} value={phoneNumber} className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="   شماره موبایل ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا شماره موبایل را وارد کنید</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-[17px]">نسبت</p>
                    <input type="text" onChange={(e) => setRelation(e.target.value)} value={relation} className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="  نسبت ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا نسبت خود را انتخاب کنید</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-[17px]">ایمیل :</p>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="w-[90%] p-1 mt-2 mr-2 rounded-[5px] customShadow" placeholder="  ایمیل ..." />
                    <p className="text-red-600 mr-2 mt-1">لطفا ایمیل را وارد کنید</p>
                </div>
                <div className="mt-4">
                    <button onClick={handleSubmit} className="bg-[#647382] text-white p-3 rounded-md customShadow2 font-bold">
                        {setEdit ? "ویرایش کردن" : "اضافه کردن"}
                    </button>
                </div>
            </div>
        </div>
    </>;
}

export default CreateContact;