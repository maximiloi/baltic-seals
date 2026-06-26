module.exports = {
  apps: [
    {
      name: 'baltic-seals-site',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/baltic-seals.ru',
      env: {
        PORT: 3000,
        GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
        GOOGLE_SHEET_API_KEY: process.env.GOOGLE_SHEET_API_KEY,
        NODE_ENV: 'production',
      },
      error_file: '/var/www/baltic-seals.ru/logs/err.log',
      out_file: '/var/www/baltic-seals.ru/logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
