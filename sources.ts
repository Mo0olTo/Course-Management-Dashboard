const courses = [
    {
      "id": "5",
      "courseName": "Vue.js Fundamentals",
      "instructorName": "Mohamed Hassan",
      "category": "Frontend",
      "duration": 20,
      "price": 14,
      "status": "Draft",
      "description": "add htis to discreption ok little bunny",
      "createdDate": "2024-04-21T14:40:56.679Z"
    },
    {
      "id": "8",
      "courseName": "Responsive Web Design",
      "instructorName": "Adel Magdy",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Active",
      "createdDate": "2024-11-21T22:44:42.832Z"
    },
    {
      "id": "9",
      "courseName": "React from Zero to Hero",
      "instructorName": "Yasmin Rafiq",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Active",
      "description": "All this is from test ",
      "createdDate": "2025-12-26T08:34:39.656Z"
    },
    {
      "id": "10",
      "courseName": "HTML & CSS Mastery",
      "instructorName": "Dina Fawzy",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Active",
      "createdDate": "2026-05-16T00:23:30.624Z"
    },
    {
      "id": "11",
      "courseName": "Bootstrap 5 Complete",
      "instructorName": "Yasmin Rafiq",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Active",
      "createdDate": "2024-06-26T02:25:15.120Z"
    },
    {
      "id": "12",
      "courseName": "Webpack & Build Tools",
      "instructorName": "Salma Adly",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Draft",
      "createdDate": "2026-02-07T14:16:35.290Z"
    },
    {
      "id": "13",
      "courseName": "CSS Grid & Flexbox",
      "instructorName": "Ramy Essam",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Active",
      "createdDate": "2024-11-15T09:23:24.627Z"
    },
    {
      "id": "14",
      "courseName": "Redux State Management",
      "instructorName": "Amir Tarek",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Draft",
      "createdDate": "2025-06-21T04:55:26.535Z"
    },
    {
      "id": "15",
      "courseName": "Tailwind CSS Bootcamp",
      "instructorName": "Salma Adly",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Archived",
      "createdDate": "2024-09-23T19:44:17.683Z"
    },
    {
      "id": "16",
      "courseName": "Web Performance Optimization",
      "instructorName": "Nihal Atef",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Archived",
      "createdDate": "2024-05-31T02:29:34.695Z"
    },
    {
      "id": "17",
      "courseName": "Angular Complete Guide",
      "instructorName": "Mohamed Hassan",
      "category": "Frontend",
      "duration": 20,
      "price": 99,
      "status": "Archived",
      "createdDate": "2024-11-15T01:01:51.908Z"
    },
    {
      "id": "18",
      "courseName": "Backend Security Best Practices",
      "instructorName": "Yasmin Rafiq",
      "category": "Backend",
      "duration": 30,
      "price": 149,
      "status": "Draft",
      "createdDate": "2026-03-20T09:41:29.523Z"
    },
    {
      "id": "19",
      "courseName": "NestJS Complete Guide",
      "instructorName": "Nadia Galal",
      "category": "Backend",
      "duration": 30,
      "price": 149,
      "status": "Archived",
      "createdDate": "2024-04-18T22:27:46.652Z"
    },
    {
      "id": "29",
      "courseName": "Spring Boot Masterclass",
      "instructorName": "Youssef Ibrahim",
      "category": "Backend",
      "duration": 30,
      "price": 149,
      "status": "Draft",
      "createdDate": "2025-07-12T16:55:09.041Z"
    },
    {
      "id": "30",
      "courseName": "PHP Laravel Framework",
      "instructorName": "Mariam Hani",
      "category": "Backend",
      "duration": 30,
      "price": 149,
      "status": "Active",
      "createdDate": "2024-08-02T11:12:23.240Z"
    },
    {
      "id": "31",
      "courseName": "Microservices Architecture",
      "instructorName": "Mariam Hani",
      "category": "Backend",
      "duration": 30,
      "price": 149,
      "status": "Archived",
      "createdDate": "2025-11-05T06:10:07.425Z"
    },
    {
      "id": "32",
      "courseName": "Redis Caching Strategies",
      "instructorName": "Tariq Saeed",
      "category": "Backend",
      "duration": 30,
      "price": 149,
      "status": "Draft",
      "createdDate": "2025-04-29T02:12:37.560Z"
    },
    {
      "id": "33",
      "courseName": "MongoDB for Developers",
      "instructorName": "Khaled Mahmoud",
      "category": "Backend",
      "duration": 30,
      "price": 149,
      "status": "Active",
      "createdDate": "2024-06-14T14:59:13.915Z"
    },
    {
      "id": "34",
      "courseName": "FastAPI with Python",
      "instructorName": "Samir Bassem",
      "category": "Backend",
      "duration": 30,
      "price": 149,
      "status": "Draft",
      "createdDate": "2025-05-28T03:10:54.456Z"
    },
    {
      "id": "35",
      "courseName": "Motion Design with AE",
      "instructorName": "Hossam Wael",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2024-02-06T14:40:51.462Z"
    },
    {
      "id": "36",
      "courseName": "Interaction Design Patterns",
      "instructorName": "Youssef Ibrahim",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2024-03-23T00:57:48.583Z"
    },
    {
      "id": "37",
      "courseName": "User Research Methods",
      "instructorName": "Nour Ehab",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2025-01-04T15:48:23.087Z"
    },
    {
      "id": "38",
      "courseName": "Prototyping & Wireframing",
      "instructorName": "Karim Adel",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Draft",
      "createdDate": "2025-05-28T18:42:10.538Z"
    },
    {
      "id": "39",
      "courseName": "Adobe XD Masterclass",
      "instructorName": "Nadia Waheed",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Active",
      "createdDate": "2026-03-26T18:19:30.443Z"
    },
    {
      "id": "40",
      "courseName": "Color Theory for Designers",
      "instructorName": "Khaled Mahmoud",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2024-11-07T01:30:21.631Z"
    },
    {
      "id": "41",
      "courseName": "UI/UX Design Principles",
      "instructorName": "Heba Lotfy",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Draft",
      "createdDate": "2025-04-02T10:02:31.942Z"
    },
    {
      "id": "42",
      "courseName": "Brand Identity Design",
      "instructorName": "Hamza Yusuf",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Draft",
      "createdDate": "2025-08-12T03:32:42.883Z"
    },
    {
      "id": "43",
      "courseName": "Design Systems Creation",
      "instructorName": "Karim Adel",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Active",
      "createdDate": "2026-01-28T18:23:49.915Z"
    },
    {
      "id": "44",
      "courseName": "Mobile App UI Design",
      "instructorName": "Ramy Essam",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Active",
      "createdDate": "2025-04-07T11:28:27.740Z"
    },
    {
      "id": "45",
      "courseName": "Sketch for UI Design",
      "instructorName": "Salma Adly",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2025-12-26T12:50:35.734Z"
    },
    {
      "id": "46",
      "courseName": "Figma Complete Course",
      "instructorName": "Nadia Waheed",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2024-08-01T10:51:30.583Z"
    },
    {
      "id": "47",
      "courseName": "Adobe Illustrator Basics",
      "instructorName": "Faris Salah",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Draft",
      "createdDate": "2024-09-18T07:48:55.559Z"
    },
    {
      "id": "48",
      "courseName": "Dashboard UI Design",
      "instructorName": "Karim Adel",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2024-10-13T11:26:50.978Z"
    },
    {
      "id": "49",
      "courseName": "Typography Fundamentals",
      "instructorName": "Rana Helmy",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2026-06-19T14:13:47.113Z"
    },
    {
      "id": "50",
      "courseName": "Adobe Illustrator Basics",
      "instructorName": "Mahmoud Sherif",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Active",
      "createdDate": "2026-01-16T21:45:21.290Z"
    },
    {
      "id": "51",
      "courseName": "Sketch for UI Design",
      "instructorName": "Nadia Galal",
      "category": "Design",
      "duration": 15,
      "price": 79,
      "status": "Archived",
      "createdDate": "2024-06-19T04:58:59.608Z"
    },
    {
      "id": "52",
      "courseName": "App Store Optimization",
      "instructorName": "Khaled Mahmoud",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Archived",
      "createdDate": "2024-05-18T11:30:33.050Z"
    },
    {
      "id": "53",
      "courseName": "iOS Development with Swift",
      "instructorName": "Doaa Magdi",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Draft",
      "createdDate": "2024-10-31T21:45:38.922Z"
    },
    {
      "id": "54",
      "courseName": "Firebase for Mobile Apps",
      "instructorName": "Salma Adly",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Draft",
      "createdDate": "2024-04-18T16:30:37.396Z"
    },
    {
      "id": "55",
      "courseName": "React Native from Scratch",
      "instructorName": "Walid Tamer",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Active",
      "createdDate": "2025-07-28T04:52:08.189Z"
    },
    {
      "id": "56",
      "courseName": "Mobile App Testing",
      "instructorName": "Hana Zaki",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Active",
      "createdDate": "2025-07-19T08:31:47.937Z"
    },
    {
      "id": "57",
      "courseName": "Ionic Framework Basics",
      "instructorName": "Mostafa Gamal",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Active",
      "createdDate": "2024-02-12T10:22:16.226Z"
    },
    {
      "id": "58",
      "courseName": "Flutter Complete Course",
      "instructorName": "Nihal Atef",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Archived",
      "createdDate": "2025-05-04T02:28:26.206Z"
    },
    {
      "id": "59",
      "courseName": "Android with Kotlin",
      "instructorName": "Omar Khalid",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Active",
      "createdDate": "2025-05-08T04:21:18.002Z"
    },
    {
      "id": "60",
      "courseName": "Mobile UI/UX Design",
      "instructorName": "Samir Bassem",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Archived",
      "createdDate": "2026-04-15T00:20:21.565Z"
    },
    {
      "id": "61",
      "courseName": "Push Notifications Integration",
      "instructorName": "Samir Bassem",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Active",
      "createdDate": "2024-11-21T09:18:06.815Z"
    },
    {
      "id": "62",
      "courseName": "Cross-Platform App Development",
      "instructorName": "Heba Lotfy",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Archived",
      "createdDate": "2024-09-02T11:37:51.907Z"
    },
    {
      "id": "63",
      "courseName": "AR in Mobile with ARKit",
      "instructorName": "Amr Farouk",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Draft",
      "createdDate": "2025-10-21T05:11:11.428Z"
    },
    {
      "id": "64",
      "courseName": "Xamarin Development",
      "instructorName": "Hazem Fouad",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Archived",
      "createdDate": "2025-06-10T04:42:38.976Z"
    },
    {
      "id": "65",
      "courseName": "Offline-First Mobile Apps",
      "instructorName": "Nihal Atef",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Archived",
      "createdDate": "2025-06-08T21:34:47.554Z"
    },
    {
      "id": "66",
      "courseName": "Mobile Security Best Practices",
      "instructorName": "Mohamed Hassan",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Active",
      "createdDate": "2024-07-20T17:17:34.521Z"
    },
    {
      "id": "67",
      "courseName": "Cross-Platform App Development",
      "instructorName": "Omar Khalid",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Archived",
      "createdDate": "2025-04-01T17:50:44.141Z"
    },
    {
      "id": "68",
      "courseName": "Mobile App Testing",
      "instructorName": "Rania Fathi",
      "category": "Mobile",
      "duration": 25,
      "price": 129,
      "status": "Active",
      "createdDate": "2024-01-15T23:24:17.680Z"
    },
    {
      "id": "69",
      "courseName": "Computer Vision with OpenCV",
      "instructorName": "Mariam Hani",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Archived",
      "createdDate": "2024-02-14T12:46:23.712Z"
    },
    {
      "id": "70",
      "courseName": "Time Series Forecasting",
      "instructorName": "Mohamed Hassan",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Active",
      "createdDate": "2024-09-07T10:31:33.878Z"
    },
    {
      "id": "71",
      "courseName": "PyTorch for Deep Learning",
      "instructorName": "Fatima Nour",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Draft",
      "createdDate": "2026-05-11T07:59:38.831Z"
    },
    {
      "id": "72",
      "courseName": "TensorFlow & Keras",
      "instructorName": "Omar Khalid",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Active",
      "createdDate": "2024-09-23T18:45:28.314Z"
    },
    {
      "id": "73",
      "courseName": "Scikit-Learn Masterclass",
      "instructorName": "Ziad Hossam",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Draft",
      "createdDate": "2024-10-06T11:50:02.718Z"
    },
    {
      "id": "74",
      "courseName": "Natural Language Processing",
      "instructorName": "Omar Khalid",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Active",
      "createdDate": "2024-03-05T01:00:04.304Z"
    },
    {
      "id": "75",
      "courseName": "Recommendation Systems",
      "instructorName": "Laith Sameer",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Draft",
      "createdDate": "2024-01-06T18:21:37.703Z"
    },
    {
      "id": "76",
      "courseName": "Machine Learning with Python",
      "instructorName": "Laith Sameer",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Active",
      "createdDate": "2024-03-23T01:39:20.647Z"
    },
    {
      "id": "77",
      "courseName": "Reinforcement Learning",
      "instructorName": "Yasmin Rafiq",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Draft",
      "createdDate": "2025-01-21T05:04:32.758Z"
    },
    {
      "id": "78",
      "courseName": "MLOps Fundamentals",
      "instructorName": "Amr Farouk",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Active",
      "createdDate": "2025-11-01T23:25:18.467Z"
    },
    {
      "id": "79",
      "courseName": "Neural Networks A-Z",
      "instructorName": "Hazem Fouad",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Draft",
      "createdDate": "2025-10-14T15:18:44.050Z"
    },
    {
      "id": "80",
      "courseName": "Deep Learning Fundamentals",
      "instructorName": "Ghada Rizk",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Active",
      "createdDate": "2024-06-20T07:28:03.440Z"
    },
    {
      "id": "81",
      "courseName": "Feature Engineering Techniques",
      "instructorName": "Hamza Yusuf",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Draft",
      "createdDate": "2025-12-18T07:27:53.519Z"
    },
    {
      "id": "82",
      "courseName": "Transfer Learning Techniques",
      "instructorName": "Layla Mansour",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Active",
      "createdDate": "2024-03-26T20:06:32.168Z"
    },
    {
      "id": "83",
      "courseName": "Generative AI Basics",
      "instructorName": "Nadia Waheed",
      "category": "Machine Learning",
      "duration": 50,
      "price": 299,
      "status": "Draft",
      "createdDate": "2026-01-31T01:19:37.811Z"
    },
   

  ];

const API_URL =
  'https://6a3d25fcd8e212699e238312.mockapi.io/api/v1/courses';

async function uploadCourses() {
  for (const course of courses) {
    const { id, ...courseWithoutId } = course;

    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseWithoutId),
    });

    console.log(`Uploaded: ${course.courseName}`);
  }

  console.log('Done!');
}

uploadCourses();