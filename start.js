import { Client, logger, Variables } from "camunda-external-task-client-js";

// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

const connect = [];

// susbscribe to the topic: 'DohvatiBlagajnika'
client.subscribe("DohvatiBlagajnika", async function ({ task, taskService }) {
  console.log("Blagajnik je dohvaćen");

  const pass = task.variables.get("Lozinka");
  connect.push(pass);

  await taskService.complete(task, pass);
});

client.subscribe("Funkcije", async function ({ task, taskService }) {
  var north = task.variables.get("odabir") === "naplata";
  console.log(north);

  const processVariables = new Variables();
  processVariables.set("naplata", north);

  await taskService.complete(task, processVariables);
});

client.subscribe("SpremiUBazu", async function ({ task, taskService }) {
  const lezaljke = task.variables.get("lez");

  const suncobre = task.variables.get("sunc");

  const plaze = task.variables.get("plaze");

  connect.push(lezaljke);
  connect.push(suncobre);
  connect.push(plaze);

  // complete the task
  await taskService.complete(task);
});

client.subscribe("IspisiRacun", async function ({ task, taskService }) {
  // Put your business logic

  const pass = task.variables.get("Lozinka");
  console.log(`Naplatio je blagajnik s šifrom: ${pass}`);

  const lezaljke = task.variables.get("lez");
  console.log(`Kolicina lezaljka ${lezaljke}`);

  const suncobre = task.variables.get("sunc");
  console.log(`Redni broj suncobrana ${suncobre}`);

  const plaze = task.variables.get("plaze");
  console.log(`Plaza u kojj se naplaciuje: ${plaze}`);

  console.log(connect);

  // complete the task
  await taskService.complete(task);
});
