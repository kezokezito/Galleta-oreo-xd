document.getElementById('miBoton').addEventListener('click', function() {
    //Mensajes distintos de los intentos de cancelación xd
    const mensajes = [
        "Seguro de que quieres cancelar?",
        "De verdad etás seguro?",
        "Segurisimo?...",
        "Aceptalo bro...",
        "Te estás perdiendo de algo epico.",
        "Se que ella no te ama pero dale a ACEPTAR",
        "Dale a Aceptar, no te vas a arrepentir.",
        "¿Por qué insistes en cancelar?",
        "Acaso tu papa te pega?...",
        "O no tienes papa?",
        "llevas 10 intentos maldito",
        "No te rindas bro dale a ACEPTAR.",
        "Tengo todo el día, noche y tarde para esto.",
        "Aceptar está justo al lado maldito 😠.",
        "¿No te cansas de dar click?",
        "Parece que no tienes amigos",
        "No cuesta nada en dar Aceptar FUCK",
        "Has cancelado 20 veces bro, yo creo que tienes problemas mentales",
        "Si aceptas ahora, eres gey",
        "y que tal? se nota que tu novia te engaña.",
        "Reflexiona entonces",
        "reflexiona del porque cancelas tanto",
        "Dato curioso: La ballena azul es el animal más grande del planeta; puede medir hasta 30 metros de largo y pesar cerca de 190 toneladas",
        "tremendo dato curioso de mierda igual que tu",
        "Se nota que ya nos estamos haciendo amigos.",
        "De tantos idiomas, decidiste dar pena",
        "Y no, tu ex no quiere volver contigo",
        "Aprende a diferenciar entre hay, ahí y ay",
        "Le echaste bolas, chau, dale a cancelar otra vez puto"
    ];

    let seguro = confirm('SI (aceptar) y/o NO (cancelar). tu decides mi bro');
    let contador = 0; // Lleva la cuenta del mensaje actual

    // El bucle se ejecuta mientras el usuario no acepte mensajes xd
    while (!seguro && contador < mensajes.length) {
        seguro = confirm(mensajes[contador]);
        contador++;
    }

    // Si gastó los intentos que son como 30 cancelaciones, 
    //le mostrara la alerta final que le tiene que dar aceptar obligatoriamente xd
    if (!seguro) {
        alert("Okey bro, tu ganas, te vas a la mierda igual");
    }

    // Redirección directa a cualquier pagina xd
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});