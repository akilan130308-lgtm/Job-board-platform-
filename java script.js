
async function loginUser() {
    const response = await fetch(API + "/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: document.getElementById("loginEmail").value,
            password: document.getElementById("loginPassword").value
        })
    });

    const result = await response.json().catch(() => null);
    alert(result ? JSON.stringify(result) : "Login failed");
}

async function createEvent() {
    const data = {
        name: document.getElementById("newEventName").value,
        date: document.getElementById("newEventDate").value,
        location: document.getElementById("newEventLocation").value
    };

    const response = await fetch(API + "/events", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    alert(await response.text());
    loadEvents();
}

async function loadDashboard() {
    const response = await fetch(API + "/admin/dashboard");
    const data = await response.json();

    document.getElementById("dashboard").textContent =
        JSON.stringify(data, null, 2);
}

async function loadParticipants() {
    const response = await fetch(API + "/events/participants");
    const data = await response.json();

    document.getElementById("participants").textContent =
        JSON.stringify(data, null, 2);
}
