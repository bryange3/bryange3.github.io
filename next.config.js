/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.buildHttp = true;
    
    return config;
  },
};