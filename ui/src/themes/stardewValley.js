import stylesheet from "./stardewValley.css.js";
import farmSunrise from "./assets/farm-sunrise.png";

const colors = {
  ink: "#3f2a24",
  cream: "#fff3cf",
  paper: "#f4d99b",
  wheat: "#e7b75b",
  gold: "#d9892b",
  soil: "#6f432f",
  darkWood: "#3b2825",
  wood: "#71452f",
  leaf: "#4f7d3a",
  leafLight: "#7faa46",
  water: "#4c9db1",
  danger: "#b94b43",
};

const pixelBorder = `2px solid ${colors.soil}`;
const pixelShadow = `3px 3px 0 ${colors.darkWood}`;

const musicListActions = {
  alignItems: "center",
  "@global": {
    "button:first-child:not(:only-child)": {
      margin: "1.25rem",
      minWidth: 0,
      padding: 10,
      color: colors.cream,
      backgroundColor: `${colors.leaf} !important`,
      border: pixelBorder,
      borderRadius: 4,
      boxShadow: pixelShadow,
      transform: "scale(1.35)",
      transition: "transform 120ms steps(2), background-color 120ms",
      "&:hover": {
        backgroundColor: `${colors.leafLight} !important`,
        transform: "scale(1.43)",
      },
    },
    "button:first-child>span:first-child>span": { display: "none" },
  },
};

