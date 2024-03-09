function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    var navbar = document.getElementById('navbar');
    
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
        content.style.marginLeft = '0';
        navbar.style.marginLeft = '0';
    }
    else {
        sidebar.classList.add('show-sidebar');
        content.style.marginLeft = '250px';
        navbar.style.marginLeft = '250px';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var submenus = document.querySelectorAll('.sidebar .collapse');
    var menuButtons = document.querySelectorAll('.sidebar .btn'); // Select all menu buttons
    submenus.forEach(function (submenu) {
        // Add event listener for when submenu is shown
        submenu.addEventListener('show.bs.collapse', function () {
            // Hide all other submenus
            submenus.forEach(function (item) {
                if (item !== submenu) {
                    var bsCollapse = new bootstrap.Collapse(item, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            });

            // Remove active class from all buttons
            menuButtons.forEach(function(btn) {
                btn.classList.remove('active-btn');
            });

            // Find the button that controls the submenu and add the active class
            var controlButton = document.querySelector(`[data-bs-target="#${submenu.id}"]`);
            controlButton.classList.add('active-btn');
        });

        // Add event listener for when submenu is hidden
        submenu.addEventListener('hide.bs.collapse', function () {
            // Find the button that controls the submenu and remove the active class
            var controlButton = document.querySelector(`[data-bs-target="#${submenu.id}"]`);
            controlButton.classList.remove('active-btn');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var submenus = document.querySelectorAll('.sidebar .collapse');

    submenus.forEach(function (submenu) {
        submenu.addEventListener('show.bs.collapse', function () {
            submenus.forEach(function (item) {
                if (item !== submenu) {
                    var bsCollapse = new bootstrap.Collapse(item, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            });
        });
    });
});