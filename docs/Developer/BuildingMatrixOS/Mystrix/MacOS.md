---
sidebar_position: 2
---

# Building on macOS

:::warning[Unverified Guide]
I (Null) don't use MacOS for development nor I have a MacOS to verify this step. Some community member was able to get Matrix OS to build on MacOS in the past.

Since I mainly do develop on Windows, the code base might also have case sensitive issues that prevents it from build build on Linux/MacOS.

If you have suggestions or questions, please reach out in our [Discord server](https://discord.gg/rRVCBHHPfw), [Github issue](https://github.com/203-Systems/Matrix-Wiki), or a leave a comment on this page.
:::

## Installing Homebrew

Homebrew is a popular package manager for macOS and Linux, allowing you to install and manage software efficiently from the command line. We will use it to install git and make.

1. Run the following command in your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. After installation, you may need to follow any on-screen instructions to add Homebrew to your system's PATH. Once installed, verify it by running:

```bash
brew --version
```

## Install Git 
Git is a crucial tool for version control in development. We will be using it to download and manage the Matrix OS code base.

1. Check if Git is installed by running the following command in your terminal.
    ```bash
    git --version 
    ```

2. If Git isn’t installed, you can install it via brew.
   ```bash
   brew install git
   ```
3. Verify your installation by running thefollowing command in your terminal.
    ```bash
    git --version 
    ```

## Install Make
`Make` is essential for building Matrix OS. If you don’t have Homebrew installed, install it first:

1. 

2. Install `Make` using Homebrew:
   ```bash
   brew install make
   ```

3. Confirm the installation by typing:
   ```bash
   make --version
   ```


## Clone Matrix OS repo
1. Make sure you have brew inst
1. Make sure you have Git installed. You can install it via brew if it isn’t already installed:
   ```bash
   brew install git
   ```

2. Open your preferred terminal.

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

## Install ESP IDF

ESP IDF (Espressif IoT Development Framework) is required for building and uploading Matrix OS to the Mystrix device. 

1. Download and install ESP-IDF version **V5.3.1**:
   - Follow [ESP-IDF: Standard Setup of Toolchain for macOS](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/macos-setup.html), but only install version V5.3.1.

2. After installing ESP-IDF, you will find it in your installation directory (for example, `~/esp`).

3. Run the `install.sh` script to complete the setup:
   ```bash
   ~/esp/esp-idf/install.sh
   ```

## Build Matrix OS

1. Load ESP-IDF by sourcing it in your terminal session. You can run this command to set up ESP-IDF for the session:
   ```bash
   source ~/esp/esp-idf/export.sh
   ```

   In the long run, you will want to automate this. You could add this line to your shell's configuration file (e.g., `.zshrc` or `.bash_profile`) or if you are using VS Code, you can modify the MatrixOS.code-workspace file and adapt it to run it on new terminal.

2. Go to the root folder of Matrix OS if your terminal isn’t already there.

3. Run this command to build Matrix OS:
   ```bash
   make DEVICE=Mystrix build
   ```

4. Prepare to upload to your Mystrix device. Make sure your Mystrix is in [upload mode](/docs/Mystrix/MystrixSpecific/UpdateMatrixOS#enter-os-update-mode) already.

5. Install `psutil` (you only need to do this once):
   ```bash
   pip install psutil
   ```

6. Upload the compiled Matrix OS to Mystrix:
   ```bash
   make DEVICE=Mystrix uf2-upload
   ```

7. Your Mystrix device should now flash and automatically start the newly compiled Matrix OS.

## Build Commands

Here are some useful build commands you can use in Matrix OS:

- `clean` - Cleans the build.
- `fullclean` - Cleans the build more thoroughly. Use this if you encounter undefined references or missing files.
- `build` - Builds Matrix OS based on the default config (OS/parameter.h).
- `build-release`, `build-rc`, `build-beta`, `build-nightly`, `build-dev` - Builds Matrix OS in various modes. `build-dev` enables USB logging (see [Debug Matrix OS](/docs/Developer/DebugMatrixOS/DebugMatrixOSCpp)).

You can chain commands together like:
```bash
make DEVICE=Mystrix clean build uf2-upload
```