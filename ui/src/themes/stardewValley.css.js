const stylesheet = `
.react-jinke-music-player-main {
  --farm-cream: #fff3cf;
  --farm-wheat: #e7b75b;
  --farm-gold: #d9892b;
  --farm-leaf: #4f7d3a;
  --farm-leaf-light: #7faa46;
  --farm-wood: #71452f;
  --farm-dark-wood: #3b2825;
}

.react-jinke-music-player-main .music-player-panel,
.react-jinke-music-player-main .audio-lists-panel {
  color: var(--farm-cream);
  background: var(--farm-dark-wood);
  border: 3px solid var(--farm-wheat);
  border-radius: 4px;
  box-shadow: 4px 4px 0 #211817;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track,
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle,
.react-jinke-music-player-mobile-progress .rc-slider-track,
.react-jinke-music-player-mobile-progress .rc-slider-handle {
  background-color: var(--farm-gold);
  border-color: var(--farm-cream);
}

.react-jinke-music-player-main .rc-slider-rail {
  height: 6px;
  background: #221817;
  border: 1px solid var(--farm-wheat);
  border-radius: 0;
}

.react-jinke-music-player-main .rc-slider-track { height: 6px; border-radius: 0; }
.react-jinke-music-player-main .rc-slider-handle { border-radius: 2px; }

.react-jinke-music-player-main svg:hover,
.react-jinke-music-player-main .audio-item.playing,
.react-jinke-music-player-main .audio-item.playing svg,
.react-jinke-music-player-main .audio-item.playing .player-singer {
  color: var(--farm-gold) !important;
}

.react-jinke-music-player-main .audio-lists-panel-header {
  border-bottom: 2px solid var(--farm-wheat);
}

.react-jinke-music-player-main .audio-lists-panel-content .audio-item {
  margin: 3px 5px;
  border-radius: 2px;
}

.react-jinke-music-player-main .audio-lists-panel-content .audio-item:hover {
  background: var(--farm-wood);
}

.react-jinke-music-player-main .music-player-lyric {
  color: var(--farm-cream);
  font-family: "Courier New", monospace;
  font-weight: 700;
  text-shadow: 2px 2px 0 var(--farm-dark-wood);
}

.react-jinke-music-player-main ::-webkit-scrollbar-thumb {
  background: var(--farm-wheat);
  border: 2px solid var(--farm-dark-wood);
  border-radius: 0;
}

.react-jinke-music-player-mobile-cover,
.react-jinke-music-player .music-player-controller {
  color: var(--farm-cream);
  background: var(--farm-dark-wood);
  border: 3px solid var(--farm-wheat);
  border-radius: 4px;
  box-shadow: 3px 3px 0 #211817;
}
`;

export default stylesheet;
