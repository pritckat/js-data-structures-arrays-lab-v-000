// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  let moreDrivers = drivers.push(name);
}

function destructivelyPrependDriver(name) {
  let moreDrivers = drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  let moreDrivers = drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  let moreDrivers = drivers.shift();
}

function appendDriver(name) {
  let moreDrivers = drivers.splice(-1, 0, name);
}