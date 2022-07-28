import "./App.css";
import Layers from "./components/layers/Layers";
import { OlTileLayer } from "./components/layers/OlTileLayer";
import { ReMap } from "./components/map/map/ReMap";
import { WMSTile } from "./components/source/WMSTile";

function App() {
  return (
    <div className='App'>
      <ReMap center={[0, 0]} zoom={12}>
        <Layers>
          <OlTileLayer
            source={WMSTile("https://ahocevar.com/geoserver/wms", {
              LAYERS: "topp:states",
              Tiled: true,
            })}
          />
        </Layers>
      </ReMap>
    </div>
  );
}

export default App;
