import Head from "next/head";
import styles from "../styles/Livescore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';


function Livescore() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Live Score</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.headingBody}>
        <div className={styles.heading}>
          <h1>LIVESCORE</h1>
          <h1>
            <FontAwesomeIcon icon={faCalendar} />
          </h1>
        </div>
      </div>
      <div className={styles.scrollingWrapper}>
        <div className={styles.card}>
          <p className={styles.icon}>
            <FontAwesomeIcon icon={faFutbol} />
          </p>
          <p>Soccer</p>
          <button>123</button>
        </div>
        <div className={styles.card}>
          <p className={styles.icon}>
            <FontAwesomeIcon icon={faBasketball} />
          </p>
          <p>Basketball</p>
          <button>24</button>
        </div>
        <div className={styles.card}>
          <p className={styles.icon}>
            <FontAwesomeIcon icon={faBaseball} />
          </p>
          <p>Baseball</p>
          <button>123</button>
        </div>
      </div>
      <section className={styles.mainBody}>
        <div className={styles.datesContainer}>
          <div className={styles.date}>
            <p>Sat</p>
            <p>6</p>
          </div>
          <div className={styles.date}>
            <p>Sun</p>
            <p>7</p>
          </div>
          <div className={styles.date}>
            <p>Mon</p>
            <p>8</p>
          </div>
          <div className={styles.date}>
            <p>Tue</p>
            <p>9</p>
          </div>
          <div className={styles.date}>
            <p>Wed</p>
            <p>10</p>
          </div>
          <div className={styles.date}>
            <p>Thu</p>
            <p>11</p>
          </div>
          <div className={styles.date}>
            <p>Fri</p>
            <p>12</p>
          </div>
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.tab}>
            <p>{"All (76)"}</p>
            {/* <hr /> */}
          </div>
          <div className={styles.tab}>
            <p>{"Live (12)"}</p>
            {/* <hr /> */}
          </div>
        </div>
        <hr />
        <div>
          <div className={styles.league}>
            <div className={styles.leagueBox}>
              <Image
                width={20}
                height={20}
                src="/championship.png"
                alt="championship logo"
              />{" "}
            </div>
            <div className={styles.leagueBox}>
              <h5>Championship</h5>
            </div>
          </div>
          <div className={styles.matchContainer}>
            <div className={styles.side}>
              <div className={styles.team}>
                <div className={styles.time}>
                  <p>20:00</p>
                  <p>AET</p>
                </div>
                <div className={styles.vl}></div>
                <div className={styles.vs}>
                  <p>Blackburn Rovers</p>
                  <p>Swansea City</p>
                </div>
              </div>
            </div>
            <div className={styles.side}>
              <p>1</p>
              <p>5</p>
            </div>
          </div>
          <div className={styles.matchContainer}>
            <div className={styles.side}>
              <div className={styles.team}>
                <div className={styles.time}>
                  <p>21:00</p>
                  {/* <p>AET</p> */}
                </div>
                <div className={styles.vl}></div>
                <div className={styles.vs}>
                  <p>Queens Park Rangers</p>
                  <p>Wycombe Wanderers</p>
                </div>
              </div>
            </div>
            <div className={styles.side}>
              {/* <p>1</p>
              <p>5</p> */}
            </div>
          </div>
          <div className={styles.matchContainer}>
            <div className={styles.side}>
              <div className={styles.team}>
                <div className={styles.time}>
                  <p>21:00</p>
                  {/* <p>AET</p> */}
                </div>
                <div className={styles.vl}></div>
                <div className={styles.vs}>
                  <p>Luton Town</p>
                  <p>Rotherham United</p>
                </div>
              </div>
            </div>
            <div className={styles.side}>
              {/* <p>1</p>
              <p>5</p> */}
              <button>TIP</button>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className={styles.league}>
            <div className={styles.leagueBox}>
              <Image width={20} height={20} src="/ucl.png" alt="CL logo" />
            </div>
            <div className={styles.leagueBox}>
              <h5>Champions League</h5>
            </div>
          </div>
          <div className={styles.matchContainer}>
            <div className={styles.side}>
              <div className={styles.team}>
                <div className={styles.time}>
                  <p>22:00</p>
                  {/* <p>AET</p> */}
                </div>
                <div className={styles.vl}></div>
                <div className={styles.vs}>
                  <p>Juventus</p>
                  <p>Porto</p>
                </div>
              </div>
            </div>
            <div className={styles.side}>
              {/* <p>1</p>
              <p>5</p> */}
              {/* <button>TIP</button> */}
            </div>
          </div>
          <div className={styles.matchContainer}>
            <div className={styles.side}>
              <div className={styles.team}>
                <div className={styles.time}>
                  <p>22:00</p>
                  {/* <p>AET</p> */}
                </div>
                <div className={styles.vl}></div>
                <div className={styles.vs}>
                  <p>Bourussia Dortmund</p>
                  <p>Sevilla</p>
                </div>
              </div>
            </div>
            <div className={styles.side}>
              <p>10</p>
              <p>3</p>
              {/* <button>TIP</button> */}
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className={styles.league}>
            <div className={styles.leagueBox}>
              <Image
                width={20}
                height={20}
                src="/portugal.png"
                alt="portugese flag"
              />
            </div>
            <div className={styles.leagueBox}>
              <h5>Premiera Liga</h5>
            </div>
          </div>
          <div className={styles.matchContainer}>
            <div className={styles.side}>
              <div className={styles.team}>
                <div className={styles.time}>
                  <p>23:45</p>
                  <p className={styles.cancelled}>Cancel</p>
                </div>
                <div className={styles.vl}></div>
                <div className={styles.vs}>
                  <p>Sporting Braga</p>
                  <p>Vitoria Guimarães</p>
                </div>
              </div>
            </div>
            <div className={styles.side}>
              {/* <p>1</p>
              <p>5</p> */}
              {/* <button>TIP</button> */}
            </div>
          </div>
          <div className={styles.matchContainer}>
            <div className={styles.side}>
              <div className={styles.team}>
                <div className={styles.time}>
                  <p>23:00</p>
                  {/* <p>AET</p> */}
                </div>
                <div className={styles.vl}></div>
                <div className={styles.vs}>
                  <p>Roma</p>
                  <p>Juventus</p>
                </div>
              </div>
            </div>
            <div className={styles.side}>
              {/* <p>1</p>
              <p>5</p> */}
              {/* <button>TIP</button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Livescore;
