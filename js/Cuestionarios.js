document.getElementById('test1').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "a",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado1").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test2').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "a",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado2").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});


document.getElementById('test3').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "c",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado3").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test4').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado4").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test5').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado5").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test6').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "a",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado6").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test7').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "a",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado7").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test8').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "c",
        p2: "a",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado8").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test9').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado9").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});
document.getElementById('test10').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado10").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});
document.getElementById('test11').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado11").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});


document.getElementById('test12').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "a",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado12").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test13').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado13").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test14').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado14").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test15').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado15").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test16').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado16").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});


document.getElementById('test17').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado17").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test18').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado18").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test19').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "c",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado19").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test20').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "a",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado20").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test21').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "c",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado21").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test22').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "c",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado22").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test23').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "a",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado23").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test24').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "a",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado24").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test25').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado25").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test26').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado26").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test27').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "a",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado27").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test28').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "a",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado28").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test29').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "a",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado29").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test30').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "a",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado30").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test31').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado31").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});
document.getElementById('test32').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado32").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});

document.getElementById('test33').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "a",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado33").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});
document.getElementById('test34').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "a",
        p2: "b",
        p3: "b",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado34").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});
document.getElementById('test35').addEventListener("submit", function (e)
{
    e.preventDefault();
    let puntaje=0;
    const respuestas = {
        p1: "b",
        p2: "b",
        p3: "a",
    };
    for (let pregunta in respuestas)
    {
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);

        if(seleccionada && seleccionada.value === respuestas[pregunta])
        {
            puntaje++;
        }
    }
    document.getElementById("resultado35").textContent = "Calificación: "+puntaje+"/"+Object.keys(respuestas).length;
});


