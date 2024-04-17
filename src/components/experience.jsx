import { useState } from "react";
import { Input } from "./generalInfo";

export function Experience(props) {
    const [experiences, setExperiences] = useState([
        {
            company: props.company, 
            position: props.position, 
            responsibilities: props.responsibilities, 
            startDate: props.startDate, 
            endDate: props.endDate, 
            ongoing: props.ongoing
        }
    ]);

    function handleExpChange(index, e) {
        const {name, value} = e.target;
        const newExp = [...experiences]; // copy all exps in temp array
        newExp[index] = {...newExp[index], [name]: value}; // copy all properties of an Object and change the one that triggered the change
        setExperiences(newExp);
    }

    function handleCheckboxChange(index) {
        const newExp = [...experiences];
        newExp[index] = {...newExp[index], ongoing: !newExp[index].ongoing};
        setExperiences(newExp);
    }

    function removeExperience(index) {
        const newExp = [...experiences]; // temp array
        newExp.splice(index, 1); // removes experiences on detected index
        setExperiences(newExp);
    }

    function addExperience() {
        setExperiences([...experiences, {company: "", position: "", responsibilities: "", startDate: "", endDate: ""}]);
    }

    return (
        <div className="experienceSection">
            <h2 className="sectionTitle">
                Experiences
            </h2>
            {
                experiences.map((experience, index) => (
                    <div className="experience" key={index}>
                        <Input label="Company" type="text" name="company" value={experience.company} onChange={(e) => handleExpChange(index, e)} required={true} />
                        <Input label="Position" type="text" name="position" value={experience.position} onChange={(e) => handleExpChange(index, e)} required={true} />
                        <Input label="Main responsibilities" type="textarea" name="responsibilities" value={experience.responsibilities} onChange={(e) => handleExpChange(index, e)} required={true} />
                        <Input label="Start date" type="month" name="startDate" value={experience.startDate} onChange={(e) => handleExpChange(index, e)} required={true} />
                        {
                            !experience.ongoing && <Input label="End date" type="month" name="endDate" value={experience.endDate} onChange={(e) => handleExpChange(index, e)} />
                        }
                        <Input label="Still working" type="checkbox" name="ongoing" value={experience.ongoing} onChange={() => handleCheckboxChange(index)} />
                        {
                            index > 0 && <button onClick={() => removeExperience(index)} className="btn">Remove Experience</button>
                        }
                    </div>
                ))
            }
            <button onClick={addExperience} className="btn">Add Experience</button>
        </div>
    )
}