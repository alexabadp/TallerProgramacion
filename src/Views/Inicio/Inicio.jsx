
import { useEffect } from "react";
import AcademiaYoutube from "../../Components/AcademiaYoutube/AcademiaYoutube";
import Comunicado from "../../Components/Comunicado/Comunicado";
import FormularioInscripcion from "../../Components/FormularioInscripcion/FormularioInscripcion";
import Heroslider from "../../Components/HeroSlider/HeroSlider";
import QuienesSomos from "../../Components/QuienesSomos/QuienesSomos";
import SeccionCachimbos from "../../Components/SeccionCachimbos/SeccionCachimbos";
import SeccionCiclos from "../../Components/SeccionCiclos/SeccionCiclos";
import Header from "../../Layouts/Header/Header";

function Inicio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Heroslider />
      <QuienesSomos />
      {/* <AcademiaYoutube /> */}
      {/* <SeccionCiclos /> */}
      {/* <SeccionCachimbos /> */}
      {/* <FormularioInscripcion /> */}
      {/* <Comunicado /> */}
    </>
  );
}

export default Inicio;
