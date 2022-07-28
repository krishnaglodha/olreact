import React, { useEffect } from "react";
import TileLayer from "ol/layer/Tile";
import useMapStore from "../zuStore/mapStore";

export const OlTileLayer = ({ source, name }) => {
  const map = useMapStore((state) => state.map);

  useEffect(() => {
    if (!map) return;

    let Tlayer = new TileLayer({
      source,
      name,
    });
    map.addLayer(Tlayer);

    return () => map.removeLayer(Tlayer);
  });
  return null;
};
