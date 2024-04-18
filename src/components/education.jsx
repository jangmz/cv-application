import { useState } from "react"
import { Input } from "./generalInfo"

function Education(props) {
    const [schools, setSchools] = useState([
        {
            schoolName: props.schoolName, 
            title: props.title, 
            startDate: props.startDate, 
            endDate: props.endDate,
            ongoing: props.ongoing
        }
    ]);

    function handleChange(index, e) {
        const {name, value} = e.target;
        const newSchools = [...schools]; // copies all schools into temp array
        newSchools[index] = {...newSchools[index], [name]: value}; // copies all school properties and changes only property that triggered the change
        setSchools(newSchools);
        props.onUpdate(newSchools);
    }

    function handleCheckboxChange(index) {
        const newSchools = [...schools];
        newSchools[index] = {...newSchools[index], ongoing: !newSchools[index].ongoing};
        setSchools(newSchools);
        props.onUpdate(newSchools);
    }

    function addSchool() {
        const newSchools = [...schools, {schoolName: "", title: "", startDate: "", endDate: "", ongoing: false}];
        setSchools(newSchools);
        props.onUpdate(newSchools);
    }

    function removeSchool(index) {
        const newSchools = [...schools];
        newSchools.splice(index, 1);
        setSchools(newSchools);
        props.onUpdate(newSchools);
    }

    return (
        <div className="educationSection">
            <h2 className="sectionTitle">Education information</h2>
            {
                schools.map((school, index) => (
                    <div className="schoolSection" key={index}>
                        <Input label="School name" type="text" name="schoolName" value={school.schoolName} onChange={(e) => handleChange(index, e)} required={true} />
                        <Input label="Title of study" type="text" name="title" value={school.title} onChange={(e) => handleChange(index, e)} required={true} />
                        <Input label="Start date" type="month" name="startDate" value={school.startDate} onChange={(e) => handleChange(index, e)} required={true} />
                        {
                            !school.ongoing && <Input label="End date" type="month" name="endDate" value={school.endDate} onChange={(e) => handleChange(index, e)} />
                        }
                        <Input label="Still studying" type="checkbox" name="ongoing" value={school.ongoing} onChange={() => handleCheckboxChange(index)} />
                        {
                            index > 0 && <button onClick={() => removeSchool(index)} className="btn-remove">Remove</button>
                        }
                    </div>
                ))
            }
            <button onClick={addSchool} className="btn">Add School</button>
        </div>
    )
}

export default Education