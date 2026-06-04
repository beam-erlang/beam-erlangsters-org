**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Building and Packaging Applications

"Beamify" (or the equivalent modern term) refers to the process of taking BEAM source, dependencies, and configuration and producing a runnable artifact or installable package.

## With beam-erlang + Spark

The beam-erlang distribution provides the compiler and runtime (erl, erlc, etc.). Spark provides the higher-level workflow:

- `spark install` to fetch dependencies (including optional OTP framework packages).
- Manifest files declare the project, its deps, and custom scripts.
- `spark run` for development and scripts.
- Packaging steps (often expressed as custom commands in the manifest) produce standalone distributions, release packages, or platform installers.

## Native code and cross-platform

Because the modern build system and package format treat NIFs and platform artifacts as first-class, "beamifying" a project that uses native code or targets multiple OSes (including mobile) is more straightforward than with the classic bundled Erlang/OTP + ad-hoc release tooling.

The erlangsters graphics and windowing packages are real-world examples of packages that rely on this: they ship platform-specific native bits while presenting a uniform BEAM API.

## Relationship to classic tools

This approach deliberately breaks compatibility with older packaging conventions in exchange for a familiar, scriptable, registry-backed experience. The goal is to make building, depending on, and shipping BEAM software feel as natural as working with packages in other modern ecosystems.

See the Spark package manager article, the BEAM format article, and the wiki for concrete manifest and build examples.
