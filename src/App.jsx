import { useState } from 'react'
import { GeneralInfo } from './components/generalInfo.jsx'
import { Education } from './components/education.jsx'
import { Experience } from './components/experience.jsx'
import { Preview } from './components/preview.jsx'
//import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [generalInfoData, setGeneralInfoData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  return (
    <>
      <div className="inputFields">
        <GeneralInfo 
          firstName=""
          lastName=""
          email=""
          phone=""
          onUpdate={setGeneralInfoData} 
        />
        <Education 
          schoolName=""
          title=""
          startDate=""
          endDate=""
          ongoing={false}
          onUpdate={setEducationData} 
        />
        <Experience 
          company=""
          position=""
          responsibilities=""
          startDate=""
          endDate=""
          ongoing={false}
          onUpdate={setExperienceData}
        />
      </div>
      <div className="preview">
        <h1>Preview</h1>
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
