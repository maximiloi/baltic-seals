'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, MapPin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Команда',
      links: [
        { label: 'О нас', href: '#stats' },
        // { label: 'Состав', href: '#' },
        // { label: 'История', href: '#' },
      ],
    },
    {
      title: 'Информация',
      links: [
        { label: 'Турниры', href: '#tournaments' },
        { label: 'Тренировки', href: '#practices' },
        {
          label: 'Правила флаг-футбола',
          href: 'https://www.olympics.com/ru/news/flag-football-rules-players-origins-things-to-know',
        },
      ],
    },
    {
      title: 'Контакты',
      links: [
        { label: 'Email', href: 'mailto:info@baltic-seals.ru' },
        { label: 'ВКонтакте', href: 'https://vk.ru/baltic_seals' },
        { label: 'Спонсорство', href: '#sponsors' },
      ],
    },
  ];

  // const socialLinks = [
  //   {
  //     icon: Heart,
  //     label: 'Facebook',
  //     href: '#',
  //     color: 'text-blue-500 hover:text-blue-400',
  //   },
  //   {
  //     icon: Star,
  //     label: 'Instagram',
  //     href: '#',
  //     color: 'text-pink-500 hover:text-pink-400',
  //   },
  //   {
  //     icon: Share2,
  //     label: 'VK',
  //     href: '#',
  //     color: 'text-cyan-500 hover:text-cyan-400',
  //   },
  // ];

  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-slate-950 text-white"
    >
      {/* Gradient closes the loop */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 to-slate-950" />

      {/* Animated background glows - distributed, deep cool tones */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 35, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-12 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="col-span-1">
              <h3 className="subsection-title mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
                Балтийские Нерпы
              </h3>
              <p className="body-text mb-6 text-slate-400">
                Профессиональная команда по флаг-футболу из Санкт-Петербурга
              </p>

              {/* Social Links */}
              {/* <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`rounded-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${social.color}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div> */}
            </motion.div>

            {/* Footer Links Sections */}
            {footerLinks.map((section) => (
              <motion.nav
                key={section.title}
                variants={itemVariants}
                className="col-span-1"
              >
                <h4 className="label-text mb-4 font-bold text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="body-text text-slate-400 transition-colors hover:text-blue-400"
                        whileHover={{ x: 4 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            id="contacts"
            className="my-12 border-t border-slate-700/50"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          />

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="label-text text-slate-400">Email</p>
                <a
                  href="mailto:info@baltic-seals.ru"
                  className="body-text text-white transition-colors hover:text-blue-400"
                >
                  info@baltic-seals.ru
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                <MapPin className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="label-text text-slate-400">Город</p>
                <p className="body-text text-white">Санкт-Петербург, Россия</p>
              </div>
            </motion.div>

            {/* Phone
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                <Phone className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <p className="label-text text-slate-400">Телефон</p>
                <a
                  href="tel:+79991234567"
                  className="body-text text-white transition-colors hover:text-orange-400"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-700/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <p className="body-text text-slate-400">
                  © 2025 - {currentYear} Балтийские Нерпы.
                </p>
              </div>
              <div className="flex gap-6">
                {/* <motion.a
                  href="#"
                  className="body-text text-slate-400 transition-colors hover:text-blue-400"
                  whileHover={{ x: 2 }}
                >
                  Политика конфиденциальности
                </motion.a>
                <motion.a
                  href="#"
                  className="body-text text-slate-400 transition-colors hover:text-blue-400"
                  whileHover={{ x: 2 }}
                >
                  Условия использования
                </motion.a> */}
                <p className="body-text flex items-center gap-2 text-slate-400">
                  Создано с{' '}
                  <motion.a
                    href="https://github.com/maximiloi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <Heart className="h-4 w-4 text-cyan-400 transition-colors hover:text-orange-500" />
                  </motion.a>{' '}
                  для Нерп
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
