

let FarrZuCel = () => {

    let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];


    let cel = fahrenheit.map((elt) => {
        return ((elt - 32) / 1.8).toFixed()
    })
    console.log(cel)
}

FarrZuCel()