// Ask the user before leaving the page
function askForward(id)
{
    var tag = document.getElementsByClassName("askable")[id];
    return confirm(`Are you sure go to ${tag.href}?`);
}

// Calcualate the price of watame member
function calculatePrice()
{
    var price;
    // to jpy
    var region = document.getElementById("input").value;
    switch (region)
    {
        case "Hong Kong":
            price = 28;
            break;
        case "Taiwan":
            price = 92.74;
            break;
        case "Japan":
            price = 400;
            break;
        default:
            price = "";
            break;
    }

    var output = document.getElementById("output");
    output.innerText = price;
}