---
sidebar_position: 4
---

# 通过 Github Action 构建

[Matrix OS Github 仓库](https://github.com/203-Systems/MatrixOS)启用了[Github Action](https://github.com/203-Systems/MatrixOS/actions)，在每次提交时都会构建 Matrix OS。如果只想对 Matrix OS 进行简单更改而不想设置工具链，可以简单地 fork Matrix OS 仓库并在那里提交更改。编译后的固件可以作为 Action Artifact 下载。（固件将在 nightly 模式下编译）

:::warning[未验证指南]
我还没能让缓存在 action 中正常工作，所以在 action 中构建可能会非常慢，因为需要拉取整个仓库、子模块、ESP-IDF，并从头开始编译。希望我能很快解决这个问题。
:::
