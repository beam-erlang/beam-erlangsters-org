# The OTP framework

When a new developer is introduced to Erlang/OTP, learning materials first 
focus on the concepts of concurrent programming language and how modelling 
software into processes that share no data fixes everything.

To prove the point, it gets developers to write tiny programs using some 
"behaviors" and how it automatically becomes tolerant to fault.

To line between Erlang and OTP framework is not clear and slowly, developers
will 

Slowly, the developer understands how to use Erlang/OTP to build 
fault-tolerant software immediately
realize that fault-tolerance propery comes from the OTP framework.

## An unvaluable framework

Even if the primitives of the Erlang programming language opens doors to 
writing software with those amazing properties, it still requires a lot of 
work and expertise to pull it off.

Most often, what makes software fault-tolerant or allows distribution
is through well-known patterns that 
barely change from software to software. And therefore it very makes sense to 
have them written once (and well tested).

This is the key reason as to why the OTP framework it bundled with Erlang by 
default.

## Shift in business need

Another reason why the OTP framework is bundled with Erlang is because of the 
initial business needs.

The Erlang programming language originates from a telecom company, Ericsson, 
which had specific problems to solve, and thanks to that, Erlang and its 
concepts were born.

When it became open-source, it was expected that Erlang would be used to solve
similar problems. And therefore, one more reason to make the OTP framework 
inseparable, and even build the 

However, with the widespread adoption of Erlang/OTP, it's clear that people 
are willing to use it for other purposes then telecom. Examples include
games.

While it's generally agreed that Erlang perform best for soft real-time 
software on the server-side, some people want to use on the client-side.
The way OTP is bundled and the build system makese it unnatural.

## The problem of a framework

The very concept of a framework is to provide a structure to build upon.