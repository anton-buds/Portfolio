import { InlineCode } from "@/once-ui/components";
const person = {
  firstName: "Anton",
  lastName: "Buduan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Engineer | Front-End Developer",
  avatar: "/images/Avatar2.jpg",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tagalog"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Start building your website today!</>,
  description: (
    <>
      Connect with me and let's create something amazing together.
    </>
  ),
};



const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/anton-buds",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anton-buduan/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/antonbuds/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:antonbuds7@outlook.com",
  },
];

const home = {
  label: "Home",
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front-End Developer</>,
  subline: (
    <>
      I'm {person.firstName}, a Computer engineering student at <InlineCode>Don Honorio Ventura State University</InlineCode>,<br/>where I learned how to craft intuitive and user-friendly UI experiences. I enjoy working on projects that challenge my skills and push me to learn new things.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Anton is a Philippines-based Computer Engineering student and Front-End Developer with a passion for transforming ideas into modern, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work/Related Experience",
    experiences: [
      {
        company: "AYMAGICAL LINE (Not Active)",
        timeframe: "2023 February to April",
        role: "Web Developer",
        achievements: [
          <>
            Implemented secure payment processing and automated order confirmation system with email notifications
          </>,
          <>
            Created a queue-based order processing system ensuring first-come-first-serve handling of customer orders
          </>,
          <>
            Integrated customer feedback and review system to enhance product credibility and user trust
          </>,
          <>
            Built real-time order tracking functionality and automated shipping status updates
          </>,
          <>
            Successfully digitized the business operations, resulting in improved customer experience and streamlined order management
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/AYMAGICALLINE.png",
            alt: "AYMAGICAL LINE Project",
            width: 16,
            height: 9,
          },
        ],
      },
      /* IF YOU WANT TO ADD MORE, JUST COPY THE TEMPLATE BELOW AND CHANGE THE DETAILS:
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      }, */
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Don Honorio Ventura State University | College",
        description:
          <>BS in Computer Engineering</>,
      },
      {
        name: "Don Bosco Academy | High School",
        description: <>STEM strand</>,
        image: "/images/dba.jpg", // Add your high school image here
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Web Builder",
        description: (
          <>Able to build website using website builders such as Hostinger Website Builder and WordPress</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          /* IF YOU WANT TO ADD IMAGES JUST COPY THE TEMPLATE BELOW AND CHANGE THE IMAGE PATH:
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          }, */
        ],
      },  
      {
        title: "CSS Frameworks",
        description: (
          <>Adept in using CSS and JS frameworks such as Bootstrap,TailwindCSS, React, and Next.js</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          /* IF YOU WANT TO ADD IMAGES JUST COPY THE TEMPLATE BELOW AND CHANGE THE IMAGE PATH:
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          }, */
        ],
      },
      {
        title: "HTML, CSS, and JavaScript",
        description: (
          <>Adept in using HTML, CSS, and JavaScript</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/LoginForm.png",
            alt: "LoginForm",
            width: 16,
            height: 9,
          }, 
          {
            src: "/images/projects/project-01/Product_landing_page.png",
            alt: "Product landing page",
            width: 16,
            height: 9,
          }, 
          {
            src: "/images/projects/project-01/Product_landing_page2.png",
            alt: "Product landing page",
            width: 16,
            height: 9,
          }, 
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  
  images: [
    {
      src: "/images/gallery/avatar_solo.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/avatar_group.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
