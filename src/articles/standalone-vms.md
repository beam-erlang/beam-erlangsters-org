**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Standalone VMs and Deployment

The beam-erlang distribution is designed to support both development use and the creation of minimal, self-contained runtimes for deployment.

## Minimal runtimes

Because the traditional OTP framework is no longer forcibly bundled, it becomes practical to produce very small BEAM-based artifacts that contain only the runtime + the exact packages (framework or otherwise) your application requires.

Spark's manifest and packaging commands, combined with the modern cross-build support in beam-erlang, make it easier to:

- Declare a closed set of dependencies.
- Produce a release tree or single executable wrapper.
- Target multiple platforms from one build machine (via the CMake matrix + package recipes).

## Embedded and custom uses

The same properties help when embedding the BEAM in a larger application or shipping to constrained environments (desktop installers, mobile sidecar logic, appliances). You ship the core + selected packages rather than a full historical OTP installation.

See the embedding article, the packaging article, and the wiki for technical notes on producing standalone distributions and the role of the UPSTREAM_COMMIT marker in reproducible builds.
