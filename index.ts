class Facebookuser {
    birthday:string;
    company : string;
    college: string;
    school: string;
    hometown: string;
    familyMembers: number;
    contactNumber: number;
    email: string; 
    gender: string;
    religion: string;
    friends:number;

    constructor(_birthday:string, _company:string, _college:string, _school: string, 
                _hometown: string, _familyMembers: number, _contactNumber: number, 
                _email: string, _gender: string, _religion: string, _friends:number){
        
                    this.birthday = _birthday;
                    this.college = _college;
                    this.company = _company;
                    this.school = _school;
                    this.hometown = _hometown;
                    this.familyMembers = _familyMembers;
                    this.contactNumber = _contactNumber;
                    this.email = _email;
                    this.gender = _gender;
                    this.religion = _religion;
                    this.friends = _friends;
    }// end of constructor

    getBirthday = ()=>{
        return this.birthday
    }

    getFamilyMembers = () =>{
        return this.familyMembers;
    }

    getCollege = () =>{
        return this.college
    }


    getSchool = () =>{
        return this.school
    }


    getHometown = () =>{
        return this.hometown
    }


    getfamilyMembers = () =>{
        return this.familyMembers
    }


    getcontactNumber = () =>{
        return this.contactNumber
    }


    getemail = () =>{
        return this.email
    }

    getgender = () =>{
        return this.gender
    }


    getreligioin = () =>{
        return this.religion
    }


    getfriends = () =>{
        return this.friends
    }
}// end of class

let userOne = new Facebookuser("8h Nov 1992", "Flygrades",  "HIT", "Saint Francis", "Deoghar", 
                                6, 7903, "abhinav.alok02@gmail.com", "Male", "Hindu", 290);

let displayUser = userOne.getBirthday();
let displayFamily = userOne.getFamilyMembers();
let displayCollege = userOne.getCollege();
let displaySchool = userOne.getSchool();
let displayHometown = userOne.getHometown();
let displayFamilyMembers = userOne.getFamilyMembers();
let displayContactNumber = userOne.getcontactNumber();
let displayEmail = userOne.getemail();
let displayGender = userOne.getgender();
let displayReligion = userOne.getreligioin();
let displayFriends = userOne.getfriends();
console.log(displayUser, displayFamily, displayCollege, displaySchool, displayHometown, 
    displayFamilyMembers, displayContactNumber, displayEmail, displayGender, displayReligion,  displayFriends); 