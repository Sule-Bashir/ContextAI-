// Simulated app‑specific actions
const actionsDB = {
    browser: [
        "New Tab (rotate right)",
        "Close Tab (rotate left)",
        "Refresh (press ring)",
        "Back (ring down)",
        "Forward (ring up)"
    ],
    photoshop: [
        "Brush size + (rotate right)",
        "Brush size - (rotate left)",
        "Undo (press ring)",
        "Zoom in (ring up)",
        "Zoom out (ring down)"
    ],
    vscode: [
        "Open file (rotate right)",
        "Save file (rotate left)",
        "Run code (press ring)",
        "Find (ring up)",
        "Replace (ring down)"
    ]
};

// DOM elements
const appIcons = document.querySelectorAll('.app-icon');
const actionList = document.getElementById('action-list');
const ring = document.getElementById('ring');
let currentApp = 'browser'; // default

// Update suggested actions based on current app
function updateActions(app) {
    const actions = actionsDB[app] || ["No actions"];
    actionList.innerHTML = '';
    actions.forEach(action => {
        const li = document.createElement('li');
        li.textContent = action;
        actionList.appendChild(li);
    });
}

// Highlight active app and refresh actions
appIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        appIcons.forEach(i => i.classList.remove('active'));
        icon.classList.add('active');
        currentApp = icon.dataset.app;
        updateActions(currentApp);
    });
});

// Simulate ring rotation with a visual highlight instead of alert
ring.addEventListener('click', (e) => {
    // Find the first suggested action item
    const firstAction = document.querySelector('#action-list li');
    if (firstAction) {
        // Temporarily highlight it
        firstAction.style.backgroundColor = '#00d4ff';
        firstAction.style.color = '#000';
        // Remove highlight after 300ms
        setTimeout(() => {
            firstAction.style.backgroundColor = '';
            firstAction.style.color = '';
        }, 300);
    }
});

// Initial load
updateActions(currentApp);
appIcons[0].classList.add('active'); // highlight Browser
