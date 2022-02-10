export interface resumedetails{
firstName : string,
designation : string,
contact : number,
id: number,
email : string,
profiledesc : string,
techskills : Techskills[],
experience : Experienceinfo[],
education : Educationinfo[],
}

class Techskills{
    techskills: string;
}

class Experienceinfo{
    WorkplaceInfo : string;
    designationInfo : string;
    descriptionInfo : string;
    startYearinfo: number;
    EndYearinfo: number;
    aboutExp: string
}
class Educationinfo{
    UniversityInfo : string;
    degree : string;
    grade : string  

}