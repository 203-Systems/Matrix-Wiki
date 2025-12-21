---
sidebar_position: 3
---

import DocLink from "@site/src/components/DocLink/DocLink";

# Building on Linux

:::warning[Unverified Guide]
I (Null) don't use Linux for development but I was able to get Matrix OS to build on Linux via WSL and Github Action.

Since I mainly do develop on Windows, the code base might also have case sensitive issues that prevents it from build build on Linux/MacOS.

If you have suggestions or questions, please reach out in our [Discord server](https://discord.gg/rRVCBHHPfw), [Github issue](https://github.com/203-Systems/Matrix-Wiki), or a leave a comment on this page.
:::

## Install Git

Git is necessary for cloning the Matrix OS repository. Install Git with:

```bash
sudo apt update
sudo apt install git
```

Verify the installation:

```bash
git --version
```

## Install Make

Make is essential for building Matrix OS. Install it using:

```bash
sudo apt install make
```

Confirm the installation:

```bash
make --version
```

## Clone the Matrix OS Repository

1. Make sure Git is installed as shown above.

2. Open your terminal.

3. Clone the Matrix OS repository:

   ```bash
   git clone https://github.com/203-Systems/MatrixOS.git
   ```

4. Navigate to the cloned repository:

   ```bash
   cd MatrixOS
   ```

5. Initialize the submodules in the Matrix OS repository:

   ```bash
   git submodule update --init
   ```

## Install ESP-IDF

The ESP-IDF (Espressif IoT Development Framework) is required to build and upload Matrix OS to the Mystrix device.

1. Download and install ESP-IDF version **V5.3.1**. Follow the instructions on [ESP-IDF: Standard Setup of Toolchain for Linux](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/linux-setup.html) to install version V5.3.1.

2. After installation, locate the installation directory (e.g., `~/esp`).

3. Run the `install.sh` script to complete the setup:

   ```bash
   ~/esp/esp-idf/install.sh
   ```

## Build Matrix OS

1. Load ESP-IDF by sourcing it in your terminal session:

   ```bash
   source ~/esp/esp-idf/export.sh
   ```

    In the long run, you will want to automate this. You could add this line to your shell's configuration file (e.g., `.bashrc` or `.zshrc`) or if you are using VS Code, you can modify the MatrixOS.code-workspace file and adapt it to run it on new terminal.

2. Navigate to the Matrix OS root folder if your terminal isn’t already there.

3. Run the following command to build Matrix OS:

   ```bash
   make DEVICE=Mystrix build
   ```

4. Prepare for the upload by ensuring your Mystrix is in <DocLink to="/docs/Mystrix/UpdateMatrixOS#enter-os-update-mode">upload mode</DocLink>.

5. Install `psutil` (only needed once):

   ```bash
   pip install psutil
   ```

6. Upload the compiled Matrix OS to your Mystrix device:

   ```bash
   make DEVICE=Mystrix uf2-upload
   ```

7. Your Mystrix device should now flash and start the newly compiled Matrix OS automatically.

## Build Commands

Here are some useful build commands you can use in Matrix OS:

- `clean` - Cleans the build.
- `fullclean` - Cleans the build more thoroughly. Use this if you encounter undefined references or missing files.
- `build` - Builds Matrix OS based on the default config (OS/parameter.h).
- `build-release`, `build-rc`, `build-beta`, `build-nightly`, `build-dev` - Builds Matrix OS in various modes. `build-dev` enables USB logging (see <DocLink to="/docs/Developer/DebugMatrixOSCpp">Debug Matrix OS</DocLink>).

You can chain commands together like:
```bash
make DEVICE=Mystrix clean build uf2-upload
```