import { useState } from 'react'
import { GeneralInfo } from './components/generalInfo.jsx'
import { Education } from './components/education.jsx'
import { Experience } from './components/experience.jsx'
import { Preview } from './components/preview.jsx'
//import reactLogo from './assets/react.svg'
import "./style/app.css"
import "./style/inputFields.css"
import "./style/preview.css"


function App() {
  const [generalInfoData, setGeneralInfoData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  return (
    <>
      <div className="header">
        <h1>CV Application</h1>
      </div>
      <div className="inputFields">
        <GeneralInfo 
          firstName="John"
          lastName="Doe"
          email="johndoe@dev.com"
          phone="000111222"
          onUpdate={setGeneralInfoData} 
        />
        <Education 
          schoolName="Dev School"
          title="Web Developer"
          startDate="2021-01"
          endDate=""
          ongoing={false}
          onUpdate={setEducationData} 
        />
        <Experience 
          company="Dev Co."
          position="Developer"
          responsibilities="Developing web applications"
          startDate="2022-01"
          endDate=""
          ongoing={false}
          onUpdate={setExperienceData}
        />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <Preview 
          generalInfoData={generalInfoData}
          educationData={educationData}
          experienceData={experienceData}
        />
      </div>
    </>
  )
}

export default App
