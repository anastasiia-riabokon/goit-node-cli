import * as fs from "node:fs/promises";
import * as path from "node:path";
import {randomUUID} from "node:crypto";

const __dirname = import.meta.dirname;

const contactsPath = path.join(__dirname, "db", "contacts.json");

const updJSON = (item) => fs.writeFile(contactsPath, JSON.stringify(item, null, 2));

export async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

export async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
}

export async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: randomUUID(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updJSON(contacts);

  return newContact;
}

export async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) return null;

  const [result] = contacts.splice(index, 1);

  await updJSON(result);

  return result;
}
