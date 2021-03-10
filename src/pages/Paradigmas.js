import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/paradigmas.css";
import Imperativa from "../assets/images/imperativa.jpg";
import Declarativa from "../assets/images/declarativa.jpg";
import Funcional from "../assets/images/funcional.jpg";
import Objetos from "../assets/images/objetos.jpg";

export default function Paradigmas() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Paradigmas de Programación</h1>
        <article className="article_principal">
          Un paradigma de programación es un estilo de desarrollo de programas.
          Es decir, un modelo para resolver problemas computacionales. Los
          lenguajes de programación, necesariamente, se encuadran en uno o
          varios paradigmas a la vez a partir del tipo de órdenes que permiten
          implementar, algo que tiene una relación directa con su sintaxis.
        </article>
        <div className="container_paradigmas">
          <div className="first_content">
            <img
              src={Imperativa}
              width="235"
              alt="Imagen ilustrativa de la programación Imperativa"
            />
          </div>
          <div className="second_content">
            <div className="container-info">
              <h5>Programación Imperativa</h5>
              La programación imperativa (del latín imperare = ordenar) es el
              paradigma de programación más antiguo. De acuerdo con este
              paradigma, un programa consiste en una secuencia claramente
              definida de instrucciones para un ordenador.
              <br /> El código fuente de los lenguajes imperativos encadena
              instrucciones una detrás de otra que determinan lo que debe hacer
              el ordenador en cada momento para alcanzar un resultado deseado.
              Los valores utilizados en las variables se modifican durante la
              ejecución del programa. Para gestionar las instrucciones, se
              integran estructuras de control como bucles o estructuras anidadas
              en el código.
            </div>
          </div>
          <div className="third_content">
            <div className="container-info">
              <h5>Programación Declarativa</h5>
              No hay consenso sobre la definición de este paradigma, pero todas
              las explicaciones coinciden en algo: lo que destaca de los
              lenguajes de programación declarativa es que siempre se describe
              el resultado final deseado, en lugar de mostrar todos los pasos de
              trabajo. Para alcanzar el objetivo, en la programación declarativa
              se determina automáticamente la vía de solución. Esto funciona
              siempre y cuando las especificaciones del estado final se definan
              claramente y exista un procedimiento de ejecución adecuado. Si se
              dan las dos condiciones, la programación declarativa es muy
              eficiente.
            </div>
          </div>
          <div className="fourth_content">
            <img
              src={Declarativa}
              width="235"
              alt="Imagen ilustrativa de la programación Declarativa"
            />
          </div>
          <div className="first_content">
            <img
              src={Funcional}
              width="235"
              alt="Imagen ilustrativa de la programación Declarativa"
            />
          </div>
          <div className="second_content">
            <div className="container-info">
              <h5>Programación Funcional</h5>
              El nombre ya lo sugiere: la programación funcional o functional
              programming se centra en las funciones. En un programa funcional,
              todos los elementos pueden entenderse como funciones y el código
              puede ejecutarse mediante llamadas de función secuenciales. Por el
              contrario, no se asignan valores de forma independiente. Una
              función se imagina mejor como una variante especial de un
              subprograma. Esta es reutilizable y, a diferencia de un
              procedimiento, devuelve directamente un resultado.
            </div>
          </div>
          <div className="third_content">
            <div className="container-info">
              <h5>Programación Orientada a Objetos</h5>
              Con el paradigma de Programación Orientado a Objetos lo que
              buscamos es dejar de centrarnos en la lógica pura de los
              programas, para empezar a pensar en objetos, lo que constituye la
              base de este paradigma. Esto nos ayuda muchísimo en sistemas
              grandes, ya que en vez de pensar en funciones, pensamos en las
              relaciones o interacciones de los diferentes componentes del
              sistema.
              <br /> Un programador diseña un programa de software organizando
              piezas de información y comportamientos relacionados en una
              plantilla llamada clase. Luego, se crean objetos individuales a
              partir de la plantilla de clase. Todo el programa de software se
              ejecuta haciendo que varios objetos interactúen entre sí para
              crear un programa más grande.
            </div>
          </div>
          <div className="fourth_content">
            <img
              src={Objetos}
              width="235"
              alt="Imagen ilustrativa de la programación Declarativa"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
