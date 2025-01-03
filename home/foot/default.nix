{config, lib, ...}: {
  programs.foot = {
    enable = true;
    settings = {
      main = {
        dpi-aware = lib.mkForce "yes";
        box-drawings-uses-font-glyphs = "no";
        pad = "24x24";
      };

      cursor = with config.lib.stylix.colors; {
        color = "${base00} ${base05}";
      };
    };
  };
}
