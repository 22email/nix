{config, ...}: {
  programs.nixvim = {
    autoCmd = [
      {
        event = ["BufWritePre"];
        pattern = ["*"];
        # from https://vi.stackexchange.com/questions/37421/how-to-remove-neovim-trailing-white-space
        callback = {
          __raw = ''
              function(ev)
                save_cursor = vim.fn.getpos(".")
                vim.cmd([[%s/\s\+$//e]])
                vim.fn.setpos(".", save_cursor)
              end
          '';
        };
      }
    ];
    opts = {
      fillchars.eob = " ";
      termguicolors = true;
      shiftwidth = 2;
      tabstop = 2;
      softtabstop = 2;
      expandtab = true;
      smartindent = true;
      laststatus = 3;
      showmode = false;
      smartcase = true;
      foldmethod = "manual";
      mouse = "a";
      number = true;
      numberwidth = 2;
      ruler = false;
      signcolumn = "yes";
      splitbelow = true;
      splitright = true;
      timeoutlen = 400;
      undofile = true;
      conceallevel = 1;
    };

    # Referenced from: https://github.com/Manas140/Conscious/blob/main/lua/colors.lua
    highlight = with config.lib.stylix.colors; {
      WinSeparator.fg = "#${base02}";

      NormalFloat.bg = "#${base01}";
      FloatBorder = {
        fg = "#${base01}";
        bg = "#${base01}";
      };

      NvimTreeWindowPicker = {
        fg = "#${base05}";
        bg = "#${base01}";
      };

      CmpItemAbbrMatch.fg = "#${base05}";
      CmpItemAbbrMatchFuzzy.fg = "#${base05}";
      CmpItemAbbr.fg = "#${base05}";
      CmpItemKind.fg = "#${base0E}";
      CmpItemMenu.fg = "#${base0E}";
      CmpItemKindSnippet.fg = "#${base0E}";

      TelescopePromptBorder = {
        fg = "#${base01}";
        bg = "#${base01}";
      };
      TelescopePromptNormal.bg = "#${base01}";
      TelescopePromptPrefix = {
        fg = "#${base08}";
        bg = "#${base01}";
      };
      TelescopeSelection.bg = "#${base01}";
    };

    extraConfigLua = ''
      vim.opt.shortmess:append "sI"
      vim.opt.whichwrap:append "<>[]hl"
    '';
  };
}
