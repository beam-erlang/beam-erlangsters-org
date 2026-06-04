**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# The OTP framework

When a new developer meets Erlang/OTP, the early material emphasizes the concurrent programming model: processes that share no mutable state, supervision, and how small programs using behaviors quickly become fault-tolerant.

Over time the developer realizes that much of the "it just works" reliability does not come from the language primitives alone — it comes from the OTP framework (the well-tested behaviors, supervisors, gen_*, application, release handling, etc.).

## Why the framework was bundled

Even though the Erlang language primitives enable the right mental model, turning that model into robust production software requires a lot of expertise and boilerplate. The community patterns that solve "fault tolerance", "distribution", "configuration", "logging", and "release" barely change from project to project. It made perfect sense to write them once, test them thoroughly, and ship them with the runtime.

That is the historical reason the OTP framework ships inside the Erlang distribution by default.

## The shift in who uses Erlang

Erlang was born at Ericsson to solve hard telecom problems. When it was open-sourced, the expectation was that it would mainly be used for similar high-reliability server-side systems. Bundling the framework was natural.

Today Erlang (and Elixir, Gleam, etc. on the BEAM) is used for all kinds of software: games, desktop tools, embedded devices, client-side logic, and infrastructure that has nothing to do with telecom. The old "everything is always bundled" model started to feel like overkill and sometimes an obstacle — especially for client-side, mobile, or minimal-deployment scenarios.

## The value of unbundling

By moving the framework out of the core distribution (beam-erlang delivers the BEAM runtime; otp-framework holds the framework apps as source for packages), we gain:

- A smaller, more focused runtime with a reduced attack surface.
- The ability for an application to depend on only the pieces it actually uses.
- A cleaner separation: the language + VM vs. the framework patterns.
- A practical path to cross-platform and embedded uses where you do not want (or cannot afford) the full historical bundle.

Spark, the package manager that ships with beam-erlang, makes the "install what you need" story feel natural and familiar.

The framework itself is not going away — it is simply becoming optional and modular, exactly like any other library in the ecosystem. This is the core of the re-organization that began with a clean 29.0 base.