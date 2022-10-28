import { createContext, useState } from "react";
export const Context = createContext();
export const Provider = ({ children }) => {
  //Student
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

  const [pictureUrl, setPictureUrl] = useState("");
  const [sigURL, setSigURL] = useState("");

  //Staff

  const [staffID, setStaffID] = useState("");
  const [staffFirstName, setStaffFirstName] = useState("");
  const [staffMI, setStaffMI] = useState("");
  const [staffLastName, setStaffLastName] = useState("");
  const [staffDOB, setStaffDOB] = useState("");
  const [staffBloodType, setStaffBloodType] = useState("");
  const [staffGSIS, setStaffGSIS] = useState("");
  const [staffTIN, setStaffTIN] = useState("");
  const [staffPhilHealth, setStaffPhilHealth] = useState("");
  const [staffPagibig, setStaffPagibig] = useState("");
  const [staffAddress, setStaffAddress] = useState("");
  const [staffCity, setStaffCity] = useState("");
  const [staffProvince, setStaffProvince] = useState("");
  const [staffContact, setStaffContact] = useState("");

  const [staffCFullName, setStaffCFullName] = useState("");
  const [staffCContact, setStaffCContact] = useState("");

  const [staffCampus, setStaffCampus] = useState("");
  const [staffOffice, setStaffOffice] = useState("");
  const [staffCategory, setStaffCategory] = useState("");

  const [staffStep1Data, setStaffStep1Data] = useState(new FormData());
  const [staffPictureUrl, setStaffPictureUrl] = useState("");
  const [staffSigUrl, setStaffSigUrl] = useState("");
  return (
    <Context.Provider
      value={{
        student: {
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
        },
        staff: {
          states: {
            staffID,
            staffFirstName,
            staffMI,
            staffLastName,
            staffDOB,
            staffBloodType,
            staffGSIS,
            staffTIN,
            staffPhilHealth,
            staffPagibig,
            staffAddress,
            staffCity,
            staffProvince,
            staffContact,
            staffCFullName,
            staffCContact,
            staffCampus,
            staffOffice,
            staffCategory,
            staffStep1Data,
            staffPictureUrl,
            staffSigUrl,
          },
          actions: {
            setStaffID,
            setStaffFirstName,
            setStaffMI,
            setStaffLastName,
            setStaffDOB,
            setStaffBloodType,
            setStaffGSIS,
            setStaffTIN,
            setStaffPhilHealth,
            setStaffPagibig,
            setStaffAddress,
            setStaffCity,
            setStaffProvince,
            setStaffContact,
            setStaffCFullName,
            setStaffCContact,
            setStaffCampus,
            setStaffOffice,
            setStaffCategory,
            setStaffStep1Data,
            setStaffPictureUrl,
            setStaffSigUrl,
          },
        },
        faculty: {
          states: {},
          actions: {},
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
