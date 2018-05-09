import React from 'react';

/**
 * Default styles from svg
 * @type {{display: string, fontSize: string, height: string, verticalAlign: string}}
 */
const defaultStyle = {
  display: 'inline-block',
  fontSize: 'inherit',
  height: '1em',
  verticalAlign: '-.125em'
};

/**
 * @returns {*}
 */
const Home = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <g fill="none" fillRule="evenodd">
      <path fill="currentColor" fillOpacity=".192" d="M-184-226h1522V779H-184z" />
      <g transform="translate(-184 -226)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-103h216v720H-24z" />
      <g fill="currentColor" fillRule="nonzero" stroke="currentColor" >
        <path
          strokeWidth=".9"
          d="M21.787 10.474l-9.48-7.367a.495.495 0 0 0-.614 0l-9.48 7.367a.574.574
          0 0 0-.113.77.5.5 0 0 0 .727.12L12 4.235l9.173 7.129a.497.497 0 0 0
          .727-.12.574.574 0 0 0-.113-.77z" />
        <path
          strokeWidth=".8"
          d="M18.315 11.47a.516.516 0 0 0-.528.504v8.018H6.213v-8.018a.516.516
          0 0 0-.528-.503.516.516 0 0 0-.527.503v8.522c0 .278.236.504.527.504H18.315a.516.516
          0 0 0 .527-.504v-8.522a.516.516 0 0 0-.527-.503z" />
      </g>
    </g>
  </svg>
);

/**
 * @returns {*}
 */
const AnalyticTools = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-184-465h1522V540H-184z" />
      <g transform="translate(-184 -465)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-342h216v720H-24z" />
      <g fill="currentColor" fillRule="nonzero" stroke="currentColor" strokeWidth=".8" >
        <path d="M7.537 11.453H3.384a.382.382
        0 0 0-.384.384v9.616c0 .214.17.384.384.384h4.153c.213 0 .384-.17.384-.384v-9.616a.382.382
        0 0 0-.384-.384zm-3.77 9.616v-8.848h3.39v8.848h-3.39zM14.578 3.008h-4.156a.382.382
        0 0 0-.384.384v18.057c0 .214.17.384.384.384h4.156c.214
        0 .384-.17.384-.384V3.392c0-.21-.17-.384-.384-.384zm-.384
        18.061h-3.388V3.776h3.388v17.293zM21.616 21.837c.213 0 .384-.17.384-.384V9.227a.382.382
        0 0 0-.384-.384h-4.153a.382.382 0 0 0-.384.384V21.45c0
        .214.171.384.384.384h4.153v.004zM17.847 9.611h3.39V21.07h-3.39V9.611z" />
      </g>
    </g>
  </svg>
);

/**
 * @returns {*}
 */
const MenuApps = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-184-506h1522V499H-184z" />
      <g transform="translate(-184 -506)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-383h216v720H-24z" />
      <g transform="translate(4 3)">
        <rect width="14.2" height="17.2" x=".9" y=".9" stroke="currentColor" strokeWidth="1.8" rx="3" />
        <rect width="5" height="5" x="8" y="3" fill="currentColor" rx="2" />
      </g>
    </g>
  </svg>
);

/**
 * @returns {*}
 */
const DataAssets = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-184-266h1522V739H-184z" />
      <g transform="translate(-184 -266)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-143h216v720H-24z" />
      <g fill="currentColor" fillRule="nonzero" >
        <path
          d="M20.335 6.649H6.988v13.686h13.347V6.649zm-3.323-2.984H3.665V18.29h1.653V5.82a.83.83
          0 0 1 .833-.832h10.861V3.665zM21.167 22H6.151a.83.83 0 0 1-.833-.833v-1.212H2.833A.83.83
          0 0 1 2 19.122V2.832A.83.83 0 0 1 2.833 2h15.012a.83.83
          0 0 1 .833.833v2.15h2.485a.83.83 0 0 1 .833.833v15.351a.825.825 0 0 1-.829.833z" />
        <path
          d="M10.09 14.176h7.139a.83.83 0 0 1 .832.832.83.83 0 0 1-.832.833h-7.14a.834.834
          0 0 1 0-1.665zM10.09 10.657h7.139a.83.83 0 0 1 .832.833.83.83 0 0 1-.832.832h-7.14a.834.834 0 0 1 0-1.665z" />
      </g>
    </g>
  </svg>
);


