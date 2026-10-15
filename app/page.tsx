'use client'
import { TegakiRenderer } from "tegaki";
import bundle from "tegaki/fonts/klee-one";
import { paperPlugin } from "./_pluginTegaki/paper";
import { strokeOrderPlugin } from "./_pluginTegaki/stroke-order";

export default function Home() {
  return (
    <TegakiRenderer
      font={bundle}
      time={{ mode: "uncontrolled", speed: 0.1, loop: true }}
      style={{ fontSize: 500 }}
      plugins={[
        paperPlugin({
          style: "mi",
          color: "#64748b",
          opacity: 0.45,
          trace: "dotted",

        }),
        strokeOrderPlugin({
          numbers: true,
          arrows: true,
          tracing: 0.01,
        }),
      ]}
    >

    </TegakiRenderer>
  );
}
