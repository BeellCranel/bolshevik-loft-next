import clsx from 'clsx';
import Image from 'next/image';
import styles from './EventCard.module.css';

export interface IEventCard {
  hot: boolean;
  address: string;
  imgSrc: string;
  title: string;
  date: string;
  preparation: string;
  start: string;
}

const EventCard: React.FC<IEventCard> = ({
  hot,
  address,
  imgSrc,
  title,
  date,
  preparation,
  start,
}) => {
  return (
    <article
      className={clsx({
        [styles.card]: !hot,
        [styles.cardHot]: hot,
      })}
    >
      <a
        className={styles.link}
        href={address}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={styles.img}
          src={imgSrc}
          alt={title}
          width="400"
          height="250"
        />
        <div className={styles.content}>
          <h4 className={styles.title}>{title}</h4>
          <ul className={styles.details}>
            <li>
              <p>
                Дата мероприятия: <b className={styles.date}>{date}</b>
              </p>
            </li>
            <li>
              <p>Сбор гостей: {preparation}</p>
            </li>
            <li>
              <p>Начало: {start}</p>
            </li>
            <li>
              <p>Во время мероприятия работает кухня и бар.</p>
            </li>
          </ul>
        </div>
      </a>
    </article>
  );
};

export default EventCard;
