import React from "react";
import { deleteContact } from "../functionality";

const DeleteModal = ({modalState,closeModalBtn,contactId,onDeleteSuccess}) => {

    if(!modalState) return null ;

    const handleDeleteContact = async () => {
        await deleteContact(contactId)
        onDeleteSuccess();
        closeModalBtn();
    };

    return <div className="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white p-4">
            <h1 className="p-4 font-black text-[20px]">آر یو شُر یو وانت  تو حذفینگ دیس وامونده</h1>
            <div className="flex justify-center items-center gap-3">
                <button onClick={handleDeleteContact} className="bg-red-600 text-white p-2 rounded-md">
                    دکمه ی سیکشو بزن
                </button>
                <button onClick={closeModalBtn} className="bg-blue-500 text-white p-2 rounded-md">
                    باو ولش کن
                </button>
            </div>
        </div>
    </div>
};

export default DeleteModal;