'use client';

import { Practice } from '@/types/practice';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface YandexMapBlockProps {
  practice: Practice;
}

export function YandexMapBlock({ practice }: YandexMapBlockProps) {
  // Используем Static Yandex Maps API для получения статичного изображения карты
  // Размер адаптивный: 300x200 для мобильных, 550x280 для десктопа
  const mapImageUrl = `https://static-maps.yandex.ru/1.x/?ll=${practice.coordinates.lon},${practice.coordinates.lat}&z=16&size=550,280&pt=${practice.coordinates.lon},${practice.coordinates.lat},pm2pnl&l=map`;

  const mapUrl = `https://yandex.ru/maps/?ll=${practice.coordinates.lon},${practice.coordinates.lat}&z=16&pt=${practice.coordinates.lon},${practice.coordinates.lat},pm2pnl`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg border border-slate-700/50"
    >
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-slate-800"
        title={`Открыть ${practice.namePlace} на Яндекс.Картах`}
      >
        <Image
          src={mapImageUrl}
          alt={`Карта: ${practice.namePlace}`}
          width={550}
          height={280}
          priority={false}
          loading="lazy"
          className="h-auto w-full"
          unoptimized
        />
      </a>
    </motion.div>
  );
}
