**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Android and iOS support

Making Erlang-based (or Elixir/Gleam) logic run on Android and iOS is a long-standing desire in parts of the community. The majority view is that the BEAM is "not a good fit" for mobile. That view is correct if "good fit" means "the default choice for a new mobile app". It is not the whole story if the question is "can it be a reasonable fit for some mobile use cases?"

## A "fit", not the "best fit"

Kotlin (Android) and Swift (iOS) are the obvious defaults for good reasons. Graphically intensive games are also a poor match for the current BEAM + graphics story. But many mobile applications are not graphically intensive: they are orchestration, networking, business logic, background work, or glue between native UI and services. For those, the question is whether the BEAM can model the logic naturally and concisely, and whether the tooling lets you ship it.

Other languages (C#, Dart, JavaScript via various runtimes) succeeded on mobile without being the "best" systems programming choice for the platform. They became viable because the overall developer experience and constraints made them acceptable. The same logic can apply to the BEAM.

## Existing cross-compile support

Upstream Erlang/OTP has long had the pieces for Android and iOS cross-compilation (xcomp/ recipes, CI workflows that exercise them). What was missing for most developers was a practical end-to-end story: a clean way to build a minimal runtime, package the exact dependencies needed, and handle the platform-specific native bits (NIFs) without fighting the old bundled build system.

## How beam-erlang + Spark improve the picture

- beam-erlang is a smaller core focused on the BEAM itself, built with CMake and verified on a broad GitHub Actions matrix that explicitly includes Android and iOS cross targets.
- The OTP framework (and other libraries) become optional packages installed via Spark. You only pay for what you use.
- The BEAM package format has explicit support for platform-specific artifacts, so NIFs and native code can be built and shipped per-architecture as part of a package.
- The same packaging + build machinery that helps desktop GUI apps also helps mobile "sidecar" or logic-heavy components.

The erlangsters graphics stack (OpenGL ES bindings, windowing, etc.) is an example of the kind of ecosystem work that becomes more practical on top of this foundation. It is not that the BEAM suddenly becomes great at writing entire Flutter-like UIs; it is that the constraints around "build a thing that runs on the device and talks to native UI or does background work" are dramatically reduced.

In short: there is no fundamental reason Erlang-family languages cannot be a good fit for the non-graphics-heavy parts of mobile apps, once the packaging, build, and minimal-runtime problems are solved. The re-organization and modern build are aimed squarely at those problems.