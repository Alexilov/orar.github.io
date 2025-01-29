// Definirea funcției pentru verificarea parolei și deschiderea site-ului
function verificaParola() {
    var parola = prompt("Introduceți parola:");

    // Verifica dacă parola este corectă
    if (parola === "123") {
        // Deschide site-ul dorit dacă parola este corectă
        window.location.href = "Tabel.html";
    } else {
        alert("Parolă incorectă! Vă rugăm să încercați din nou.");
    }
}

// Apelarea funcției pentru a începe procesul de verificare a parolei
verificaParola();