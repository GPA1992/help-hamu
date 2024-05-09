
      function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
            });
    }

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const href = this.getAttribute('href'); 
            const filename =`./${href.substring(1)}.html`; 

            loadContent(filename); 
        });
    });


    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('nav ul li a').forEach(item => {
                item.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });