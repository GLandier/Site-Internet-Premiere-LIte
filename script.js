// Script pour gérer la vérification du code dans l'épisode 6
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("password-form");
    const passwordInput = document.getElementById("mdp");

    form.addEventListener("submit", function(event) {
        const enteredCode = passwordInput.value;
        const correctCode = "20100";

        if (enteredCode === correctCode) {
            // Redirige vers ep7.html si le code est correct
            event.preventDefault();
            window.location.href = "ep7.html";
        } else {
            // Affiche un message d'erreur si le code est incorrect
            event.preventDefault();
            alert("Code incorrect. Veuillez réessayer.");
        }
    });
});
