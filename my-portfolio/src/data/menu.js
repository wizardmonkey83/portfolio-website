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
              "In order for N.I.M.B.U.S. to operate successfully, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models instead of getting it from simple REST API wrappers like OpenMeteo."
            ]

          }
        ],
        body: [
          "N.I.M.B.U.S. strives to gain an edge over other users trading daily temperature contracts on Kalshi.",
          "In order for N.I.M.B.U.S. to be successful, it needs to be fast. This required me to write logic that pulled weather forcasts directly from NOAA's ensemble models, leading to some prettty messy data management."
        ],
        links: [
          { label: "Live demo", href: "#" }
        ]
      },
      {
        id: "verifiable-feed",
        filename: "verifiable-feed.txt",
        label: "Verifiable-Feed",
        title: "Verifiable-Feed",
        tagline: "A build-it-yourself doorbell camera for secure recording.",
        tags: ["Python", "Computer Vision", "IOS Development", "PostgreSQL"],
        status: "Planned",
        body: [
          "What this one is, in a sentence or two — the shape of the problem, and the shape of the solution.",
          "What you’d do differently if you rebuilt it today, or the one feature you’re quietly proud nobody’s asked you to remove."
        ],
        links: [
          { label: "View repo", href: "https://github.com/wizardmonkey83/verifiable-feed" }
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
        tagline: "A gamefied code-evaluaion platform to help develop programming skills.",
        tags: ["Django", "JavaScript", "Docker", "JUDGE0"],
        body: [
          "A brief description of the project — what it automates, replaces, or makes slightly less annoying.",
          "Context on how it came about: a recurring chore, a curiosity, a bet with a friend."
        ],
        links: [
          { label: "View Repo", href: "https://github.com/wizardmonkey83/juicy-codes" },
          { label: "Live demo", href: "#" }
        ]
      },
      {
        id: "betamac",
        filename: "betamac.txt",
        label: "Betamac",
        title: "Betamac",
        tagline: "A multiplayer spin on the original arithmetic game 'Zetamac'.",
        tags: ["Django", "JavaScript", "Redis", "Websockets"],
        body: [
          "A brief description of the project — what it automates, replaces, or makes slightly less annoying.",
          "Context on how it came about: a recurring chore, a curiosity, a bet with a friend."
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
        body: [
          "A brief description of the project — what it automates, replaces, or makes slightly less annoying.",
          "Context on how it came about: a recurring chore, a curiosity, a bet with a friend."
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
      lead: "Where I’ve worked, roughly in reverse-chronological order — like a resume that got a little more comfortable with itself.",
      body: [
        "Select a role from the menu or the list below for the longer version."
      ]
    },
    items: [
      {
        id: "role-one",
        filename: "company-one.txt",
        label: "Company One",
        title: "Software Engineer",
        tagline: "Company One · 2023 — Present",
        tags: ["Ownership", "Cross-functional"],
        body: [
          "What the role actually involved day-to-day — the team, the product area, the kind of problems that landed on your desk.",
          "One concrete thing you shipped or improved, with enough specificity that it reads as real rather than a bullet point."
        ],
        links: []
      },
      {
        id: "role-two",
        filename: "company-two.txt",
        label: "Company Two",
        title: "Junior Developer",
        tagline: "Company Two · 2021 — 2023",
        tags: ["Foundations", "Mentorship"],
        body: [
          "The earlier chapter — what you learned, who taught you, and what you’d tell yourself on day one if you could.",
          "A specific project or milestone from this era worth naming."
        ],
        links: []
      }
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

export function findRoute (hash) {
  const [categoryId, itemId] = hash.replace("#", "").split("/").filter(Boolean)
  const category = menu.find(c => c.id === categoryId) || menu[0]
  if (itemId && category.items) {
    const item = category.items.find(i => i.id === itemId)
    if (item) return { category, item }
  }
  return { category, item: null }
}
