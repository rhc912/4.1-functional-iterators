(function(){
'use strict';

//Show me how to calculate the average price of all items. Please console.log the average.
  var total = items.reduce(function (previousValue, currentValue, index, array){
    console.log('previousValue', previousValue);
    console.log('currentValue', currentValue);
    console.log(previousValue + currentValue.price);
    return previousValue + currentValue.price;
  }, 0);



  console.log('Average price', total / items.length);

//Show me how to get an array of items that cost between $14.00 and $18.00 USD
  var products = items.filter(function(product, index, array){
        if (product.price >= 14.00 && product.price <= 18.00){
          return true;
        } else {
          return false;
        }

  })
    var itemCost = products.forEach(function(currentValue){
      console.log(' Items that cost between $14.00 USD and $18.00 USD:' + currentValue.title);
    })

//Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
    var productgbp = items.filter(function(product, index, array){
        if (product.currency_code === 'GBP'){
          return true;
        } else{
          return false;
        }

    })
      var gbp = productgbp.forEach(function(currentValue){
        console.log(currentValue.title + ' costs £18');
      })
//Show me how to find which items are made of wood. Please console.log the ones you find.
    var productMaterials = items.filter(function(product, index, array){

        return product.materials.indexOf('wood') >= 0;
    })
    var woodenProducts = productMaterials.forEach(function(currentValue){
      console.log(currentValue.title + ' is made of wood' );
    })

//Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
    var productQuanity = items.filter(function(product, index, array){
        return product.materials.length >= 8;
    })
    var productReturn = productQuanity.forEach(function(currentValue){
        console.log(currentValue.title + productQuanity.materials);
    })
//Show me how to calculate how many items were made by their sellers
    var productSeller = items.filter(function(product, index, array){
        if (product.who_made === 'i_did'){
          return true;
        } else{
          return false;
        }
    })
    console.log(productSeller.length,'Were made by their seller');
}());
