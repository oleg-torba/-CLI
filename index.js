const fs = require("fs/promises");
const path = require("path");
const argv = require("yargs").argv;

const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
      const bookById = await contacts.getContactById(id);
      return console.table(bookById);
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.table(newContact);
    case "remove":
      const deleteById = await contacts.removeContact(id);
      return console.table(deleteById);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
