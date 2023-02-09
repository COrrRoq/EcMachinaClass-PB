const prompt = require('prompt-sync')();

class Favourites {
    //This is where the Array of favourite restaurants should be held
    constructor() {

        this.favRestauraunts = ["Thai Tanic", "KUM DEN", "Frying Nemo", "Hot and crusty", "Hung Far To Low"];
        
        this.restaurantIndex = 0;
    };

    /*This function allows the user to cycle forwards and backwards through their 
    favourites list using an input of either 'next' or 'previous' and return the current favourite*/
    cycle(direction) {

        if (direction.toUpperCase() == 'NEXT' && (this.restaurantIndex != this.favRestauraunts.length - 1)) { // if next and not the last item, go on to next

            this.restaurantIndex += 1;
            console.log(`${this.favRestauraunts[this.restaurantIndex]}`);

        } else if (direction.toUpperCase() == 'NEXT' && (this.restaurantIndex == this.favRestauraunts.length - 1)) { // if next and the last item, wrap around to the beginning of the list

            this.restaurantIndex = 0;
            console.log(this.favRestauraunts[this.restaurantIndex]);

        } else if (direction.toUpperCase() == 'PREVIOUS' && (this.restaurantIndex != 0)) { // if previous and not the first item, go to previous

            this.restaurantIndex -= 1;
            console.log(`${this.favRestauraunts[this.restaurantIndex]}`);

        } else if (direction.toUpperCase() == 'PREVIOUS' && (this.restaurantIndex == 0)) { // if previous and the first item, wrap around to the end of the list

            this.restaurantIndex = this.favRestauraunts.length - 1;
            console.log(`${this.favRestauraunts[this.restaurantIndex]}`);

        } else {
            console.log('Invalid direction')
        }

        runProgram();
    };

    //This function returns a random favourite restaurant for the Array
    shuffle() {
        this.Place = this.favRestauraunts[Math.floor(Math.random() * this.favRestauraunts.length)];
        console.log(this.Place);

        runProgram();
    };

    //This function should add an input to the favourites array and return the new array
    add(restaurantName) {
        this.favRestauraunts.push(restaurantName);
        console.log(this.favRestauraunts);

        runProgram();
    };
}

module.exports = Favourites;

let instanceFav = new Favourites;

function runProgram() {

    let userInput = prompt("Would you like to Add, Shuffle or Cycle? Please input your choice: ");

    let formattedInput = userInput.toUpperCase();

    if (formattedInput == 'ADD') {

        let userInput = prompt('What is the name of your favourite restauraunt? ')
        instanceFav.add(userInput);

    } else if (formattedInput == 'SHUFFLE') {

        instanceFav.shuffle();

    } else if (formattedInput == 'CYCLE') {

        let userDirection = prompt('Which way would you like to cycle? Enter next or previous: ')
        let formattedDirection = userDirection.toUpperCase();

        instanceFav.cycle(formattedDirection);
    }

}


runProgram();
