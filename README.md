# 📌 Sistema de Notificación Automática de Tareas en Google Sheets

Este repositorio contiene un sistema desarrollado en **Google Apps Script** que permite la **automatización del seguimiento de tareas en Google Sheets**. Su objetivo es mejorar la gestión de pedidos y procesos administrativos al detectar automáticamente cuándo una tarea ha sido completada y enviar una **notificación por correo electrónico** a los responsables.

---

## 📖 Documentación

Para garantizar una correcta implementación y uso del sistema, se incluyen los siguientes documentos:

- 📘 **[Guía Técnica de Funcionamiento v1](Manual_Tecnico_v1.pdf)**
- 📙 **[Manual de Usuario v1](Manual_Usuario_v1.pdf)**

---

## 📂 Archivos Incluidos en el Repositorio

Para facilitar la implementación del sistema, el repositorio contiene los siguientes archivos:

| **Archivo** | **Descripción** |
|------------|----------------|
| `script.gs` | Código fuente del sistema en Google Apps Script. |
| `Manual_Tecnico_v1.pdf` | Documentación técnica para desarrolladores y administradores. |
| `Manual_Usuario_v1.pdf` | Guía para los usuarios finales del sistema. |
| `Formato_Hoja_Calculo.xlsx` | Plantilla en Excel con el formato correcto de la hoja de cálculo. |

📌 **También está disponible una plantilla en Google Sheets:**  
📊 **[Formato de la Hoja de Cálculo en Google Drive]([https://docs.google.com/spreadsheets/d/TU_ENLACE_AQUI](https://docs.google.com/spreadsheets/d/1sAPchIsvMR5bm6y94OuizyQOx0g0g12UvcDKRgOqaGY/edit?usp=sharing))**  

---

## 📊 Estructura de la Hoja de Cálculo

El sistema requiere que la hoja de cálculo siga la siguiente estructura para su correcto funcionamiento:

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
3. Eliminar cualquier código existente y pegar el contenido de `script.gs`.  
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

Este sistema ha sido desarrollado como una **versión preliminar** de una herramienta para la automatización de notificaciones en Google Sheets.  

📌 **Desarrollador Original:** Jimmy Toapanta  
📌 **Estado del Proyecto:** En fase de pruebas y optimización  

### **Condiciones de Uso:**  
- Este código ha sido desarrollado con fines de optimización en la gestión de tareas.  
- Se encuentra en una versión inicial y está sujeto a mejoras antes de su implementación final.  
- Su uso, modificación o distribución deben ser autorizados antes de su integración en entornos empresariales.  

### **Importante:**  
Este código aún no ha sido formalmente entregado ni implementado como un sistema oficial de la empresa Telconet.  

El desarrollador original **Jimmy Toapanta** mantiene la autoría de esta versión hasta su entrega oficial.  

---

📬 **Para consultas sobre la implementación del sistema, contactar al administrador de la hoja de cálculo.**

