{config, lib, ...}: {
  programs.foot = {
    enable = true;
    settings = {
      main = {
        font = lib.mkForce "${config.font}HiDpi :size=10";
        box-drawings-uses-font-glyphs = "no";
        pad = "16x16";
      };

      cursor = {
        color = "111516 c2c4c2";
      };
    };
  };
}
