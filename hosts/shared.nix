{
  pkgs,
  inputs,
  ...
}: {
  boot.kernelPackages = pkgs.linuxPackages_latest;

  networking.networkmanager = {
    enable = true;
    appendNameservers = ["1.1.1.1"];
  };

  # Sorry for being Canadian
  time.timeZone = "America/Toronto";

  i18n.defaultLocale = "en_CA.UTF-8";

  services.xserver = {
    xkb = {
      layout = "us";
      variant = "";
    };
  };

  hardware.graphics.enable = true;
  services.pulseaudio.enable = false;
  security.rtkit.enable = true;
  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
    jack.enable = true;
    wireplumber.enable = true;
  };

  users.users.kevin = {
    isNormalUser = true;
    description = "Kevin";
    extraGroups = ["networkmanager" "wheel" "video"];
  };

  nixpkgs.config.allowUnfree = true;

  nix.settings = {
    experimental-features = ["nix-command" "flakes"];
  };

  environment.systemPackages = with pkgs; [
    wget
    curl
    git
    pamixer
    libnotify
    wl-clipboard
    ripgrep
    fastfetch
    nitch
    pfetch
  ];

  fonts = {
    packages = with pkgs; [
      noto-fonts-cjk-sans
      noto-fonts-cjk-serif
      noto-fonts-color-emoji
      dejavu_fonts
      rubik
      siji
      maple-mono-NF
      tamzen
      pkgs.nerd-fonts.roboto-mono
    ];

    fontconfig = {
      enable = true;
      localConf = ''
        <alias>
          <family>monospace</family>
          <prefer>
            <family>Siji</family>
          </prefer>
        </alias>
      '';
      defaultFonts = {
        sansSerif = [
          "Rubik"
          "Noto Sans CJK"
        ];
        serif = [
          "DejaVu Serif"
          "Noto Serif CJK"
        ];
        monospace = [
          "DejaVu Sans Mono"
          "Noto Sans Mono CJK"
        ];
      };
    };
  };

  programs.dconf.enable = true;

  services = {
    upower.enable = true;
    gvfs.enable = true;
  };

  security.pam.services.waylock = {};

  programs = {
    neovim = {
      enable = true;
      defaultEditor = true;
    };
  };

  environment.shells = [pkgs.mksh];
  users.defaultUserShell = pkgs.mksh;

  services.openssh = {
    enable = true;
    settings = {
      PasswordAuthentication = true;
    };
  };
}
