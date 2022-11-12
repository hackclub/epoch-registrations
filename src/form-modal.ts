export default [
  {
    type: "section",
    text: { type: "mrkdwn", text: ":wave: Welcome, we're super excited to see your application!" },
  },
  { type: "divider" },
  {
    type: "input",
    block_id: "name",
    element: {
      type: "plain_text_input",
      action_id: "name",
      placeholder: { type: "plain_text", text: "John Doe" },
    },
    label: { type: "plain_text", text: "Full Name" },
  },
  {
    type: "input",
    block_id: "email",
    element: {
      type: "plain_text_input",
      action_id: "email",
      placeholder: {
        type: "plain_text",
        text: "johndoe@hackclub.com",
      },
    },
    label: { type: "plain_text", text: "Contact Email" },
  },
  {
    type: "input",
    block_id: "pronouns",
    element: {
      type: "plain_text_input",
      action_id: "pronouns",
      placeholder: {
        type: "plain_text",
        text: "eg. he/him, she/her, they/them",
      },
    },
    label: { type: "plain_text", text: "Your Pronouns" },
  },
  {
    type: "input",
    block_id: "birthday",
    element: { type: "datepicker", action_id: "birthday" },
    label: { type: "plain_text", text: "Birthday" },
  },
  {
    type: "input",
    block_id: "tee-size",
    element: {
      type: "static_select",
      placeholder: { type: "plain_text", text: "Select One", emoji: true },
      options: [
        {
          text: { type: "plain_text", text: "Extra Small", emoji: true },
          value: "Extra Small",
        },
        {
          text: { type: "plain_text", text: "Small", emoji: true },
          value: "Small",
        },
        {
          text: { type: "plain_text", text: "Medium", emoji: true },
          value: "Medium",
        },
        {
          text: { type: "plain_text", text: "Large", emoji: true },
          value: "Large",
        },
        {
          text: { type: "plain_text", text: "Extra Large", emoji: true },
          value: "Extra Large",
        },
      ],
      action_id: "tee-size",
    },
    label: { type: "plain_text", text: "T-Shirt Size", emoji: true },
  },
  {
    type: "input",
    block_id: "skill",
    element: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select One",
        emoji: true,
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Beginner: have never coded before or just started learning",
            emoji: true,
          },
          value: "Beginner: have never coded before or just started learning",
        },
        {
          text: {
            type: "plain_text",
            text: "Intermediate: have taken CS classes OR worked on small individual projects",
            emoji: true,
          },
          value: "Intermediate: have taken CS classes OR worked on small individual projects",
        },
        {
          text: {
            type: "plain_text",
            text: "Advanced: I'm comfortable with my skill set and can work on a project without much guidance",
            emoji: true,
          },
          value: "Advanced: I'm comfortable with my skill set and can work on a project without much guidance",
        },
      ],
      action_id: "skill",
    },
    label: {
      type: "plain_text",
      text: "How would you describe your technical skills?",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "why",
    element: { type: "plain_text_input", multiline: true, action_id: "why" },
    label: { type: "plain_text", text: "Why do you want to attend Epoch?", emoji: true },
  },
  {
    type: "input",
    optional: true,
    block_id: "dietary-restrictions",
    element: {
      type: "plain_text_input",
      multiline: true,
      action_id: "dietary-restrictions",
    },
    label: {
      type: "plain_text",
      text: "Do you have any dietary restrictions? Please list them here.",
      emoji: true,
    },
  },
  { type: "divider" },
  { type: "header", text: { type: "plain_text", text: "Workshops", emoji: true } },
  {
    type: "context",
    elements: [
      {
        type: "plain_text",
        text: "We believe we learn at our best with others. We're inviting attendees to host their own workshops at Epoch! You bring a passion and we'll provide a room with participants.",
        emoji: true,
      },
    ],
  },
  {
    type: "input",
    block_id: "workshop",
    element: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select One",
        emoji: true,
      },
      options: [
        {
          text: { type: "plain_text", text: "Yes, for sure!", emoji: true },
          value: "Yes, for sure!",
        },
        {
          text: { type: "plain_text", text: "No, it's alright.", emoji: true },
          value: "No, it's alright.",
        },
      ],
      action_id: "workshop",
    },
    label: {
      type: "plain_text",
      text: "Would you be interested in hosting a session?",
      emoji: true,
    },
  },
  { type: "divider" },
  { type: "header", text: { type: "plain_text", text: "Travel Stipends", emoji: true } },
  {
    type: "context",
    elements: [
      {
        type: "plain_text",
        text: "We're offering a limited number of stipends to cover travel expenses for those who need the support to be able to make the event. We'll cover the full cost of a return flight to New Delhi for participants in India and provide a USD 500 stipend to international participants.",
        emoji: true,
      },
    ],
  },
  {
    type: "input",
    block_id: "stipend",
    element: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select One",
        emoji: true,
      },
      options: [
        { text: { type: "plain_text", text: "Yes, please!", emoji: true }, value: "Yes, please!" },
        { text: { type: "plain_text", text: "No, thanks.", emoji: true }, value: "No, thanks." },
      ],
      action_id: "stipend",
    },
    label: {
      type: "plain_text",
      text: "Do you need a travel stipend?",
      emoji: true,
    },
  },
  { type: "divider" },
  { type: "header", text: { type: "plain_text", text: "Now for a bit of fun!", emoji: true } },
  {
    type: "input",
    block_id: "random-words",
    element: {
      type: "plain_text_input",
      action_id: "random-words",
    },
    label: {
      type: "plain_text",
      text: "What are three random words that first come to your mind?",
    },
  },
  {
    type: "input",
    block_id: "what-poori",
    element: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select One",
        emoji: true,
      },
      options: [
        { text: { type: "plain_text", text: "Panipuri", emoji: true }, value: "Panipuri" },
        { text: { type: "plain_text", text: "Phuchka", emoji: true }, value: "Phuchka" },
        { text: { type: "plain_text", text: "Gupchup", emoji: true }, value: "Gupchup" },
        { text: { type: "plain_text", text: "Golgappa", emoji: true }, value: "Golgappa" },
        {
          text: { type: "plain_text", text: "Pani ke patashe", emoji: true },
          value: "Pani ke patashe",
        },
      ],
      action_id: "what-poori",
    },
    label: {
      type: "plain_text",
      text: "Panipuri, phuchka, gupchup, golgappa, or pani ke patashe?",
      emoji: true,
    },
  },
  { type: "divider" },
  { type: "header", text: { type: "plain_text", text: "Vaccine Status", emoji: true } },
  {
    type: "context",
    elements: [
      {
        type: "plain_text",
        text: "To ensure the safety of attendees, this event requires vaccinations for all people without medical exemption.\n\nWe will request proof of vaccination on arrival.",
        emoji: true,
      },
    ],
  },
  {
    type: "actions",
    block_id: "vaccine-status",
    elements: [
      {
        type: "checkboxes",
        options: [
          {
            text: {
              type: "mrkdwn",
              text: "I am fully vaccinated",
            },
            value: "vaccine-status",
          },
        ],
        action_id: "vaccine-status",
      },
    ],
  },
];
