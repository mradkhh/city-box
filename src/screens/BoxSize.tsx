import React, {FC, useState} from 'react';
import Image from "next/image";
import boxsize_img from "../../public/images/boxsize.png";

interface TabProps {
    setTab: (number: number) => void,
    id: number,
    tab: number,
    text: string
}

const Tab: FC<TabProps> = ({ setTab, id, tab, text }) => {

    const handleClick = () => {
        setTab(id)
    }

    return <div
                style={{ border: tab === id ? '1px solid var(--orange-500)' : '1px solid var(--gray-200)',
                    backgroundColor: tab === id ? 'var(--orange-200)' : 'var(--gray-200)',
                    color: tab === id ? 'var(--orange-500)' : 'var(--gray-500)'
                }}
                onClick={handleClick} className="tab-wrapper">
        { text }
            </div>
}

const nums = [
    {
        id: 1,
        text: 'S 3.5 m2',
        name: 'Бокс',
        description: 'Малый бокс для хранения мелкогабаритных вещей. В нем можно хранить сезонную резину, документацию, разборную мебель, коляски и зимний инвентарь.',
        price: 'от 350 000 узс./месяц'
    },
    {
        id: 2,
        text: 'M 7 m2',
        name: 'Бокс',
        description: 'Малый бокс для хранения мелкогабаритных вещей. В нем можно хранить сезонную резину, документацию, разборную мебель, коляски и зимний инвентарь.',
        price: 'от 350 000 узс./месяц'
    },
    {
        id: 3,
        text: 'L 15 m2',
         name: 'Бокс',
        description: 'Малый бокс для хранения мелкогабаритных вещей. В нем можно хранить сезонную резину, документацию, разборную мебель, коляски и зимний инвентарь.',
        price: 'от 350 000 узс./месяц'
    },
    {
        id: 4,
        text: 'XL 30 m2',
         name: 'Бокс',
        description: 'Малый бокс для хранения мелкогабаритных вещей. В нем можно хранить сезонную резину, документацию, разборную мебель, коляски и зимний инвентарь.',
        price: 'от 350 000 узс./месяц'
    },
]


const BoxSize: FC = ({  }) => {

    const [ tab, setTab ] = useState<number>(1)

    return (
        <section id="boxsize">
            <div className="container">
                <div className="boxsize">
                    <h2 className="text-center">Подберите размер бокса</h2>
                    <div className="boxsize-tabs">
                        {
                            nums && nums.map((num: any, index: number) => {
                                return <Tab key={index} setTab={setTab} id={num?.id} tab={tab} text={num?.text}/>
                            } )
                        }
                    </div>
                    <div className="boxsize-content">
                        <div className="boxsize-img">
                            <Image
                                src={boxsize_img}
                                width={620}
                                height={574}
                                alt={'boxsize'}
                            />
                        </div>
                        <div className="boxsize-info">
                            {
                                (tab === 1) ?
                                    <>
                                    <div> <h4>{nums[0].name} </h4> {nums[0].text} </div>
                                        <p>{nums[0].description}</p>
                                        <h6>{nums[0].price}</h6>
                                    </>
                                    : (tab === 2) ?
                                    <>
                                <div> <h4>{nums[1].name} </h4> {nums[1].text} </div>
                                <p>{nums[1].description}</p>
                                <h6>{nums[1].price}</h6>
                                </>
                                        : (tab === 3) ?
                                            <>
                                                <div> <h4>{nums[2].name} </h4> {nums[2].text} </div>
                                                <p>{nums[2].description}</p>
                                                <h6>{nums[2].price}</h6>
                                            </>
                                            : (tab === 4) ?
                                                <>
                                                    <div> <h4>{nums[3].name} </h4> {nums[3].text} </div>
                                                    <p>{nums[3].description}</p>
                                                    <h6>{nums[3].price}</h6>
                                                </> :
                                                <></>
                            }
                            <button className="btn" type="button">Забронировать</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoxSize;