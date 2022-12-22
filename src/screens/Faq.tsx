import React, {FC, useRef, useState} from 'react';
import styles from './Faq.module.scss'

function FaqCard({ data }: any) {
    const element: any = useRef()
    const [open, setOpen] = useState(false)
    const openFunction = () => {
        if (open) {
            setOpen(false)
            element.current.style.maxHeight = null;
        } else {
            setOpen(true)
            element.current.style.maxHeight = element.current.scrollHeight + "px";
        }
    }
    return (
        <div className={styles.faqCard} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <div onClick={openFunction}>
                <h4 itemProp="name">{data?.question}</h4>
                <div className={open ? styles.active : ''}>
                    <span></span>
                </div>
            </div>
            <div style={{paddingBottom: open ? '10px' : '0'}} className={styles.faqAnswer}>
                <p itemProp="text" ref={element}>{data?.answer}</p>
            </div>
        </div>
    )
}

const data = [
    {
        question: 'Доступна ли бесплатная пробная версия?',
        answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.'
    },
    {
        question: 'Могу ли я изменить свой план позже?',
        answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.'
    },
    {
        question: 'Каковы ваши правила отмены?',
        answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.'
    },{
        question: 'Можно ли добавить в счет-фактуру другую информацию?',
        answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.'
    },{
        question: 'Как работает биллинг?',
        answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.'
    },{
        question: 'Как изменить адрес электронной почты моей учетной записи?',
        answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.'
    },
]

const Faq: FC = () => {

    return (
        <section id="faq">
            <div className="container">
                <div className="faq">
                    <h2 className="text-center">Часто задаваемые вопросы</h2>
                    <div className="faq-content">
                        {
                            data && data.map((elem: any, index: number) => (
                                <FaqCard data={elem} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;