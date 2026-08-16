export const home = {
  filename: 'home.txt',
  tagline: 'hi, i build things for the web.',
  lead: 'This portfolio is built like the inside of a text editor — pick a tab above (Projects, Experience, About, Contact) to have a look around.'
}

export const menu = [
  {
    id: 'projects',
    label: 'Projects',
    filename: 'projects.txt',
    intro: {
      title: 'Projects',
      lead: 'A running list of things I’ve built, half-built, and occasionally rebuilt at 1am because the first version bothered me.',
      body: [
        'Pick a project from the menu above — or the cards below — to read more about how it works and what it’s made of.'
      ]
    },
    items: [
      {
        id: 'project-one',
        filename: 'project-one.txt',
        label: 'Project One',
        title: 'Project One',
        tagline: 'A tool that quietly automates the boring bits.',
        tags: ['Vue', 'Node', 'Design'],
        body: [
          'A short summary of what this project actually does, written like you’d explain it to a friend rather than a recruiter — what problem it solves and who it’s for.',
          'A note on the interesting technical decision behind it: the constraint that shaped the build, the approach you tried first and abandoned, or the part you’re proudest of.'
        ],
        links: [
          { label: 'View repo', href: '#' },
          { label: 'Live demo', href: '#' }
        ]
      },
      {
        id: 'project-two',
        filename: 'project-two.txt',
        label: 'Project Two',
        title: 'Project Two',
        tagline: 'An experiment that turned into something people actually use.',
        tags: ['TypeScript', 'API design'],
        body: [
          'What this one is, in a sentence or two — the shape of the problem, and the shape of the solution.',
          'What you’d do differently if you rebuilt it today, or the one feature you’re quietly proud nobody’s asked you to remove.'
        ],
        links: [
          { label: 'View repo', href: '#' }
        ]
      },
      {
        id: 'project-three',
        filename: 'project-three.txt',
        label: 'Project Three',
        title: 'Project Three',
        tagline: 'Small in scope, disproportionately satisfying to finish.',
        tags: ['Python', 'Automation'],
        body: [
          'A brief description of the project — what it automates, replaces, or makes slightly less annoying.',
          'Context on how it came about: a recurring chore, a curiosity, a bet with a friend.'
        ],
        links: []
      }
    ]
  },
  {
    id: 'experience',
    label: 'Experience',
    filename: 'experience.txt',
    intro: {
      title: 'Experience',
      lead: 'Where I’ve worked, roughly in reverse-chronological order — like a resume that got a little more comfortable with itself.',
      body: [
        'Select a role from the menu or the list below for the longer version.'
      ]
    },
    items: [
      {
        id: 'role-one',
        filename: 'company-one.txt',
        label: 'Company One',
        title: 'Software Engineer',
        tagline: 'Company One · 2023 — Present',
        tags: ['Ownership', 'Cross-functional'],
        body: [
          'What the role actually involved day-to-day — the team, the product area, the kind of problems that landed on your desk.',
          'One concrete thing you shipped or improved, with enough specificity that it reads as real rather than a bullet point.'
        ],
        links: []
      },
      {
        id: 'role-two',
        filename: 'company-two.txt',
        label: 'Company Two',
        title: 'Junior Developer',
        tagline: 'Company Two · 2021 — 2023',
        tags: ['Foundations', 'Mentorship'],
        body: [
          'The earlier chapter — what you learned, who taught you, and what you’d tell yourself on day one if you could.',
          'A specific project or milestone from this era worth naming.'
        ],
        links: []
      }
    ]
  },
  {
    id: 'about',
    label: 'About',
    filename: 'about-me.txt',
    page: {
      title: 'About Me',
      lead: 'A little bit about who’s behind this notepad.',
      body: [
        'This is the part where you write two or three paragraphs about yourself — how you got into this work, what you care about, and what you’re looking for next.',
        'Feel free to let some personality through here. The rest of the site already has — no reason to go stiff now.'
      ]
    }
  },
  {
    id: 'contact',
    label: 'Contact',
    filename: 'contact.txt',
    page: {
      title: 'Say hello',
      lead: 'Have a project, a role, or just a question — the inbox is open.',
      email: 'hello@example.com'
    }
  }
]

export function findRoute (hash) {
  const [categoryId, itemId] = hash.replace('#', '').split('/').filter(Boolean)
  const category = menu.find(c => c.id === categoryId) || menu[0]
  if (itemId && category.items) {
    const item = category.items.find(i => i.id === itemId)
    if (item) return { category, item }
  }
  return { category, item: null }
}
