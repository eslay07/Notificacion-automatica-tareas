# Notificación automática de tareas · lectura de portafolio

Detecta entregas completas en Google Sheets y avisa por correo para que la tarea avance al siguiente paso.

**Autor:** Jimmy Toapanta · [Perfil profesional](https://www.linkedin.com/in/jimmy-toapanta-950a441b8/) · [Portafolio](https://github.com/eslay07)

**Tecnologías:** Google Apps Script · JavaScript · Google Sheets · MailApp

## Problema y solución

Revisar manualmente todas las tareas para detectar cuáles ya pueden reasignarse retrasa el seguimiento.

Recorre las hojas configuradas, evalúa los bloques delimitados y envía un resumen de tareas completas. Marca NOTIFICADO después del envío para reducir avisos repetidos.

## Evidencia para revisar el trabajo

| Archivo o componente | Qué permite revisar |
| --- | --- |
| [Tareas_finalizadas.gs](Tareas_finalizadas.gs) | verificarTareasCompletas y buscarTareaFila: lectura, evaluación, correo y marcado. |

## Estado y límites

Automatización dependiente de una estructura de hoja y de los permisos de la cuenta. No es un lector de Outlook ni una implementación en Python.

## Cómo evaluar el proyecto

Usar una hoja de prueba y un destinatario propio. El código actual interpreta valores vacíos o no numéricos como cero; hace falta validar la estructura y los datos antes de activar envíos. No se ejecutaron notificaciones reales en esta revisión.

Esta actualización documental se basa en la revisión del código y de la documentación disponibles. No añade métricas de ahorro, clientes, usuarios ni resultados de producción que no estén respaldados.

## Capacidad que demuestra

Traducir reglas operativas a un recorrido automatizado y mantener un estado que permita reconocer lo procesado.

[Volver al README](README.md).
