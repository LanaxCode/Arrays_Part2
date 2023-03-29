let myDrinks = () => {
    let drinks = ["Coca-cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "RedBull", "Fanta"]
    drinks.sort()
    console.log(drinks)
    drinks.forEach((elt) => {
        console.log(elt)
        document.write(elt + "<br>")
    })
}

myDrinks()