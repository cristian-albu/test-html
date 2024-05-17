const currentPath = window.location.href;
const cookieName = "user-olimpiada";

/**setam cookie cu numele corect, valoare si timpul de expirare in zile */
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

/** parcurgem toate cookieurile si gasim cookieul cu numele care ne trebuie */
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

//executam logica diferita in functie de pagina fara sa separam in mai multe documente de .js

if (currentPath === "http://localhost:5500/") {
    const input = document.querySelector("#input");
    const btn = document.querySelector("#login");

    //     const values = [];
    //     values.push("ceva");
    //     values.push("ceva2");

    //     // doar daca vrei mai multe:
    //     const valsJSON = JSON.stringify(values);

    //     // de citit
    //     const valsJSONparsed = JSON.parse(valsJSON);

    //     console.log(valsJSON, valsJSONparsed);

    function handleClick() {
        setCookie(cookieName, valsJSON, 30);
        input.value = "";

        window.location.href = "/succes.html";
    }

    btn.addEventListener("click", handleClick);
} else if (currentPath === "http://localhost:5500/succes.html") {
    const userDiv = document.querySelector("#user");
    userDiv.append(getCookie(cookieName));
}
