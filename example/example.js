import 'style.less';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

Importing a Class

*/

import Animal from 'app';
import Tiger from 'app';

var animal = new Animal();
var tiger = new Tiger();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

creating an object and using it's values within a string

*/

var product = {
    name: 'Unawatuna',
    price: 35,
    category: 'Djembe'
}
var the_string = 'The product ${product.name} costs ${product.price} CHF and is assigned to the cateogory ${product.cateogory}';
console.log( the_string );


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

block-scoped variables

*/

if( true ) {
    let block_scoped_var = 'block-scoped variable';
    console.log( block_scoped_var );
}
// this would cause an error:
// console.log( block_scoped_var );


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

Arrow Functions

*/

// var elements = document.querySelectorAll('li');
// var pairs = elements.map(v => ({ even: v, odd: v + 1 }));
// console.log( pairs );
