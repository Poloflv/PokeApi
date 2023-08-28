import React from "react";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch= useDispatch()
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex")
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]  bg-[#FFFFFF7D]">
      <section className="flex justify-center  items-center">
        <article>
          <div>
            <img src="/images/pokedex.png" alt="" />
          </div>
          <h2 className="font-bold text-[#FE1936] text-5xl text-center mt-12">¡Hello trainer!</h2>
          <p className="font-medium mt-2 text-[#302F2F] text-center text-2xl">To start give me your name</p>
          <form className="flex justify-center mt-14" onSubmit={handleSubmit} action="">
            <input className="text-[#868686] p-4 shadow-xl bg-[#FFFFFF] "
              autoComplete="off"
              placeholder="your name..."
              id="nameTrainer"
              type="text"
              required
            />
            <button className="bg-[#D93F3F] text-[#FFFFFF] px-10">Start!</button>
          </form>
        </article>
      </section>

      <FooterPokeball />
    </main>
  );
};

export default Home;
