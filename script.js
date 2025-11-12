const chats = 
{
  proyectos: 
  [
    { sender: "me", text: "Hola te muestro algunos de mis proyectos recientes." },
    { sender: "other", text: "Perfecto, ¿en qué has estado trabajando?" },
    { sender: "me", text: "Un mini framework en PHP: https://github.com/juanduartedev/Framework-light" },
    { sender: "me", text: "También un catálogo online: https://landing.coulex.com/ " },
    { sender: "me", text: "Sitio web de Cursos para principiantes: https://cursos.coulex.com/" },
    { sender: "me", text: "Marca personal: https://www.coulex.com/" },
    { sender: "me", text: "Instagram Coulex Software: https://www.instagram.com/coulex.software/" },
  ],

  experiencia: 
  [
    { sender: "me", text: "Cuento con 4 años de experiencia desarrollando de manera freelance y autónoma, siempre con un enfoque autodidacta." },
    { sender: "me", text: "Trabajo principalmente con PHP, JavaScript y MySQL, creando mis propias herramientas y soluciones desde cero, todo a puro código." },
  ],

  sobreMi: 
  [
    { sender: "me", text: "Soy Juan, ingeniero de software apasionado por crear herramientas útiles y optimizar procesos." },
    { sender: "me", text: "Disfruto diseñar código limpio y construir proyectos que faciliten el trabajo a otros desarrolladores y emprendedores." },
  ],

  tecnologias: 
  [
    { sender: "other", text: "¿Qué tecnologías dominas para tus desarrollos?" },
    { sender: "me", text: "Trabajo con HTML, CSS, JavaScript, PHP y MySQL como base de mis proyectos." },
    { sender: "me", text: "Uso frameworks y herramientas modernas como React, Astro, Laravel y Filament." },
    { sender: "me", text: "Además, manejo control de versiones con Git y GitHub." },
    { sender: "me", text: "Trabajo cómodamente en entornos Linux, especialmente en Ubuntu." },
    { sender: "me", text: "También tengo experiencia creando máquinas virtuales con VirtualBox para entornos de desarrollo y pruebas." },
  ],

  tiempoLibre: 
  [
    { sender: "other", text: "¿Qué haces en tu tiempo libre?" },
    { sender: "me", text: "Me gusta maquetar sitios web basándome en aplicaciones reales." },
    { sender: "me", text: "De hecho, de ahí surgió la idea de crear este portafolio." },
  ],

  contacto: 
  [
    { sender: "other", text: "¿Cómo puedo contactarte?" },
    { sender: "me", text: "Podés escribirme directamente a juanduartedev@gmail.com." },
    { sender: "me", text: "En mi LinkedIn suelo compartir publicaciones y proyectos interesantes: https://www.linkedin.com/in/juan-carlos-duarte-a9752b380/" },
    { sender: "me", text: "Lo más probable es que me encuentres activo en GitHub: https://github.com/juanduartedev" },
  ],
};

function openChat(chatKey) 
{
  const chatTitle = document.getElementById("chatTitle");
  const messagesDiv = document.getElementById("messages");

  const chat = chats[chatKey];

  messagesDiv.innerHTML = "";
  chatTitle.textContent = chatKey.charAt(0).toUpperCase() + chatKey.slice(1);

  chat.forEach((msg) => 
  {
    const div = document.createElement("div");
    div.classList.add("message", msg.sender === "me" ? "sent" : "received");

    const textWithLinks = msg.text.replace(
      /(https?:\/\/[^\s]+)/g,
      ' <a class="link_contact" href="$1" target="_blank" class="chat-link">$1</a>'
    );

    div.innerHTML = textWithLinks;
    messagesDiv.appendChild(div);
  });
}
