import React, {FC, useState} from 'react';
import { Select } from 'antd';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import {ArrowDownIcon} from "static/icons/icon";
import MapCard from "components/UI/MapCard";

interface WarehouseProps {

}

const select_options = [
    {
        value: '1',
        label: 'Ташкент',
    },
    {
        value: '2',
        label: 'Samarkand1',
    },
    {
        value: '3',
        label: 'Ташкент',
    },
    {
        value: '4',
        label: 'Samarkand2sdfsdf',
    },
    {
        value: '5',
        label: 'Ташкент',
    },
    {
        value: '6',
        label: 'Samarkand3',
    }
]


const Warehouse: FC<WarehouseProps> = ({  }) => {

    const [ cardInfo, setCardInfo ] = useState<boolean>(true)


    function handleChange() {
        console.log('change')
    }

    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
    };

    return (
        <section id="warehouse">
            <div className="container">
                <div className="warehouse">
                    <div className="warehouse__top">
                        <h2>Выберите ближайший склад</h2>
                        <div className="warehouse__select">
                            <Select
                                defaultValue="1"
                                suffixIcon={<ArrowDownIcon/>}
                                onChange={handleChange}
                                options={select_options}
                                />
                        </div>
                    </div>
                    <div className="warehouse__bottom">
                        <YMaps>
                            <Map
                                defaultState={defaultState}
                                width={"100%"}
                                height={800}
                            >
                                <Placemark geometry={[55.684758, 37.738521]} />
                            </Map>
                        </YMaps>
                        <div style={{ left: cardInfo ? '24px' : '-500px' }} className="warehouse__info">
                            <MapCard
                                setCardInfo={setCardInfo}
                                name={'м. Парнас'}
                                location={"442 Labzak,  Юнусабад, Tashkent"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Warehouse;