const Favourites = require('./favourites');

let favourites;

beforeEach(() => {
    favourites = new Favourites();
});

test('Cycle function forwards', () => {
    // favourites.cycle(1);
    expect(favourites.cycle('NEXT')).toBe([1]);
});

test('Cycle function backwards/Cycle function loop round', () => {
    // favourites.cycle(1);
    expect(favourites.cycle('PREVIOUS')).toBe([4]);
});

test('Add 4 favourites to array', () => {
    // favourites.cycle(1);
    favourites.add()
    favourites.add()
    favourites.add()
    expect(favourites.add()).toBe('');
});




// test('Using the next function from new', () => {
//     //let nextValue = fibonacci.next();
//     //expect(nextValue).toBe(1)
//     expect(fibonacci.next()).toBe(1);
// });

