const products = [
    {name: 'Rice', price: 99}, 
    {name: 'Bread', price: 20}, 
    {name: 'Milk', price: 50}, 
    {name: 'Tomatoes', price: 15}, 
    {name: 'Pears', price: 20}, 
    {name: 'Salt', price: 42}
];
const form = document.querySelector('#form');
const button = document.querySelector('#b-search');
const result = document.querySelector('#result')
const filter = ()=>{
    result.innerHTML = '';
    //console.log(form.value);
    const text = form.value.toLowerCase();
    for(let product of products){
        let name = product.name.toLowerCase();
        if(name.indexOf(text) !== -1){
            result.innerHTML +=`<li>${product.name}: $${product.price}</li>`
        }
    }
    if(result.innerHTML === ''){
        result.innerHTML += `<li>Product not found</li>`
    }
}
button.addEventListener('click', filter)
form.addEventListener('input', filter)

filter();