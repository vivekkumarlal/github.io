// Function to display project details dynamically
function showProjectDetails(projectId) {
    const projectDescriptions = {
        1: "Project One is a web application built with HTML, CSS, and JavaScript. It is a simple task management app with a modern UI.",
        2: "Project Two is a full-stack application that uses Node.js, Express, and MongoDB to provide a backend for a dynamic web application."
    };

    alert(projectDescriptions[projectId]);
}

// Form submission handler (for demonstration purposes)
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
        alert("Please fill in all fields.");
    }
});
