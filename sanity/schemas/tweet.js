export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in tweet",
      type: "string",
    },
    {
      name: "blocktweet",
      title: "Block Tweet",
      description: "ADMIN controls: Toggle if tweet is deemed inappropriate",
      type: "boolean",
    },

    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile image",
      type: "string",
    },
    {
      name: "image",
      title: "Tweet image",
      type: "string",
    },
  ],
};
