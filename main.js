var foodItemArray = []
var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name
	this.calories = calories
	this.vegan = vegan
	this.glutenFree = glutenFree
	this.citrusFree = citrusFree

	foodItemArray.push(this)
}

FoodItem.prototype.stringify = function () {
	
	var diet = []
	if (this.vegan) diet.push('Vegan')
	if (this.glutenFree) diet.push('Gluten Free')
	if (this.citrusFree) diet.push('Citrus Free')

	var description = 'The ' + this.name + ' has ' + this.calories +' calories, and is suitable for: '
	for (var i=0; i<diet.length; i++) {
		if (i<diet.length-1)
		description += diet[i] + ', '
		else if (diet.length === 1) description += diet[i] + ' diets.'
		else description += 'and ' + diet[i] + ' diets.'
	}
	// console.log(description)

}

var pizza = new FoodItem ('Pizza', 400, true, true, true)
var burger = new FoodItem ('Burger', 500, false, false, true)
var tacos = new FoodItem ('Tacos', 400, true, false, false)

foodItemArray.forEach(function(item) {
	item.stringify()
})


var Drink = function (name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
}

Drink.prototype.stringify = function () {
	var drinkDescription = '> ' + this.name + '\n Description: ' + this.description + '\n Price: $'+ this.price +  '\n Ingredients: '+ this.ingredients.join(', ')
	return drinkDescription
}

var Plate = function (name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients

}

Plate.prototype.stringify = function () {
	var plateDescription = '> ' + this.name + '\n Description: ' + this.description + '\n Price: $'+ this.price +  '\n Ingredients: '+ this.ingredients.join(', ')
	return plateDescription
}

var Order = function (plates, drinks) {
	this.plates = plates
	this.drinks = drinks
}


Order.prototype.stringify = function () {
	var OrderDescription = 'This order consists of the following plates: \n'

	this.plates.forEach (function (plateItem) {
		OrderDescription += plateItem.stringify() + '\n'
	})
	
	OrderDescription += 'and includes the following Drinks: \n'
	this.drinks.forEach (function (drinkItem) {
		OrderDescription += drinkItem.stringify() + '\n'
	})


	return orderDescription
}

var Menu = function (plates, drinks) {
	this.plates = plates
	this.drinks = drinks
}

Menu.prototype.stringify = function () {
	var menuDescription = 'This menu consists of the following plates: \n'

	this.plates.forEach (function (plateItem) {
		menuDescription += plateItem.stringify() + '\n'
	})
	
	menuDescription += 'and includes the following Drinks: \n'
	this.drinks.forEach (function (drinkItem) {
		menuDescription += drinkItem.stringify() + '\n'
	})


	return menuDescription
}


var Restaurant = function (name, description, menu) {
	this.name = name
	this.description = description
	this.menu = menu
}

var Cuatomer = function (dietaryPreference) {
	this.dietaryPreference = dietaryPreference
}


/////// Instantiating Items
//Drinks
var margarita = new Drink ('Margarita', 'A Cup of Love', 10, ['Tequila', 'Cointreau', 'Lime', 'Salt'])
//Plates
var burrito = new Plate ('Burrito', 'All roled up', 6, ['Rice', 'Beans', 'Steak', 'Salsa'])
var guacamole = new Plate ('Gualcamole', 'Green goodness', 4, ['Avocados', 'Garlic', 'Onions', 'lemons'])
//Ingredients -> foodItems
var avocado = new FoodItem ('Avocados', , true, true, true)
var garlic = new FoodItem ('Garlic', )

var menu = new Menu ([burrito, guacamole], [margarita])

console.log(menu)
console.log(menu.stringify())

