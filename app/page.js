"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

export default function Home() {
  const [city, setCity] = useState("cairo");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <main>
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      {/* background image */}
      <Image
        src={
          "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        layout="fill"
        alt="image"
        className="object-cover"
      />
      {/* search */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form
          onSubmit={fetchWeather}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl"
              type="text"
              placeholder="Search city"
            />
          </div>
          <button>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
      {/* weather */}
      {weather.main && <Weather data={weather} />}
    </main>
  );
}
