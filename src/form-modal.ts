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
          value: "beginner",
        },
        {
          text: {
            type: "plain_text",
            text: "Intermediate: have taken CS classes OR worked on small individual projects",
            emoji: true,
          },
          value: "intermediate",
        },
        {
          text: {
            type: "plain_text",
            text: "Advanced: I'm comfortable with my skill set and can work on a big projects",
            emoji: true,
          },
          value: "advanced",
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
