import { createContext, useState } from "react";
export const Context = createContext();
export const Provider = ({ children }) => {
  //Step 1
  const [sID, setSID] = useState("");
  const [sFirstName, setSFirstName] = useState("");
  const [sMI, setSMI] = useState("");
  const [sLastName, setSLastName] = useState("");

  const [cFirstName, setCFirstName] = useState("");
  const [cMI, setCMI] = useState("");
  const [cLastName, setCLastName] = useState("");
  const [cContact, setCContact] = useState("");
  const [cRelationship, setCRelationship] = useState("");
  const [cAddress, setCAddress] = useState("");
  const [cCity, setCCity] = useState("");
  const [cZip, setCZip] = useState("");
  const [cProvince, setCProvince] = useState("");

  const [collegesArr, setCollegesArr] = useState([]);
  const [programsArr, setProgramsArr] = useState([]);
  const [majorsArr, setMajorsArr] = useState([]);

  const [campus, setCampus] = useState("");
  const [college, setCollege] = useState("");
  const [program, setProgram] = useState("");
  const [major, setMajor] = useState("");
  const [level, setLevel] = useState("");
  const [section, setSection] = useState("");

  const [step1Data, setStep1Data] = useState(new FormData());

  //Step 2
  const [pictureUrl, setPictureUrl] = useState("");
  const [sigURL, setSigURL] = useState("");
  return (
    <Context.Provider
      value={{
        states: {
          sID,
          sFirstName,
          sMI,
          sLastName,
          cFirstName,
          cMI,
          cLastName,
          cContact,
          cRelationship,
          cAddress,
          cCity,
          cZip,
          cProvince,
          campus,
          college,
          program,
          major,
          level,
          section,
          step1Data,
          sigURL,
          pictureUrl,
          collegesArr,
          programsArr,
          majorsArr,
        },
        actions: {
          setSID,
          setSFirstName,
          setSMI,
          setSLastName,
          setCFirstName,
          setCMI,
          setCLastName,
          setCContact,
          setCRelationship,
          setCAddress,
          setCCity,
          setCZip,
          setCProvince,
          setCampus,
          setCollege,
          setProgram,
          setMajor,
          setLevel,
          setSection,
          setStep1Data,
          setPictureUrl,
          setSigURL,
          setCollegesArr,
          setProgramsArr,
          setMajorsArr,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
