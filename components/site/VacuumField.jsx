import { useEffect, useRef } from "react";
import { PALETTE } from "./palette";

/*
  The vacuum ground, rendered as a single fullscreen fragment shader.
  This is the one piece donated by the Shader Portal direction: the detector's
  near-black vacuum is alive rather than flat, and the pointer displaces it.

  It is aggressively bounded so it cannot cost a recruiter's laptop anything
  meaningful: desktop pointers only, DPR capped at 1, paused when the tab is
  hidden, and never started under prefers-reduced-motion. If any of those
  guards fail, the CSS gradient underneath is the whole design.
*/

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;

  float n = noise(p * 3.0 + u_time * 0.02);
  n += 0.5 * noise(p * 6.0 - u_time * 0.015);

  vec3 col = vec3(0.027, 0.035, 0.051);
  col += vec3(0.020, 0.035, 0.050) * n * 0.55;

  vec2 m = (u_mouse - 0.5 * u_res) / u_res.y;
  float d = length(p - m);
  col += vec3(0.05, 0.28, 0.32) * 0.10 * exp(-d * 4.5);

  col *= 1.0 - 0.35 * length(uv - 0.5);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export default function VacuumField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    if (reduced.matches || !fine.matches) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      depth: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    // Half resolution: this is a soft field, nobody can see the difference.
    const SCALE = 0.5;
    const mouse = { x: 0, y: 0 };
    let raf = 0;
    let running = true;
    const start = performance.now();

    const resize = () => {
      const w = Math.max(1, Math.floor(window.innerWidth * SCALE));
      const h = Math.max(1, Math.floor(window.innerHeight * SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      mouse.x = mouse.x || w / 2;
      mouse.y = mouse.y || h / 2;
    };

    const onMove = (e) => {
      mouse.x = e.clientX * SCALE;
      mouse.y = (window.innerHeight - e.clientY) * SCALE;
    };

    const frame = () => {
      if (!running) return;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };

    resize();
    canvas.style.opacity = "1";
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-vacuum"
      style={{
        // The design without WebGL: the same field, drawn once.
        backgroundImage: `radial-gradient(120% 90% at 18% 45%, ${PALETTE.vacuumLift} 0%, ${PALETTE.vacuum} 58%, ${PALETTE.vacuumSunk} 100%)`,
      }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-700 ease-expo"
      />
    </div>
  );
}
