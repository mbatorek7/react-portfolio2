import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    let navigate = useNavigate();

    const handleAction = async (event) => {
        event.preventDefault();
        console.log(event.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/fbf9cfb9492c7ccafb74d9fef69d8f96", {
                method: "POST", headers: {
                    "Content-Type": "application/json", "Accept": "application/json"
                }, body: JSON.stringify({ firstName, lastName, email, phoneNumber, message })
            })
            const data = await response.json();
            console.log(response);
            console.log(data);
        } catch (error) {
            console.log(error.message)
        } finally {
            navigate("/success");
        }
    }

    return (
        <div className="container mx-auto sm:px-4 mt-5">
            <h1>Contact Me!</h1>
            <form className="flex flex-wrap g-3 pt-4" onSubmit={(e) => handleAction(e)}>

                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_next" value="https://mbatorek7.github.io/success" />

                <div className="md:w-1/2 pr-4 pl-4">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" name="name" id="firstName" onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="md:w-1/2 pr-4 pl-4">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" name="Last&nbsp;Name" id="lastName" onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="md:w-2/3 pr-4 pl-4 pt-4">
                    <label htmlFor="emailInfo" className="form-label">E-mail</label>
                    <input type="email" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" name="email" id="emailInfo" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="md:w-1/3 pr-4 pl-4 pt-4">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" name="phone" id="phoneNumber" placeholder="+1 (415) 867-5309" onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="md:w-full pr-4 pl-4 pt-4">
                    <label htmlFor="comments" className="form-label">Comments, questions?</label>
                    <textarea className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="comments" name="comments,&nbsp;questions" rows="3" onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div className="md:w-full pr-4 pl-4 pt-6">
                    <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 bg-blue-500 text-white rounded p-2" >Submit</button>
                </div>
            </form>
            <div className='pb-40'></div>
        </div>
    );
}