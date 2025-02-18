// Fonction pour vérifier si l'utilisateur a 18 ans ou plus
function verifyAge(dateNaissance) {
    const today = new Date();
    const birthDate = new Date(dateNaissance);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18;
}

// Fonction de validation du numéro de téléphone
function validatePhoneNumber(tel) {
    const regex = /^01\d{8}$/;
    return regex.test(tel);
}

// Fonction de gestion du formulaire
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenoms = document.getElementById('prenoms').value;
    const dateNaissance = document.getElementById('date_naissance').value;
    const tel = document.getElementById('tel').value;
    const motivation = document.getElementById('motivation').value;

    // Vérification de l'âge
    if (!verifyAge(dateNaissance)) {
        alert("Vous devez avoir au moins 18 ans pour vous inscrire.");
        return;
    }

    // Vérification de la longueur de la motivation
    if (motivation.length < 1000 || motivation.length > 2500) {
        alert("La motivation doit faire entre 1000 et 2500 caractères.");
        return;
    }

    // Vérification du numéro de téléphone
    if (!validatePhoneNumber(tel)) {
        alert("Le numéro de téléphone doit commencer par 01 et contenir 10 chiffres.");
        return;
    }

    // Si tout est valide, afficher les informations dans la section "Inscription réussie"
    document.getElementById('displayNom').textContent = nom;
    document.getElementById('displayPrenoms').textContent = prenoms;
    document.getElementById('displayDateNaissance').textContent = dateNaissance;
    document.getElementById('displayTel').textContent = tel;
    document.getElementById('displayMotivation').textContent = motivation;

    // Affichage de la section avec les informations de l'utilisateur
    document.getElementById('successSection').style.display = 'block';
});
