import { App } from "@slack/bolt";
import { config } from "dotenv";
import formModal from "./form-modal";
import Airtable from "airtable";

config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);

app.event("message", async ({ client, message }) => {
  if (
    (message as any).text?.toLowerCase().includes("register") &&
    message.channel === "C0459UZNCDV"
  ) {
    await client.chat.postMessage({
      thread_ts: message.ts,
      channel: message.channel,
      text: "Howdy! Begin the registration process 👇",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Howdy! Begin the registration process 👇",
          },
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Register",
                emoji: true,
              },
              action_id: "register-intent",
            },
          ],
        },
      ],
    });
  } else if (message.channel === "C044SRZR8MB") {
    const { user } = await client.users.info({ user: (message as any).user });
    base("Registrations")
      .select({
        filterByFormula: `{Email} = "${user.profile.email}"`,
      })
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          base("Registrations").update(record.id, { Verified: true }, function (err, record) {
            if (err) {
              console.error(err);
              return;
            }
            console.log(record.get("Verified"));
          });
        });
        fetchNextPage();
      });
  }
});

app.action("register-intent", async ({ ack, client, body }) => {
  await ack();
  await client.views.open({
    trigger_id: (body as any).trigger_id,
    view: {
      type: "modal",
      callback_id: "register-view",
      title: {
        type: "plain_text",
        text: "Epoch Application",
      },
      blocks: formModal,
      submit: {
        type: "plain_text",
        text: "Submit",
      },
    },
  });
});

app.command("/epoch-register", async ({ ack, client, body }) => {
  await ack();
  await client.views.open({
    trigger_id: (body as any).trigger_id,
    view: {
      type: "modal",
      callback_id: "register-view",
      title: {
        type: "plain_text",
        text: "Epoch Application",
      },
      blocks: formModal,
      submit: {
        type: "plain_text",
        text: "Submit",
      },
    },
  });
});

app.view("register-view", async ({ ack, body, view, client }) => {
  try {
    await ack();

    base("Registrations").create(
      [
        {
          fields: {
            Name: view.state.values.name["name"].value,
            Email: view.state.values.email["email"].value,
            Pronouns: view.state.values.pronouns["pronouns"].value,
            Birthday: view.state.values.birthday["birthday"].selected_date,
            "Tee Size": view.state.values["tee-size"]["tee-size"].selected_option.value,
            Skill: view.state.values.skill["skill"].selected_option.value,
            Why: view.state.values.why["why"].value,
            Verified: true,
            "Dietary Restrictions":
              view.state.values["dietary-restrictions"]["dietary-restrictions"].value,
            "Vaccine Status":
              view.state.values["vaccine-status"]["vaccine-status"]?.selected_options?.[0]
                ?.value === "vaccine-status" || false,
          },
        },
      ],
      async (err, records) => {
        if (err) {
          console.error(err);
          return;
        }

        await client.chat.postMessage({
          channel: body.user.id,
          text: "Thanks for registering! We'll be in touch soon.",
        });
      }
    );
  } catch (e) {
    console.error(e);
  }
});

app.action("vaccine-status", async ({ ack, body, client }) => await ack());

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
