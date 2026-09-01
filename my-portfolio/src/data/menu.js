export const home = {
  filename: "home.txt",
  tagline: "hi, i like to build things.",
  lead: "This portfolio houses my professional accomplishments using an easy-to-access structure.  Pick a tab above to have a look around."
}

export const menu = [
  {
    id: "projects",
    label: "Projects",
    filename: "projects.txt",
    intro: {
      title: "Projects",
      lead: "A running list of things I’ve built, half-built, and occasionally rebuilt.",
      body: [
        "Pick a project from the menu above — or the cards below — to read more about how it works and what it’s made of."
      ]
    },
    items: [
      {
        id: "nimbus",
        filename: "nimbus.txt",
        label: "N.I.M.B.U.S.",
        title: "N.I.M.B.U.S.",
        tagline: "A prediction market bot looking for an edge in daily temperature markets.",
        tags: ["Python", "SQL", "WebSockets"],
        status: "In Progress",
        last_updated: "08/16/2026",
        sections: [
          {
            heading: "Purpose",
            body: [
              "N.I.M.B.U.S. strives to gain an edge over other users trading daily temperature contracts on Kalshi."
            ]
          },
          {
            heading: "Roadblocks",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo.",
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]

          }
        ],
        links: [
          { label: "Live demo", href: "#" }
        ]
      },
      {
        id: "serendipity",
        filename: "serendipity.txt",
        label: "Serendipity",
        title: "Serendipity",
        tagline: "A social networking app that melds new connections with everyday life.",
        tags: ["Vue.js", "Node.js", "AWS", "IOS Development"],
        body: [
          "A brief description of the project — what it automates, replaces, or makes slightly less annoying.",
          "Context on how it came about: a recurring chore, a curiosity, a bet with a friend."
        ],
        links: [
          { label: "View Site", href: "arytes.com" }
        ]
      },
      {
        id: "juicy-codes",
        filename: "juicy-codes.txt",
        label: "Juicy Codes",
        title: "Juicy Codes",
        image: "juicycodes_opener.svg",
        tagline: "A gamefied code-evaluaion platform to help develop programming skills.",
        tags: ["Django", "JavaScript", "Docker", "JUDGE0"],
        last_updated: "08/31/2026",
        sections: [
          {
            heading: "Purpose",
            body: [
              "Juicy Codes (I’ll admit it’s a weird name) is a code evaluation platform, a lot like LeetCode, that has users solve programming problems related to common DSA concepts. When problems are solved, the user unlocks and/or levels up trading cards relating to the category of the problem (lists, graphs, etc).",
              "LeetCode is a great way of learning important data structure and algorithm concepts, but I felt it lacked enough “gamification”. This project aims to fill that gap in a way that maintains a focus on learning while introducing some fun."
            ]
          },
          {
            heading: "Inspiration",
            body: [
              "The idea for Juicy Codes emerged from two locations: the first from a desire to build something new and interesting, and the other from a friend from elementary school who drew characters called “Juicy Guys” (it definitely sounds odd now).",
              "LeetCode was also used heavily for the UI/UX and overall mechanics."
            ]
          },
          {
            heading: "Site Walkthrough",
            body: [
              "When a user visits the site they are immediately prompted to sign up/login. Once their account has been verified, they can navigate to the problem bank, their card gallery (stores progress of cards), profile, and an about section for the site.",
              "The problem bank stores a list of all problems the site has to offer. The user can search for a problem as well as filter by type and attempt status.",
              "The card gallery is pretty much just that, a place where users can interact with the cards and easily see their progress."
            ]
          },
          {
            heading: "Core Functionality",
            body: [
              "The main idea of the site is to solve problems. This is done by: reading the presented problem statement, programming a solution, submitting the solution, and seeing if it passes all of the test cases.",
              "If the solution passes all test cases, the problem is marked as “solved”. If a test case fails, the problem is marked as “attempted”. These statuses are directly tied to a user."
            ]
          },
          {
            heading: "Cards",
            body: [
              "Cards (and the characters they display) are an integral part of the site. A card displays four main things: a character, its level, its category, and a short quote.",
              "The characters are unique to their DSA category (one for lists, another for graphs, etc). Some of them look pretty eccentric (my favorite’s the cartographer, hashbrowns a close second).",
              "A cards level represents how many problems, in that cards category, have been solved."
            ]
          }
        ]
      },
      {
        id: "betamac",
        filename: "betamac.txt",
        label: "Betamac",
        title: "Betamac",
        image: "betamac_opener.svg",
        tagline: "A multiplayer spin on the original arithmetic game 'Zetamac'.",
        tags: ["Django", "JavaScript", "Redis", "Websockets"],
        last_updated: "08/24/2026",
        sections: [
          {
            heading: "Overview",
            body: [
              "The ability to complete arithmetic of varying levels of difficulty, in quick succession, can help develop reasoning under pressure; a skill which, in my opinion, is pretty helpful for developing one’s problem solving abilities.",
              "Betamac allows users to solve arithmetic problems, ranging from simple to difficult, in quick succession. Users can play solo, with others, and if they’re feeling too powerful, with built in distractions."
            ]
          },
          {
            heading: "Inspiration",
            body: [
              "The idea for betamac was heavily influenced by the already popular arithmetic game zetamac(connect link).",
              "Zetamac functions similarly to Betamac in relation to the core mechanics, but differs when it comes to multiplayer and distraction modes."
            ]
          },
          {
            heading: "Core Functionality",
            body: [
              "When a user visits the site, they are immediately dropped into the homepage where they can configure the game settings. This involves defining number ranges, allowed operations, duration, and distractions (which will play random noises during the match).",
              "Once configuration is complete, they start the game.",
              "During the game they’ll solve as many questions as they can in the set duration, with each correct answer resulting in a positive score increment."
            ]
          },
          {
            heading: "Additional Features",
            body: [
              "Betamac also features a multiplayer mode, where the user can join or host a game. A game lobby is created using a “join” code which the host will give to the joiner."
            ]
          },
        ],
        links: [
          { label: "View Repo", href: "https://github.com/wizardmonkey83/betamac" },
          { label: "Live demo", href: "#" }
        ]
      },
      {
        id: "news-gen",
        filename: "news-gen.txt",
        label: "News-Gen",
        title: "News-Gen",
        tagline: "A fully autonomous video generation tool with a built-in feedback loop for persistent improvement.",
        tags: ["Python", "Langchain", "GCP", "JavaScript"],
        last_updated: "08/31/2026",
        sections: [
          {
            heading: "Purpose",
            body: [
              "With an increasing emphasis on AI agents and autonomous workflows, a tool that can autonomously create videos at a negligible cost could/would be in high demand depending on the intended user.",
              "Moreover, a video creation agent that can report on recent, developing news in an area could serve as a summary tool that would be deployed alongside daily news reports."
            ]
          },
          {
            heading: "Core Functionality",
            body: [
              "The tool operates in a step by step system (like anything else I guess).",
              "First, news reports are gathered either via RSS feeds or “grounding with Google search” a feature of the Gemini API. These reports are then sent to Gemini for synthesis and summarization.",
              "Another Gemini call is made using the news summary. The response of this call contains a text-to-speech script.",
              "Now, the news summary and TTS script are used to create the news report video. The video is generated using Google's VEO engine. The voiceover is generated by making a call to ElevenLabs, with the TTS script as the payload. Some post-processing is done on the video to overlay the generated voiceover.",
              "Once the video is completed, it is stored in a bucket inside of the user's Google Cloud Project (this could be configured to store locally)."
            ]
          },
          {
            heading: "Additional Features",
            body: [
              "NewsGen has a headless version (which runs using an Event Scheduler and Cloud Function) and a GUI for users who prefer to have a more visual process. GUI mode unlocks a few more editing options.",
              "Automatic posting to social media is also an option. The user can connect various social media profiles to the tool and have NewsGen automatically deploy the video once it’s created."
            ]
          }


        ],
        links: [
          { label: "View Repo", href: "https://github.com/wizardmonkey83/news-gen" }
        ]
      }
    ]
  },
  {
    id: "experience",
    label: "Experience",
    filename: "experience.txt",
    intro: {
      title: "Experience",
      lead: "Where I’ve worked, in reverse-chronological order.",
      body: [
        "Select a role from the menu or the list below for the longer version."
      ]
    },
    items: [
      {
        id: "Maximus",
        filename: "maximus.txt",
        label: "Maximus",
        title: "Software Engineer Intern",
        tagline: "Maximus | 05/26 - 08/26",
        tags: ["ETL Pipelines", "Database Management", "Cross-functional"],
        sections: [
          {
            heading: "Overview",
            body: [
              "N.I.M.B.U.S. strives to gain an edge over other users trading daily temperature contracts on Kalshi."
            ]
          },
          {
            heading: "What I Accomplished",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          },
          {
            heading: "What I Learned",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          },
          {
            heading: "Where I Failed",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          }
        ]
      },
      {
        id: "dctav",
        filename: "dctav.txt",
        label: "D.C. Tech & Venture Coalition",
        title: "Software Engineer Intern",
        tagline: "DCTAV | 01/26 - 04/26",
        tags: ["Agent Development", "Client Facing"],
        sections: [
          {
            heading: "Overview",
            body: [
              "N.I.M.B.U.S. strives to gain an edge over other users trading daily temperature contracts on Kalshi."
            ]
          },
          {
            heading: "What I Accomplished",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          },
          {
            heading: "What I Learned",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          },
          {
            heading: "Where I Failed",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          }
        ]
      },
      {
        id: "nsta",
        filename: "nsta.txt",
        label: "NSTA",
        title: "Technical Data Specialist",
        tagline: "NSTA | 03/25 - 08/25",
        tags: ["Automation", "Scripting", "Metadata Management"],
        sections: [
          {
            heading: "Overview",
            body: [
              "N.I.M.B.U.S. strives to gain an edge over other users trading daily temperature contracts on Kalshi."
            ]
          },
          {
            heading: "What I Accomplished",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          },
          {
            heading: "What I Learned",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          },
          {
            heading: "Where I Failed",
            body: [
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]
          }
        ]
      },
    ]
  },
  {
    id: "about",
    label: "About",
    filename: "about-me.txt",
    page: {
      title: "About Me",
      lead: "A little bit about who’s behind this notepad.",
      body: [
        "This is the part where you write two or three paragraphs about yourself — how you got into this work, what you care about, and what you’re looking for next.",
        "Feel free to let some personality through here. The rest of the site already has — no reason to go stiff now."
      ]
    }
  },
  {
    id: "contact",
    label: "Contact",
    filename: "contact.txt",
    page: {
      title: "Say hello",
      lead: "Have a project, a role, or just a question — the inbox is open.",
      email: "hello@example.com"
    }
  }
]

export function findRoute(hash) {
  const [categoryId, itemId] = hash.replace("#", "").split("/").filter(Boolean)
  const category = menu.find(c => c.id === categoryId) || menu[0]
  if (itemId && category.items) {
    const item = category.items.find(i => i.id === itemId)
    if (item) return { category, item }
  }
  return { category, item: null }
}
