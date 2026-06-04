**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Workflow, CI/CD, and Verification

The beam-erlang project relies heavily on GitHub Actions for continuous verification of the core distribution across many platforms.

## Matrix strategy

The primary goal is that every proposed change to beam-erlang builds and passes basic smoke tests on:

- Linux amd64/arm64 (glibc and musl)
- macOS arm64
- Windows amd64/arm64
- Android and iOS cross-compilation targets

This matrix is intentionally broad because the distribution is meant to be a solid foundation for client-side, mobile, desktop, and server use.

## Package and framework side

The otp-framework repository (source for the BEAM packages) and the Spark package recipes also participate in CI. A package that contains native code must build cleanly for the platforms it claims to support.

The registry and package publication flows are also automated so that framework updates and new ecosystem packages can be published reliably.

## Local development

Developers are expected to run the equivalent of the relevant slice of the matrix locally (or trust the CI). The CMake setup is designed to make cross-compilation and out-of-tree builds straightforward.

See the CMake build system article and the wiki pages on the build and upstream sync process for the current matrix definition and how changes to the tracker flow into the re-organized repositories.
