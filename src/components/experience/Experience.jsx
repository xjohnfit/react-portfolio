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
import { SiTypescript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiApachecassandra } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { SiNginx } from "react-icons/si";

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
              <TiHtml5 className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">HTML</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TiCss3 className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">CSS</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoSass className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">SASS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBootstrapFill className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">Bootstrap</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoTailwindCss className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">Tailwind CSS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">JavaScript</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">React</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandAlpineJs className="experience__details-icon" size={35} />
              <div>

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
              <SiTypescript className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">TypeScript</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPhp className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">PHP</h4>
                <br />
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaLaravel className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">Laravel</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">NodeJS</h4>
                <br />
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" size={35} />
              <div>

                <h4 className="inline">Express</h4>
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
              <GrMysql className="experience__details-icon" size={35} />
              <div>
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon" size={35} />
              <div>
                <h4>PostGres</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GrOracle className="experience__details-icon" size={35} />
              <div>
                <h4>Oracle</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" size={35} />
              <div>
                <h4>MongoDB</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" size={35} />
              <div>
                <h4>MongoDB Atlas</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiApachecassandra className="experience__details-icon" size={35} />
              <div>
                <h4>Cassandra</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__technologies">
          <h3>Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaAws className="experience__details-icon" size={35} />
              <div>
                <h4>AWS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGit className="experience__details-icon" size={35} />
              <div>
                <h4>Git</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGithub className="experience__details-icon" size={35} />
              <div>
                <h4>GitHub</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaDocker className="experience__details-icon" size={35} />
              <div>
                <h4>Docker</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaDev className="experience__details-icon" size={35} />
              <div>
                <h4>DevOps</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiApache className="experience__details-icon" size={35} />
              <div>
                <h4>Apache</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiNginx className="experience__details-icon" size={35} />
              <div>
                <h4>NGINX</h4>
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
