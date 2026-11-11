// Utilidad reutilizable: scroll suave hacia una sección de la página.
// Llámala desde cualquier página:  scrollToSection('#itineraris')
export const scrollToSection = (sectionId: string) => {
  // Con "#" no hay sección destino: volvemos arriba de la página.
  if (sectionId === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const element = document.querySelector<HTMLElement>(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
