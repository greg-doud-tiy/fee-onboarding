(function(tiy) {
    'use strict';

    var progress, content;
    var PROGRESS_KEY = 'section-progress';
    var NAME_KEY = 'tiy-name';

    init();

    function init() {
        var name = localStorage.getItem(NAME_KEY);
        if (name) {
            document.querySelector('.student-name').innerText = `Hello again ${name}!`;
        } else {
            askForName();
        }

        content = document.querySelector('.content');

        try { progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch(e){ progress = {}; }

        markNavProgress();

        if (content.dataset.section && content.dataset.section !== 'Welcome') {
            loadProgressUI(content.dataset.section);
        }
    }

    function loadProgressUI() {
        var btn, template, action,
            section = content.dataset.section;

        if (progress[section] === true) {
            action = '&#10003; Complete <a href="#" class="undo" title="Undo">&#8635;</a>';
        } else {
            action = '<a href="#" class="complete btn">&#10003; Mark Complete</a>';
        }

        template = `<h3 class='progress-action'>${action}</h3>`;

        content.innerHTML = template + content.innerHTML;

        btn = document.querySelector('.complete') || document.querySelector('.undo');
        if (btn) {
            btn.addEventListener('click', toggleSectionComplete);
        }
    }

    function toggleSectionComplete(e) {
        var ui;

        e.preventDefault();

        progress[content.dataset.section] = !progress[content.dataset.section];
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
        ui = document.querySelector('.progress-action');
        ui.parentNode.removeChild(ui);
        loadProgressUI();
        markNavProgress();
    }

    function markNavProgress() {
        var sections = document.querySelectorAll('header nav li');

        [].slice.call(sections).forEach(function markComplete(section) {
            var check = section.querySelector('.is-complete');
            if (check) {
                section.removeChild(check);
            }
            if (progress[section.innerText]) {
                section.innerHTML += "<span class='is-complete'>&#10003;</span>";
            }
        });
    }

    function askForName() {
        var modal = `<div class='modal-background'></div>
<aside class='modal name-entry'>
    <h3>Hello!</h3>
    <p>
        It looks like we haven't met yet. Can you introduce yourself?
        This website will track your progress through the onboarding
        process for The Iron Yard. At the end of these sections you
        will be asked to submit a final onboarding survey which will
        send your name (below) along with your progress.
    </p>
    <form>
        <label for='student_name'>My name is:</label>
        <input type='text' id='student_name' autofocus>
        <input type='submit' class='save-name btn' value='Save'>
    </form>
</aside>`;

        var content = document.createElement('section');
        content.classList.add('name-entry-modal');
        content.innerHTML = modal;

        document.body.appendChild(content);
        document.querySelector('.modal-background').style.height = document.body.clientHeight + 'px';

        document.querySelector('.name-entry form').addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('student_name').value;
            console.log('saving name', name);
            if (name && name.length) {
                localStorage.setItem(NAME_KEY, name);
                document.body.removeChild(document.querySelector('.name-entry-modal'));
                document.querySelector('.student-name').innerText = `Hello again ${name}!`;
            }
        });
    }


    window.tiy = tiy;

})(window.tiy || {});
