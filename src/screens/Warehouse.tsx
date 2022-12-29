import React, {FC, useState} from 'react';
import { Select } from 'antd';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import {ArrowDownIcon, MapIcon} from "static/icons/icon";
import MapCard from "components/UI/MapCard";
import iconcc from "../../public/placemark.png"

interface WarehouseProps {

}

export interface IWarehouseInfo {
    id: number
    country_name: string
    warehouse_location: string
    warehouse_availability: string[]
    more_info: string
    placemark_geometry: number[]
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

const warehouse_info: IWarehouseInfo[] = [
    {
        id: 1,
        country_name: 'м. Ташкент',
        warehouse_location: '442 Labzak Юнусабад, Tashkent',
        warehouse_availability: ['Ячейки всех размеров', 'Видеонаблюдение', 'Круглосуточный въезд', 'Пропускная система'],
        more_info: 'Рядом выезд на проспект Энгельса, Суздальский проспект и КАД. Стоимость аренды начинается от 200 000 UZS',
        placemark_geometry: [41.345570, 69.284599]
    },
    {
        id: 2,
        country_name: 'Р. Каракамыш',
        warehouse_location: 'Каракамыш 2/4, Tashkent',
        warehouse_availability: ['Видеонаблюдение', 'Круглосуточный въезд', 'Пропускная система'],
        more_info: 'Рядом выезд на проспект Энгельса, Суздальский проспект и КАД. Стоимость аренды начинается от 200 000 UZS',
        placemark_geometry: [41.745570, 69.284599]
    },
    {
        id: 3,
        country_name: 'Р. Чиланзор',
        warehouse_location: 'Чиланзор, Tashkent',
        warehouse_availability: ['Ячейки всех размеров', 'Круглосуточный въезд', 'Пропускная система'],
        more_info: 'Рядом выезд на проспект Энгельса, Суздальский проспект и КАД. Стоимость аренды начинается от 200 000 UZS',
        placemark_geometry: [41.345570, 69.984599]
    },
    {
        id: 4,
        country_name: 'р. Бекбарака',
        warehouse_location: 'Бекбарака, Tashkent',
        warehouse_availability: ['Ячейки всех размеров', 'Видеонаблюдение',  'Пропускная система'],
        more_info: 'Рядом выезд на проспект Энгельса, Суздальский проспект и КАД. Стоимость аренды начинается от 200 000 UZS',
        placemark_geometry: [40.545570, 69.284599]
    },
]


const Warehouse: FC<WarehouseProps> = ({  }) => {

    const [ cardInfo, setCardInfo ] = useState<boolean>(true)
    const [ selectWarehouse, setSelectWarehouse ] = useState<number>(1)

    const currentWarehouse = warehouse_info.find(item => {
        return item.id === selectWarehouse
    })


    function handleChange() {
        console.log('change')
    }

    const defaultState = {
        center: [41.345570, 69.284599],
        zoom: 8,
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
                        <YMaps query={{lang: "ru_RU"}} >
                            <Map
                                defaultState={defaultState}
                                width={"100%"}
                                height={800}
                            >
                                {
                                    warehouse_info?.map(item =>
                                        <Placemark
                                            key={item?.id}
                                            geometry={item?.placemark_geometry}
                                            options={{
                                                iconColor: item?.id === selectWarehouse ? "#EA7530" : '#898989',
                                                iconImageHref: "../../public/placemark.png"
                                            }}
                                            onClick={() => {
                                                setSelectWarehouse(item?.id)
                                                setCardInfo(true)
                                            }}
                                        />
                                    )
                                }
                            </Map>
                        </YMaps>
                        <div style={{ display: cardInfo ? 'block' : 'none' }} className="warehouse__info">
                            <MapCard
                                setCardInfo={setCardInfo}
                                info={currentWarehouse}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Warehouse;