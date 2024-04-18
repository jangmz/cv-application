import React from "react";

function Preview({generalInfoData, educationData, experienceData}) {
    const fname = generalInfoData.firstName === undefined ? "" : generalInfoData.firstName;
    const lname = generalInfoData.lastName === undefined ? "" : generalInfoData.lastName;
    const fullName = fname + " " + lname;

    return (
        <div className="cv-preview">
            <div className="general">
                <h2>General information</h2>
                <div className="gen-info-data">
                    <p><strong>Name:</strong> {fullName}</p>
                    <p><strong>E-mail:</strong> {generalInfoData.email}</p>
                    <p><strong>Phone:</strong> {generalInfoData.phone}</p>
                </div>
            </div>
            <div className="education">
                <h2>Education</h2>
                <ul className="education-list">
                    {
                        educationData.map((school, index) => (
                            <li key={index} className="education-item">
                                <p><strong>School:</strong> {school.schoolName}</p>
                                <p><strong>Title:</strong> {school.title}</p>
                                <p>
                                    <strong>Date:</strong> {school.startDate} - {school.ongoing ? "Ongoing" : school.endDate}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="experience-prev">
                    <h2>Experiences</h2>
                    <ul className="experiences-list">
                        {
                            experienceData.map((company, index) => (
                                <li key={index} className="experience-item">
                                    <p><strong>Company:</strong> {company.company}</p>
                                    <p><strong>Position:</strong> {company.position}</p>
                                    <p><strong>Main responsibilities:</strong> {company.responsibilities}</p>
                                    <p>
                                        <strong>Date:</strong> {company.startDate} - {company.ongoing ? "Ongoing" : company.endDate}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
    )
}

export default Preview;