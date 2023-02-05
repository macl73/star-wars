import React from 'react';
import { useSelector } from 'react-redux';

export default function RecordList() {

    const num = useSelector(state => state.number.value);

    const facts = ['прообразом Чубакки стал пёс режиссёра',
        'актёрам разрешили подобрать любимый цвет для своих световых мечей',
        'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
        'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
        'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
    ];

    const items = facts.slice(0, num);

    return (
        <ul>
            {items.map((o, index) => <li key={index}>Fact #{index + 1}: {o}</li>)}
        </ul>
    );
};
