import { FC } from "react";
import { CardSwiper } from "../Swiper/Swiper";

import { HandySvg } from "handy-svg";
import { FlagIcon, StarIcon, FavoriteIcon, ExtraIcon } from "../source";

import s from "./Card.module.scss";
import { TypeCard } from "../App";

type CardProps = {
  data: TypeCard;
};

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className={s.card}>
      <div className={s.card__rate}>
        <HandySvg src={StarIcon} width="12" height="12" />
        <p>{data.rate}</p>
      </div>

      <div className={s.card__actions}>
        <div>
          <HandySvg src={FavoriteIcon} width="16" height="16" />
        </div>
        <div>
          <HandySvg src={ExtraIcon} width="16" height="16" />
        </div>
      </div>

      <div className={s.card__pictures}>
        <CardSwiper images={data.images} />
      </div>
      <div className={s.card__content}>
        <div>
          <p className={s.card__subtitle}>{data.subtitle}</p>
        </div>
        <div>
          <p className={s.card__title}>{data.title}</p>
        </div>
        <div>
          <p className={s.card__description}>{data.description}</p>
        </div>
      </div>
      <div className={s.card__feature}>
        <div>
          <p className={s.card__capacity}>{data.capacity} ml</p>
        </div>
        <div>
          <HandySvg src={FlagIcon} width="10" height="10" />
          <p>{data.country}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
