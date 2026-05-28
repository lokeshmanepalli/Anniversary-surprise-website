import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";

import image6 from "./assets/images/image6.jpg";
import image7 from "./assets/images/image7.jpg";
import image8 from "./assets/images/image8.jpg";
import image9 from "./assets/images/image9.jpg";
import image10 from "./assets/images/image10.jpg";
import image11 from "./assets/images/image11.jpg";
import image12 from "./assets/images/image12.jpg";
import image13 from "./assets/images/image13.jpg";

/* SOUNDS */

import celebrationSound from "./assets/sounds/celebration.mp3";
import timelineMusic from "./assets/sounds/timeline.mp3";
import loadingVoice from "./assets/sounds/loading.mp3";

const timelineImages = [
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

function Balloons() {
  return (
    <>
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 4}s`,
          }}
        >
          🎈
        </div>
      ))}
    </>
  );
}

export default function App() {

  const [screen, setScreen] = useState("intro");

  useEffect(() => {

    /* LOADING SCREEN */

    if (screen === "loading") {

      const voice = new Audio(loadingVoice);

      voice.volume = 1;

      voice.play();

      setTimeout(() => setScreen("balloonTransition"), 2000);
    }

    /* BALLOON TRANSITION */

    if (screen === "balloonTransition") {

      setTimeout(() => setScreen("celebration"), 3500);
    }

    /* CELEBRATION SCREEN */

    if (screen === "celebration") {

      /* Celebration Sound */

      const celebration = new Audio(celebrationSound);

      celebration.volume = 0.9;

      celebration.play();

      /* Timeline Song */

      const music = new Audio(timelineMusic);

      music.volume = 0.65;

      /* Start from 14th second */

      music.currentTime = 14;

      music.play();

      setTimeout(() => setScreen("temple"), 7000);
    }

    /* TEMPLE SCREEN */

    if (screen === "temple") {

      setTimeout(() => setScreen("timeline"), 5000);
    }

    /* TIMELINE SCREEN */

    if (screen === "timeline") {

      setTimeout(() => setScreen("ending"), 26000);
    }

  }, [screen]);

  return (
    <>
      {screen === "intro" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              background:
                "linear-gradient(135deg,#1e3c72,#2a5298,#000000)",
            }}
          />

          <div className="content">

            <h1 style={{ fontSize: "3rem", marginBottom: "30px" }}>
              మీ కొడుకు మీ కోసం చెస్యినా సర్‌ప్రైజ్ చూడాలి అనుకుంటున్నారా? 😊
            </h1>

            <button
              onClick={() => {

                const unlock = new Audio();

                unlock.play().catch(() => {});

                setScreen("loading");

              }}
              style={{ background: "#4ade80" }}
            >
              YES
            </button>

            <button
              onClick={() => setScreen("no")}
              style={{ background: "#f87171", marginLeft: "15px" }}
            >
              NO
            </button>

          </div>
        </div>
      )}

      {screen === "no" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              background:
                "linear-gradient(135deg,#42275a,#734b6d,#000000)",
            }}
          />

          <motion.div
            className="content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >

            <img src={image1} className="photo" />

            <h1 style={{ marginTop: "20px" }}>
              Please YES నొక్కండి 🥺
            </h1>

            <button
              onClick={() => setScreen("back")}
              style={{ background: "#60a5fa" }}
            >
              BACK
            </button>

          </motion.div>
        </div>
      )}

      {screen === "back" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              background:
                "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
            }}
          />

          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <img src={image2} className="photo" />

            <h1 style={{ marginTop: "20px" }}>
              నాకు తెలుసు మీరు చూడాలని అనుకుంటున్నారు అన్నీ 😌
            </h1>

            <button
              onClick={() => setScreen("loading")}
              style={{ background: "#4ade80" }}
            >
              YES
            </button>

          </motion.div>
        </div>
      )}

      {screen === "loading" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              background:
                "linear-gradient(135deg,#000000,#434343)",
            }}
          />

          <div className="content">

            <img src={image3} className="photo" />

            <h1 style={{ marginTop: "30px", fontSize: "3rem" }}>
              Loading Surprise...
            </h1>

          </div>
        </div>
      )}

      {/* BALLOON TRANSITION */}

      {screen === "balloonTransition" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              background:
                "linear-gradient(135deg,#ff9a9e,#fecfef,#fcb69f)",
            }}
          />

          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="balloon"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 3}s`,
                fontSize: `${35 + Math.random() * 25}px`,
              }}
            >
              🎈
            </div>
          ))}

        </div>
      )}

      {/* CELEBRATION */}

      {screen === "celebration" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              background:
                "linear-gradient(135deg,#ff758c,#ff7eb3,#ffd3a5)",
            }}
          />

          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
          />

          <Balloons />

          {/* LEFT LOVE BALLOONS */}

          <div className="love-balloons-left">

            <div className="love-balloon">LOVE</div>

            <div
              className="love-balloon"
              style={{ animationDelay: "0.8s" }}
            >
              LOVE
            </div>

          </div>

          {/* RIGHT LOVE BALLOONS */}

          <div className="love-balloons-right">

            <div className="love-balloon">LOVE</div>

            <div
              className="love-balloon"
              style={{ animationDelay: "1s" }}
            >
              LOVE
            </div>

          </div>

          <motion.div
            className="content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >

            <img src={image4} className="photo" />

            <h1 style={{ marginTop: "20px", fontSize: "3rem" }}>
              Happy Marriage Anniversary Amma, Nanna ❤️
            </h1>

          </motion.div>
        </div>
      )}

      {/* TEMPLE */}

      {screen === "temple" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              background:
                "linear-gradient(135deg,#3b1f2b,#6b3e26,#c97b63)",
            }}
          />

          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <img src={image5} className="photo" />

          </motion.div>
        </div>
      )}

      {/* TIMELINE */}

      {screen === "timeline" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              background:
                "linear-gradient(135deg,#2c1b12,#5c4033,#c8a97e)",
            }}
          />

          <div className="timeline-container">

            <div className="timeline-track">

              {timelineImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="timeline-photo"
                />
              ))}

            </div>
          </div>
        </div>
      )}

      {/* ENDING */}

      {screen === "ending" && (
        <div className="screen">

          <div
            className="bg-layer"
            style={{
              backgroundImage: `url(${image13})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(18px)",
              transform: "scale(1.1)"
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.45)",
              zIndex: 1
            }}
          />

          <motion.div
            className="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            style={{ zIndex: 2 }}
          >

            <img
              src={image13}
              className="final-photo"
            />

            <h1 className="final-text">
              మీ నవ్వులు ఎప్పటికీ ఇలాగే ఉండాలి ❤️
            </h1>

            <div className="signature">
              – మీ కొడుకు, Lokesh
            </div>

          </motion.div>

        </div>
      )}
    </>
  );
}