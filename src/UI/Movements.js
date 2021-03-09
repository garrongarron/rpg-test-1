let keysToMove = `
<svg width="218" height="180" style="background-color: none;">
    <rect x="5" y="65" rx="5" ry="5" width="50" height="50"
        style="fill:none;stroke:white;stroke-width:5;opacity:.8" />
    <text x="22" y="98" fill="white" style="font-size:25px; font-family:sans-serif;">A</text>

    <rect x="65" y="5" rx="5" ry="5" width="50" height="50"
        style="fill:none;stroke:white;stroke-width:5;opacity:.8" />
    <text x="78" y="38" fill="white" style="font-size:25px; font-family:sans-serif;">W</text>

    <rect x="65" y="65" rx="5" ry="5" width="50" height="50"
        style="fill:none;stroke:white;stroke-width:5;opacity:.8" />
    <text x="81" y="98" fill="white" style="font-size:25px; font-family:sans-serif;">S</text>

    <rect x="125" y="5" rx="5" ry="5" width="50" height="50"
        style="fill:none;stroke:rgb(0, 81, 255);stroke-width:5;opacity:.8" />
    <text x="141" y="38" fill="rgb(0, 81, 255)" style="font-size:25px; font-family:sans-serif;">E</text>

    <rect x="125" y="65" rx="5" ry="5" width="50" height="50"
        style="fill:none;stroke:white;stroke-width:5;opacity:.8" />
    <text x="141" y="98" fill="white" style="font-size:25px; font-family:sans-serif;">D</text>

    <rect x="5" y="125" rx="5" ry="5" width="90" height="50"
        style="fill:none;stroke:rgb(0, 81, 255);stroke-width:5;opacity:.8" />
    <text x="22" y="158" fill="rgb(0, 81, 255)" style="font-size:25px; font-family:sans-serif;">Shift</text>

    <rect x="105" y="125" rx="5" ry="5" width="105" height="50"
        style="fill:none;stroke:rgb(0, 81, 255);stroke-width:5;opacity:.8" />
    <text x="120" y="158" fill="rgb(0, 81, 255)" style="font-size:25px; font-family:sans-serif;">Space</text>
</svg>`
let keys = document.createElement('div')
keys.classList.add('keys-to-move')
keys.innerHTML = keysToMove
document.body.appendChild(keys)