// Registro
document.getElementById("registerForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("registerEmail").value;
  const contraseña = document.getElementById("registerPassword").value;

 
  localStorage.setItem("user", JSON.stringify({nombre,apellido,correo,contraseña}));

  alert("Usuario registrado correctamente");
  window.location.href = "index.html";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const correo = document.getElementById("loginEmail").value;
  const contraseña = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.correo === correo && user.contraseña === contraseña) {
    localStorage.setItem("sesionActiva", "true");
    alert("Login exitoso");
    window.location.href = "dashboard.html";
  } else {
    alert("Credenciales incorrectas");
  }
});

