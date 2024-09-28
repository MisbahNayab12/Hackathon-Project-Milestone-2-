var form = document.getElementById('formTemp');
var generatedElement = document.getElementById('generatedResume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var firstName = document.getElementById('FN').value;
    var lastName = document.getElementById('LN').value;
    var email = document.getElementById('EI').value;
    var birthdate = document.getElementById('DOB').value;
    var gender = document.getElementById('gender').value;
    var qualification = document.getElementById('qualification').value;
    var grade = document.getElementById('grade').value;
    var year = document.getElementById('passingYear').value;
    var exp = document.getElementById('Exp').value;
    var skills = document.getElementById('skills').value;
    var resume = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b> First Name:</b>".concat(firstName, "</p>\n    <p><b> Last Name:</b>").concat(lastName, "</p>\n    <p><b> Email I.D:</b>").concat(email, "</p>\n    <p><b> Date of Birth:</b>").concat(birthdate, "</p>\n    <p><b> Gender:</b>").concat(gender, "</p>\n\n    <h3><b>Education</b></h3>\n    <p><b> Qualification:</b>").concat(qualification, "</p>\n    <p><b> Grade:</b>").concat(grade, "</p>\n    <p><b> Year:</b>").concat(year, "</p>\n\n    <h3><b>Experience</b></h3>\n    <p>").concat(exp, "</p>\n\n    <h3><b>Skills</b></h3>\n    <p>").concat(skills, "</p>\n    ");
    if (generatedElement) {
        generatedElement.innerHTML = resume;
    }
    else {
        console.error("Some elements are missing");
    }
});
