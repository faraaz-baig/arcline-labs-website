import { Random, Range } from "kdim";
import { TypeTest } from "./typetest";
import "./header.css";
import { createEffect, createSignal } from "solid-js";

export function Header() {
  return (
    <header>
      <div class="maxwidth">
        <div class="headline">
          <div id="title">
            <GlitchTitle />
          </div>
        </div>
        <div id="letter">
          <img id="planet" src="/assets/planet.svg" />
          <p class="comment">
            ░{"  "}ARCLINE LABS IS A
            <br />░{"  "}VENTURE STUDIO THAT BUILDS PRODUCTS 
            <br />░{"  "}WITH USERS FROM EARTH TO THE EDGE OF SPACE
          </p>
          <img id="brief" src="/assets/brief.svg" />
          <img id="newspaper-clipping" src="/assets/newspaper-clipping.svg" />
          <img id="paperclip" src="/assets/paperclip.svg" />
          <img id="badge" src="/assets/badge.svg" />
        </div>
        
        <TypeTest />
      </div>
    </header>
  );
}

const DEPARTURE = "ARCLINE";
const MONO = "LABS";
const COGNATES: Record<string, string> = {
  E: "3ΣΞ€Ǝ",
  A: "Λ",
  R: "2₹",
  " ": "_",
  B: "3",
  N: "Ɲ",
} as const;

function GlitchTitle() {
  const MIN_DELAY = 400;
  const MAX_DELAY = 2000;
  const GLITCH_CHANCE = 0.1;
  const GLITCH_DELAY = 30;

  const [departure, setDeparture] = createSignal<string>(DEPARTURE);
  const [space, setSpace] = createSignal<string>(" ");
  const [mono, setMono] = createSignal<string>(MONO);

  function glitchWord(original: string, odds: number[]): string {
    const swaps = Random.sample(odds)!;
    if (swaps === 0) return original;

    const glitched = [...original];
    const opts =
      original.length === 1
        ? [0]
        : Random.permutation(Range.of(original.length));
    for (let i = 0; i < swaps; i++) {
      glitched[opts[i]] = Random.sample([
        ...(COGNATES[original[opts[i]]] ?? original[opts[i]]),
      ])!;
    }

    return glitched.join("");
  }

  createEffect(() => {
    (function d() {
      setDeparture(glitchWord(DEPARTURE, [0, 0, 0, 1, 1, 2, 2, 2, 3]));
      if (Math.random() < GLITCH_CHANCE) {
        const delay = Random.natural(MAX_DELAY - MIN_DELAY) + MIN_DELAY;
        const glitched = glitchWord(DEPARTURE, [2, 3, 4, 4, 5, 5, 5, 6, 6]);
        setTimeout(() => setDeparture(DEPARTURE), delay);
        setTimeout(() => setDeparture(glitched), delay + GLITCH_DELAY);
        setTimeout(() => setDeparture(DEPARTURE), delay + GLITCH_DELAY * 2);
        setTimeout(() => setDeparture(glitched), delay + GLITCH_DELAY * 3);
        setTimeout(d, delay + GLITCH_DELAY * 4);
      } else {
        setTimeout(d, Random.natural(MAX_DELAY - MIN_DELAY) + MIN_DELAY);
      }
    })();
    (function s() {
      setSpace(glitchWord(" ", [0, 1, 1]));
      setTimeout(s, Random.natural(MAX_DELAY - MIN_DELAY) + MIN_DELAY);
    })();
    (function m() {
      setMono(glitchWord(MONO, [0, 0, 0, 1, 1, 2, 2]));
      if (Math.random() < GLITCH_CHANCE) {
        const delay = Random.natural(MAX_DELAY - MIN_DELAY) + MIN_DELAY;
        const glitched = glitchWord(DEPARTURE, [1, 1, 2, 2, 3, 3]);
        setTimeout(() => setDeparture(DEPARTURE), delay);
        setTimeout(() => setDeparture(glitched), delay + GLITCH_DELAY);
        setTimeout(() => setDeparture(DEPARTURE), delay + GLITCH_DELAY * 2);
        setTimeout(() => setDeparture(glitched), delay + GLITCH_DELAY * 3);
        setTimeout(m, delay + GLITCH_DELAY * 4);
      } else {
        setTimeout(m, Random.natural(MAX_DELAY - MIN_DELAY) + MIN_DELAY);
      }
    })();
  });

  return (
    <h1>
      <span>{departure()}</span>
      <span id="title-space-dyn">{space()}</span>
      <br id="title-space-sta" />
      <span>{mono()}</span>
      <span id="version">
        TM
      </span>
    </h1>
  );
}

