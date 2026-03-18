import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer } from 'lucide-react';

const WMO_CODES = {
  0: { label: 'Clear Sky', Icon: Sun },
  1: { label: 'Mainly Clear', Icon: Sun },
  2: { label: 'Partly Cloudy', Icon: Cloud },
  3: { label: 'Overcast', Icon: Cloud },
  45: { label: 'Foggy', Icon: Cloud },
  48: { label: 'Foggy', Icon: Cloud },
  51: { label: 'Light Drizzle', Icon: CloudRain },
  53: { label: 'Drizzle', Icon: CloudRain },
  55: { label: 'Heavy Drizzle', Icon: CloudRain },
  61: { label: 'Light Rain', Icon: CloudRain },
  63: { label: 'Rain', Icon: CloudRain },
  65: { label: 'Heavy Rain', Icon: CloudRain },
  71: { label: 'Light Snow', Icon: CloudSnow },
  73: { label: 'Snow', Icon: CloudSnow },
  75: { label: 'Heavy Snow', Icon: CloudSnow },
  80: { label: 'Rain Showers', Icon: CloudRain },
  81: { label: 'Rain Showers', Icon: CloudRain },
  82: { label: 'Heavy Showers', Icon: CloudRain },
  95: { label: 'Thunderstorm', Icon: CloudLightning },
  99: { label: 'Thunderstorm', Icon: CloudLightning },
};

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getWeatherInfo(code) {
  return WMO_CODES[code] || { label: 'Unknown', Icon: Cloud };
}

export default function WeatherForecast() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // Richmond, VA coordinates
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=37.5407&longitude=-77.4360&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=5';
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data.daily);
      setLoading(false);
    };
    fetchWeather().catch(() => {
      setError('Unable to load weather data.');
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d7d7d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-6 h-6 text-[#c9a227]" />
            <h2 className="font-display text-3xl text-white font-bold">Richmond Weather Forecast</h2>
          </div>
          <p className="text-gray-300">5-day forecast to help you plan your outdoor activities.</p>
        </motion.div>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center text-white/70 py-8">{error}</div>
        )}

        {weather && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {weather.time.map((dateStr, i) => {
              const date = new Date(dateStr + 'T12:00:00');
              const dayName = i === 0 ? 'Today' : DAY_NAMES[date.getDay()];
              const { label, Icon } = getWeatherInfo(weather.weathercode[i]);
              const high = Math.round(weather.temperature_2m_max[i]);
              const low = Math.round(weather.temperature_2m_min[i]);
              const precip = weather.precipitation_probability_max[i];
              const wind = Math.round(weather.windspeed_10m_max[i]);

              return (
                <motion.div
                  key={dateStr}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-white flex flex-col items-center gap-3 hover:bg-white/20 transition-colors"
                >
                  <p className="text-sm font-semibold text-[#c9a227] uppercase tracking-wide">{dayName}</p>
                  <p className="text-xs text-white/60">{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                  <Icon className="w-10 h-10 text-white" />
                  <p className="text-xs text-white/80 text-center">{label}</p>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span>{high}°</span>
                    <span className="text-white/50 font-normal">/</span>
                    <span className="text-white/60 font-normal">{low}°</span>
                  </div>
                  <div className="w-full border-t border-white/20 pt-2 space-y-1">
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span className="flex items-center gap-1"><Droplets className="w-3 h-3" /> Rain</span>
                      <span>{precip}%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span className="flex items-center gap-1"><Wind className="w-3 h-3" /> Wind</span>
                      <span>{wind} mph</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <p className="text-xs text-white/40 mt-6 text-center">Weather data provided by Open-Meteo · Richmond, Virginia (37.54°N, 77.44°W)</p>
      </div>
    </section>
  );
}