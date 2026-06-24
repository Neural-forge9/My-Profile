"use client";

import { useEffect, useRef } from "react";

export function LiquidGradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let animationFrame = 0;
    let disposed = false;
    let cleanup = () => {};

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    async function setup() {
      try {
        const [
          { WebGLRenderer },
          { Scene },
          { OrthographicCamera },
          { PlaneGeometry },
          { ShaderMaterial },
          { Vector2 },
          { Mesh },
        ] = await Promise.all([
          import("three/src/renderers/WebGLRenderer.js"),
          import("three/src/scenes/Scene.js"),
          import("three/src/cameras/OrthographicCamera.js"),
          import("three/src/geometries/PlaneGeometry.js"),
          import("three/src/materials/ShaderMaterial.js"),
          import("three/src/math/Vector2.js"),
          import("three/src/objects/Mesh.js"),
        ]);

        if (disposed || !container) {
          return;
        }

        const renderer = new WebGLRenderer({
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.domElement.className = "h-full w-full";
        container.appendChild(renderer.domElement);

        const scene = new Scene();
        const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geometry = new PlaneGeometry(2, 2);
        const material = new ShaderMaterial({
          transparent: true,
          depthWrite: false,
          depthTest: false,
          uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new Vector2(1, 1) },
            uIntensity: { value: mediaQuery.matches ? 0.18 : 1 },
          },
          vertexShader: `
            varying vec2 vUv;

            void main() {
              vUv = uv;
              gl_Position = vec4(position.xy, 0.0, 1.0);
            }
          `,
          fragmentShader: `
            precision highp float;

            varying vec2 vUv;

            uniform float uTime;
            uniform vec2 uResolution;
            uniform float uIntensity;

            float wave(vec2 p, float speed, float scale, float offset) {
              return sin((p.x * scale + p.y * (scale * 0.72)) + uTime * speed + offset);
            }

            void main() {
              vec2 uv = vUv;
              vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
              vec2 centered = (uv - 0.5) * aspect;

              float flow =
                wave(centered, 0.18, 5.4, 0.0) * 0.5 +
                wave(centered.yx, -0.13, 7.2, 1.6) * 0.34 +
                wave(centered + vec2(0.18, -0.12), 0.09, 10.0, 2.7) * 0.16;

              vec2 warped = uv;
              warped.x += flow * 0.045 * uIntensity;
              warped.y += sin((uv.x + flow) * 4.8 + uTime * 0.11) * 0.025 * uIntensity;

              vec3 aubergine = vec3(0.055, 0.035, 0.095);
              vec3 coral = vec3(0.98, 0.28, 0.24);
              vec3 amber = vec3(1.0, 0.62, 0.24);
              vec3 sand = vec3(0.88, 0.76, 0.58);

              float topGlow = smoothstep(0.78, 0.08, warped.y);
              float horizon = smoothstep(0.64, 0.18, distance(warped, vec2(0.48, 0.35)));
              float sideGlow = smoothstep(0.6, 0.08, distance(warped, vec2(0.86, 0.3)));
              float lowerWarmth = smoothstep(0.58, 1.0, warped.y);

              vec3 color = aubergine;
              color = mix(color, coral, topGlow * 0.42);
              color = mix(color, amber, horizon * 0.35 + sideGlow * 0.22);
              color = mix(color, sand, lowerWarmth * 0.18);

              float vignette = smoothstep(0.85, 0.25, length(centered));
              float alpha = (0.24 + topGlow * 0.16 + horizon * 0.18 + sideGlow * 0.12) * vignette;
              alpha *= smoothstep(1.05, 0.18, warped.y);

              gl_FragColor = vec4(color, alpha * uIntensity);
            }
          `,
        });

        const mesh = new Mesh(geometry, material);
        scene.add(mesh);

        const resize = () => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          const isSmallViewport = width < 768;
          const pixelRatio = Math.min(window.devicePixelRatio || 1, isSmallViewport ? 1.15 : 1.5);

          renderer.setPixelRatio(pixelRatio);
          renderer.setSize(width, height, false);
          material.uniforms.uResolution.value.set(width, height);
          material.uniforms.uIntensity.value = mediaQuery.matches ? 0.18 : isSmallViewport ? 0.72 : 1;
        };

        const render = (time: number) => {
          if (disposed) {
            return;
          }

          if (!document.hidden) {
            material.uniforms.uTime.value = time * 0.001;
            renderer.render(scene, camera);
          }

          if (!mediaQuery.matches) {
            animationFrame = window.requestAnimationFrame(render);
          } else {
            animationFrame = 0;
          }
        };

        const handleMotionPreference = () => {
          resize();
          renderer.render(scene, camera);

          if (mediaQuery.matches) {
            window.cancelAnimationFrame(animationFrame);
            animationFrame = 0;
            return;
          }

          if (!mediaQuery.matches && !animationFrame) {
            animationFrame = window.requestAnimationFrame(render);
          }
        };

        resize();
        renderer.render(scene, camera);

        if (!mediaQuery.matches) {
          animationFrame = window.requestAnimationFrame(render);
        }

        window.addEventListener("resize", resize);
        mediaQuery.addEventListener("change", handleMotionPreference);

        cleanup = () => {
          window.removeEventListener("resize", resize);
          mediaQuery.removeEventListener("change", handleMotionPreference);
          window.cancelAnimationFrame(animationFrame);
          geometry.dispose();
          material.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      } catch {
        cleanup = () => {};
      }
    }

    void setup();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="liquid-gradient-background pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
}
