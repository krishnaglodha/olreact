import "./Map.css";
import React, { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import "../../../../node_modules/ol/ol.css";
import useMapStore from "../../zuStore/mapStore";

export const ReMap = ({ children, zoom, center }) => {
  const map = useMapStore((state) => state.map);
  const setMap = useMapStore((state) => state.populateMap);
  const destroyMap = useMapStore((state) => state.removeMap);
  const mapId = useRef();

  useEffect(() => {
    let theMap = new Map({
      layers: [],
      view: new View({
        center,
        zoom,
      }),
    });
    theMap.setTarget(mapId.current);
    setMap(theMap);
    return () => {
      if (!theMap) return;
      theMap.setTarget(undefined);
      destroyMap();
    };
  }, []);

  return (
    <div ref={mapId} className='map'>
      {children}
    </div>
  );
};
