**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Developer CLI and Tools

The beam-erlang distribution includes the classic Erlang tools (erl, erlc, escript, dialyzer, etc.) for the core runtime.

On top of that, Spark (bundled with the distribution) provides the modern package-oriented commands:

- `spark install <pkg>` — fetch and install a BEAM package (framework component or third-party library).
- `spark run <script>` — execute a script or project entrypoint with dependencies resolved.
- Project initialization, locking, and script registration via the package manifest.

## Philosophy

The core distribution stays small and focused on the BEAM. The "Swiss Army knife" experience for everyday development (dependency management, running, packaging) comes from Spark and the package ecosystem rather than being baked into the runtime distribution itself.

This separation keeps the attack surface of the runtime smaller while giving developers a powerful, familiar set of tools.

See the Spark package manager and building/packaging articles for details on the commands and manifest format. The classic erl/erlc tools continue to work exactly as upstream for low-level work.
