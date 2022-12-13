/*Factory function
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('drawing...');
            console.log('drawing complete:');
            console.log('Radius ',radius);
        }
    };
}

const circle = createCircle(10).draw();

*/

//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("drawing...");
        console.log("drawing complete.");
    }
}

 const circle = new Circle(1);
 circle.draw();


/*cloning - old method

const another = {};
for(let key in circle){
    another[key]=circle[key];
}

another['radius'] = circle['radius'];

console.log(another);

another.draw();
*/

//cloning - new method
//const another = Object.assign({}, circle);

// const another = { ...circle}
// console.log(another);

//String primitive
const message = 'hi';

//string object
const another = new String('hi');


//template literals
const msg = 
`This is my
'first' message`;
