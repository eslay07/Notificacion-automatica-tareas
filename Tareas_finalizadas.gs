function verificarTareasCompletas() {
    var libro = SpreadsheetApp.getActiveSpreadsheet();
    var hojas = libro.getSheets();
    var emailPorHoja = {
        "JT": "jotoapanta@telconet.ec",
        "VP": "eslay777j@gmail.com"
    };

    Logger.log(" Iniciando revisión de tareas en TODAS las hojas.");

    for (var h = 0; h < hojas.length; h++) {
        var hoja = hojas[h];
        var nombreHoja = hoja.getName();

        if (!(nombreHoja in emailPorHoja)) {
            Logger.log(" La hoja '" + nombreHoja + "' no tiene un correo asignado. Se omite.");
            continue;
        }

        var emailDestino = emailPorHoja[nombreHoja];
        Logger.log(" Procesando la hoja: " + nombreHoja + " - Enviando correos a: " + emailDestino);

        var datos = hoja.getDataRange().getValues();
        var ultimaFila = datos.length;
        var pendientesIndices = [];
        var tareasCompletas = [];

        for (var i = 0; i < ultimaFila; i++) {
            var celda = datos[i][3]; // Columna D
            if (celda && celda.toString().trim() === "PENDIENTE ENTREGA") {
                pendientesIndices.push(i);
                Logger.log(" 'PENDIENTE ENTREGA' encontrado en fila: " + i + " en hoja: " + nombreHoja);
            } else if (celda && celda.toString().trim() === "DELIMITADOR") {
                pendientesIndices.push(i);
                Logger.log(" 'DELIMITADOR' encontrado en fila: " + i + " en hoja: " + nombreHoja);
            }
        }

        if (pendientesIndices.length < 2) {
            Logger.log(" No hay suficientes delimitadores en la hoja: " + nombreHoja);
            continue;
        }

        for (var j = 0; j < pendientesIndices.length - 1; j += 2) {
            var inicio = pendientesIndices[j];
            var fin = pendientesIndices[j + 1];

            var tareaFila = buscarTareaFila(datos, inicio);
            if (tareaFila < 0) continue;

            var tarea = datos[tareaFila] ? datos[tareaFila][1] : null; // Columna B
            var estado = datos[tareaFila] ? datos[tareaFila][7] : null; // Columna H

            Logger.log(" Verificando tarea en fila: " + tareaFila + " en hoja: " + nombreHoja + " - Valor en B: " + tarea);

            if (!tarea || !/^\d{9}$/.test(tarea.toString().trim())) {
                Logger.log(" Tarea en fila " + tareaFila + " no es un número de 9 dígitos: " + tarea);
                continue;
            }

            if (estado && estado.toString().trim() === "NOTIFICADO") {
                Logger.log(" Tarea " + tarea + " ya ha sido notificada antes en la hoja: " + nombreHoja);
                continue;
            }

            var completado = true;

            for (var k = inicio + 1; k < fin; k++) {
                var valor = datos[k][3]; // Columna D
                var numero = parseFloat(valor) || 0;

                if (numero !== 0) {
                    completado = false;
                    Logger.log(" Se encontró un valor diferente de 0 en la fila " + k + " en hoja: " + nombreHoja);
                    break;
                }
            }

            if (completado) {
                tareasCompletas.push({ tarea: tarea, fila: tareaFila });
                Logger.log(" Tarea COMPLETA detectada: " + tarea + " en hoja: " + nombreHoja);
            }
        }

        if (tareasCompletas.length > 0) {
            var mensaje = "Las siguientes tareas han sido completadas en " + nombreHoja + " y deben ser reasignadas:\n\n";
            var filasActualizar = [];

            tareasCompletas.forEach(function (t) {
                mensaje += t.tarea + "\n";
                filasActualizar.push(t.fila);
            });

            Logger.log(" Contenido del correo para " + nombreHoja + ":\n" + mensaje);
            
            try {
                MailApp.sendEmail({
                    to: emailDestino,
                    subject: " Tareas Completadas - Reasignación Necesaria (" + nombreHoja + ")",
                    body: mensaje
                });

                filasActualizar.forEach(function (fila) {
                    hoja.getRange(fila + 1, 8).setValue("NOTIFICADO"); // Marcar como "NOTIFICADO"
                });

                Logger.log(" Correo enviado correctamente para la hoja: " + nombreHoja);
            } catch (error) {
                Logger.log(" Error al enviar el correo para la hoja " + nombreHoja + ": " + error.message);
            }
        } else {
            Logger.log(" No hay tareas completadas en la hoja: " + nombreHoja);
        }
    }
}

//  Función para buscar la fila correcta del número de tarea (9 dígitos)
function buscarTareaFila(datos, inicioFila) {
    for (var i = inicioFila - 1; i >= 0; i--) {
        var valor = datos[i][1]; // Columna B
        if (valor && /^\d{9}$/.test(valor.toString().trim())) {
            Logger.log(" Número de tarea encontrado en fila: " + i + " (Valor: " + valor + ")");
            return i;
        }
    }
    Logger.log(" No se encontró número de tarea válido antes de la fila " + inicioFila);
    return -1;
}