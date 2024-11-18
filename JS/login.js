function togglePassword() {
    const passwordField = document.getElementById("password");
    var checkbox = document.getElementById("showPassword");
    
    if (checkbox.checked) {
        passwordField.type = "text"; // Affiche le mot de passe
    } else {
        passwordField.type = "password"; // Masque le mot de passe
    }
}