export default {
  themeName: "Pelican Farm",
  palette: {
    type: "light",
    primary: { main: colors.leaf, contrastText: colors.cream },
    secondary: { main: colors.gold, contrastText: colors.darkWood },
    error: { main: colors.danger },
    background: { default: "#e6c985", paper: colors.paper },
    text: { primary: colors.ink, secondary: "#76533e" },
  },
  typography: {
    fontFamily: '"Courier New", "Noto Sans SC", ui-monospace, monospace',
    button: { fontWeight: 800, letterSpacing: "0.03em" },
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 800 },
    h6: { fontWeight: 800 },
  },
  shape: { borderRadius: 4 },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          imageRendering: "pixelated",
          backgroundColor: "#d6b66e",
          backgroundImage:
            "linear-gradient(45deg, rgba(111,67,47,.035) 25%, transparent 25%, transparent 75%, rgba(111,67,47,.035) 75%), linear-gradient(45deg, rgba(111,67,47,.035) 25%, transparent 25%, transparent 75%, rgba(111,67,47,.035) 75%)",
          backgroundPosition: "0 0, 4px 4px",
          backgroundSize: "8px 8px",
        },
        "*": { scrollbarColor: `${colors.wood} ${colors.paper}` },
        "*::-webkit-scrollbar": { width: 12, height: 12 },
        "*::-webkit-scrollbar-track": { background: colors.paper },
        "*::-webkit-scrollbar-thumb": {
          background: colors.wood,
          border: `2px solid ${colors.paper}`,
          borderRadius: 0,
        },
      },
    },
    MuiAppBar: {
      colorSecondary: {
        color: colors.cream,
        background: `${colors.wood} !important`,
        borderBottom: `3px solid ${colors.darkWood}`,
        boxShadow: `0 3px 0 rgba(59,40,37,.35)`,
      },
      positionFixed: {
        background: `${colors.wood} !important`,
        boxShadow: `0 3px 0 ${colors.darkWood}`,
      },
    },
    MuiToolbar: { root: { backgroundColor: `${colors.wood} !important` } },
    MuiDrawer: {
      paper: {
        color: colors.cream,
        backgroundColor: colors.darkWood,
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent 0 31px, rgba(231,183,91,.08) 32px 33px)",
        borderRight: `3px solid ${colors.soil}`,
        "& .MuiListItem-root": { color: `${colors.cream} !important` },
        "& .MuiListItemIcon-root": { color: `${colors.cream} !important` },
        "& .MuiTypography-colorTextSecondary": {
          color: `${colors.cream} !important`,
        },
        "& svg": { color: `${colors.cream} !important` },
      },
    },
    MuiList: { root: { background: "transparent" } },
    MuiListItem: {
      button: {
        margin: "2px 8px",
        width: "calc(100% - 16px)",
        borderRadius: 3,
        "&:hover": { backgroundColor: "rgba(231,183,91,.22)" },
        "&.Mui-selected": {
          color: "#fff7d6",
          backgroundColor: `${colors.leaf} !important`,
          boxShadow: `inset 0 0 0 2px ${colors.leafLight}`,
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.paper,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.12), rgba(111,67,47,.04))",
      },
      rounded: { borderRadius: 5 },
      elevation1: { border: pixelBorder, boxShadow: pixelShadow },
      elevation2: { border: pixelBorder, boxShadow: pixelShadow },
    },
    MuiButton: {
      root: {
        color: colors.darkWood,
        backgroundColor: `${colors.wheat} !important`,
        border: pixelBorder,
        borderRadius: 3,
        boxShadow: `2px 2px 0 ${colors.darkWood}`,
        transition: "transform 80ms, filter 80ms",
        "&:hover": {
          filter: "brightness(1.08)",
          transform: "translate(-1px,-1px)",
        },
        "&:active": { boxShadow: "none", transform: "translate(2px,2px)" },
      },
      containedPrimary: {
        color: colors.cream,
        backgroundColor: `${colors.leaf} !important`,
      },
      containedSecondary: { backgroundColor: `${colors.gold} !important` },
    },
    MuiIconButton: {
      root: {
        color: "inherit",
        "&:hover": {
          color: colors.gold,
          backgroundColor: "rgba(255,243,207,.12)",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: "#fff8df",
        borderRadius: 3,
        "&.Mui-focused $notchedOutline": {
          borderColor: colors.leaf,
          borderWidth: 2,
        },
      },
      notchedOutline: { borderColor: colors.soil, borderWidth: 2 },
    },
    MuiInputLabel: { root: { color: "#76533e" } },
    MuiMenuItem: {
      root: {
        margin: 3,
        minHeight: 36,
        borderRadius: 2,
        "&:hover": { backgroundColor: "#eac777" },
        "&.Mui-selected": { backgroundColor: "#c8db81" },
      },
    },
    MuiChip: {
      root: {
        color: colors.cream,
        backgroundColor: colors.leaf,
        borderRadius: 3,
      },
    },
    MuiDivider: { root: { height: 2, backgroundColor: "rgba(111,67,47,.3)" } },
    MuiTableCell: {
      root: {
        color: `${colors.ink} !important`,
        borderBottom: "1px dashed #a67b4d",
      },
      head: {
        color: `${colors.cream} !important`,
        fontWeight: 800,
        letterSpacing: ".04em",
        backgroundColor: `${colors.wood} !important`,
        borderBottom: `3px solid ${colors.darkWood}`,
      },
    },
    MuiTableRow: {
      root: {
        "&:nth-of-type(even)": { backgroundColor: "rgba(255,248,223,.28)" },
        "&:hover": { backgroundColor: "#f8e8b8 !important" },
      },
    },
    MuiSwitch: {
      colorSecondary: { "&.Mui-checked": { color: colors.leaf } },
      track: { backgroundColor: colors.soil },
    },
    NDAlbumGridView: {
      albumContainer: {
        padding: 9,
        backgroundColor: colors.paper,
        border: pixelBorder,
        borderRadius: 4,
        boxShadow: `2px 2px 0 ${colors.soil}`,
        transition: "transform 120ms steps(2), background-color 120ms",
        "&:hover": {
          backgroundColor: "#ffe9ac",
          transform: "translateY(-3px)",
        },
      },
      albumName: { marginTop: 8, color: colors.ink, fontWeight: 800 },
      albumSubtitle: { color: "#76533e" },
      albumPlayButton: {
        color: colors.cream,
        backgroundColor: `${colors.leaf} !important`,
        border: `2px solid ${colors.cream}`,
        borderRadius: 3,
        boxShadow: pixelShadow,
      },
    },
    NDAlbumDetails: {
      root: {
        color: colors.ink,
        background: "linear-gradient(135deg, #f9e8b4, #e7bd6c)",
        border: pixelBorder,
        borderRadius: 4,
        boxShadow: pixelShadow,
      },
      recordName: { fontWeight: 800, textShadow: "1px 1px 0 #fff3cf" },
      recordArtist: { color: colors.leaf, fontWeight: 800 },
      recordMeta: { color: "#76533e" },
    },
    NDPlaylistDetails: {
      container: {
        border: pixelBorder,
        borderRadius: 4,
        boxShadow: pixelShadow,
      },
      title: { color: colors.ink, fontWeight: 800 },
      details: { color: "#76533e" },
    },
    NDAlbumShow: { albumActions: musicListActions },
    NDPlaylistShow: { playlistActions: musicListActions },
    NDAudioPlayer: {
      audioTitle: { color: colors.cream },
      songTitle: { fontWeight: 800 },
      songInfo: { color: "#e8c985" },
      player: {
        color: colors.cream,
        backgroundColor: `${colors.darkWood} !important`,
        borderTop: `3px solid ${colors.wheat}`,
      },
    },
    NDLogin: {
      main: {
        backgroundImage: `linear-gradient(rgba(32,50,35,.28), rgba(59,40,37,.48)), url(${farmSunrise})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        imageRendering: "pixelated",
      },
      card: {
        color: colors.ink,
        backgroundColor: "rgba(255,243,207,.94)",
        border: `4px solid ${colors.soil}`,
        borderRadius: 5,
        boxShadow: `6px 6px 0 ${colors.darkWood}`,
      },
      systemNameLink: {
        color: colors.cream,
        textShadow: `2px 2px 0 ${colors.darkWood}`,
      },
    },
    RaLayout: {
      root: { backgroundColor: "#d6b66e" },
      content: { backgroundColor: "transparent" },
    },
    RaList: {
      content: { border: pixelBorder, borderRadius: 4, boxShadow: pixelShadow },
    },
    RaListToolbar: { toolbar: { backgroundColor: "#d6b66e" } },
    RaSidebar: {
      fixed: { backgroundColor: colors.darkWood },
      drawerPaper: { backgroundColor: `${colors.darkWood} !important` },
    },
    RaLink: { link: { color: colors.leaf, fontWeight: 700 } },
    RaPaginationActions: {
      currentPageButton: {
        color: colors.cream,
        backgroundColor: `${colors.leaf} !important`,
      },
      button: { minWidth: 40, margin: "0 3px" },
    },
  },
  player: { theme: "dark", stylesheet },
};
