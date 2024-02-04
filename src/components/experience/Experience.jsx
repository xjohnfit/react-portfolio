import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import { TiCss3 } from "react-icons/ti";
import { IoLogoSass } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandAlpineJs } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Talents or specific skills I'm good at</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <TiHtml5 className="experience__details-icon" size={25} />
                <h4 className="inline">HTML</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <TiCss3 className="experience__details-icon" size={25} />
                <h4 className="inline">CSS</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <IoLogoSass className="experience__details-icon" size={25} />
                <h4 className="inline">SASS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsFillBootstrapFill className="experience__details-icon" size={25} />
                <h4 className="inline">Bootstrap</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BiLogoTailwindCss className="experience__details-icon" size={25} />
                <h4 className="inline">Tailwind CSS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <DiJavascript1 className="experience__details-icon" size={25} />
                <h4 className="inline">JavaScript</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <FaReact className="experience__details-icon" size={25} />
                <h4 className="inline">React</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <TbBrandAlpineJs className="experience__details-icon" size={25} />
                <h4 className="inline">AlpineJS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <TiHtml5 className="experience__details-icon" size={25} />
                <h4 className="inline">HTML</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <TiCss3 className="experience__details-icon" size={25} />
                <h4 className="inline">CSS</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <IoLogoSass className="experience__details-icon" size={25} />
                <h4 className="inline">SASS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsFillBootstrapFill className="experience__details-icon" size={25} />
                <h4 className="inline">Bootstrap</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BiLogoTailwindCss className="experience__details-icon" size={25} />
                <h4 className="inline">Tailwind CSS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <DiJavascript1 className="experience__details-icon" size={25} />
                <h4 className="inline">JavaScript</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <FaReact className="experience__details-icon" size={25} />
                <h4 className="inline">React</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <TbBrandAlpineJs className="experience__details-icon" size={25} />
                <h4 className="inline">AlpineJS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__databases">
          <h3>Databases</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SAAS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AlpineJS</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__technologies">
          <h3>Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SAAS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AlpineJS</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
