# Sistema de Notificación Automática de Tareas en Google Sheets

Este repositorio contiene un sistema desarrollado en Google Apps Script que automatiza el seguimiento de solicitudes de compra registradas en Google Sheets. Se apoya en una hoja de cálculo con un formato específico y en un disparador temporal que revisa periódicamente las tareas.

## Descripción general

- Cada tarea corresponde a una solicitud de compra con varios ítems y sus cantidades.
- El script verifica si todos los ítems de la tarea fueron entregados por completo.
- Al detectar una tarea completada, envía un correo electrónico al responsable de la hoja y marca la fila con "NOTIFICADO" para evitar duplicados.

---

## Contenido del repositorio

| Archivo | Descripción |
|---------|-------------|
| `Tareas_finalizadas.gs` | Código fuente del sistema en Google Apps Script. |
| `Guía Técnica de Funcionamiento -Automatización de Notificaciones en Google Sheets Telconet. (v1).docx` | Referencia técnica para configuración y mantenimiento. |
| `Guía de Uso - Notificación Automática de Tareas Completadas (Versión 1.0).docx` | Instrucciones de uso para los responsables de la hoja. |
| `Formato_Hoja_Calculo.xlsx` | Plantilla en Excel con el formato de la hoja de cálculo. |

También está disponible una plantilla en Google Sheets:

[Formato de la Hoja de Cálculo en Google Drive](https://docs.google.com/spreadsheets/d/1sAPchIsvMR5bm6y94OuizyQOx0g0g12UvcDKRgOqaGY/edit?usp=sharing)

---

## Estructura de la hoja de cálculo

La hoja agrupa las tareas entre las palabras clave `"PENDIENTE ENTREGA"` (inicio) y `"DELIMITADOR"` (final). Dentro de ese rango, las columnas deben seguir el siguiente esquema:

| Columna | Descripción |
|---------|-------------|
| A | Descripción del material o producto. |
| B | Cantidad solicitada. |
| C | Cantidad entregada. |
| D | Cantidad pendiente (0 indica tarea completa). |
| E | Orden de compra asociada al pedido. |
| F | Nombre del proveedor. |
| G | Número de factura (si aplica). |
| H | Observaciones y estado de notificación (se marca "NOTIFICADO" tras el envío del correo). |

La fila superior puede incluir la etiqueta `"TAREA:"` y el número de la tarea para identificación rápida.

---

## Instalación y configuración

### 1. Copiar el código en Google Apps Script
1. Abrir la hoja de cálculo en Google Sheets.
2. Ir a Extensiones > Apps Script.
3. Pegar el contenido de `Tareas_finalizadas.gs` en el editor y guardar.

### 2. Configurar el activador para la ejecución automática
Para revisar la hoja de forma periódica, cree un activador basado en tiempo:

1. En Google Apps Script, abrir la pestaña **Desencadenadores**.
2. Hacer clic en **Añadir desencadenador**.
3. Configurar:
   - Función: `verificarTareasCompletas`
   - Evento: "Basado en tiempo"
   - Frecuencia: "Cada 1 minuto" (ajustable según necesidad)
4. Guardar.

---

## Personalización del sistema

El script asigna destinatarios según el nombre de la hoja:

| Nombre de la hoja | Correo destinatario |
|-------------------|---------------------|
| `"JT"` | `jotoapanta@telconet.ec` |
| `"VP"` | `eslay777j@gmail.com` |

Para agregar más responsables, amplíe el objeto `emailPorHoja` en el código y añada la hoja correspondiente.

---

## Buenas prácticas y consideraciones

- Evite copiar manualmente la palabra "NOTIFICADO" en nuevas tareas, para que el sistema pueda detectarlas.
- No modifique las etiquetas `"PENDIENTE ENTREGA"` y `"DELIMITADOR"`, ya que delimitan el rango de datos a evaluar.
- Revise los registros de ejecución en Apps Script si deja de recibir correos.

---

## Beneficios del sistema

- Automatiza el seguimiento de tareas sin depender de revisiones manuales.
- Disminuye errores humanos en el control de pedidos.
- Libera tiempo para actividades operativas de mayor prioridad.
- Puede ajustarse a nuevas reglas o flujos de aprobación.

---

## Licencia y uso del proyecto

Este sistema fue desarrollado como un proyecto independiente para la automatización de notificaciones en Google Sheets.

- Desarrollador original: Jimmy Toapanta
- Estado del proyecto: versión experimental sin relación con implementaciones empresariales actuales

Condiciones de uso:
- El código se ofrece para exploración y pruebas en automatización.
- No corresponde a implementaciones oficiales en ninguna empresa.
- Su uso, modificación o distribución deben ser autorizados por el autor.

Para consultas sobre la implementación del sistema, contactar al administrador de la hoja de cálculo.