/**
 *
 */
const Dictionary = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-184-427h1522V578H-184z" />
      <g transform="translate(-184 -427)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-304h216v720H-24z" />
      <g fill="currentColor" fillRule="nonzero" >
        <path
          d="M7.918 12.445h8.535a.834.834
          0 0 0 .837-.833.834.834 0 0 0-.837-.832H7.918a.834.834
          0 0 0-.836.832c0 .457.375.833.836.833z" />
        <path
          d="M19.698 20.335H6.792c-1.172 0-2.123-.841-2.123-1.874V7.633C5.122
          7.865 5.645 8 6.2 8h13.498v12.335zM6.2 3.665h12.416c-.208.4-.314.817-.314 1.253
          0 .531.16 1.009.38 1.413H6.2c-.845 0-1.53-.6-1.53-1.335 0-.73.685-1.33 1.53-1.33zm15.167
          3.498c0-.27-.13-.526-.359-.681-.27-.184-1.032-.87-1.032-1.564 0-.457.346-.926 1.032-1.4a.829.829
          0 0 0 .323-.934.837.837 0 0 0-.796-.584H6.2C4.437 2 3 3.347
          3 5v13.457C3 20.408 4.702 22 6.792 22H20.53a.834.834 0 0 0 .836-.833V7.163z" />
      </g>
    </g>
  </svg>
);

/**
 * @constructor
 */
const KnowledgeBase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <defs>
      <path id="b" d="M160 123h1200v720H160z" />
      <filter id="a" width="104.2%" height="107.1%" x="-2.1%" y="-3.5%" filterUnits="objectBoundingBox">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="8.5" />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.531070433 0 0 0 0 0.624745962 0 0 0 0 0.761001276 0 0 0 0.348194067 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-184-546h1522V459H-184z" />
      <g transform="translate(-184 -546)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-423h216v720H-24z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M7.171 16.11c2.005 0 3.664-1.548 3.908-3.543.298-.102.78-.192 1.324.002.246
        1.994 1.904 3.541 3.908 3.541 1.916 0 3.516-1.414
        3.868-3.28H22v-1.545h-1.821c-.352-1.867-1.952-3.28-3.868-3.28-1.814 0-3.345
        1.268-3.801 2.988a3.388 3.388 0 0 0-1.536.004c-.454-1.722-1.987-2.993-3.803-2.993-1.916
        0-3.516 1.414-3.868 3.28H1.62v1.546h1.683c.352 1.866 1.952 3.28 3.868 3.28zm9.14-6.56c1.345
        0 2.438 1.125 2.438 2.507 0 1.383-1.093 2.508-2.438 2.508-1.344 0-2.438-1.125-2.438-2.508
        0-1.382 1.094-2.508 2.438-2.508zm-9.14 0c1.345 0 2.438 1.125 2.438 2.507
        0 1.383-1.093 2.508-2.438 2.508-1.344 0-2.438-1.125-2.438-2.508 0-1.382 1.094-2.508 2.438-2.508z" />
    </g>
  </svg>
);

/**
 * @returns {*}
 */
