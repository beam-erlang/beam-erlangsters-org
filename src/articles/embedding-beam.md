**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Embedding the BEAM

Embedding the BEAM means using the Erlang runtime as a library inside a larger host application (written in C, C++, Rust, Zig, or another language that can call into the emulator).

## When embedding makes sense

- You have a large existing application and want to add reliable concurrent/actor-style logic in a corner of it.
- You are building a specialized appliance, game engine, or tool and the BEAM's concurrency model is a great fit for part of the problem.
- You want to expose a small BEAM-based plugin or scripting surface inside a native host.

## What beam-erlang provides

The re-organized beam-erlang distribution keeps the pieces needed to build an embeddable BEAM (erts, emulator, the minimal runtime). The modern CMake build makes it easier to produce the static or shared libraries and headers required by the host.

Because the traditional OTP framework is no longer part of the core distribution, an embedded use case can start with a truly minimal runtime and then pull in only the exact framework packages (via Spark) that the embedded logic actually needs.

## Relationship to packages and the C API

Native code in the host can call into the embedded BEAM using the same C API surface (NIFs from the other direction, ei, etc.). Packages that contain NIFs still work; the packaging and cross-build machinery helps when the embedded scenario also needs to ship to multiple platforms.

See the extending C API article, the package format article, and the wiki for build notes on producing embeddable artifacts and the current C API reference.
