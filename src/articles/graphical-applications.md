**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Graphical Applications

There is a long-standing desire to make it practical to write ordinary graphical desktop applications (tools, IDEs, configuration UIs, data visualizers, etc.) in Erlang-family languages, not just servers and infrastructure.

The community has historically said "Erlang is not suitable for graphical applications." That statement is mostly true for graphically intensive work (games, video, heavy 3D). It is too absolute for normal GUI applications.

## The four real issues

- **Performance** — GPU work wants tight control over memory layout and minimal copying. The BEAM scheduler and memory model are not optimized for this. For non-intensive UIs the overhead is acceptable.
- **Thread safety** — OpenGL and similar APIs have strict threading rules. The BEAM runs native code on arbitrary scheduler threads. Solutions exist (single-scheduler mode for the graphics thread, or serializing calls onto a dedicated thread). The erlangsters EGL 1.5 and OpenGL bindings demonstrate that this is workable for real code.
- **Packaging and distribution** — Classic Erlang/OTP build and release tooling was designed for server deployments. Turning a BEAM program into a clickable desktop installer was always a DIY project.
- **Cross-platform native bits** — Real graphics code needs platform-specific native libraries (GL, windowing, input). This means NIFs or drivers and per-platform binaries.

## How the re-organization + packages + modern build address them

The beam-erlang distribution + Spark package manager change the economics:

- The core runtime is smaller and built with a real cross-platform CMake system that already targets the desktop OSes (and mobile).
- The BEAM package format treats platform-specific native artifacts as first-class citizens. A graphics package can declare and build its NIFs for Windows, macOS, and Linux (and the CI matrix helps verify it).
- Spark manifests let packages register custom commands. A "package" or "bundle" command provided by a helper package can produce the final installer or app bundle without every developer reinventing the wheel.
- You only pay for the framework pieces you actually use; the rest of the old bundle is not forced on your GUI app.

In practice this means the low-level bindings (egl-1.5, opengl, glfw, etc. from the erlangsters graphics work) become normal dependencies:

```
spark install egl-1.5
spark install opengl-4.6
spark install glfw
```

Higher-level packages can sit on top. Distribution steps become manifest scripts rather than external magic.

The result is not "Erlang is now the best choice for writing the next AAA game." It is "writing a normal cross-platform desktop tool with menus, windows, and some custom rendering is now a supported and relatively low-friction activity instead of a heroic packaging effort."

See the Android/iOS article for the mobile extension of the same ideas, the package format and Spark articles for the manifest and native-artifact mechanics, and the erlangsters graphics repositories for the actual bindings that make the story concrete.