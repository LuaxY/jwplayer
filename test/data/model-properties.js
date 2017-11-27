export const optionalProperties = {
    aspectratio: 1.0,
    fullscreen: false,
    feedData: {},
    errorEvent: null,
    _destroyed: null,
    playOnViewable: false,
    autostartMuted: false,
    autostartFailed: false,
    nextUp: null,
    playReason: null,
    pauseReason: null,
    adModel: null,
    hideAdsControls: null,
    mediaModel: {},
    flashThrottle: null,
    playRejected: false,
    androidhls: true,
    hlsjsdefault: true,
    drm: null,
    preload: 'metadata',
    withCredentials: false,
    minDvrWindow: 120,
    streamType: '',
    qualityLabel: '',
    captionLabel: '',
    captionsTrack: null,
    captionsIndex: -1,
    captionsList: [],
    customButtons: {},
    captions: {},
    containerWidth: 640,
    containerHeight: 360,
    mediaContainer: {},
    viewSetup: true,
    altText: '',
    cues: [],
    scrubbing: false,
    logo: '',
    logoWidth: 0,
    inDom: true,
    touchMode: true,
    iFrame: false,
    intersectionRatio: 1.0,
    activeTab: true,
    visibility: 1.0,
    viewable: true,
    castClicked: false,
    castState: '',
    castActive: '',
};

export const adModelProperties = {
    instreamMode: false,
    sdkplatform: null,
    mediaContext: null,
    mediaSrc: null,
    skipButton: null,
    skipMessage: null,
    skipText: null,
    skipOffset: null,
};

export default {
    id: '',
    autostart: false,
    base: '',
    controls: true,
    stretching: 'uniform',
    defaultPlaybackRate: 1.0,
    displaytitle: true,
    displaydescription: true,
    playbackRateControls: true,
    playbackRates: [1.0],
    repeat: false,
    localization: {},
    nextUpDisplay: true,
    volume: 90,
    mute: false,
    renderCaptionsNatively: true,
    width: 640,
    height: 360,
    audioMode: false,
    state: '',
    playlist: [{}],
    playlistItem: undefined,
    item: 0,
    duration: 0,
    position: 0,
    flashBlocked: false,
    provider: undefined,
    mediaElement: document.createElement('video'),
    playbackRate: 1,
    buffer: 0,
    itemMeta: {},
    castAvailable: false,
    qualityLabels: undefined,
};
