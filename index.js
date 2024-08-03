import * as servicesContacts from "./contacts.js";

import {program} from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({action, id, name, email, phone}) {
  switch (action) {
    case "list":
      const allContacts = await servicesContacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const wantedContact = await servicesContacts.getContactById(id);
      console.log(wantedContact);
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
