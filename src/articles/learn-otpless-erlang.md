**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Learn beam-erlang

The beam-erlang distribution is vanilla Erlang/OTP re-organized for the modern world: it delivers the core BEAM runtime system without the traditional bundled OTP framework. Spark, the BEAM package manager, ships with the distribution so you can install exactly the framework components (and other packages) your application needs.

These articles give a developer-oriented introduction. They assume you already know the basics of Erlang (processes, message passing, the standard library concepts). The focus is on the new shape of the system, why the re-organization was done, and how to work with it effectively.

## Article groups

**Redistributed Erlang**

- Beyond Erlang — the three classic components and how the re-org clarifies the boundaries.
- The OTP framework — why it was historically bundled and why unbundling now makes sense.
- Re-imagining Erlang/OTP — the 29 restart, the split into beam-erlang + otp-framework, and the benefits.
- Graphical applications — making GUIs practical (not for intensive games, but fine for normal desktop tools).
- Android and iOS support — why a "fit" rather than the "best fit" is enough, and how packages + modern build help.

**Swiss Army Knife**

- Developer CLI and tools — erl/erlc plus the Spark commands.
- REPL shell — interactive work with packages on the path.
- Building and packaging — turning source into artifacts and releases with the distro + Spark.
- Standalone VMs and deployment — minimal, self-contained runtimes.

**BEAM Packages**

- The BEAM package format — manifests, native artifacts, platform specifics.
- Spark: the BEAM package manager — install, run, registry, familiar workflow.

**BEAM C API**

- Extending the BEAM with C — NIFs and drivers as first-class package citizens.
- Embedding the BEAM — using the runtime inside a larger native host application.

**Custom BEAM builds**

- Modern CMake build system — for the core distribution, with broad cross-platform verification.
- Workflow, CI/CD, and verification — the matrix and what it means for contributors and package authors.

For deep technical details (exact re-org passes, the UPSTREAM_COMMIT marker, sync strategy, build internals), see the [wiki](https://github.com/beam-erlang/beam-erlang/wiki) attached to the beam-erlang repository. The wiki is the primary developer documentation; these site articles are the public-facing orientation.
