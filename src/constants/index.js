export const myProjects = [
  {
    id: 1,
    title: "Quickart",
    description:
      "A full-featured MERN stack e-commerce platform for women's fashion, built from schema design through API implementation with a strong focus on backend architecture.",
    subDescription: [
      "Designed a complete MongoDB schema covering users, products, variants, categories, offers, coupons, orders, cart, wallet, and referrals.",
      "Documented the entire API surface in Postman across all modules before implementation, including auth, catalog, cart, checkout, and admin flows.",
      "Implemented secure authentication with JWT stored in httpOnly cookies, OTP verification, and a separate Admins collection for role isolation.",
      "Built a responsive frontend with vanilla HTML, CSS, and Bootstrap 5, using a custom design system with CSS custom properties.",
      "Integrated Razorpay payments with three-field signature verification and price snapshotting on orders for data integrity.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/quickart.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Bootstrap",
        path: "/assets/logos/bootstrap.svg",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "3D Portfolio",
  //   description:
  //     "A body of 3D product and architectural visualization work built on a Wood and Paper Technology background, blending design craft with technical rendering.",
  //   subDescription: [
  //     "Modeled and rendered furniture pieces with an emphasis on realistic materials, lighting, and product presentation.",
  //     "Applied a background in Wood and Paper Technology to bring domain-accurate detail to furniture construction and finishes.",
  //     "Worked extensively in Blender, covering modeling, texturing, rigging, and animation, including character walk and run cycles.",
  //     "Built a freelance pipeline for architecture firms and furniture brands, positioning 3D visualization as a platform-independent service offering.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/3d-portfolio.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blender",
  //       path: "/assets/logos/blender.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "3D Modeling",
  //       path: "/assets/logos/3dmodeling.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Rendering",
  //       path: "/assets/logos/rendering.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Animation",
  //       path: "/assets/logos/animation.svg",
  //     },
  //   ],
  // },
  {
    id: 3,
    title: "Developer Interview Platform - NexMeet",
    description:
      "An ongoing MERN stack platform for conducting and managing technical developer interviews, currently in active development.",
    subDescription: [
      "Building a structured interview flow covering candidate scheduling, live coding rounds, and evaluator scoring.",
      "Designing the backend with Node.js, Express, and MongoDB, following a production-grade project structure.",
      "Planning role-based access for candidates, interviewers, and admins.",
      "Upcoming: real-time code collaboration and automated assessment scoring.",
    ],
    href: "https://next-meet-nine.vercel.app/",
    logo: "NextMeet",
    image: "/assets/projects/NextMeet_Project.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/anagmk",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/anagmk-dev",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/an_._ag/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    job: "Knovista Technologies",
    date: "May 2026 - Present",
    contents: [
      "Working on real-world MERN stack development in a production team environment.",
      "Contributing to backend API design and implementation alongside ongoing project work.",
      "Applying and reinforcing full stack fundamentals learned during the Brototype program in a live codebase.",
    ],
  },
  {
    title: "MERN Stack Development Program",
    job: "Brototype, Kochi",
    date: "March 2025 - August 2026",
    contents: [
      "Completed an intensive full stack training program with a backend-focused specialization.",
      "Built foundational and advanced projects including authentication systems, e-commerce platforms, and freelancing marketplaces.",
      "Gained hands-on depth in JavaScript, Node.js, Express, MongoDB, and REST API design.",
      "Practiced technical interview preparation covering JavaScript internals, Node.js internals, and MongoDB internals.",
    ],
  },
  {
    title: "Freelance 3D Artist",
    job: "Self-Employed",
    date: "August 2023 - January 2026",
    contents: [
      "Specialized in 3D furniture design and product visualization, drawing on a Wood and Paper Technology background.",
      "Delivered rendering and modeling work for clients using Blender.",
      "Built experience in client communication, project scoping, and delivery that later carried over into software freelancing.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];