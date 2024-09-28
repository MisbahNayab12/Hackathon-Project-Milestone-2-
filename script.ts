const form = document.getElementById('formTemp') as HTMLFormElement;
const generatedElement = document.getElementById('generatedResume') as HTMLDivElement;

form.addEventListener('submit', (event: Event)=> {
    event.preventDefault();

    const firstName = (document.getElementById('FN') as HTMLInputElement).value;
    const lastName = (document.getElementById('LN') as HTMLInputElement).value;
    const email = (document.getElementById('EI') as HTMLInputElement).value;
    const birthdate = (document.getElementById('DOB') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLSelectElement).value;
    const qualification = (document.getElementById('qualification') as HTMLSelectElement).value;
    const grade = (document.getElementById('grade') as HTMLSelectElement).value;
    const year = (document.getElementById('passingYear') as HTMLSelectElement).value;
    const exp = (document.getElementById('Exp') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resume = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b> First Name:</b>${firstName}</p>
    <p><b> Last Name:</b>${lastName}</p>
    <p><b> Email I.D:</b>${email}</p>
    <p><b> Date of Birth:</b>${birthdate}</p>
    <p><b> Gender:</b>${gender}</p>

    <h3><b>Education</b></h3>
    <p><b> Qualification:</b>${qualification}</p>
    <p><b> Grade:</b>${grade}</p>
    <p><b> Year:</b>${year}</p>

    <h3><b>Experience</b></h3>
    <p>${exp}</p>

    <h3><b>Skills</b></h3>
    <p>${skills}</p>
    `;

    if (generatedElement){
        generatedElement.innerHTML = resume;
    } else {
        console.error("Some elements are missing");
    }
});