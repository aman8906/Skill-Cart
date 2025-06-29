
export const getBook = (req, res) => {
  // Full book/course data (Free + Paid)
const books = [
  {
    id: 1,
    name: "JavaScript Basics",
    title: "Master JS in 7 Days",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 2,
    name: "React Guide",
    title: "Complete React from Scratch",
    category: "Paid",
    price: 999,
    image: "/Banner.png",
  },
  {
    id: 3,
    name: "Node.js Essentials",
    title: "Backend Development with Node",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 4,
    name: "MongoDB Mastery",
    title: "Learn MongoDB for Fullstack",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 5,
    name: "CSS Flexbox & Grid",
    title: "Responsive Design Made Easy",
    category: "Paid",
    price: 499,
    image: "/Banner.png",
  },
  {
    id: 6,
    name: "TypeScript Bootcamp",
    title: "Strictly Typed JavaScript",
    category: "Paid",
    price: 899,
    image: "/Banner.png",
  },
  {
    id: 7,
    name: "Express.js Crash Course",
    title: "Fast Backend Development",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 8,
    name: "Git & GitHub",
    title: "Version Control for Developers",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 9,
    name: "Next.js for Beginners",
    title: "Production Ready React",
    category: "Paid",
    price: 1099,
    image: "/Banner.png",
  },
  {
    id: 10,
    name: "Fullstack Developer Roadmap",
    title: "From Zero to Hero",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 11,
    name: "Python for Beginners",
    title: "Start Coding with Python",
    category: "Paid",
    price: 1099,
    image: "/Banner.png",
  },
  {
    id: 12,
    name: "Advanced Python",
    title: "OOP, Django, and More",
    category: "Paid",
    price: 1299,
    image: "/Banner.png",
  },
  {
    id: 13,
    name: "HTML & CSS",
    title: "Build Stunning Websites",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 14,
    name: "DevOps Essentials",
    title: "CI/CD, Docker & Kubernetes",
    category: "Paid",
    price: 1499,
    image: "/Banner.png",
  },
  {
    id: 15,
    name: "Java Programming",
    title: "Core Java for Beginners",
    category: "Paid",
    price: 1599,
    image: "/Banner.png",
  },
  {
    id: 16,
    name: "C++ DSA Mastery",
    title: "Data Structures in C++",
    category: "Paid",
    price: 899,
    image: "/Banner.png",
  },
  {
    id: 17,
    name: "Firebase for Web Apps",
    title: "Authentication & Hosting",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 18,
    name: "REST API Development",
    title: "Create APIs with Node.js",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 19,
    name: "SQL Basics",
    title: "Learn MySQL & PostgreSQL",
    category: "Paid",
    price: 599,
    image: "/Banner.png",
  },
  {
    id: 20,
    name: "Android App Development",
    title: "Kotlin & Jetpack Compose",
    category: "Paid",
    price: 1099,
    image: "/Banner.png",
  },
  {
    id: 21,
    name: "Linux Command Line",
    title: "Bash Scripting & CLI",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 22,
    name: "Cybersecurity Basics",
    title: "Ethical Hacking & Security",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
  {
    id: 23,
    name: "Machine Learning",
    title: "Intro to ML with Python",
    category: "Paid",
    price: 1599,
    image: "/Banner.png",
  },
  {
    id: 24,
    name: "UI/UX Design",
    title: "Figma & Design Principles",
    category: "Paid",
    price: 899,
    image: "/Banner.png",
  },
  {
    id: 25,
    name: "Data Science Bootcamp",
    title: "Numpy, Pandas, Matplotlib",
    category: "Free",
    price: 0,
    image: "/Banner.png",
  },
];

  res.status(200).json(books);
};


