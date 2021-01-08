<template>
<svg width="23px" height="26px" viewBox="0 0 23 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Refresh</title>
    <defs>
        <rect id="path-1" x="0.1875" y="0" width="194.625" height="54" rx="12"></rect>
        <filter x="-0.3%" y="-0.9%" width="100.5%" height="101.9%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.06 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
            <feOffset dx="0" dy="0.5" in="SourceAlpha" result="shadowOffsetInner2"></feOffset>
            <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.25 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                <feMergeNode in="shadowMatrixInner2"></feMergeNode>
            </feMerge>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="main" transform="translate(-121.000000, -238.000000)">
            <g id="Group-5" transform="translate(90.000000, 225.000000)">
                <path d="M42.7372202,13 L50.866494,18.2057234 L42.7372202,23.4123141 L42.737,19.054 L42.4853351,19.0585328 C37.8280661,19.1962083 34.0950012,23.0250284 34.0950012,27.7265693 C34.0950012,32.516043 37.967608,36.3993063 42.7450052,36.3993063 C47.2127323,36.3993063 50.889849,32.9479021 51.3474342,28.5911547 C52.2539547,28.5902875 53.3040652,28.6024281 53.9545455,28.6024281 C53.4952302,34.4065106 48.652093,39 42.7450052,39 C36.5343023,39 31.5,33.9529718 31.5,27.7265693 C31.5,21.5037082 36.5299783,16.4574754 42.7370024,16.4531413 L42.7372202,13 Z" id="Refresh" fill="currentColor"></path>
            </g>
        </g>
    </g>
</svg>
</template>