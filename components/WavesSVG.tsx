export function WavesSVG() {
  return (
    <svg
      viewBox="0 0 1820 250"
      preserveAspectRatio="none"
      className="h-full w-full"
      style={{ display: 'block' }}
    >
      <defs>
        <style>{`
          @keyframes wave1 {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(40px); }
          }
          @keyframes wave2 {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-50px); }
          }
          @keyframes wave3 {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(35px); }
          }
          @keyframes wave4 {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-45px); }
          }
          .wave-layer-1 {
            animation: wave1 6s ease-in-out infinite;
            transform-origin: center;
          }
          .wave-layer-2 {
            animation: wave2 7s ease-in-out infinite;
            transform-origin: center;
          }
          .wave-layer-3 {
            animation: wave3 8s ease-in-out infinite;
            transform-origin: center;
          }
          .wave-layer-4 {
            animation: wave4 9s ease-in-out infinite;
            transform-origin: center;
          }
        `}</style>
      </defs>

      {/* Layer 1 - 5 волн */}
      <g className="wave-layer-1">
        <path
          d="M-364,70 Q-260,30 -156,70 Q-52,110 52,70 Q156,30 260,70 Q364,110 468,70 Q572,30 676,70 Q780,110 884,70 Q988,30 1092,70 Q1196,110 1300,70 Q1404,30 1508,70 Q1612,110 1716,70 Q1820,30 1924,70 Q2028,110 2132,70 L2132,250 L-364,250 Z"
          fill="#4ECDC4"
          opacity="0.45"
        />
      </g>

      {/* Layer 2 - 7 волн */}
      <g className="wave-layer-2">
        <path
          d="M-260,100 Q-169,65 -78,100 Q13,135 104,100 Q195,65 286,100 Q377,135 468,100 Q559,65 650,100 Q741,135 832,100 Q923,65 1014,100 Q1105,135 1196,100 Q1287,65 1378,100 Q1469,135 1560,100 Q1651,65 1742,100 Q1833,135 1924,100 Q2015,65 2106,100 L2106,250 L-260,250 Z"
          fill="#4ECDC4"
          opacity="0.38"
        />
      </g>

      {/* Layer 3 - 9 волн */}
      <g className="wave-layer-3">
        <path
          d="M-202,130 Q-124,95 -46,130 Q32,165 110,130 Q188,95 266,130 Q344,165 422,130 Q500,95 578,130 Q656,165 734,130 Q812,95 890,130 Q968,165 1046,130 Q1124,95 1202,130 Q1280,165 1358,130 Q1436,95 1514,130 Q1592,165 1670,130 Q1748,95 1826,130 Q1904,165 1982,130 Q2060,95 2138,130 L2138,250 L-202,250 Z"
          fill="#4ECDC4"
          opacity="0.32"
        />
      </g>

      {/* Layer 4 - 11 волн */}
      <g className="wave-layer-4">
        <path
          d="M-165,160 Q-100,140 -35,160 Q30,180 95,160 Q160,140 225,160 Q290,180 355,160 Q420,140 485,160 Q550,180 615,160 Q680,140 745,160 Q810,180 875,160 Q940,140 1005,160 Q1070,180 1135,160 Q1200,140 1265,160 Q1330,180 1395,160 Q1460,140 1525,160 Q1590,180 1655,160 Q1720,140 1785,160 Q1850,180 1915,160 Q1980,140 2045,160 Q2110,180 2175,160 L2175,250 L-165,250 Z"
          fill="#4ECDC4"
          opacity="0.25"
        />
      </g>
    </svg>
  );
}
