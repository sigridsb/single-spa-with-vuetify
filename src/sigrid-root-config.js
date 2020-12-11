import { registerApplication, start } from "single-spa";

/* registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
}); */

registerApplication({
  name: "@sigrid/app2",
  app: () => System.import("@sigrid/app2"),
  activeWhen: ["/vuetify"],
});

registerApplication({
  name: "@sigrid/app1",
  app: () => System.import("@sigrid/app1"),
  activeWhen: ["/vue"],
});

start({
  urlRerouteOnly: true,
});
