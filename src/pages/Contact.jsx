import { useState } from "react";
import Title from "../components/shared/Title";

const Contact = () => {
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div id="contact" className="gradient-background rounded-2xl m-5 p-4">
            <Title title="Contact Me"></Title>

            <div className="grid grid-cols-3 mx-auto px-8">
                <div className="col-span-1">
                    <h4 className="text-2xl my-48 text-black">Feel Free To Contact...</h4>
                </div>
                <form onSubmit={onSubmit} className="grid grid-cols-1 col-span-2 gap-3">
                    <input type="text" name="name" id="name" className="bg-white text-black p-4 rounded-2xl" placeholder="Write Your Name" />
                    <input type="email" name="email" className="bg-white text-black p-4 rounded-2xl" placeholder="example@mail.com" />
                    <input type="text" name="subject" className="bg-white text-black p-4 rounded-2xl" placeholder="Subject" />
                    <textarea name="content" className="bg-white text-black p-4 rounded-2xl" placeholder="Write Your Query Here..." id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send Now" className="btn btn-ghost btn-outline" />
                </form>
            </div>

        </div>
    );
};

export default Contact;