const Measures = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <defs>
      <path id="b" d="M160 123h1200v720H160z" />
      <filter id="a" width="104.2%" height="107.1%" x="-2.1%" y="-3.5%" filterUnits="objectBoundingBox">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="8.5" />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.531070433 0 0 0 0 0.624745962 0 0 0 0 0.761001276 0 0 0 0.348194067 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-184-346h1522V659H-184z" />
      <g transform="translate(-184 -346)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-223h216v720H-24z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M18.578 20.335H5.828l4.678-7.53a.816.816 0 0 0 .123-.438V3.665h3.193v8.702c0
        .155.04.306.123.437l4.678 7.53h-.045zm1.674-.58l-4.74-7.624V4.514c.424-.249.696-.66.696-1.13
        0-.776-.728-1.384-1.654-1.384h-4.65c-.925 0-1.653.608-1.653 1.384
        0 .47.267.881.695 1.13v7.62l-4.74 7.621a1.327 1.327
        0 0 0-.032 1.367c.308.543.962.878 1.707.878h12.693c.744
        0 1.399-.335 1.707-.878a1.318 1.318 0 0 0-.029-1.367z" />
    </g>
  </svg>
);

/**
 * @returns {*}
 */
const Projects = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <defs>
      <path id="b" d="M160 123h1200v720H160z" />
      <filter id="a" width="104.2%" height="107.1%" x="-2.1%" y="-3.5%" filterUnits="objectBoundingBox">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="8.5" />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.531070433 0 0 0 0 0.624745962 0 0 0 0 0.761001276 0 0 0 0.348194067 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-184-307h1522V698H-184z" />
      <g transform="translate(-184 -307)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-184h216v720H-24z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        stroke="currentColor"
        strokeWidth=".8"
        d="M18.083 7.384h-4.257a1.88 1.88 0 0 1-1.878-1.878.502.502
        0 0 0-.504-.504H5.887A2.891 2.891 0 0 0 3 7.889v9.653a2.891 2.891
        0 0 0 2.887 2.887h12.196a2.891 2.891 0 0 0 2.887-2.887v-7.275a2.888 2.888
        0 0 0-2.887-2.883zm1.879 10.154a1.88 1.88 0 0 1-1.879 1.879H5.887a1.88 1.88
        0 0 1-1.879-1.879v-9.65A1.88 1.88 0 0 1 5.887 6.01h5.097a2.892 2.892
        0 0 0 2.842 2.383h4.257a1.88 1.88 0 0 1 1.879 1.878v7.267z" />
    </g>
  </svg>
);

/**
 * @returns {*}
 */
const SoftwareCodes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={defaultStyle}>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-184-387h1522V618H-184z" />
      <g transform="translate(-184 -387)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-24-264h216v720H-24z" />
      <g fill="currentColor" fillRule="nonzero" stroke="currentColor" strokeWidth=".2" >
        <path
          d="M14.727 4.19l-.67-.211a.302.302
          0 0 0-.258.019.36.36 0 0 0-.177.21l-4.574 14.15a.356.356
          0 0 0 .225.451l.67.212a.3.3 0 0 0 .258-.019.36.36
          0 0 0 .177-.21l4.574-14.15a.356.356 0 0 0-.225-.451zM8.364 8.367a.338.338
          0 0 0-.11-.248l-.546-.538a.349.349 0 0 0-.503 0l-5.096 5.014a.337.337
          0 0 0-.109.247c0 .093.036.176.11.248l5.094 5.013a.348.348
          0 0 0 .503 0l.547-.538a.338.338 0 0 0 .11-.247.338.338
          0 0 0-.11-.248l-4.297-4.228 4.297-4.228a.337.337
          0 0 0 .11-.247zM21.89 12.595L16.796 7.58a.349.349
          0 0 0-.503 0l-.546.538a.337.337 0 0 0-.11.248c0 .093.037.175.11.247l4.297 4.228-4.297 4.228a.337.337
          0 0 0-.11.248c0 .093.037.176.11.247l.546.538a.348.348 0 0 0 .503 0l5.096-5.013a.338.338
          0 0 0 .109-.248.337.337 0 0 0-.11-.247z" />
      </g>
    </g>
  </svg>
);

/**
 * @returns {*}
 */
