document.getElementById('convertBtn').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    if (text.trim() === '') return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';

    window.speechSynthesis.speak(speech);
});
