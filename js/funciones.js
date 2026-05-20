function toggleSubmenu(id)
{
    const submenu = document.getElementById(id);
    if(submenu.style.display === "block")
    {
        submenu.style.display = "none";
    }
    else
    {
        submenu.style.display = "block";
    }
}
function mostrarTema(id)
{
    const temas = document.querySelectorAll('.contenido');
    temas.forEach(t => t.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}



