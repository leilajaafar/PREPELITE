document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const language = document.getElementById('language').value;
    const notifications = document.getElementById('notifications').checked;

    localStorage.setItem('language', language);
    localStorage.setItem('notifications', notifications);

    alert('Paramètres enregistrés avec succès!');
});

window.onload = function() {
    const savedLanguage = localStorage.getItem('language');
    const savedNotifications = localStorage.getItem('notifications') === 'true';

    if (savedLanguage) {
        document.getElementById('language').value = savedLanguage;
    }

    document.getElementById('notifications').checked = savedNotifications;
}