const Notification = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={defaultStyle}>
    <g fill="none" fillRule="evenodd" transform="translate(-1111 -156)">
      <path fill="#FFF" fillOpacity=".192" d="M0 0h1522v1005H0z" />
      <use fill="#000" filter="url(#a)" />
      <use fill="#FFF" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M1130.461 158.556c-.35-.35-.77-.524-1.26-.524h-16.417c-.49
         0-.91.175-1.26.524-.35.35-.524.77-.524 1.26v12.134c0 .491.175.911.524 1.26.35.35.77.525
         1.26.525h16.417c.49 0 .91-.175 1.26-.524.35-.35.524-.77.524-1.26v-12.135c0-.49-.174-.91-.524-1.26zm-.903
         13.394c0 .097-.036.18-.106.251a.342.342 0 0 1-.251.106h-16.417a.342.342 0 0 1-.25-.106.343.343
         0 0 1-.106-.25v-8.566c.237.268.494.513.769.736 1.993 1.532 3.576 2.788
         4.751 3.77.38.32.688.568.926.747.238.178.56.359.964.54.406.183.787.274 1.144.274h.022c.357
         0 .738-.09 1.143-.273.405-.182.727-.362.965-.541.238-.179.546-.428.926-.747 1.174-.982 2.758-2.238
         4.75-3.77.276-.223.532-.468.77-.736v8.565zm0-11.844v.123c0 .439-.173.927-.519
         1.466-.345.54-.72.969-1.12 1.288-1.436 1.13-2.926 2.31-4.473 3.536l-.39.329a13.94 13.94 0
         0 1-.513.418 10.34 10.34 0 0 1-.496.351c-.205.138-.393.24-.564.307-.17.067-.33.1-.48.1H1120.983c-.15
         0-.309-.033-.48-.1a2.971 2.971 0 0 1-.563-.307c-.204-.137-.37-.254-.496-.35a14.173 14.173 0
         0 1-.513-.42l-.39-.328a1640.641 1640.641 0 0 0-4.473-3.536c-1.093-.862-1.64-1.918-1.64-3.167
         0-.096.036-.18.107-.25a.343.343
         0 0 1 .25-.107h16.417c.06.034.112.043
         .156.028.045-.015.078.013.1.084.023.07.043.104.062
         .1.019-.004.03.043.033.14l.006.145v.15z" />
      <circle cx="1132" cy="158" r="4" fill="#548DE1" stroke="#FFF" strokeWidth="2" />
    </g>
  </svg>
);

/**
 * @returns {*}
 */
const MenuOpened = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 18" style={defaultStyle}>
    <g fill="none" fillRule="evenodd">
      <path fill="#548DE1" fillOpacity=".192" d="M-253-156h1522V849H-253z" />
      <g transform="translate(-253 -156)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#FFF" />
      </g>
      <path fill="#FFF" d="M-93-33h216v720H-93z" />
      <path d="M-93-33h215v74H-93z" />
      <g fill="currentColor">
        <path d="M0 9l4-6v12z" />
        <rect width="22" height="4" x="8" rx="1" />
        <rect width="22" height="4" x="8" y="7" rx="1" />
        <rect width="22" height="4" x="8" y="14" rx="1" />
      </g>
    </g>
  </svg>
);

/**
 * @returns {*}
 * @constructor
 */
const MenuClosed = () => (
  <svg
    version="1.1"
    viewBox="0 0 23 20"
    style={defaultStyle} >
    <g>
      <path
        fill="currentColor"
        d="M1.5,0.977h20c0.553,0,1,0.448,1,1v2c0,0.552-0.447,1-1,1h-20c-0.552,0-1-0.448-1-1v-2
        C0.5,1.424,0.948,0.977,1.5,0.977z" />
      <path
        fill="currentColor"
        d="M1.5,7.977h20c0.553,0,1,0.448,1,1v2c0,0.553-0.447,1-1,1h-20c-0.552,0-1-0.447-1-1v-2
        C0.5,8.424,0.948,7.977,1.5,7.977z" />
      <path
        fill="currentColor"
        d="M1.5,14.977h20c0.553,0,1,0.447,1,1v2c0,0.553-0.447,1-1,1h-20c-0.552,0-1-0.447-1-1v-2
        C0.5,15.424,0.948,14.977,1.5,14.977z" />
    </g>
  </svg>
);

