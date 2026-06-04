**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Spark: the BEAM Package Manager

Spark is the BEAM package manager bundled with the beam-erlang distribution. It provides a familiar, npm-like experience for installing, managing, and running BEAM code and dependencies.

## Core ideas

- The beam-erlang distribution ships the core BEAM runtime without forcing the entire traditional OTP framework on every user.
- The framework applications (and third-party libraries) are distributed as optional BEAM packages via Spark.
- A project declares its dependencies in a manifest; Spark resolves, installs, and can run scripts with `spark run`.

## What it enables

- Install only what your application actually needs.
- Familiar workflow for developers coming from other ecosystems.
- "spark run myscript.erl" for quick scripts without a full rebar3-style project.
- Platform-specific package contents (NIFs and native code are first-class).
- A public registry at packages.beam.erlangsters.org.

## Breaking compatibility

At the price of breaking compatibility with previous packaging tools, the BEAM package format and Spark deliver a well-known and widely used packaging model. This opens the door to treating BEAM code more like scripts or libraries in other modern environments.

The source for the framework packages themselves lives in the otp-framework repository under the beam-erlang organization. Spark consumes built packages from the registry.

See the BEAM format article and the wiki for package manifest details and the bundling story.
