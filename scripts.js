document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        { title: "Name of the Digital Firm", content: "Johnson Digital Academy" },
        { title: "Mission Statement", content: "To provide innovative, accessible, and high-quality digital education that empowers students and educators through technology-driven solutions." },
        { title: "Business Model", content: "Johnson Digital Academy operates on a flexible digital learning model with revenue streams from tuition fees, online certifications, corporate training, and institutional partnerships." },
        { title: "Management Levels", content: "<strong>Strategic Level:</strong> Board of Directors, University President.<br><strong>Tactical Level:</strong> Deans, Department Heads.<br><strong>Operational Level:</strong> Instructors, IT Staff, Student Support." },
        { title: "Functional Areas", content: "<strong>Academics:</strong> Course management, faculty assignments.<br><strong>Admissions & Enrollment:</strong> Student registration, fee payments.<br><strong>Student Support:</strong> Counseling, help desk.<br><strong>IT & Security:</strong> System maintenance, data security.<br><strong>Finance & Administration:</strong> Budgeting, payroll." },
        { title: "Business Processes by Level", content: "<strong>Strategic:</strong> Policy formulation, long-term planning.<br><strong>Tactical:</strong> Curriculum design, resource allocation.<br><strong>Operational:</strong> Daily course delivery, student monitoring." },
        { title: "Changes Induced by Digitization", content: "Online admissions, remote learning, AI-driven analytics, digital exams, cloud-based student records.<br>Streamlined administration, automation of student tracking, and enhanced data security." }
    ];

    const blogContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogContainer.appendChild(postElement);
    });
});
