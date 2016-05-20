(function(tiy) {
    'use strict';

    var progress, content;
    var PROGRESS_KEY = 'section-progress';

    init();

    function init() {
        content = document.querySelector('.content');

        try { progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch(e){ progress = {}; }

        if (content.dataset.section && content.dataset.section !== 'Welcome') {
            loadProgressUI(content.dataset.section);
        }
    }

    function loadProgressUI() {
        var btn, template, action,
            section = content.dataset.section;

        if (progress[section] === true) {
            action = '&#10003 Complete <a href="#" class="undo" title="Undo">&#8635;</a>';
        } else {
            action = '<a href="#" class="complete btn">&#10003 Mark Complete</a>';
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
    }


    window.tiy = tiy;

})(window.tiy || {});
