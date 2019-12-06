// *** YOUR ANSWER BELOW ***

function beerOnTheWall(n){
    for(let i = n; i > 0; i--){
        let x = i;
        let y = i - 1;
        console.log(`${x} bottles of beer on the wall, ${x} bottles of beer...
        take one down, pass it around, ${y} bottles of beer on the wall...`);
    }
}
beerOnTheWall(5);

