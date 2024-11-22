# Graphical Applications

This is an extra article that talks about the desire to make graphical-based
applications (such as the ones you find on desktops with full fledged GUIs)
easier in Erlang.

## Not a good fit ?

It's well-agreed by the Erlang community that Erlang is not suitable for
graphical-based applications.

Why so? It probably roots from the following realities.

- Performance issues
- Thread-safety issues
- Packaging and distribution issues
- Cross-platform difficulties

Let's tackle those points one by one.

## Performance issues

Displaying graphics generally revolves around the use of the GPU. To compute
graphics, it requires data that needs to be continuously sent to the GPU and
which can change over time.

This is a problem for the BEAM because in order do this task efficiently, we
need a tight grip on how data are packed (at the bits level) and how it's
memory-managed. In practice, it will result in a lot of copying with little
guarantee that the Erlang code we write will do what we expect.

It's the reason why the BEAM is not suitable for graphics programming. However,
you should notice that only graphically intensive applications would be
affected by this issue. Even if not optimal, regular applications will do just
fine.

## Thread-safety issues

Another issue with using the GPU is thread-safety. The BEAM is inherently
concurrent and native code runs on arbitrary threads. It makes it difficult to
use OpenGL.

While this can be circumvented by configuring the BEAM to run on a single
thread, or by queuing calls to a dedicated thread, it's not a glorious
solution.

However, it's what the [EGL 1.5](https://github.com/erlangsters/egl-1.5) and
the [OpenGL X.Y](https://github.com/erlangsters/egl-4.6) bindings for the BEAM
does, and it's a very acceptable solution unless it's a graphically intensive
application.

## Packaging and distribution issues

Normally, the business need of a graphical application is to be packaged and
distributed so the end user can install with an "installer" and run it from a
click of a button.

Because Erlang/OTP build system is designed for server-side applications, it's
left to developer to figure out how to package and distribute their
graphical-based applications.

It's a friction point for developers which is not present with OTPless Erlang
as the BEAM package format allows you to define custom commands, which would
allow a third-party package to do this task for you.

## Cross-platform difficulties

Rendering graphics will involve the use of native graphics library which are
platform-specific and with an API in C. Consequently, the use of BEAM drivers
or NIFs is required, meaning the shipped binaries are not portable and will be
significantly different platform to platform.

Again, to make it possible, it requires a proper build system that is designed
to distribute platform-specific binaries. When customization is needed, it
should make it painless and straight-forward for the developers.

To solve this problem, the BEAM package format has room for platform-specific
files, and the BEAM package manager will give you an easy time compiling (and
customizing the compilation steps) for each platform.

## How it's solved

With OTPless Erlang, cross-platform graphics libraries can easily be added to
a BEAM-based project, easily packaged with the BEAM package manager and
distributed for each major platforms such as Windows, macOS and Linux.

**Low-level development**

To build a graphical application, at a relatively low-level, the
The `egl-1.5` and `opengl-x.y` are good fits for that.

```
beamy install egl-1.5
beamy install opengl-4.6
```

You will also need a window library. There is the `glfw` package for that.

```
beamy install glfw
```

While this route is totatlly viable, it's likely not where you want to start.
Fortunately, there are higher-level libraries built on top of those libraries.

**High-level development**

For a higher-level development, the `beam-graphics` and `beam-window` packages
are available.

```
beamy install beam-graphics
beamy install beam-window
```

Consult the documentation of those individual packages for more information.

**Cross-platform distribution**

All the graphics packages mentioned above are cross-platform, but it's not
their job to distribute your application. For that, the `beam-me` package is
available.

```
beamy install --save-dev beam-me
```

It's installed as a development dependency because it's not needed at runtime.

Now, you just add a custom commmand.

```json
{
  "scripts": {
    "package": "beam-me"
  }
}
```

And you're good to go.

Consult the documentation of those individual packages for more information.