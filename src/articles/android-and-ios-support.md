# Android and iOS support

This is an extra article that talks about the desire to make Erlang-based
applications for Android and iOS possible.

And should be equally possible in Elixir and Gleam too.

## What a strange idea

Right. Majority of the community will say that Erlang is not a good fit. And
they are right, it's not the "best" fit.

Why it cannot be the "best" fit ?

- Because the best fit is Kotlin and Swift by default.
- Because there is no "BEAM ecosystem" and tooling that makes it easy.
- Because Erlang cannot be good at graphically intensive applications.

However, it does not have to be the "best fit", it just has to be a "fit".
Otherwise mobile apps written in C# or Dart (or even JavaScrip)t would not
exist.

With the new BEAM package format and the BEAM package manager, it should go
a long way to make it possible. Plus, not all mobile applications are
graphically intensive. Therefore, it can become a fit.

> An additional take on this. What matters as developers, should be our ability
to write software logic as naturally (and concisely) as possible. Erlang can
model logic of mobile apps equally well. Just like with algorithms. If we have
many different sorting algorithms, this is not because one produces better
output (the output is the same) but because software runs on hardware with
constraints. If that wasn't for constraints, Erlang would be an excellent fit.

The conclusion is, there are no reason why Erlang could not be a good fit for
Android and iOS, other than performance.

## Surprisingly supported

Even if not promoted, Erlang/OTP is developed to build for the Android and iOS 
platforms just fine. Just look at the Github Actions workflows that are put in 
place, or the `xcomp/` folder in the Erlang/OTP source code.

Why this is supported, and what business makes uses of Erlang on Android/iOS is 
unknown. However, one sure thing is that there's no reason it cannot be ported
to Android and iOS.

With that said, without a proper build system to build and package Erlang code 
for Android and iOS, it's not enticing to do so.

Hopefully, with the OTPless Erlang project which consists of detaching the OTP 
framework, and in general, providing a better interface to the underlying 
BEAM VM, it should become easier to build a Flutter-like framework.

## Solving the graphics

Android and iOS applications are inherently graphical. However, the lack of
graphics library

However, it's been well-agreed by the Erlang community that it cannot be
efficient at graphics programming. The reality is that yes, for graphically
intensive applications (due to )

It's well documented [here](foo/bar).

The Erlangsters community is working on various OpenGL-based libraries that
should promote graphics programming in Erlang, and facilitate the porting of
Erlang applications to Android and iOS.

## Inspiring by other frameworks

