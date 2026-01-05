# Sistema de Notificación Automática de Tareas en Google Sheets

Este repositorio contiene un sistema desarrollado en Google Apps Script que automatiza el seguimiento de solicitudes de compra en Google Sheets.

## ¿Cómo funciona?

- Cada tarea representa una solicitud de compra que incluye varios ítems con sus cantidades.
- El sistema revisa si todos los ítems de una tarea han sido entregados en su totalidad.
- Cuando una tarea está completa, se envía una notificación por correo electrónico al responsable de la hoja.
- La hoja de cálculo se actualiza marcando la tarea como "NOTIFICADO" para evitar alertas duplicadas.

---

## Documentación

El repositorio incluye los siguientes documentos de referencia:

- **Guía Técnica de Funcionamiento -Automatización de Notificaciones en Google Sheets Telconet. (v1).docx**
- **Guía de Uso - Notificación Automática de Tareas Completadas (Versión 1.0).docx**

---

## Archivos incluidos en el repositorio

| Archivo | Descripción |
|---------|-------------|
| `Tareas_finalizadas.gs` | Código fuente del sistema en Google Apps Script. |
| `Guía Técnica de Funcionamiento -Automatización de Notificaciones en Google Sheets Telconet. (v1).docx` | Documentación técnica para desarrolladores y administradores. |
| `Guía de Uso - Notificación Automática de Tareas Completadas (Versión 1.0).docx` | Guía para los usuarios finales del sistema. |
| `Formato_Hoja_Calculo.xlsx` | Plantilla en Excel con el formato de la hoja de cálculo. |

También está disponible una plantilla en Google Sheets:

[Formato de la Hoja de Cálculo en Google Drive](https://docs.google.com/spreadsheets/d/1sAPchIsvMR5bm6y94OuizyQOx0g0g12UvcDKRgOqaGY/edit?usp=sharing)

---

## Estructura de la hoja de cálculo

Cada tarea en la hoja de cálculo representa una solicitud de compra con varios ítems. Para que el sistema funcione correctamente, la hoja debe seguir la siguiente estructura:

| Columna | Descripción |
|---------|-------------|
| A | Etiqueta `"TAREA:"` seguida del número de tarea en la fila superior. |
| B | Número de tarea (9 dígitos). |
| A | Descripción del material o producto. |
| B | Cantidad solicitada. |
| C | Cantidad entregada. |
| D | Cantidad pendiente de entrega (debe ser 0 para considerar la tarea como completada). |
| E | Orden de compra asociada al pedido. |
| F | Nombre del proveedor. |
| G | Número de factura (si aplica). |
| H | Observaciones sobre el pedido. |
| H | Estado de notificación ("NOTIFICADO" tras el envío del correo). |

Palabras clave obligatorias en la columna D:
- `"PENDIENTE ENTREGA"` para marcar el inicio del grupo de tareas a evaluar.
- `"DELIMITADOR"` en la última fila del conjunto de datos para indicar el final del pedido.

---

## Instalación y configuración

### 1. Copiar el código en Google Apps Script
1. Abrir la hoja de cálculo en Google Sheets.
2. Ir a Extensiones > Apps Script.
3. Eliminar cualquier código existente y pegar el contenido de `Tareas_finalizadas.gs`.
4. Guardar los cambios.

### 2. Configurar el activador para la ejecución automática
Para que el sistema revise constantemente la hoja de cálculo, configure un activador basado en tiempo:

1. En Google Apps Script, abrir la pestaña Desencadenadores (ícono de un reloj).
2. Hacer clic en "Añadir desencadenador".
3. Configurar los siguientes parámetros:
   - Función a ejecutar: `verificarTareasCompletas`
   - Evento de activación: "Basado en tiempo"
   - Frecuencia: "Cada 1 minuto" (o ajustar según necesidad)
4. Guardar los cambios.

---

## Personalización del sistema

El script está configurado para enviar notificaciones a diferentes responsables según el nombre de la hoja:

| Nombre de la hoja | Correo destinatario |
|-------------------|---------------------|
| `"JT"` | `jotoapanta@telconet.ec` |
| `"VP"` | `eslay777j@gmail.com` |

Para agregar más destinatarios, edite la variable `emailPorHoja` dentro del código.

---

## Buenas prácticas y consideraciones

Para garantizar el correcto funcionamiento del sistema, se recomienda:

- No copiar manualmente la palabra "NOTIFICADO" en nuevas tareas, para evitar que el sistema deje de detectarlas.
- No modificar las etiquetas `"PENDIENTE ENTREGA"` y `"DELIMITADOR"`, porque son claves para identificar tareas completadas.
- Revisar periódicamente los registros de ejecución en Apps Script. Si el sistema no envía correos, verificar posibles errores.

---

## Beneficios del sistema

- Automatiza el seguimiento de tareas sin revisar la hoja manualmente.
- Reduce errores humanos en el seguimiento de pedidos.
- Permite aprovechar el tiempo en actividades más productivas.
- Se puede adaptar a nuevos procesos o requerimientos.

---

## Licencia y uso del proyecto

Este sistema fue desarrollado como un proyecto independiente para la automatización de notificaciones en Google Sheets.

- Desarrollador original: Jimmy Toapanta
- Estado del proyecto: versión experimental sin relación con implementaciones empresariales actuales

Condiciones de uso:
- Este código fue desarrollado con fines de exploración y pruebas en automatización.
- Se encuentra en una versión preliminar sin implementaciones oficiales en ninguna empresa.
- Su uso, modificación o distribución deben ser autorizados por el autor.
- Esta versión del código no corresponde a ninguna implementación oficial de Telconet ni de ninguna otra empresa.

Para consultas sobre la implementación del sistema, contactar al administrador de la hoja de cálculo.
