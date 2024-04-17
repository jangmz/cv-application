export function Preview({generalInfoData, educationData, experienceData}) {
    const fname = generalInfoData.firstName === undefined ? "" : generalInfoData.firstName;
    const lname = generalInfoData.lastName === undefined ? "" : generalInfoData.lastName;
    const fullName = fname + " " + lname;

    return (
        <div className="cv-preview">
            <div className="general">
                <h2>General information</h2>
                <p>Name: {fullName}</p>
                <p>E-mail: {generalInfoData.email}</p>
                <p>Phone: {generalInfoData.phone}</p>
            </div>
            <div className="education">
                <h2>Education</h2>
                <ul className="education-list">
                    {
                        educationData.map((school, index) => (
                            <li key={index} className="education-item">
                                <p>School: {school.schoolName}</p>
                                <p>Title: {school.title}</p>
                                <p>
                                    Date: {school.startDate} - {school.ongoing ? "Ongoing" : school.endDate}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="experience">
                    <h2>Experiences</h2>
                    <ul className="experiences-list">
                        {
                            experienceData.map((company, index) => (
                                <li key={index} className="experience-item">
                                    <p>Company: {company.company}</p>
                                    <p>Position: {company.position}</p>
                                    <p>Main responsibilities: {company.responsibilities}</p>
                                    <p>
                                        Date: {company.startDate} - {company.ongoing ? "Ongoing" : company.endDate}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
    )
}