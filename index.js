// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  let moreDrivers = drivers.push(name);
}

function destructivelyPrependDriver(name) {
  let moreDrivers = drivers.unshift(name);
}
