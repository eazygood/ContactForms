// Fetching HTML Elements in Var by ID

var x = document.getElementById('form');
var createForm = document.createElement('form'); // Create New Element Form
createForm.setAttribute('action', ''); // Setting action Attribute on Form
createForm.setAttribute('method', 'post'); // Setting method Attribute on Form
x.appendChild(createForm);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = 'Contact Form';
createForm.appendChild(heading);

var line =  document.createElement('hr'); // Giving horizontal row after heading
createForm.appendChild(line);

var linebreak = document.createElement('br');
createForm.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name field
namelabel.innerHTML = 'Your Name :'; // Set Field Labels;
createForm.appendChild(namelabel);

var inputElement = document.createElement('input'); // Create Field for Name
inputElement.setAttribute('type','text');
inputElement.setAttribute('name','dname');
inputElement.setAttribute('placeholder','Enter your name');
createForm.appendChild(inputElement);

var linebreak = document.createElement('br');
createForm.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail field
emaillabel.innerHTML = 'Your email :';
createForm.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input field for email
emailelement.setAttribute('type','text');
emailelement.setAttribute('name','demail');
emailelement.setAttribute('placeholder', 'Enter your email');
createForm.appendChild(emailelement);

var linebreak = document.createElement('br');
createForm.appendChild(linebreak);

var filelabel = document.createElement('lable'); // Create label for File field
filelabel.innerHTML = 'Input file';
createForm.appendChild.filelabel;

var inputfile = document.createElement('input'); // Create Input fueld for file
inputfile.setAttribute('type', 'file');
inputfile.setAttribute('name', 'dfile');
createForm.appendChild(inputfile);

var linebreak = document.createElement('br');
createForm.appendChild(linebreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = 'Your Message :';
createForm.appendChild(messagelabel);

var textareaelement = document.createElement('textarea');
textareaelement.setAttribute('name', 'dmessage');
textareaelement.setAttribute('placeholder', 'Enter your message')
createForm.appendChild(textareaelement);

var messagebreak = document.createElement('br');
createForm.appendChild(messagebreak);

var submitelement =  document.createElement('input'); //Append submit button
submitelement.setAttribute('type', 'submit');
submitelement.setAttribute('name','dsumbit');
submitelement.setAttribute('value', 'Submit');
createForm.appendChild(submitelement);




