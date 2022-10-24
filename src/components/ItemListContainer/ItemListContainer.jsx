import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemListContainer() {
  return (
    <div>
      <FlexWrapper>
        <Item
          detail="Las piñatas son nuestra especialidad, son únicas, hechas especialmente para
          vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu
          idea y listo!"
          price={3500}
          title="PIÑATA"
          imgurl="/img copy/piñata-mike.jpeg"
        />
        <Item
          detail="Sabemos que parte de la decoración de tu festejo son las guirnaldas. Podes
          encargar combos combinados con piñata y rosetas, y mucho más! Para más información contáctate
          con nosotros."
          price={2000}
          title="GUIRNALDA"
          imgurl="/img copy/guirnalda-m.jpeg"
        />
        <Item
          detail="Sumale a tu decoracion rosetas, así será súper completa! Opciones de combos de
          acuerdo a la temática que más te guste. Contacte con nosotros para ayudarte con más información."
          price={3000}
          title="ROSETA"
          imgurl="/img copy/roseta-jirafa.jpeg"
        />
      </FlexWrapper>
    </div>
  );
}

export default ItemListContainer;
