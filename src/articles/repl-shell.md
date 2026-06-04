**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# REPL Shell

The beam-erlang distribution includes the standard Erlang REPL (erl) for interactive development against the core runtime.

With Spark, the REPL experience is enhanced for package-aware workflows:

- You can start a shell with a project's dependencies (including chosen OTP framework packages) already on the code path.
- `spark run` with an interactive flag or direct erl invocation after `spark install` gives you a loaded environment without manual -pa flags.
- Quick experiments with individual packages via `spark run` or short escripts.

## Typical flow

1. `spark install` the packages you need for the session (e.g. a few framework libs or a graphics package).
2. `erl` (or the Spark-provided shell entry) — the installed packages are available.
3. Prototype, load modules, test ideas.

For more structured work, a project manifest + `spark run` gives a reproducible loaded shell for the exact dependency set declared in the project.

The goal is that the interactive experience feels as lightweight and dependency-aware as modern REPLs in other ecosystems, while still giving you direct access to the full power of the BEAM.
