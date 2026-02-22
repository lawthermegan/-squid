const el = document.getElementById('squid');
const frames = ['(o o)', '<( V )>', ' ||||'];

// Audio
const ctx = new AudioContext();
const osc = ctx.createOscillator();
osc.frequency.value = 20;
osc.connect(ctx.destination);
osc.start();

// Loop
setInterval(() => {
    const indent = ' '.repeat(Math.random() * 5 + 10);
    el.innerText = Math.random() > 0.3 
        ? frames.map(f => indent + f).join('\n') 
        : 'PHASING...';
}, 100);
```
