import { For } from "solid-js";
import "./typetest.css";

const SAMPLES: TypeSampleProps[] = [
  {
    class: "hidden-small",
    copy: "ATTN: BUILD CREW QUIET IN THE CODE BAY",
    size: 121,
    tracking: -11,
    style: "gap: 3px; line-height: 1;",
  },
  {
    copy: "SYSTEMS TEAMS, PREPARE FOR LAUNCH",
    size: 55,
    tracking: -5,
    style: "gap: 13px; line-height: 1;",
  },
  {
    copy: "ARCLINE LABS IS A VENTURE STUDIO CRAFTING COMPUTER APPLICATIONS WITH ENGINEERING DISCIPLINE AND PRODUCT INTENT. OUR APPLICATIONS PERFORM UNDER GALACTIC PRESSURE, TRUSTED BY CIVILIZATIONS ACROSS THE KNOWN AND UNKNOWN UNIVERSE.",
    size: 22,
    style: "gap: 15px; max-width: 1124px;",
  },
];

export function TypeTest() {
  return (
    <div class="type-samples">
      <For each={SAMPLES}>{(props) => <TypeSample {...props} />}</For>
    </div>
  );
}

type TypeSampleProps = {
  class?: string;
  style?: string;
  copy: string;
  size: number;
  tracking?: number;
};

function TypeSample(props: TypeSampleProps) {
  return (
    <div class={`type-sample ${props.class ?? ""}`} style={props.style}>
      <div class="type-sample-header">
        <span>DEPARTURE MONO</span>
        <span>{props.size}PX</span>
        {props.tracking ? <span>{props.tracking}PX TRACK</span> : null}
      </div>
      <div
        class="type-sample-text"
        contenteditable
        spellcheck={false}
        children={props.copy}
        style={`font-size: ${props.size}px; ${props.tracking ? `letter-spacing: ${props.tracking}px` : ""
          }`}
      />
    </div>
  );
}
