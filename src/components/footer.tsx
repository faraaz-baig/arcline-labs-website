import "./footer.css"
import { Random, Range } from "kdim";
import { createEffect, createSignal } from "solid-js";

export function Footer() {
  return (
    <footer class="maxwidth">
      <div class="logo-container">
        <img src="/assets/logo.png" alt="" />
      <h2><GlitchTitle /></h2>
      </div>
      
      <p class="callout">
        ARCLINE LABS IS AN AI VENTURE STUDIO BY
        <br />
        <a href="https://faraazbaig.com">FARAAZ</a> AND <a href="https://milan090.me">MILAN</a>
        <br />
        2025 ARCLINE LABS INC. 
      </p>
    </footer>
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
      <span>{mono()}</span>
      <span id="footer_version">
        TM
      </span>
    </h1>
  );
}