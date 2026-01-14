const { createApp } = Vue;

const app = createApp({});
app.component("Item", Item);

app.mount("#app");