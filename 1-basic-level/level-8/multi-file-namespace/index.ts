/// <reference path="userNamespace.ts" />
/// <reference path="eventNamespace.ts" />

/**
 * Using the User namespace
 * @Step1 - Let's define a custom user object that matches the User interface
 * @Step2 - Let's create a new User object
 */
const messi_custom: UserNamespace.UserInterface = {
    name: "Lionel Messi",
    age: 36,
    address: "Argentina",
};

// creating a new User object
const messi = new UserNamespace.User(
    messi_custom.name,
    messi_custom.age,
    messi_custom.address
);

messi.showInfo();

/**
 * Using the Event namespace
 * @Step1 - Let's define a custom event object that matches the Event interface
 * @Step2 - Let's create a new Event object
 */
const event_custom: EventNamespace.EventInterface = {
    name: "FIFA World Cup 2022 Final",
    time: "2022-12-18T15:00:00+00:00",
    place: "Qatar",
    note: "Argentina vs France",
};

// creating a new Event object
const newEvent = new EventNamespace.Event(
    event_custom.name,
    event_custom.time,
    event_custom.place,
    event_custom.note
);
newEvent.showInfo();

// TODO: While compiling, generate a single JS file for all the TS files.
// TODO: Use this command for that purpose : tsc --outFile index.js userNamespace.ts eventNamespace.ts index.ts
