import { useState } from "react"

// using props for "edit mode" -> all previously submited values get sent here
export function GeneralInfo(props) {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);

    const fullName = firstName + " " + lastName;

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePhone(e) {
        setPhone(e.target.value);
    }

    return (
        <div className="generalInfoSetion">
            <Input label="First name" type="text" value={firstName} onChange={handleFirstName} />
            <Input label="Last name" type="text" value={lastName} onChange={handleLastName} />
            <Input label="E-mail" type="email" value={email} onChange={handleEmail} />
            <Input label="Phone" type="tel" value={phone} onChange={handlePhone} />
            {/* use {fullName} to display it */}
        </div>
    )
}

function Input({ label, type, onChange, value="" }) {
    return (
        <div className="inputItem">
            <label>
                {label + " "}
            </label>
            <input
                type={type}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}