let inkeepWidget = null;

const observer = new MutationObserver(() => {
  const searchBarParentNode = document.querySelector(".scrollbar-container");

  const config = {
    componentType: "SearchBar", // required, options: 'ChatButton', 'EmbeddedChat', 'SearchBar', 'CustomTrigger'
    targetElement: document.getElementById("inkeep"), // required, HTML element to render the widget into
    properties: {
      stylesheetUrls: ["/custom.css"], // optional
      baseSettings: {
        integrationId: "integrationId", // required
        apiKey: "apiKey", // required
        organizationId: "organizationId", // required
        primaryBrandColor: "#0c44d4", // your brand color, color scheme is derived from this
        organizationDisplayName: "Redocly",
        //... optional base settings
      },
      modalSettings: {
        // optional
      },
      searchSettings: {
        // optional
      },
      aiChatSettings: {
        chatSubjectName: "Redocly", // <-- name of the subject of the chat
        botAvatarSrcUrl: "favicon.png", // insert your own bot avatar, in public folder or an absolutely url for externally hosted image
        quickQuestions: [
          "Example question 1?",
          "Example question 2?",
          "Example question 3?",
        ],
        getHelpCallToActions: [
          {
            icon: { builtIn: "FaSlack" },
            name: "Slack",
            url: "https://myorg.slack.com/C010101010",
          },
          {
            icon: { builtIn: "FaDiscord" },
            name: "Discord",
            url: "https://discord.com/invite/invidecode123",
          },
          {
            icon: { builtIn: "FaGithub" },
            name: "GitHub",
            url: "https://github.com/myorg/myrepo/discussions",
          },
        ],
      },
    },
  };

  if (!inkeepWidget && searchBarParentNode) {
    const inkeepDiv = document.createElement("div");
    inkeepDiv.id = "inkeep";
    searchBarParentNode.appendChild(inkeepDiv);

    inkeepWidget = Inkeep().embed(config);
  }
});

observer.observe(document.documentElement, { childList: true, subtree: true });
