import React, {FC} from 'react';
import { Select } from 'antd';
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


    function handleChange() {
        console.log('change')
    }

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
                        <img src="/images/map.png" alt="maps"/>
                        <div className="warehouse__info">
                            <MapCard
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