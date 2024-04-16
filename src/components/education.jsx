import { useState } from "react"
import { Input } from "./generalInfo"

export function Education(props) {
    const [schools, setSchools] = useState([
        {schoolName: "", title: "", startDate: "", endDate: ""}
    ]);

    function handleChange(index, e) {
        const {name, value} = e.target;
        const newSchools = [...schools]; // copies all schools into temp array
        newSchools[index] = {...newSchools[index], [name]: value}; // copies all school properties and changes only property that triggered the change
        setSchools(newSchools);
    }

    function addSchool() {
        /*const newSchools = [...schools];
        newSchools.push({schoolName: "", title: "", startDate: "", endDate: ""});
        setSchools(newSchools);*/
        setSchools(prevSchools => ([...prevSchools, {schoolName: "", title: "", startDate: "", endDate: ""}]));
        console.log(schools);
    }

    function removeSchool(index) {
        const newSchools = [...schools];
        newSchools.splice(index, 1);
        setSchools(newSchools);
    }

    return (
        <div className="educationSection">
            <h2 className="sectionTitle">Education information</h2>
            {
                schools.map((school, index) => (
                    <div className="schoolSection" key={index}>
                        <Input label="School name" type="text" name="schoolName" value={school.schoolName} onChange={(e) => handleChange(index, e)} required={true} />
                        <Input label="Title of study" type="text" name="title" value={school.title} onChange={(e) => handleChange(index, e)} required={true} />
                        <Input label="Start date" type="date" name="startDate" value={school.startDate} onChange={(e) => handleChange(index, e)} required={true} />
                        <Input label="End date" type="date" name="endDate" value={school.endDate} onChange={(e) => handleChange(index, e)} />
                        {index > 0 && <button onClick={() => removeSchool(index)} className="btn">Remove School</button>}
                    </div>
                ))
            }
            <button onClick={addSchool} className="btn">Add School</button>
        </div>
    )
}