import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className='contenido'>
      <Header titulo="“Galería de Imágenes con React”"/>
      <div className='imgs'>
        <Card img="/imgs/naturaleza-1.jpg" title="Bosque" description="Arbol del Amor"/>
        <Card img="/imgs/naturaleza-2.jpg" title="Camino verde" description="Camino de la fuerza, Sur "/>
        <Card img="/imgs/naturaleza-3.jpg" title="Paisajes" description="Hermosos cerros, con area verde"/>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
