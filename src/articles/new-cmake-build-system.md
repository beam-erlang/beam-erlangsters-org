**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Modern CMake Build System

The beam-erlang distribution uses a modern CMake-based build system for the core BEAM runtime (erts and supporting components). This replaces the traditional Erlang/OTP build infrastructure for the parts that belong in the streamlined distribution.

## Why CMake

- Predictable, widely understood build configuration.
- Excellent support for cross-compilation (critical for Android and iOS).
- First-class integration with GitHub Actions for matrix verification.
- Easier to maintain and extend than the accumulated layers in the classic build.

## Verified platforms

The GitHub Actions matrix in beam-erlang aims to cover:

- Linux (amd64 and arm64, both glibc and musl)
- macOS (arm64)
- Windows (amd64 and arm64)
- Android (cross-compilation from Linux/macOS/Windows hosts)
- iOS (cross-compilation)

A successful matrix run on a proposed change means the core distribution builds cleanly for all these targets.

## Relationship to packages

The modern build in beam-erlang focuses on producing a solid, minimal BEAM. Platform-specific artifacts needed by BEAM packages (NIFs, drivers, native code) are handled via the Spark package format and its build recipes. The clean separation makes both the core and the optional framework packages easier to build and distribute.

See the wiki pages on the CMake build and the re-organization for technical details.
