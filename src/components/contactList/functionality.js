export let contacts = null

export async function getContacts() {
    const response = await fetch('https://676a57fa863eaa5ac0de0a39.mockapi.io/api/v1/contacts')
    const result = await response.json()
    contacts = result
            
}





            // <div className="flex flex-col gap-2 p-2 bg-[#e6e7eb] w-[300px] h-[200px] shadow-2xl direction-ltr">
            //     <div className="flex justify-end">
            //         <p>محمد محمدی</p><p className="font-bold">: نام</p>
            //     </div>
            //     <div className="flex justify-end">
            //         <p>09114547878</p><p className="font-bold">: شماره موبایل</p>
            //     </div>
            //     <div className="flex justify-end">
            //         <p>دوست</p><p className="font-bold">: نسبت</p>
            //     </div>
            //     <div className="flex justify-end">
            //         <p>eee@gmail.com</p><p className="font-bold">: ایمیل</p>
            //     </div>
            //     <div className="text-white mx-3 my-2 flex">
            //         <button className="bg-red-600 p-2 rounded-tl-md rounded-bl-md">حذف</button>
            //         <button className="bg-blue-600 p-2 rounded-tr-md rounded-br-md">ویرایش</button>
            //     </div>
            // </div> 
