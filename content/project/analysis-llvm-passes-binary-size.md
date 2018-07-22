+++
date = 2018-04-10
title = "Analysis of Executable Size Reduction by LLVM passes"
image_preview = "llvm_logo.png"
tags = ["LLVM", "Executable size", "LLVM Pass"]
external_link = ""
math = false

# [header]
# image = ""
# caption = "LLVM Compiler toolchain"
+++

I worked in a team as part of Course Project (Compiler Engineering) to analyze
the impact of LLVM Passes on code bloat size and compile time on SPEC 2017 CPU
Benchmark. We submitted an abstract of our work in EuroLLVM 2018 and got
accepted as Technical talk.<!--more-->

## Abstract of the talk:

### Analysis of Executable Size Reduction by LLVM passes

*V. Sinha, P. Kumar, S. Jain, U. Bora, S. Purini, R. Upadrasta*

[Link](https://llvm.org/devmtg/2018-04/talks.html#Talk_3)

Increase in the number of embedded devices and the demand to run resource
intensive programs on these limited memory systems has necessitated the
reduction of executable size of programs. LLVM offers an out-of-box -Oz
optimization that is specifically targeted for the reduction of generated
executable size. However, the formidable increase in the interest of making
smaller and smarter devices has compelled programmers to develop more
complicated programs for embedded systems.

In this work, we aim to cater to the specific need of compiler driven
reduction of executable size for such memory critical devices. We go beyond
the traditional series of passes executed by -Oz; we try to break this series
into logical groups and study their effect, as well as the effect of their
combinations, on size of the executable.

Our preliminary study over SPEC 2017 benchmarks gives an insight into the
comparative effect of the groups of passes on executable size. Our work has
potential to enable the developer to tailor a custom series of passes so as to
obtain the desired executable size. To further aid such a customization, we
create a prediction model (based on simple linear regression) that is correctly
able to predict the executable size obtained by a combination of groups when
given only the sizes obtained by the individual groups.

**Update:** Due to unavoidable reasons we could not present the talk at
EuroLLVM 2018.

