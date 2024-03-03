// navbar menus
const menus = [
  { title: "Posts", href: "#posts" },
  { title: "Projects", href: "#projects" },
  { title: "Contacts", href: "#contacts" },
];

menus.forEach((item) => {
  document.getElementById("navbar-menus").innerHTML += `
    <li class="navbar-menu-item">
      <a href="${item.href}">${item.title}</a>
    </li>
  `;
});

// posts
const dummyPosts = [
  {
    title: "Mastering React Hooks: Simplifying State Management",
    description:
      "Learn how to leverage React Hooks to streamline state management in your web applications. Explore practical examples and best practices to enhance your React development skills.",
  },
  {
    title: "Building Responsive UIs with CSS Grid and Flexbox",
    description:
      "Discover the power of CSS Grid and Flexbox in creating responsive user interfaces for web development projects. Explore techniques for building dynamic layouts that adapt seamlessly across various screen sizes.",
  },
  {
    title: "Exploring Jetpack Compose: Modern UI Development for Android",
    description:
      "Dive into Jetpack Compose, Google's modern toolkit for building native Android UIs with a declarative approach. Learn how to create elegant and dynamic user interfaces for your Android apps.",
  },
  {
    title: "Optimizing Performance in Android Apps: Tips and Tricks",
    description:
      "Explore strategies for optimizing performance in your Android applications. From memory management techniques to asynchronous programming, discover actionable tips to ensure your apps run smoothly and efficiently.",
  },
];

for (let a = 0; a < 4; a++) {
  const post = dummyPosts[a];

  document.getElementById("grid-posts").innerHTML += `
    <div class="grid-post-item">
      <div class="wrapper-image">
        <img src="https://images.unsplash.com/photo-1484503793037-5c9644d6a80a?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div class="wrapper-content">
        <div class="label">
          <span class="date">February, 2024</span>
          <span class="read">5 min read</span>
        </div>
        <h1 class="title-1">${post.title}</h1>
        <p class="description">
          ${post.description}
        </p>

        <div class="details">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          <span>1.8k</span>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <span>1.0k</span>
        </div>
      </div>
    </div>
  `;
}

// projects
const dummyProjects = [
  {
    title: "E-commerce Website Development",
    description:
      "Build a fully functional e-commerce website using React.js and Node.js, incorporating features such as product listings, user authentication, and payment processing.",
  },
  {
    title: "Weather App for Android",
    description:
      "Create a weather forecasting app for Android devices, utilizing APIs to fetch real-time weather data and providing users with accurate weather forecasts based on their location.",
  },
  {
    title: "Portfolio Website Redesign",
    description:
      "Redesign and develop a modern portfolio website using HTML, CSS, and JavaScript, focusing on responsive design and showcasing projects, skills, and achievements.",
  },
  {
    title: "Task Management Mobile App",
    description:
      "Develop a task management mobile app for Android devices, enabling users to create, organize, and track tasks efficiently, with features such as notifications and task prioritization.",
  },
];
for (let a = 0; a < 4; a++) {
  const project = dummyProjects[a];
  document.getElementById("grid-projects").innerHTML += `
    <div class="grid-project-item">
      <div class="wrapper-image">
        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div class="wrapper-content">
        <h1>${project.title}</h1>
        <p class="description">${project.description}</p>

        <div class="details">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/HTML5_logo_black.svg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817" />
        </div>
      </div>
    </div>
  `;
}

// pinned posts
for (let a = 0; a < 3; a++) {
  const post = dummyPosts[a];
  document.getElementById("list-pinned-posts").innerHTML += `
    <li class="list-item-pinned-posts">
      <a href="#">${post.title}</a>
    </li>
  `;
}

const navbarMenuButton = document.getElementById("navbar-menu-button");
const navbarMenu = document.getElementById("navbar-menu");
navbarMenuButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("navbar-menu-hidden");
});
