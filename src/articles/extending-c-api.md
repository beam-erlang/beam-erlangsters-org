**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Extending the BEAM with C (NIFs and Drivers)

The BEAM provides a stable C API for extending the runtime with native code: NIFs (Native Implemented Functions) for CPU-bound or I/O work that benefits from being outside the scheduler, and drivers for more advanced I/O scenarios.

## In the re-organized world

- The core C API surface lives in beam-erlang (the erts and emulator parts).
- Packages (whether traditional OTP framework pieces or third-party) can ship NIFs and native code as platform-specific artifacts inside the BEAM package format.
- Spark and the package build recipes handle compiling those native bits for the declared platforms.

This makes it natural for a package author to provide a pure-Erlang API with high-performance or platform-specific implementation underneath, without the consumer having to care about the build details.

## Examples of use

- Graphics and windowing bindings (OpenGL, GLFW, platform surfaces) — exactly the kind of work the erlangsters graphics stack does.
- Cryptography accelerators or hardware offload.
- Database drivers or protocol implementations with tight control over buffers.
- Anything where the "best tool for the job" is a small amount of C or platform SDK code.

See the embedding article for using the BEAM itself inside a larger C/C++/Rust/etc. host, and the package format article for how native artifacts are declared and built. The wiki contains the current state of the C API documentation inherited from upstream plus any beam-erlang-specific notes.
