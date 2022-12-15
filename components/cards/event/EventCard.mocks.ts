import { IEventCard } from './EventCard';

const base: IEventCard = {
  hot: false,
  address: 'https://getafisha.ru/standup/672',
  imgSrc:
    'https://thumb.tildacdn.com/tild3138-3431-4763-a235-333163613766/-/resize/520x/-/format/webp/2152x1369_.jpg',
  title:
    'Восточный Stand Up: «Горячий вечер»: Хетаг Хугаев, Самвел Кафьян, Динара Курбанова, Тимур Хамадуллин',
  date: '05.11.2022',
  preparation: '20:30',
  start: '21:00',
};

export const mockEventCardProps = {
  base,
};
