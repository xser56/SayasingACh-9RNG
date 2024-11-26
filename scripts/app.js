// Element Id
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let button1 = document.getElementById("button1");
let last5Students = document.getElementById("last5Students"); 
let last5Array = [];

// Functions
function getStudentData() 
{
    return fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            return data.students;
        });
}

function getRandomStudent(students) 
{
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex];
}

button1.addEventListener("click", () => 
{
    getStudentData().then(students => 
    {
        let randomStudent = getRandomStudent(students);
        console.log(students);

        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        email.innerText = randomStudent.email;

        // Add upadte function to button
        last5Array.push(randomStudent); 

        if (last5Array.length > 5) 
        {
            last5Array.shift(); 
        }

        updateLast5Display();
    });
});

function updateLast5Display() 
{
    last5Students.innerText = "";

    for (let i = 0; i < last5Array.length; i++)
    {
        if (last5Array[i])
        {
            let student = last5Array[i];

            let listContent = document.createElement("li");
            listContent.innerText = `${student.firstName} ${student.lastName} - ${student.email}`;
            last5Students.appendChild(listContent);
        }
    }
}

