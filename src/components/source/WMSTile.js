import React from "react";
import TileWMS from "ol/source/TileWMS";

export const WMSTile = (url, params) => {
  return new TileWMS({
    url,
    params,
  });
};
