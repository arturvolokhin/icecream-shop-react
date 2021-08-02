import { YMaps, Map, Placemark } from "react-yandex-maps";
import icon from "../../images/icons/map/baloon.png";
import LocationInfo from "./LocationInfo";

const Location = () => {
    return (
        <section className="location">
            <YMaps>
                <Map
                    defaultState={{
                        center: [59.938635, 30.323118],
                        zoom: 14,
                    }}
                    width={"100%"}
                    height={"420px"}
                >
                    <Placemark
                        geometry={[59.938635, 30.323118]}
                        options={{
                            iconLayout: "default#image",
                            iconImageHref: icon,
                            iconImageSize: [200, 122],
                            iconImageOffset: [-30, -118],
                        }}
                    />
                    <LocationInfo />
                </Map>
            </YMaps>
        </section>
    );
};

export default Location;
