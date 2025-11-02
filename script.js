// --- FORMULAIRE D'ASSISTANCE TECHNIQUE ---
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-assistance-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    const nom = document.getElementById("nom").value.trim();
    const service = document.getElementById("service").value.trim();
    const probleme = document.getElementById("probleme").value.trim();

    if (nom && service && probleme) {
      showMessage("✅ Votre demande a été envoyée avec succès ! Merci " + nom + ".", "success");
      form.reset();
    } else {
      showMessage("⚠️ Veuillez remplir tous les champs avant d’envoyer la demande.", "error");
    }
  });

  // --- Custom message popup ---
  function showMessage(text, type) {
    const messageBox = document.createElement("div");
    messageBox.className = "popup-message " + type;
    messageBox.textContent = text;
    document.body.appendChild(messageBox);

    // Show animation
    setTimeout(() => {
      messageBox.classList.add("visible");
    }, 100);

    // Auto-hide after 3 seconds
    setTimeout(() => {
      messageBox.classList.remove("visible");
      setTimeout(() => messageBox.remove(), 400);
    }, 3000);
  }
});

function toggleContact(button) {
  const contactInfo = button.nextElementSibling;
  contactInfo.classList.toggle('show');

  if (contactInfo.classList.contains('show')) {
    button.textContent = 'Masquer contact';
  } else {
    button.textContent = 'Voir contact';
  }
}

// === CONTACT POPUP FUNCTIONALITY ===

// Create modal dynamically (only one for all staff)
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <div class="modal-content">
    <h3 id="modalName"></h3>
    <p><strong>Email :</strong> <span id="modalEmail"></span></p>
    <p><strong>Téléphone :</strong> <span id="modalPhone"></span></p>
    <button class="close-btn">Fermer</button>
  </div>
`;
document.body.appendChild(modal);

// Select all contact buttons
const contactButtons = document.querySelectorAll('.contact-btn');

// Event listener for opening modal
contactButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('modalName').textContent = button.dataset.name;
    document.getElementById('modalEmail').textContent = button.dataset.email;
    document.getElementById('modalPhone').textContent = button.dataset.phone;
    modal.style.display = 'flex';
  });
});

// Event listener for closing modal
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-btn') || e.target === modal) {
    modal.style.display = 'none';
  }
});

// === LIVE SEARCH FILTER WITH ANIMATION ===
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".staff-card");

    cards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      const role = card.querySelector("p").textContent.toLowerCase();
      const match = name.includes(filter) || role.includes(filter);

      if (match) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
}






