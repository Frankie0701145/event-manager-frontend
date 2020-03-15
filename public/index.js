document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.sidenav');
    console.log(elements)
    var instances = M.Sidenav.init(elements, {});
});