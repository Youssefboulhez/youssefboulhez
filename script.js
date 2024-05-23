// Données initiales (simulées)
let clients = [
    { id: 1, name: "youssef", email: "youssef@.com", telephone: "123-456-7890", cin: "12345" },
    { id: 2, name: "taha", email: "taha@.com", telephone: "987-654-3210", cin: "54321" }
];

// Fonction pour afficher la liste des clients
function displayClients() {
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';
    clients.forEach(client => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Nom:</strong> ${client.name}</p>
            <p><strong>Email:</strong> ${client.email}</p>
            <p><strong>Téléphone:</strong> ${client.telephone}</p>
            <p><strong>CIN:</strong> ${client.cin}</p>
            <button onclick="editClient(${client.id})">Modifier</button>
            <button onclick="deleteClient(${client.id})">Supprimer</button>
        `;
        clientList.appendChild(div);
    });
}

// Fonction pour ajouter un client
function addClient(name, email, telephone, cin) {
    const id = clients.length + 1;
    clients.push({ id, name, email, telephone, cin });
    displayClients();
}

// Fonction pour modifier un client
function editClient(id) {
    const client = clients.find(c => c.id === id);
    if (client) {
        const newName = prompt('Entrez le nouveau nom:', client.name);
        const newEmail = prompt('Entrez le nouvel email:', client.email);
        const newTelephone = prompt('Entrez le nouveau téléphone:', client.telephone);
        const newCIN = prompt('Entrez le nouveau CIN:', client.cin);
        if (newName && newEmail && newTelephone && newCIN) {
            client.name = newName;
            client.email = newEmail;
            client.telephone = newTelephone;
            client.cin = newCIN;
            displayClients();
        }
    }
}

// Fonction pour supprimer un client
function deleteClient(id) {
    clients = clients.filter(c => c.id !== id);
    displayClients();
}

// Initialiser l'affichage des clients
displayClients();

// Gérer la soumission du formulaire
const clientForm = document.getElementById('clientForm');
clientForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const telephoneInput = document.getElementById('telephoneInput');
    const cinInput = document.getElementById('cinInput');
    addClient(nameInput.value, emailInput.value, telephoneInput.value, cinInput.value);
    nameInput.value = '';
    emailInput.value = '';
    telephoneInput.value = '';
    cinInput.value = '';
});
