**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Beyond Erlang

In the classic Erlang/OTP world there are three main conceptual components that were historically delivered as one inseparable bundle:

- The Erlang programming language (syntax, semantics, the process model, pattern matching, etc.).
- The OTP framework (behaviors, supervisors, gen_server, application, release handling, the "let it crash" patterns made practical).
- The BEAM virtual machine and runtime system (erts, the emulator, scheduler, memory, ports/drivers/NIFs, the compiler backend, etc.).

Because they were always shipped together, the boundaries were blurry for many developers and for tooling. "Erlang" was used to mean all three; "OTP" was used to mean both the framework and the whole distribution.

## Fixing the worldview

The beam-erlang re-organization (started from a clean 29.0 upstream tree) draws a clearer line:

- `beam-erlang` contains the language essentials + the BEAM runtime (what you need to have a working Erlang system and compile/run .erl/.beam code). It does **not** contain the full traditional OTP framework.
- The OTP framework applications live in the `otp-framework` repository and are turned into optional BEAM packages that you install with Spark when your application actually needs them.

This is not a rewrite of the language or the VM. It is a re-organization of upstream Erlang/OTP so that the runtime distribution can be smaller, more modular, and a better foundation for modern packaging, cross-platform builds, and embedding.

The result is a mental model that matches reality for more use cases: you get the BEAM you need, and you add the framework pieces (and third-party packages) you actually depend on. The old "everything is always there" assumption is gone — at the price of breaking compatibility with older packaging expectations, which is an explicit trade-off described in the project vision.