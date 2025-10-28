# **MyPockets**



*Alumno:* Manel Alejandro Romero Villanueva



*Metodología:* Ágil 



*Introducción*:

En este documento se detallan los aspectos generales de la aplicación web "My Pockets", además los requisitos específicos necesarios para que el programa cumpla con sus tareas principales y se considere funcional.



*Alcance*:

Si bien esta aplicación web esta pensada para uso personal, se agrego un login para admitir mas usuarios. Cada usuario puede manejar sus propias transacciones, metas financieras y deudas, todo de manera independiente



*Descripción general (funcionalidad del producto)*:

Este producto tiene como objetivo ser una herramienta visual que ayude a los usuarios a organizar su vida financiera.

Cuenta con apartados que permiten registrar y visualizar transacciones diarias, así como metas financieras y deudas con la posibilidad de abonar o pagar.

El dashboard principal ofrece un resumen general de ingresos, egresos, deudas, metas y proyecciones o consejos financieros generados localmente mediante fórmulas de probabilidad.

El balance general se muestra en forma de tabla con montos, tipos y descripciones de las transacciones.

Las alertas tienen como fin motivar o advertir al usuario según su comportamiento financiero.



*Dependencias*:

-Navegador web compatible con HTML5, CSS3 y JavaScript.



-Servidor local XAMPP con Apache y MySQL para la gestión de base de datos.



-PHP como lenguaje de backend para la conexión con la base de datos.



*Evolución previsible*:

Se planea ofrecer esta aplicación en versión móvil para Android, incluir la función “olvidé mi contraseña”, y explorar la integración de una API de IA que genere recomendaciones personalizadas según los hábitos del usuario.



#### **"Requisitos específicos"**



**Requisitos de las interfaces:**



*-Usuario*:

Interfaz web intuitiva con un diseño limpio y responsivo.



El usuario puede iniciar sesión, registrarse, y acceder a un panel con sus datos financieros.



El sistema muestra botones claros, formularios estructurados y retroalimentación visual en cada acción.



*-Software*:

HTML, CSS y JavaScript para la interfaz.



PHP para la comunicación con la base de datos.



MySQL (en XAMPP) para almacenar usuarios, transacciones, metas y deudas.



*-Comunicación*:

El intercambio de datos entre frontend y backend se realiza mediante métodos POST en PHP.



**Requisitos funcionales:**



*-Requisito 1*:El sistema debe permitir registrar transacciones con los campos tipo (ingreso/egreso), monto, concepto y descripción.



*-Requisito 2*: El sistema debe permitir gestionar metas financieras, incluyendo nombre, monto objetivo, progreso y la opción de registrar abonos.



*-Requisito 3*:El sistema debe permitir gestionar deudas, incluyendo concepto, monto total, saldo pendiente y la opción de registrar abonos o pagos.



*-Requisito 4*: El sistema debe autenticar usuarios mediante inicio de sesión y permitir registro de nuevos usuarios.



*-Requisito 5*: El sistema debe mostrar un panel principal con resumen de ingresos, egresos, deudas, metas y alertas o consejos financieros generados localmente.







**Requisitos no funcionales:**



*-Seguridad*:Las contraseñas se almacenarán cifradas mediante hash (PHP) y se implementará validación básica de sesiones.



*-Fiabilidad*:

El sistema debe asegurar la integridad de los datos en la base de datos y evitar registros duplicados.



*-Disponibilidad*:Disponible desde cualquier navegador moderno mientras el servidor local esté en ejecución.



*-Mantenibilidad*:El código debe estar modularizado en archivos separados (HTML, CSS, JS, PHP) para facilitar actualizaciones y mantenimiento.



*-Portabilidad*:Compatible con cualquier sistema operativo que pueda ejecutar XAMPP (Windows, macOS o Linux).



**Otros requisitos:**



-Interfaz completamente en español.



-Alertas generadas de forma automática según las fórmulas internas de probabilidad.



-El diseño mantiene coherencia visual con el logotipo principal y colores corporativos (#5362b4 y #b3b3b3).



-Estructura preparada para escalabilidad y posibles integraciones futuras con APIs externas.

