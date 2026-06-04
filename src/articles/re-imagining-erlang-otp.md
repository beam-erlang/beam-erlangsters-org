**Temporary text — subject to change**

This article contains draft/temporary content and is subject to significant change as the project direction and documentation are refined.

# Re-imagining Erlang/OTP

The beam-erlang project restarts the effort with a clean base at Erlang/OTP 29.0 and performs a deliberate re-organization (not a rewrite) of the upstream tree.

## The split

- `beam-erlang` retains the BEAM virtual machine, erts, the core runtime, compiler, and minimal supporting pieces required to have a working Erlang system.
- `otp-framework` receives the traditional OTP applications (under lib/) so they can be turned into optional, individually installable BEAM packages.

Both start from an exact copy of the same upstream 29.0 tree (recorded via the `UPSTREAM_COMMIT` marker). The re-org is the one-time bootstrap step that creates the two complementary repositories.

## Why 29

Starting from the official 29.0 release tag gives a clean, reproducible, well-understood base. All later maintenance work flows through the maint-29 (and future) branches and tags. The erlang-otp repository under the beam-erlang organization serves as the reference tracker for this.

## Benefits

- Smaller attack surface for the runtime distribution.
- Clearer mental model: the language + VM vs. the framework.
- Modern build (CMake + GitHub Actions) applied to the core where it matters most.
- Framework components can evolve at their own pace as packages and can be adopted incrementally.
- Better foundation for cross-platform work (including Android/iOS) and packaging.

The wiki (especially Bootstrapping-OTP-29 and the re-organization pages) contains the detailed record of the split passes, the marker rationale, and the sync strategy going forward. The site articles give the higher-level "why".
