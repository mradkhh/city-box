import React, {FC} from 'react';

interface PickUpProps {

}


const PickUp: FC<PickUpProps> = ({  }) => {
    return (
        <section id="pickup">
            <img src="/images/container.png" alt="container"/>
            <div className="pickup">
                <div className="container">
                    <div className="pickup-info">
                        <h2>2 недели бесплатного хранения</h2>
                        <p>при аренде от 3-х месяцев</p>
                        <button className="btn" type="button">Подобрать склад</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PickUp;