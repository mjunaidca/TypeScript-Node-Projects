#! /usr/bin/env node
import users from "./users.js";
import { login } from "./login.js";
console.log(`userId: ${users[0].userId} \nPin: ${users[0].pinCode}\n`);
login();
