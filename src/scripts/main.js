'use strict';

const listOfEmployees = [...document.querySelectorAll('li')];

/**
* @param {String} string

* @returns {Number}
*/
function convertStringToNumber(string) {
  const number = Number(string.slice(1).split(',').join(''));

  return number;
}

/**
 * @param {HTMLLIElement[]} list
 * @returns {void}
 */
function sortList(list) {
  list
    .sort(
      (person1, person2) =>
        convertStringToNumber(person2.dataset.salary) -
        convertStringToNumber(person1.dataset.salary),
    )
    .map((person) => person.parentNode.append(person));
}

/**
 * @param {HTMLLIElement[]} list
 * @returns {Object[]}
 */
function getEmployees(list) {
  return list.map((person) => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
