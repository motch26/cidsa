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

  const [officesArr, setOfficesArr] = useState([]);

  const [facultyID, setFacultyID] = useState("");
  const [facultyFirstName, setFacultyFirstName] = useState("");
  const [facultyMI, setFacultyMI] = useState("");
  const [facultyLastName, setFacultyLastName] = useState("");
  const [facultyDOB, setFacultyDOB] = useState("");
  const [facultyBloodType, setFacultyBloodType] = useState("");
  const [facultyGSIS, setFacultyGSIS] = useState("");
  const [facultyTIN, setFacultyTIN] = useState("");
  const [facultyPhilHealth, setFacultyPhilHealth] = useState("");
  const [facultyPagibig, setFacultyPagibig] = useState("");
  const [facultyAddress, setFacultyAddress] = useState("");
  const [facultyCity, setFacultyCity] = useState("");
  const [facultyProvince, setFacultyProvince] = useState("");
  const [facultyContact, setFacultyContact] = useState("");

  const [facultyCFullName, setFacultyCFullName] = useState("");
  const [facultyCContact, setFacultyCContact] = useState("");

  const [facultyCampus, setFacultyCampus] = useState("");
  const [facultyOffice, setFacultyOffice] = useState("");
  const [facultyCategory, setFacultyCategory] = useState("");

  const [facultyStep1Data, setFacultyStep1Data] = useState(new FormData());
  const [facultyPictureUrl, setFacultyPictureUrl] = useState("");
  const [facultySigUrl, setFacultySigUrl] = useState("");

  const [facultyCollegesArr, setFacultyCollegesArr] = useState([]);

  const [designation, setDesignation] = useState("");
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
            officesArr,
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
            setOfficesArr,
          },
        },
        faculty: {
          states: {
            facultyID,
            facultyFirstName,
            facultyMI,
            facultyLastName,
            facultyDOB,
            facultyBloodType,
            facultyGSIS,
            facultyTIN,
            facultyPhilHealth,
            facultyPagibig,
            facultyAddress,
            facultyCity,
            facultyProvince,
            facultyContact,
            facultyCFullName,
            facultyCContact,
            facultyCampus,
            facultyOffice,
            facultyCategory,
            facultyStep1Data,
            facultyPictureUrl,
            facultySigUrl,
            officesArr,
            designation,
            facultyCollegesArr,
          },
          actions: {
            setFacultyID,
            setFacultyFirstName,
            setFacultyMI,
            setFacultyLastName,
            setFacultyDOB,
            setFacultyBloodType,
            setFacultyGSIS,
            setFacultyTIN,
            setFacultyPhilHealth,
            setFacultyPagibig,
            setFacultyAddress,
            setFacultyCity,
            setFacultyProvince,
            setFacultyContact,
            setFacultyCFullName,
            setFacultyCContact,
            setFacultyCampus,
            setFacultyOffice,
            setFacultyCategory,
            setFacultyStep1Data,
            setFacultyPictureUrl,
            setFacultySigUrl,
            setOfficesArr,
            setFacultyCollegesArr,
            setDesignation,
          },
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
