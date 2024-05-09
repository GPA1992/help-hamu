const checkboxes = document.querySelectorAll('.inp');
    
console.log(checkboxes);

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        console.log('clicked');
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        
        document.getElementById('resposta').textContent = 'Você tem acesso à Defensoria Pública!';
        if (allChecked) {
            document.getElementById('resposta').textContent = 'Você tem acesso à Defensoria Pública!';
        } else {
            document.getElementById('resposta').textContent = '';
        }
    });
});