import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  experience: {
    main: {
      'Web Developer / Orchid': {
        time: 'Feburary 2024 - April 2026 / Auckland, New Zealand',
        text: 'As a full-stack developer, I engaged in complex client application development involving sophisticated UI collaborated with API integrations. I also leveraged not only development platform but also third-party platforms such as Firebase and Azure from architecture and business aspects. Navigating these technical challenges and delivering effective client solutions significantly accelerated my growth as a developer.',
      },
      'Web Developer / Mitsue-Links Co.,Ltd.': {
        time: 'June 2021 - October 2023 / Tokyo, Japan',
        text: "My role spanned both front-end and back-end development, primarily building corporate websites and SPAs using Next.js and Nuxt.js. I integrated CMS solutions to streamline content management for clients and optimized ongoing maintenance workflows. The company's strong commitment to accessibility in line with W3C standards has deeply shaped my own development philosophy.",
        note: ["As for my development policy, please kindly click the 'Profile' tab button above."],
      },
      'Web Developer / Sankaku Company': {
        time: 'April 2019 - June 2021 / Tokyo, Japan',
        text: "As a front-end developer, I delivered numerous corporate websites and SPAs across a high volume of concurrent projects. This fast-paced environment pushed me to grow rapidly and sharpen my skills under pressure. It also provided valuable opportunities to collaborate with external business partners, reinforcing my appreciation for effective teamwork in large-scale projects.",
      },
    },
    other: {
      'Strawberry Picker / Good Planet': {
        time: 'Norvember 2023 - January 2023 / Auckland, New Zealand',
        text: "Not only just picking strawberries but also pruning, thinning, and maintaining orchard equipment are my responsibilities. I'm focusing on effectiveness because it requires quickness and courteousness. I always thought 'what is the best way?' to satisfy both of them.",
      },
      'Sales and Tour Operator / JTB Corp.': {
        time: 'April 2018 - April 2019 / Tokyo, Japan',
        text: "My main responsibilities was sales and operating client's travel and convention but also including tour attendant jobs and simple interpretation.",
      },
      'Tennis Coach / Konami Sports': {
        time: 'April 2014 - April 2018 / Saitama, Japan',
        text: 'As a tennis coach, I am dedicated to improving customers\' tennis skills, catering to individuals of all ages, from kids to elderly people, and from beginners to advanced players.',
      },
      // 'Beverage Factory Worker': {
      //   time: 'November 2015 - June 2016 / Melbourne, Australia',
      //   text: 'Making juice involves ordering the required amount of vegetables and fruits, scaling, cutting, squashing, mixing, pouring into a bottle, labeling, and delivering. The work is done by cooperating with multinational co-workers.',
      // },
    },
  },
  works: {
    'Kiwi Avoidance Training': {
      detail: {
        CLIENT: 'Kiwi Avoidance Training',
        TECHNOLOGY: 'React, TypeScript, Tailwind CSS, Node, Firebase',
        DETAILDS: [
          'This app serves three user types: admins, trainers, and dog owners. In New Zealand, dog owners and their dogs are required to hold a valid training certificate to access national and regional parks, as well as other protected areas where regulations exist to safeguard native wildlife — including kiwi and penguins. Trainers can create and manage training sessions, while dog owners can browse and book them. The app provides an end-to-end system for managing bookings, training outcomes, and certificate issuance.',
        ],
        PERIOD: 'February 2025 - February 2026',
        LINK: 'https://app.kiwiavoidancetraining.nz',
      },
      imgPath: '/assets/img/works/kat',
      images: ['kat-1.png', 'kat-2.png', 'kat-3.png', 'kat-4.png', 'kat-5.png'],
      srcText: ['Booking Page', 'Admin Page', 'Dog Owner Page', 'Training Certificate'],
    },
    'IMG': {
      detail: {
        CLIENT: 'IMG Integrated Maintenance Group',
        TECHNOLOGY: 'React, TypeScript, Tailwind CSS, Node, MongoDB, Azure',
        DETAILDS: [
          'This is an in-house attendance and payroll management system built with strict role-based access control. Employees can log their attendance, submit leave requests, and record detailed job information. Administrators, branch managers, and payroll officers have elevated access to monitor employee attendance and oversee payroll processing.',
        ],
        PERIOD: 'April 2025 - April 2026',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: '/assets/img/works/img',
      images: ['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png', 'img-5.png'],
      srcText: ['Timesheets Page', 'Add Timesheet', 'Jobs Page', 'Reporting Page'],
    },
    'Overwatch': {
      detail: {
        CLIENT: 'Overwatch Inc.',
        TECHNOLOGY: 'React, TypeScript, MUI',
        DETAILDS: [
          'Fleet owners, ship owners, and shipbuilding companies can register their vessels and monitor voyages through a rich set of tracking data — including speed, fuel consumption, sailing routes, and more. Administrators and permitted users can also run cross-vessel comparisons to evaluate and benchmark features and performance across the fleet.',
        ],
        PERIOD: 'April 2024 - April 2026',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: '/assets/img/works/overwatch',
      images: ['overwatch-1.png', 'overwatch-2.png', 'overwatch-3.png', 'overwatch-4.png', 'overwatch-5.png'],
      srcText: ['Fleet Dashboard Page', 'Fleet Page', 'Fleet Details Page', 'Analytics Page'],
    },
    'Desktop Trace': {
      detail: {
        CLIENT: 'Desktop Trace',
        TECHNOLOGY: 'Vue.js, Node, MongoDB',
        DETAILDS: [
          'This app provides a powerful search platform for retrieving information across multiple data categories — including property, company, and vehicle records. Users can apply a variety of search patterns to quickly locate the data they need, primarily for business and due diligence purposes.',
        ],
        PERIOD: 'April 2024 - April 2026',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: '/assets/img/works/desktop-trace',
      images: ['desktop-trace-1.png', 'desktop-trace-2.png', 'desktop-trace-3.png', 'desktop-trace-4.png'],
      srcText: ['Super Trace Page', 'Trace History Page', 'Admin Dashboard Page'],
    },
    'Corex': {
      detail: {
        CLIENT: 'CoreX Solutions',
        TECHNOLOGY: 'React, TypeScript, Node',
        DETAILDS: [
          'This app is an in-house billing management system for creating and managing estimates, invoices, and credit notes. Users can handle internal records while also issuing these documents directly to their customers.',
        ],
        PERIOD: 'April 2024 - April 2025',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: '/assets/img/works/corex',
      images: ['corex-1.png', 'corex-2.png', 'corex-3.png', 'corex-4.png', 'corex-5.png'],
      srcText: ['Dashboard Page', 'Add Job Page', 'Edit Supplier Page', 'Settings Page'],
    },
    'Tamagawa University Corporate Website': {
      detail: {
        CLIENT: 'Tamagawa University',
        TECHNOLOGY: 'HTML5, CSS3, TypeScript, Movable Type',
        DESIGN: 'UX, Animation',
        DETAILDS: [
          'I was mainly in charge of a renewal of a huge university\'s Corporate Website with 4 team members.',
          'My responsibilities were both the frontend and the backend, considering UX and animation, and team management. When it comes to the backend, I implemented my frontend development into Movable Type so that the client is also able to manage a plenty of contents by himself.',
          'I experienced the almost all process of this huge project, so from project manager\'s perspective as well, I was able to develop with concentration on the project\'s scope, volumes and budget for each task, human resources, team and progress management, and so on.',
        ],
        PERIOD: 'June 2022 - March 2023',
        LINK: [
          ['https://www.tamagawa.jp/', 'https://www.tamagawa.jp/university/', 'https://www.tamagawa.jp/academy/'],
          false,
        ],
      },
      imgPath: "/assets/img/works/tamagawa",
      srcText: ['PC', 'SP'],
    },
    'Actually Marketing Site': {
      detail: {
        CLIENT: 'Actually Inc.',
        TECHNOLOGY: 'Next.js, TypeScript, Netlify',
        DETAILDS: [
          'Marketing web site for Actually application',
        ],
        PERIOD: 'August 2024 - Octorber 2024',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: '/assets/img/works/actually',
      images: ['actually-1.png', 'actually-2.png', 'actually-3.png', 'actually-4.png', 'actually-5.png'],
      srcText: ['Dashboard', 'Detail', 'Form'],
    },
    'KP Fit Marketing Site': {
      detail: {
        CLIENT: 'KP Fit',
        TECHNOLOGY: 'Next.js, TypeScript, Netlify',
        DETAILDS: [
          'Marketing web site for KP Fit application',
        ],
        PERIOD: 'November 2024 - December 2024',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: '/assets/img/works/kp-fit',
      images: ['kp-fit-1.png', 'kp-fit-2.png', 'kp-fit-3.png'],
      srcText: ['Top'],
    },
    'BIDI Marketing Site': {
      detail: {
        CLIENT: 'BIDI Ltd.',
        TECHNOLOGY: 'Next.js, TypeScript, Netlify',
        DETAILDS: [
          'Marketing web site for BIDI application',
        ],
        PERIOD: 'January 2025 - February 2025',
        LINK: 'https://bidi.nz/',
      },
      imgPath: '/assets/img/works/bidi',
      images: ['bidi-1.png', 'bidi-2.png', 'bidi-3.png', 'bidi-4.png', 'bidi-5.png'],
      srcText: ['Top', 'Listing', 'Detail'],
    },
    'Estimate Builder': {
      detail: {
        CLIENT: 'In-house application',
        TECHNOLOGY: 'Next.js, TypeScript, Netlify',
        DETAILDS: [
          'This web app is designed for potential clients exploring application development services with us. It provides upfront answers to common pre-contract enquiries — including rough project estimates, development processes, and other key information — helping clients make informed decisions before moving forward.',
        ],
        PERIOD: 'February 2025 - March 2025',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: '/assets/img/works/estimate',
      images: [
        'estimate-1.png',
        'estimate-2.png',
        'estimate-3.png',
        'estimate-4.png',
        'estimate-5.png',
        'estimate-6.png',
        'estimate-7.png',
      ],
      srcText: ['Top', 'Editor', 'Items', 'Summary', 'Preview', 'Export'],
    },
    'Overwatch Marketing Site': {
      detail: {
        CLIENT: 'Overwatch Inc.',
        TECHNOLOGY: 'Next.js, TypeScript, Netlify',
        DETAILDS: [
          'Marketing web site for Overwatch application',
        ],
        PERIOD: 'June 2025 - August 2025',
        LINK: 'https://overwatch.hamiltonjet.com/',
      },
      imgPath: '/assets/img/works/overwatch-marketing',
      images: [
        'overwatch-marketing-1.png',
        'overwatch-marketing-2.png',
        'overwatch-marketing-3.png',
        'overwatch-marketing-4.png',
      ],
      srcText: ['', '', ''],
    },
    'Nap Art App': {
      detail: {
        CLIENT: 'Ohirune Art Association',
        TECHNOLOGY: 'Vue3',
        DESIGN: 'UX',
        DETAILDS: [
          "I developed an SPA where users can create handmade artwork capturing their baby's cuteness and cherished moments by processing children's photos with provided background templates and decorative images through intuitive UI operations",
          'The difficulties I faced in this project were related to the integration of the frontend and backend',
          ' I was responsible not only for frontend development but also for integration, while the backend was developed by our partner company. However, their technologies, Twig and EC-CUBE, were completely unfamiliar to me, so I was somewhat confused when I first saw their code.',
          "Nevertheless, with my consciously active effort to engage in meaningful conversations with a backend developer and quickly investigate their technologies, that initial confusion gradually dissipated, and I successfully reached completion.",
          "The experience, including learning how to collaborate with others, how to efficiently investigate even unfamiliar information, and how to maintain composure during confusion to carry out what I should do, undoubtedly led to a significant growth in my development as a developer.",
        ],
        PERIOD: 'December 2020 - April 2021',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: "/assets/img/works/nap",
      srcText: ['PC', 'SP'],
    },
    'TOSO Corporate Website': {
      detail: {
        CLIENT: 'TOSO CO.,LTD.',
        TECHNOLOGY: 'Vue3, API Integration',
        DESIGN: 'Not In Charge',
        DETAILDS: [
          'I developed a Corporate Website for a client specializing in interior furniture, particularly curtain-related products, with my team.',
          'We chose to implement Vue.js because the website required a plenty of versatile UI elements and functionalities. Besides, the Website had to introduce their products with a variety of details, so we adopted Vue3 and API Integration to efficiently and easily manage them.',
          'I learned Vue.js from the foundation to the advanced through this project.',
        ],
        PERIOD: 'Octorber 2020 - June 2021',
        LINK: [['https://www.toso.co.jp/'], false],
      },
      imgPath: "/assets/img/works/toso",
      srcText: ['PC', 'SP'],
    },
    'Schick Evangelion Collabo LP': {
      detail: {
        CLIENT: 'Schick Japan K.K.',
        TECHNOLOGY: 'HTML5, CSS3, TypeScript',
        DESIGN: 'UX, Animation',
        DETAILDS: [
          "I developed Landing Page to promote client's products, mainly shaving, collaborated with famous Animation of Evangelion. Image of both shaving and Evangelion are something like masculine, powerful, and robotic, so I considered animations matching with such image and implemented the rich scroll-besed-animation.",
          'I am very proud of myself that I developed this LP with short period.',
        ],
        PERIOD: 'January 2021 - February 2021',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: "/assets/img/works/schick",
      srcType: 'movie',
      srcText: ['MOVIE PC', 'MOVIE SP'],
    },
    'Calendar App': {
      detail: {
        CLIENT: 'Private Project',
        TECHNOLOGY: 'React, Express',
        DESIGN: 'All with Adobe XD',
        DETAILDS: [
          'I created a calendar app to deepen my understanding of two aspects: the latest technologies in React and the integration of client-side and server-side development.',
          'In my previous workplace, there were cases where responsibilities were highly specialized, leading to separate development of front-end and back-end. This often resulted in integrating these components in the final stages of the project.',
          'Therefore, wanting to enhance my understanding of the integration, I intentionally assumed separate development responsibilities for each and created them in distinct repositories, then integrated these components via a proxy server.',
          'As a result, I gained valuable insights into optimal project directory structures, HTTP endpoint configurations, proxy server setup, and use cases for such development methodologies.',
        ],
        PERIOD: 'July 2023 - September 2023',
        LINK: [
          ['https://tika-calendar-app.glitch.me/'],
          'System does not work because this app is developed with PHP8 and cannot prepare PaaS supporting PHP8',
        ],
      },
      imgPath: "/assets/img/works/calendar",
      srcText: ['PC', 'SP'],
    },
    'Flash Card App': {
      detail: {
        CLIENT: 'Private Project',
        TECHNOLOGY: 'Vue3, TypeScript, Express',
        DESIGN: 'All with Adobe XD',
        DETAILDS: [
          'To deepen my understanding of Vue.js and to consolidate usage of best practice for data manipulation, I developed Flash Card App with modern App design.',
          'I actively used new Vue.js functionality at that moment, such as script setup mode, v-memo, provide, and inject in reference well to official documents. In addition to I focused on decent data manipulation as reinvestigating usages of Axious and Vuex, and the concept of Restful API.',
          'What I re-realized this time was the importance of updating my knowledge about the web and incorporating the latest technologies into everyday web development by regularly developing private applications and delving deep into specific fields.',
          'Regarding Vue.js, there had been significant updates since my previous knowledge, improving code readability and performance in app development. This development project was a valuable experience for me to familiarize myself with the latest Vue.js advancements.',
        ],
        PERIOD: 'August 2022 - December 2022',
        LINK: [
          ['https://tika-flashcard.glitch.me/'],
          'It might take time to activate because this app is on PaaS and needs to be set up',
        ],
      },
      imgPath: "/assets/img/works/flash",
      srcText: ['PC', 'SP'],
    },
    'Chat App': {
      detail: {
        CLIENT: 'Private Project',
        TECHNOLOGY: 'Vue3, TypeScript, Express',
        DESIGN: 'All with Adobe XD',
        DETAILDS: [
          "I privately developed Chat App imitating some WhatsApp App functionalities. The core of the App is the mutual communication realized by Websocket implemented with Node.js's Socket.IO library.",
          'Until then, I only knew HTTP as the communication protocol between the client-side and server-side. However, through this project, I learned about a new communication protocol called WebSocket, and I gained an understanding of its usefulness. Particularly, the ability to send information from the server-side to the client-side, which is not present in HTTP, was a concept that I found meaningful for future web application development.',
        ],
        PERIOD: 'February 2022 - June 2022',
        LINK: [
          ['https://snow-chat.glitch.me/'],
          'It might take time to activate because this app is on PaaS and needs to be set up',
        ],
      },
      imgPath: "/assets/img/works/chat",
      srcText: ['PC', 'SP'],
    },
    'My Inquiry Form Template': {
      detail: {
        CLIENT: "Template for Client's Inquiry Form",
        TECHNOLOGY: 'PHP, HTML5, CSS3',
        DESIGN: 'All with Adobe XD',
        DETAILDS: [
          'In my previous company, we received many requests to create an inquiry form, so I developed a template which is fully covering any potential security risk and customizable for any irregular form elements',
          'As a result, we was able to not only successfully shortened the development period, but also by showing the template to client when received, it became easier  for project managers to suggest and explain to clients what is important on inquiry form and how would its functionalities become.',
        ],
        PERIOD: 'April 2023 - June 2023',
        LINK: [
          ['https://tika-inquiry-form.glitch.me/'],
          'System does not work because this app is developed with PHP8 and cannot prepare PaaS supporting PHP8',
        ],
      },
      imgPath: "/assets/img/works/inquiry",
      srcText: ['PC', 'SP'],
    },
    'Desktop App for Deliverables': {
      detail: {
        CLIENT: 'Private Project',
        TECHNOLOGY: 'Electron, Node.js, Vue3, TypeScript, Shell Scripting, Git command',
        DESIGN: 'All with Adobe XD',
        DETAILDS: [
          'I developed this Desktop Application to reduce the working hours spent on chronic routine tasks.',
          'In my previous company, we had one client paying us over $2,000,000 annually and giving a plenty of tasks almost all day and parallelly. When each task finished, they required us a unique workflow for delivering a creation to get rid of any problems. That workflow was done with Git and double-check by other team member, and easy for one step but needed many steps to be done, such as frequent branch changes, or request message for double-check to others. Additionally this workflow had to be done many times a day by almost of all members of our team. It means that the total time spending for this client was huge.',
          'Therefore I developed this App. By filling the blanks with necessary information for the workflow on the application screen, it became possible to automatically and mechanically complete the followings, to switch branches, to generate request messages to other team members, and to detect potential errors. In other words, the workflow became to be done with a few steps.',
          'Consequently this App significantly contributed to reducing time within the team.',
        ],
        PERIOD: 'November 2022 - April 2023',
        LINK: 'Non Available for Compliance Reason',
      },
      imgPath: "/assets/img/works/desktop",
      srcType: 'desktop',
      srcText: [
        '1: Enter details about deliverables and click the start button',
        '2: Check if deliverables have no problem with WinMerge which is automatically shown up by App',
        '3: Click the check button to detect potential problems',
        '4: Confirm the problems according to the error messages',
        '5: Fix the problems, then click the check button again',
        '6: If all OK, App tells you that deliverables have no problem',
      ],
    },
  },
  strength: {
    Communicative: {
      intro: [
        'I pride myself on being an effective communicator — with both team members and clients. To ensure collaboration runs smoothly, I focus on three core principles.',
      ],
      points: [
        {
          title: "Understanding Others' Perspectives",
          description:
            "I create space for others to express themselves openly — fostering a comfortable atmosphere, allowing enough time for thoughtful dialogue, and listening carefully with targeted questions that draw out the full picture.",
        },
        {
          title: 'Expressing My Own Views',
          description:
            "When sharing my opinion, I'm intentional about how I communicate — considering both clarity and the emotional impact my words may have on others' feelings and motivation. At the same time, I'm not afraid to bring genuine emotion into the conversation when the situation calls for it, because I believe authenticity strengthens trust.",
        },
        {
          title: "Acknowledging Context and Circumstance",
          description:
            "Opinions don't exist in a vacuum. A person's thoughts are shaped by their current situation, personality, and background. I make a conscious effort to look beyond what's being said and consider the underlying factors that led someone to their perspective — because真 understanding often lies between the lines.",
        },
      ],
    },
    Consideration: {
      intro: [
        'Consideration is at the core of how I work. It shapes the way I communicate, make decisions, and build — and I believe it consistently leads to better outcomes for teams, projects, and end users alike. Here are three areas where this shows up most in my work.',
      ],
      points: [
        {
          title: 'Consideration for Others',
          description:
            'I make a consistent effort to be aware of the perspectives and needs of those around me. By genuinely accounting for how teammates think and feel, I help foster a collaborative atmosphere where people work well together and feel valued.',
        },
        {
          title: 'Consideration in Decision-Making',
          description:
            "I approach decisions deliberately — gathering and analysing information thoroughly before drawing conclusions, and weighing the potential impact on both immediate goals and longer-term objectives. I'd rather take the time to think things through than move fast in the wrong direction.",
        },
        {
          title: 'Consideration for UI & UX',
          description:
            'As a developer, I actively step outside my own perspective and think like the people who will actually use or release the product. That means factoring in accessibility, usability, performance, and readability — not as afterthoughts, but as integral parts of the development process.',
        },
      ],
    },
    'Growth-mindset': {
      intro: [
        'I take a proactive approach to identifying opportunities for improvement — whether that means streamlining a daily process, solving a recurring problem, or finding a smarter way to work. In my experience, this mindset consistently leads to meaningful gains in efficiency and team productivity.',
      ],
      points: [
        {
          title: 'Learning Beyond the Obvious',
          description:
            'While many developers focus primarily on learning new languages and frameworks, I place equal value on mastering the tools and techniques that accelerate everyday work. This includes regex, Linux commands, useful npm packages, VSCode extensions, and developing a deeper understanding of the development tools I use daily — the kind of knowledge that quietly compounds over time.',
        },
        {
          title: 'Building Tools That Save Time',
          description:
            'At my previous company, I identified a set of chronic, time-consuming routine tasks and took the initiative to build a desktop application using Electron to address them. With an intuitive UI, the app consolidated manual processes — including file transfers, message sending, and Git operations — into just a few interactions. The result was a significant reduction in working hours across the entire team.',
        },
        {
          title: 'A Culture of Sharing',
          description:
            "I actively share useful discoveries, techniques, and tools with my teammates. I believe that when knowledge flows freely within a team, it creates a self-reinforcing cycle of improvement — where everyone naturally raises their standard of work together.",
        },
      ],
    },
    'Detail-oriented': {
      intro: [
        'I bring a keen attention to detail to everything I work on. I firmly believe that thoroughness directly shapes the quality of a project — and quality is something I refuse to compromise on.',
        'In web development, that means going well beyond surface-level code. I focus on four dimensions that I consider essential to any well-built product.',
      ],
      points: [
        {
          title: 'Accessibility',
          description: 'Every service should be usable by everyone, regardless of ability or circumstance. I build with inclusivity in mind from the outset, not as an afterthought.',
        },
        {
          title: 'Performance',
          description: 'A great product should work seamlessly across any device or environment. I optimise consistently to ensure smooth, reliable experiences under real-world conditions.',
        },
        {
          title: 'Usability',
          description:
            'Interfaces should feel intuitive to a wide range of users. I design and implement UI and UX with clarity and ease of use as guiding principles — so that anyone can navigate a product confidently.',
        },
        {
          title: 'Readability',
          description:
            'Clean, well-structured code is a form of craftsmanship. I write with future maintainability in mind, because readable code makes for more robust, sustainable systems.',
        },
      ],
    },
    Studious: {
      intro: [
        "I make a consistent effort to deepen and broaden my understanding of programming languages and core concepts. This isn't just about keeping pace with the rapid evolution of the industry — it's about continuously expanding what I can bring to a company and its projects.",
        'My approach to continuous learning comes down to three habits I keep every day.',
      ],
      points: [
        {
          title: 'Investigate in the Moment',
          description:
            'When I encounter something unfamiliar during work, I address it promptly. If researching it would take significant time, I take notes and set aside dedicated time to explore it properly — so nothing gets glossed over.',
        },
        {
          title: 'Daily Learning Block',
          description:
            'I reserve 30 minutes each day specifically for exploring new technologies or strengthening areas where my understanding could be deeper. Consistency, even in small doses, adds up significantly over time.',
        },
        {
          title: 'Personal Projects as a Learning Tool',
          description:
            'When a breakthrough technology warrants deeper understanding, I initiate a personal project around it. Hands-on trial and error is, for me, the most effective way to move from surface-level familiarity to genuine confidence.',
        },
      ],
    },
    Adaptability: {
      intro: [
        "Adaptability is, in my view, one of the most essential traits for anyone working in the IT field — and it's something I've made a conscious effort to cultivate throughout my career. Here's why I consider it non-negotiable.",
      ],
      points: [
        {
          title: 'Technology Moves Fast',
          description:
            "The landscape shifts constantly, and the best approach today may be outdated tomorrow. Adaptability and quick learning are what allow me to make well-informed proposals, choose the right tools for each project, and deliver in a way that reflects the current state of the field — not yesterday's best practices.",
        },
        {
          title: 'Collaboration with People',
          description:
            'Development is rarely a solo endeavour. Projects bring together people of different roles, backgrounds, and technical specialisms. Adapting to different working styles and communication needs is what keeps collaboration productive and projects moving forward.',
        },
        {
          title: 'Time Is Almost Always Limited',
          description:
            "Tight deadlines, schedule slippages, and last-minute mockup requests are a reality of development work. In those moments, there's no luxury of a gradual adjustment period — adaptability means being ready to shift focus, recalibrate, and perform under pressure without losing momentum.",
        },
      ],
    },
  },
};
