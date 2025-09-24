---
sidebar_position: 1
---

# Building on Windows

## Install Git

Git is an essential tool for version control in development. If you haven’t installed it yet, follow these steps:

1. Check if Git is installed by running

   ```
   git --version
   ```

   in your terminal.

2. If Git isn’t installed, follow the [official installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to set it up for your system.

## Install Make

`Make` is crucial for building projects, especially when working with embedded systems. Matrix OS uses Make on top of the chip vendor-provided build system to achieve cross-platform compatibility.

1. [Install Chocolatey](https://docs.chocolatey.org/en-us/choco/setup/), which will be used to get the latest version of Make.
2. Restart your terminal to ensure Chocolatey is ready to use.
3. Install Make:

   ```
   choco install make
   ```

4. Restart your terminal to make sure `Make` is ready to use.
5. Confirm the installation by typing:

   ```
   make --version
   ```

   This command should output the version of `Make`, confirming it is installed correctly.

## Clone Matrix OS Repository

This step helps you download the code of Matrix OS and get it ready for building.

1. Open your Command Prompt or preferred terminal.
2. Clone the Matrix OS repository with the following command:

   ```
   git clone https://github.com/203-Systems/MatrixOS.git
   ```

3. Navigate to the cloned repository:

   ```
   cd MatrixOS
   ```

4. Initialize Matrix OS repository:
   ```
   git submodule update --init
   ```

## Install ESP IDF

ESP-IDF (Espressif IoT Development Framework) is the vendor-provided toolchain and SDK for the SOC used in Mystrix. It is a critical component of Matrix OS for Mystrix, and it's important to have it installed for building Matrix OS.

1. Install ESP-IDF by [downloading the online installer](https://dl.espressif.com/dl/esp-idf/?idf=4.4) and installing `ESP-IDF version V5.3.1`.
2. Go to the installer folder and run the `install.bat` to finish the installation. If you didn't change the default install path, it should be at `C:\espressif\v5.3.1\install.bat`.

## Build Matrix OS

Now that you have completed all the requirements, it's time to build Matrix OS!

1. Load ESP-IDF. You will need to load ESP-IDF in your current terminal session. You can either use the ESP-IDF installed `ESP-IDF V5.3 CMD` shortcut or run `C:\espressif\v5.3.1\export.bat` in a terminal instance.

In the long run, you will want to automate this. If you are using VS Code, you can modify the `MatrixOS.code-workspace` file and replace the `.bat` path with yours.

(The reason this needs to be done is that this way you can have multiple different versions of IDF and use a specific one. It also loads associated Python and toolchains into the session.)

2. Go to the root folder of Matrix OS if your terminal isn't there already.

3. Run this command to build Matrix OS:

```
make DEVICE=Mystrix build
```

4. Upload MatrixOS to your Mystrix. Make sure your Mystrix is in [upload mode](/docs/Mystrix/MystrixSpecific/UpdateMatrixOS#enter-os-update-mode).

Run this command to install `psutil` python package. You only have to do this once:

```
pip install psutil
```

Run this command to upload your compiled Matrix OS to your Mystrix:

```
make DEVICE=Mystrix uf2-upload
```

5. Your Mystrix should start flashing and automatically enter the newly compiled Matrix OS.

## Build Commands

Here are some useful build commands you can use in Matrix OS:

- `clean` - Cleans the build.
- `fullclean` - Cleans the build more thoroughly. Use this if you encounter undefined references or missing files.
- `build` - Builds Matrix OS based on the default config (`OS/parameter.h`).
- `build-release`, `build-rc`, `build-beta`, `build-nightly`, `build-dev` - Builds Matrix OS in various modes. `build-dev` enables USB logging (see [Debug Matrix OS](/docs/Developer/DebugMatrixOS/DebugMatrixOSCpp)).

You can chain commands together like:

```bash
make DEVICE=Mystrix clean build uf2-upload
```
