var Facebookuser = /** @class */ (function () {
    function Facebookuser(_birthday, _company, _college, _school, _hometown, _familyMembers, _contactNumber, _email, _gender, _religion, _friends) {
        var _this = this;
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getFamilyMembers = function () {
            return _this.familyMembers;
        };
        this.getCollege = function () {
            return _this.college;
        };
        this.getSchool = function () {
            return _this.school;
        };
        this.getHometown = function () {
            return _this.hometown;
        };
        this.getfamilyMembers = function () {
            return _this.familyMembers;
        };
        this.getcontactNumber = function () {
            return _this.contactNumber;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.getreligioin = function () {
            return _this.religion;
        };
        this.getfriends = function () {
            return _this.friends;
        };
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
    } // end of constructor
    return Facebookuser;
}()); // end of class
var userOne = new Facebookuser("8h Nov 1992", "Flygrades", "HIT", "Saint Francis", "Deoghar", 6, 7903, "abhinav.alok02@gmail.com", "Male", "Hindu", 290);
var displayUser = userOne.getBirthday();
var displayFamily = userOne.getFamilyMembers();
var displayCollege = userOne.getCollege();
var displaySchool = userOne.getSchool();
var displayHometown = userOne.getHometown();
var displayFamilyMembers = userOne.getFamilyMembers();
var displayContactNumber = userOne.getcontactNumber();
var displayEmail = userOne.getemail();
var displayGender = userOne.getgender();
var displayReligion = userOne.getreligioin();
var displayFriends = userOne.getfriends();
console.log(displayUser, displayFamily, displayCollege, displaySchool, displayHometown, displayFamilyMembers, displayContactNumber, displayEmail, displayGender, displayReligion, displayFriends);
