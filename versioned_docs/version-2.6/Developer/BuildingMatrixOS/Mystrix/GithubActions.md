---
sidebar_position: 4
---

# Build via Github Action

[Matrix OS Github repo](https://github.com/203-Systems/MatrixOS) has [Github Action](https://github.com/203-Systems/MatrixOS/actions) enabled that builds Matrix OS on every commit. If you just want to do a simple change to Matrix OS without wanting to set up the tool chain. You can simply fork the Matrix OS repo and then commit your changes there. You will be able to download the compiled firmware as an Action Artifact. (The firmware will be compiled under nightly mode)

:::warning[Unverified Guide]
I have not managed to get cache to work on the action so building on action can be really slow as it need to pull the entire repo, submodules, ESP-IDF, and compile from scratch. Hopefully I will be able to address this soon.
:::
