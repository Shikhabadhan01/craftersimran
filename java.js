
function submitOrder() {
    // Get form values
    var name = document.getElementById("name").value;
    var pinCode = document.getElementById("pin-code").value;
    var contactNumber = document.getElementById("contact-number").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var colorCombination = document.getElementById("color-combination").value;
    var quantity = document.getElementById("quantity").value;

    // Validate form values
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (pinCode === "") {
        alert("Please enter your pin code.");
        return false;
    }
    if (contactNumber === "") {
        alert("Please enter your contact number.");
        return false;
    }
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    if (address === "") {
        alert("Please enter your address.");
        return false;
    }
    if (colorCombination === "") {
        alert("Please enter your color combination.");
        return false;
    }
    if (quantity === "" || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return false;
    }

    // Create order object
    var order = {
        name: name,
        pinCode: pinCode,
        contactNumber: contactNumber,
        email: email,
        address: address,
        colorCombination: colorCombination,
        quantity: quantity
    };

    alert("Order submitted successfully! Your order will arive in 10 - 15 days: " + JSON.stringify(order));
    return true;
}