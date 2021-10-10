export function capitalzeFirstLetter(string) {
    return string.charAt(0).toUpperCasse() + string.slice(1);
}

export function getTodaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");//January is 0!;
    var yyyy = today.getFullYear();

    today = mm + "/" + yyyy;
    return today;
}