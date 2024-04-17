import { useState } from "react"

export function GeneralInfo(props) {
    const [person, setPerson] = useState({
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        phone: props.phone
    });

    function handlePerson(e) {
        const {name, value} = e.target;
        setPerson(prevPerson => ({...prevPerson, [name]: value}));
        props.onUpdate(prevPerson => ({...prevPerson, [name]: value}));
    }

    return (
        <div className="generalInfoSection">
            <h2 className="sectionTitle">General information</h2>
            <Input label="First name" type="text" name="firstName" value={person.firstName} onChange={handlePerson} required={true} />
            <Input label="Last name" type="text" name="lastName" value={person.lastName} onChange={handlePerson} required={true} />
            <Input label="E-mail" type="email" name="email" value={person.email} onChange={handlePerson} required={true} />
            <Input label="Phone" type="tel" name="phone" value={person.phone} onChange={handlePerson} required={true} />
        </div>
    )
}

export function Input({ label, type, name, onChange, value="", required=false}) {
    return (
        <div className="inputItem">
            <label>
                {label + " "}
            </label>
            <input
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                required={required}
            />
        </div>
    )
}