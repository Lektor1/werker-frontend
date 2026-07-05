export const manifest = {
  screens: {
    scr_ttydu4: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_ywbvuk: { name: "Full Shop", route: "/shop", position: { "x": 1560, "y": 220 } }
  },
  sections: {
    sec_utsi0v: { name: "Main Navigation", x: 0, y: 0, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_utsi0v", children: [
    { kind: "screen", id: "scr_ttydu4" },
    { kind: "screen", id: "scr_ywbvuk" }]
  }]

};