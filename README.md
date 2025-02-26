# 📌 Sistema de Notificación Automática de Tareas en Google Sheets

Este repositorio contiene un sistema desarrollado en Google Apps Script que permite la automatización del seguimiento de solicitudes de compra en Google Sheets.

📌 ¿Cómo funciona?

Cada tarea representa una solicitud de compra que incluye varios ítems con sus respectivas cantidades.
El sistema revisa automáticamente si todos los ítems de una tarea han sido entregados en su totalidad.
Si una tarea ha sido completada, se envía una notificación por correo electrónico al responsable de la hoja.
Se actualiza la hoja de cálculo marcando la tarea como "NOTIFICADO" para evitar duplicaciones en las alertas.
Este sistema reduce la supervisión manual y optimiza la gestión de pedidos, asegurando que cada solicitud de compra se procese correctamente

---

## 📖 Documentación

Para garantizar una correcta implementación y uso del sistema, se incluyen los siguientes documentos:

- 📘 **Guía Técnica de Funcionamiento -Automatización de Notificaciones en Google Sheets Telconet. (v1).docx**
- 📙 **Guía de Uso - Notificación Automática de Tareas Completadas (Versión 1.0).docx**

---

## 📂 Archivos Incluidos en el Repositorio

Para facilitar la implementación del sistema, el repositorio contiene los siguientes archivos:

| **Archivo** | **Descripción** |
|------------|----------------|
| `Tareas_finalizadas.gs` | Código fuente del sistema en Google Apps Script. |
| `Guía Técnica de Funcionamiento -Automatización de Notificaciones en Google Sheets Telconet. (v1).docx` | Documentación técnica para desarrolladores y administradores. |
| `Guía de Uso - Notificación Automática de Tareas Completadas (Versión 1.0).docx` | Guía para los usuarios finales del sistema. |
| `Formato_Hoja_Calculo.xlsx` | Plantilla en Excel con el formato correcto de la hoja de cálculo. |

📌 **También está disponible una plantilla en Google Sheets:**  
📊 **[Formato de la Hoja de Cálculo en Google Drive](https://docs.google.com/spreadsheets/d/1sAPchIsvMR5bm6y94OuizyQOx0g0g12UvcDKRgOqaGY/edit?usp=sharing)**


---

## 📊 Estructura de la Hoja de Cálculo

Cada tarea en la hoja de cálculo representa una solicitud de compra que contiene varios ítems con diferentes cantidades. Para que el sistema funcione correctamente, la hoja debe seguir la siguiente estructura:

| **Columna** | **Descripción** |
|------------|----------------|
| **A** | Etiqueta `"TAREA:"` seguida del número de tarea en la fila superior. |
| **B** | Número de tarea (9 dígitos). |
| **A** | Descripción del material o producto. |
| **B** | Cantidad solicitada. |
| **C** | Cantidad entregada. |
| **D** | Cantidad pendiente de entrega (debe ser 0 para considerar la tarea como completada). |
| **E** | Orden de compra asociada al pedido. |
| **F** | Nombre del proveedor. |
| **G** | Número de factura (si aplica). |
| **H** | Observaciones sobre el pedido. |
| **H** | Estado de notificación ("NOTIFICADO" tras el envío del correo). |

🔹 **Palabras clave obligatorias en la columna D**: 
- `"PENDIENTE ENTREGA"` para marcar el inicio del grupo de tareas a evaluar.  
- `"DELIMITADOR"` en la última fila del conjunto de datos para indicar el final del pedido.

---

## 🚀 Instalación y Configuración

### 📌 **1️⃣ Copiar el Código en Google Apps Script**
1. Abrir la hoja de cálculo en **Google Sheets**.  
2. Ir a **Extensiones > Apps Script**.  
3. Eliminar cualquier código existente y pegar el contenido de `Tareas_finalizadas.gs`.  
4. Guardar los cambios.  

### 📌 **2️⃣ Configurar el Activador para la Ejecución Automática**
Para que el sistema revise constantemente la hoja de cálculo, se debe configurar un **activador basado en tiempo**:

1. En Google Apps Script, abrir la pestaña **Desencadenadores** (ícono de un reloj).  
2. Hacer clic en **"Añadir desencadenador"**.  
3. Configurar los siguientes parámetros:  
   - **Función a ejecutar:** `verificarTareasCompletas`  
   - **Evento de activación:** `"Basado en tiempo"`  
   - **Frecuencia:** `"Cada 1 minuto"` (o ajustar según necesidad)  
4. Guardar los cambios.  

---

## ✉ Personalización del Sistema

El script está configurado para enviar notificaciones a diferentes responsables según el nombre de la hoja:

| **Nombre de la Hoja** | **Correo Destinatario** |
|----------------|---------------------|
| `"JT"` | `jotoapanta@telconet.ec` |
| `"VP"` | `eslay777j@gmail.com` |

Si se requieren más destinatarios, se debe modificar la variable `emailPorHoja` dentro del código.

---

## ✅ Buenas Prácticas y Consideraciones

Para garantizar el correcto funcionamiento del sistema, se recomienda:

✔ **No copiar manualmente la palabra "NOTIFICADO" en nuevas tareas.** Esto podría evitar que el sistema las detecte correctamente.  
✔ **No modificar las etiquetas `"PENDIENTE ENTREGA"` y `"DELIMITADOR"`.** Son claves para la identificación de tareas completadas.  
✔ **Revisar periódicamente los registros de ejecución en Apps Script.** En caso de que el sistema no envíe correos, se debe verificar si hay errores en la ejecución.  

---

## 🔹 Beneficios del Sistema

✅ **Automatización del Seguimiento de Tareas:** No es necesario verificar manualmente la hoja de cálculo.  
✅ **Reducción de Errores Humanos:** Se evitan olvidos en el seguimiento de pedidos.  
✅ **Mejor Gestión del Tiempo:** El equipo se enfoca en tareas más productivas en lugar de realizar seguimiento manual.  
✅ **Escalabilidad:** Se puede adaptar fácilmente para nuevos procesos o requerimientos.  
---

## 📜 Licencia y Uso del Proyecto  

Este sistema fue desarrollado como un proyecto independiente para la automatización de notificaciones en Google Sheets.

📌 Desarrollador Original: Jimmy Toapanta
📌 Estado del Proyecto: Proyecto experimental, sin relación con implementaciones empresariales actuales

Condiciones de Uso
Este código fue desarrollado con fines de exploración y pruebas en automatización.
Se encuentra en una versión preliminar sin implementaciones oficiales en ninguna empresa.
Su uso, modificación o distribución deben ser autorizados por el autor.
Importante
Esta versión del código no corresponde a ninguna implementación oficial de Telconet ni de ninguna otra empresa. Fue creada únicamente con fines de exploración y aprendizaje.

---

📬 **Para consultas sobre la implementación del sistema, contactar al administrador de la hoja de cálculo.**

