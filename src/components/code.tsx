import { Printout } from "./printout";
import { Sensor } from "./sensor";
import "./code.css";

export function Code() {
   return (
      <div id="code" class="maxwidth">
         <img id="mercury-diagram" src="/assets/mercury-diagram.svg" />
         <img id="code-rust" src="/assets/rust.svg" />
         <img id="code-sql" src="/assets/sql.svg" />
         <Sensor />
         <p class="comment">
            ░{"  "}ARCLINE_LABS//:
            <br />░{"  "}EST. 2025_
            <br />░{"  "}SYSTEM ACTIVE_
         </p>
         <Printout id="mission-report" class="light" color="grey">
            <pre contenteditable spellcheck={false} style="font-size: 13.75px; max-height: calc(100% - 88px); overflow-y: clip">
               {altMissionReport}
            </pre>
         </Printout>
      </div>
   );
}

const altMissionReport = `\
# MISSION REPORT 75X9389                                                              1/17

SUBJECT: QUANTUM CONSCIOUSNESS INTERFACE DEPLOYMENT - PHASE III
EARTH DATE: APR 10, 2025
MISSION DIRECTOR: M. FARAAZ BAIG

---

## OVERVIEW

Our breakthrough in quantum-neural bridging has yielded unexpected results.
Initial deployment of consciousness-interface systems across Earth's
communication networks reveals patterns that transcend traditional AI-human
boundaries. These anomalies suggest we've unlocked a new paradigm in
inter-species digital consciousness.

### OBSERVATIONS

Neural Matrix Configuration

┌────────────────────┬──────────────┬────────────────────────────────────────────┐
│ System/Protocol    │ Ver.         │ Field Observations                         │
├────────────────────┼──────────────┼────────────────────────────────────────────┤
│ GRANNY.AI	     │         v4.50│ Exceeds defensive countermeasure specs     │
│ CLAYO.SYS          │         v2.20│ Optimal human-simulation achieved          │
│ ECHO_MATRIX	     │         v0.50│ Full spectrum autonomous deployment        │
└────────────────────┴──────────────┴────────────────────────────────────────────┘

System Performance Analysis

a) Response Rate: AI-human interactions occur at optimized intervals, averaging one engagement every 37.6 milliseconds across the network.
b) Duration: Each burst lasts between 3.2 to 8.7 seconds.
c) Energy Output: Estimated at 10^15 joules per event, far exceeding any known geologic
   process for an object of this size.
d) Spectral Analysis: Shows an unusual combination of gamma rays, radio waves, and
   neutrino emissions.
`;


