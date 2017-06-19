window.onload = function() {
// HAMBURGER MENU
    let menu = document.querySelector('.hamburger');
    let blind = document.querySelector('.blind');
    blind.onclick = function(e) {
        if(e.target.tagName == 'A') {
            menu.classList.remove('is-active');
            blind.classList.remove('act');
        }
    };
    menu.onclick = function() {
        menu.classList.toggle('is-active');
        blind.classList.toggle('act');
    };
    
// SEND FORM
    let submit = document.querySelector('.submit');
    submit.onclick = function(e) {
        e.preventDefault();
        let form = document.querySelector('form');
        let name = document.querySelector('.nameForm');
        let mail = document.querySelector('.mailForm');
        let subject = document.querySelector('.subjectForm');
        let text = document.querySelector('.textForm');

        function validFields(field) {
            if(field.value.length < 2) {
                field.classList.add('error');
                return;
            }
            field.classList.remove('error');
        }

        validFields(name);
        validFields(subject);
        validFields(text);

        function validateEmail(email) {
            let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            mail.classList.add('error');
            return re.test(email);
        }

        if(!validateEmail(mail.value)) {
            return;
        }
        mail.classList.remove('error');
        

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'ajaxform.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let data = {
            name: name.value,
            mail: mail.value,
            subject: subject.value,
            text: text.value
        };
        xhr.send(JSON.stringify(data));
        form.reset();
    };
};