/**
 * Wrench icon
 * @returns {*}
 * @constructor
 */
const Wrench = () => (
  <svg viewBox="0 0 20 20" style={defaultStyle}>
    <path
      fill="currentColor"
      fillRule="nonzero"
      stroke="currentColor"
      d="M1.404 4.074l.222-.52 2.983 2.997h1.985l-.002-1.993-2.958-2.98.534-.215A4.984
      4.984 0 0 1 6.037 1c2.779 0 5.04 2.271 5.04 5.063 0 .553-.091 1.1-.27 1.626l7.558
      7.595c.41.41.635.958.635 1.54 0 .58-.225 1.128-.635 1.538a2.143 2.143 0
      0 1-1.531.638 2.144 2.144 0 0 1-1.531-.638L7.788 10.81c-.561.21-1.149.315-1.751.315C3.26
      11.125 1 8.855 1 6.063c0-.69.136-1.358.404-1.99zm4.633 6.286c.586 0 1.155-.118 1.69-.35l.238-.104
      7.876 7.915c.531.534 1.456.534 1.986 0 .266-.266.412-.621.412-.998s-.146-.731-.412-.998L9.92
      7.88l.092-.233a4.29 4.29 0 0 0 .305-1.584c0-2.369-1.92-4.297-4.279-4.297a4.21 4.21 0 0
      0-1.018.125L7.354 4.24l.003 3.076H4.294l-2.38-2.392c-.102.369-.152.75-.152 1.138
      0 2.37 1.917 4.297 4.275 4.297z" />
  </svg>
);

/**
 * Arrow right icon
 * @returns {*}
 * @constructor
 */
const ArrowRight = () => (
  <svg viewBox="0 0 10 19" style={defaultStyle}>
    <g
      fill="none"
      fillRule="evenodd">
      <path stroke="#979797" d="M9 10l-6 6V4z" />
      <path fill="#FFF" d="M0 19V0h4v19z" />
    </g>
  </svg>
);


/**
 * Oval icon
 * @constructor
 */
const Oval = () => (
  <svg viewBox="0 0 9 9" style={defaultStyle}>
    <circle
      cx="3.5"
      cy="3.5"
      r="3.5"
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeWidth="2"
      transform="translate(1 1)" />
  </svg>

);


export const iconsSet = {
  HOME: 'HOME',
  ANALYTICTOOLS: 'ANALYTICTOOLS',
  APPS: 'APPS',
  DATAASSETS: 'DATAASSETS',
  DICTIONARY: 'DICTIONARY',
  KNOWLEDGEBASE: 'KNOWLEDGEBASE',
  MEASURES: 'MEASURES',
  PROJECTS: 'PROJECTS',
  SOFTWARECODES: 'SOFTWARECODES',
  NOTIFICATION: 'NOTIFICATION',
  MENUOPENED: 'MENUOPENED',
  MENUCLOSED: 'MENUCLOSED',
  WRENCH: 'WRENCH',
  ARROWRIGHT: 'ARROWRIGHT',
  OVAL: 'OVAL'
};

export default {
  HOME: Home,
  ANALYTICTOOLS: AnalyticTools,
  APPS: MenuApps,
  DATAASSETS: DataAssets,
  DICTIONARY: Dictionary,
  KNOWLEDGEBASE: KnowledgeBase,
  MEASURES: Measures,
  PROJECTS: Projects,
  SOFTWARECODES: SoftwareCodes,
  NOTIFICATION: Notification,
  MENUOPENED: MenuOpened,
  MENUCLOSED: MenuClosed,
  WRENCH: Wrench,
  ARROWRIGHT: ArrowRight,
  OVAL: Oval
};
