**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# The BEAM Package Format

The BEAM package format is the standardized way to distribute libraries, framework components, tools, and applications for the beam-erlang runtime and Spark package manager.

## Key characteristics

- Manifest-driven (similar to package.json or Cargo.toml).
- Explicit dependencies with version constraints.
- First-class support for platform-specific artifacts (NIFs, drivers, prebuilt native code for different OS/arch combinations).
- Support for custom commands and scripts (enables "spark run" and packaging steps).
- Designed so that the traditional OTP framework can be delivered as a set of optional, individually installable packages rather than one monolithic bundle.

## Why a new format

Previous packaging approaches (rebar3, etc.) are tightly coupled to the old "everything bundled" model of Erlang/OTP. The re-organization in beam-erlang (core runtime separate from framework) and the desire for a modern developer experience required a clean break.

The format is intentionally simple enough that writing a package for a pure Erlang library is trivial, while still powerful enough to express native code, build steps, and cross-platform concerns.

## Relationship to the distribution

beam-erlang itself is distributed with Spark. The framework applications in the otp-framework repository are the seed material for turning the classic OTP libs into proper packages. Over time the registry will host both the framework pieces and the broader ecosystem.

See the package manager article and the wiki for manifest examples and build recipes.
