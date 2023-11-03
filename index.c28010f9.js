const t=(t,e)=>h(t,e,"2d"),h=(t,h,i)=>{let d=e(h),l=document.createElement("canvas");h.appendChild(l),l.id=t,l.width=d.width,l.height=d.height;let r={context:l.getContext(i),canvas:l,resizeCallback:()=>{d=e(h),(l.width!==d.width||l.height!==d.height)&&(l.width=d.width,l.height=d.height)}};return r},e=t=>{let h={width:t.clientWidth,height:t.clientHeight};return h};class i{constructor(t){this.pipeline=[],this.canvasContext=t}addPipe(t){this.pipeline=this.pipeline.concat(t)}execute(t,h){let e={canvasContext:this.canvasContext,gameState:h};for(let h of this.pipeline)h.executeDelta(t,e)}}const d=(t,h=1/120,e=.1)=>{let i=new Date,d=!0,l=()=>{let h=new Date,r=(h.getTime()-i.getTime())/1e3;r=r>e?e:r,i=h,i=h,t(r),!0===d&&window.requestAnimationFrame(()=>{l()})};return window.requestAnimationFrame(()=>{l()}),()=>{d=!1}},l={platforms:[{x:-1472,y:512,width:7552,height:128},{x:7072,y:448,width:7168,height:192},{x:14432,y:384,width:320,height:256},{x:14944,y:320,width:384,height:320},{x:15488,y:416,width:384,height:224},{x:16032,y:512,width:576,height:128},{x:16960,y:352,width:800,height:288},{x:17856,y:512,width:1152,height:128},{x:6304,y:512,width:736,height:128},{x:19136,y:512,width:4768,height:128},{x:24064,y:512,width:7808,height:128}],obstacles:[{x:0,y:640,width:224,height:256},{x:6048,y:640,width:288,height:256},{x:14208,y:640,width:288,height:256},{x:14624,y:640,width:448,height:256},{x:15328,y:640,width:992,height:256},{x:16576,y:640,width:1344,height:256},{x:18976,y:640,width:192,height:256},{x:11936,y:384,width:64,height:64},{x:8928,y:320,width:64,height:128},{x:11584,y:224,width:64,height:64},{x:10752,y:384,width:64,height:64},{x:19936,y:448,width:64,height:64},{x:20672,y:448,width:64,height:64},{x:23264,y:448,width:64,height:64},{x:23840,y:640,width:256,height:256},{x:2368,y:448,width:64,height:64},{x:3968,y:448,width:64,height:64},{x:4864,y:448,width:64,height:64},{x:22336,y:448,width:64,height:64},{x:21472,y:448,width:64,height:64},{x:13344,y:320,width:64,height:128},{x:25728,y:384,width:64,height:128},{x:27360,y:384,width:64,height:128},{x:28288,y:448,width:64,height:64},{x:31840,y:640,width:160,height:256},{x:6912,y:640,width:288,height:256}],loadPoint:[{x:29984,y:0,width:32,height:32}]},r={obstacles:[{x:0,y:640,width:224,height:256},{x:4736,y:640,width:416,height:256},{x:5344,y:640,width:256,height:256},{x:6688,y:640,width:256,height:256},{x:13088,y:640,width:160,height:256},{x:14112,y:640,width:224,height:256},{x:14592,y:640,width:288,height:256},{x:16256,y:640,width:992,height:256},{x:17792,y:640,width:448,height:256},{x:19680,y:640,width:448,height:256},{x:24992,y:384,width:64,height:128},{x:2400,y:448,width:64,height:64},{x:768,y:448,width:64,height:64},{x:1856,y:448,width:64,height:64},{x:1312,y:448,width:64,height:64},{x:4032,y:448,width:64,height:64},{x:3488,y:448,width:64,height:64},{x:2944,y:448,width:64,height:64},{x:18688,y:448,width:64,height:64},{x:19680,y:448,width:64,height:64},{x:20832,y:448,width:64,height:64},{x:21376,y:448,width:64,height:64},{x:21920,y:448,width:64,height:64},{x:22464,y:448,width:64,height:64},{x:23008,y:448,width:64,height:64},{x:23552,y:448,width:64,height:64},{x:8096,y:480,width:64,height:64},{x:7552,y:480,width:64,height:64},{x:10368,y:448,width:64,height:64},{x:9824,y:448,width:64,height:64},{x:10912,y:448,width:64,height:64},{x:12320,y:448,width:64,height:64},{x:11776,y:448,width:64,height:64},{x:26176,y:384,width:64,height:128},{x:27264,y:384,width:64,height:128},{x:28160,y:448,width:64,height:64},{x:28928,y:448,width:64,height:64},{x:31872,y:640,width:128,height:256},{x:25888,y:640,width:320,height:256},{x:24096,y:640,width:288,height:256},{x:15680,y:640,width:224,height:256},{x:15136,y:640,width:288,height:256},{x:9184,y:640,width:160,height:256},{x:6112,y:640,width:256,height:256}],platforms:[{x:64,y:512,width:4704,height:128},{x:4896,y:448,width:480,height:192},{x:5536,y:384,width:640,height:256},{x:13184,y:320,width:960,height:320},{x:14304,y:320,width:320,height:320},{x:14784,y:320,width:384,height:320},{x:15328,y:320,width:384,height:320},{x:15872,y:512,width:608,height:128},{x:16608,y:512,width:320,height:128},{x:17088,y:512,width:800,height:128},{x:18080,y:512,width:1664,height:128},{x:19872,y:512,width:4288,height:128},{x:24320,y:512,width:1600,height:128},{x:6272,y:448,width:480,height:192},{x:6848,y:544,width:2368,height:96},{x:9312,y:512,width:3808,height:128},{x:26176,y:512,width:5728,height:128}]},a={obstacles:[{x:0,y:640,width:224,height:256},{x:7040,y:640,width:448,height:256},{x:16512,y:640,width:384,height:256},{x:18912,y:640,width:448,height:256},{x:24992,y:384,width:64,height:128},{x:3904,y:448,width:64,height:64},{x:4032,y:384,width:64,height:128},{x:18880,y:448,width:64,height:64},{x:18976,y:384,width:64,height:128},{x:20832,y:448,width:64,height:64},{x:21376,y:448,width:64,height:64},{x:21920,y:448,width:64,height:64},{x:22464,y:448,width:64,height:64},{x:23008,y:448,width:64,height:64},{x:23552,y:448,width:64,height:64},{x:8672,y:416,width:64,height:128},{x:7584,y:416,width:64,height:128},{x:26176,y:384,width:64,height:128},{x:27264,y:384,width:64,height:128},{x:28160,y:448,width:64,height:64},{x:28928,y:448,width:64,height:64},{x:31872,y:640,width:128,height:256},{x:25888,y:640,width:320,height:256},{x:23584,y:640,width:640,height:256},{x:15840,y:640,width:224,height:256},{x:9184,y:640,width:160,height:256},{x:6464,y:640,width:256,height:256},{x:2048,y:96,width:64,height:64},{x:4352,y:640,width:416,height:256},{x:3904,y:640,width:320,height:256},{x:2400,y:640,width:384,height:256},{x:1792,y:640,width:288,height:256},{x:6624,y:384,width:64,height:64},{x:11872,y:384,width:64,height:128},{x:13216,y:384,width:64,height:64},{x:10464,y:640,width:448,height:288},{x:12032,y:640,width:160,height:288},{x:13248,y:640,width:224,height:256},{x:14592,y:640,width:448,height:256},{x:15808,y:384,width:64,height:128},{x:17696,y:384,width:64,height:64},{x:17824,y:384,width:64,height:128},{x:13440,y:256,width:64,height:64}],platforms:[{x:64,y:512,width:1024,height:128},{x:13440,y:320,width:960,height:320},{x:14400,y:256,width:288,height:384},{x:16832,y:448,width:928,height:192},{x:17760,y:512,width:1280,height:128},{x:19328,y:512,width:4288,height:128},{x:24192,y:512,width:1792,height:128},{x:6624,y:448,width:736,height:192},{x:7456,y:544,width:2240,height:96},{x:9696,y:416,width:864,height:224},{x:26176,y:512,width:5728,height:128},{x:1088,y:352,width:736,height:288},{x:2048,y:160,width:448,height:480},{x:2720,y:512,width:1376,height:128},{x:4192,y:288,width:352,height:352},{x:10688,y:288,width:64,height:352},{x:10880,y:512,width:1184,height:128},{x:12160,y:512,width:1056,height:128},{x:13216,y:448,width:64,height:192},{x:14912,y:512,width:1632,height:128},{x:4672,y:384,width:1856,height:256}]},y={obstacles:[{x:0,y:640,width:224,height:320},{x:4864,y:640,width:416,height:320},{x:12800,y:640,width:384,height:320},{x:14080,y:640,width:288,height:320},{x:14624,y:640,width:352,height:320},{x:15296,y:640,width:320,height:320},{x:16768,y:640,width:1632,height:320},{x:9440,y:384,width:64,height:64},{x:8928,y:384,width:64,height:64},{x:8416,y:384,width:64,height:64},{x:10656,y:384,width:64,height:64},{x:10752,y:320,width:64,height:128},{x:12096,y:384,width:64,height:64},{x:22816,y:448,width:64,height:64},{x:20128,y:448,width:64,height:64},{x:20672,y:448,width:64,height:64},{x:21760,y:384,width:64,height:128},{x:23360,y:448,width:64,height:64},{x:23904,y:448,width:64,height:64},{x:1600,y:640,width:192,height:320},{x:2816,y:640,width:128,height:320},{x:3488,y:480,width:64,height:64},{x:3648,y:480,width:64,height:64},{x:6112,y:416,width:64,height:128},{x:7136,y:640,width:544,height:352},{x:18656,y:640,width:640,height:320},{x:21792,y:640,width:384,height:320},{x:15936,y:640,width:320,height:320},{x:30432,y:640,width:448,height:320},{x:29408,y:640,width:384,height:320},{x:26752,y:640,width:384,height:320},{x:25088,y:448,width:64,height:64},{x:25536,y:448,width:64,height:64},{x:26048,y:448,width:64,height:64},{x:31840,y:640,width:160,height:320},{x:23936,y:640,width:256,height:320},{x:3968,y:480,width:64,height:64},{x:3808,y:480,width:64,height:64},{x:4736,y:480,width:64,height:64},{x:5184,y:480,width:64,height:64},{x:4896,y:480,width:64,height:64},{x:9952,y:384,width:64,height:64},{x:11840,y:320,width:64,height:128},{x:11744,y:384,width:64,height:64},{x:16224,y:448,width:64,height:64},{x:15424,y:320,width:64,height:128},{x:14752,y:352,width:64,height:64}],platforms:[{x:32,y:512,width:1600,height:128},{x:1760,y:448,width:1088,height:192},{x:7648,y:448,width:5184,height:192},{x:13152,y:448,width:960,height:192},{x:14336,y:384,width:320,height:256},{x:14944,y:384,width:384,height:256},{x:15584,y:320,width:384,height:320},{x:16224,y:512,width:576,height:128},{x:17184,y:512,width:320,height:128},{x:18368,y:512,width:320,height:128},{x:19264,y:512,width:2560,height:128},{x:22144,y:512,width:1824,height:128},{x:24160,y:512,width:2624,height:128},{x:2912,y:544,width:2048,height:96},{x:5120,y:544,width:2048,height:96},{x:27104,y:512,width:2336,height:128},{x:29760,y:512,width:704,height:128},{x:30848,y:512,width:1024,height:128},{x:24960,y:192,width:1408,height:64},{x:17760,y:512,width:320,height:128},{x:15424,y:448,width:64,height:192},{x:14752,y:416,width:64,height:224}]},x={obstacles:[{x:0,y:640,width:224,height:256},{x:7264,y:640,width:576,height:256},{x:16512,y:640,width:384,height:256},{x:24992,y:384,width:64,height:128},{x:3488,y:448,width:64,height:64},{x:3616,y:384,width:64,height:128},{x:18880,y:448,width:64,height:64},{x:19200,y:448,width:64,height:64},{x:20416,y:448,width:64,height:64},{x:21920,y:448,width:64,height:64},{x:22464,y:448,width:64,height:64},{x:23008,y:448,width:64,height:64},{x:23328,y:448,width:64,height:64},{x:8672,y:384,width:64,height:128},{x:26176,y:384,width:64,height:128},{x:27392,y:384,width:64,height:128},{x:28320,y:448,width:64,height:64},{x:28640,y:448,width:64,height:64},{x:31872,y:640,width:128,height:256},{x:25888,y:640,width:320,height:256},{x:23040,y:640,width:1184,height:256},{x:6016,y:640,width:704,height:192},{x:2144,y:640,width:704,height:192},{x:1056,y:640,width:736,height:256},{x:12160,y:448,width:64,height:64},{x:10464,y:640,width:1568,height:288},{x:12032,y:640,width:1920,height:288},{x:15040,y:384,width:64,height:128},{x:17696,y:384,width:64,height:64},{x:17824,y:384,width:64,height:128},{x:4544,y:448,width:64,height:64},{x:4864,y:448,width:64,height:64},{x:12352,y:448,width:64,height:64},{x:15232,y:384,width:64,height:128},{x:16544,y:384,width:64,height:128},{x:16832,y:384,width:64,height:64},{x:19328,y:448,width:64,height:64},{x:13920,y:448,width:64,height:64},{x:22144,y:640,width:352,height:256},{x:20448,y:640,width:416,height:256},{x:21184,y:640,width:448,height:256},{x:28480,y:448,width:64,height:64},{x:27296,y:384,width:64,height:128}],platforms:[{x:64,y:512,width:1024,height:128},{x:13920,y:512,width:2688,height:128},{x:16832,y:448,width:928,height:192},{x:17760,y:512,width:2720,height:128},{x:23680,y:512,width:2240,height:128},{x:6688,y:512,width:608,height:128},{x:7808,y:512,width:2688,height:128},{x:26176,y:512,width:5728,height:128},{x:1728,y:512,width:448,height:128},{x:2816,y:512,width:3232,height:128},{x:10880,y:512,width:96,height:128},{x:11360,y:512,width:96,height:128},{x:11840,y:512,width:128,height:128},{x:12128,y:512,width:96,height:128},{x:20832,y:512,width:384,height:128},{x:21600,y:512,width:576,height:128},{x:12320,y:512,width:96,height:128},{x:12832,y:512,width:96,height:128},{x:13344,y:512,width:96,height:128},{x:22464,y:512,width:608,height:128},{x:23328,y:512,width:64,height:128}]},g={obstacles:[{x:0,y:640,width:224,height:320},{x:4672,y:640,width:736,height:320},{x:6112,y:640,width:256,height:320},{x:7264,y:640,width:448,height:320},{x:12800,y:640,width:320,height:320},{x:14016,y:640,width:352,height:320},{x:14624,y:640,width:352,height:320},{x:15296,y:640,width:320,height:320},{x:16768,y:640,width:448,height:320},{x:17472,y:640,width:544,height:320},{x:18880,y:640,width:416,height:320},{x:25120,y:640,width:416,height:320},{x:9760,y:448,width:64,height:64},{x:9056,y:384,width:64,height:64},{x:8288,y:384,width:64,height:64},{x:9952,y:160,width:64,height:64},{x:10464,y:192,width:64,height:64},{x:10752,y:448,width:64,height:64},{x:11488,y:384,width:64,height:64},{x:12128,y:384,width:64,height:64},{x:22816,y:448,width:64,height:64},{x:20128,y:448,width:64,height:64},{x:20672,y:448,width:64,height:64},{x:21760,y:384,width:64,height:128},{x:24448,y:448,width:64,height:64},{x:23136,y:448,width:64,height:64},{x:23904,y:448,width:64,height:64},{x:928,y:384,width:64,height:128},{x:1056,y:384,width:64,height:128},{x:2048,y:448,width:64,height:64},{x:4640,y:256,width:64,height:64},{x:15936,y:640,width:320,height:320},{x:26176,y:640,width:288,height:320},{x:26976,y:640,width:224,height:320},{x:28128,y:640,width:352,height:320},{x:28544,y:640,width:320,height:320},{x:29280,y:640,width:864,height:320},{x:14688,y:480,width:64,height:64},{x:8064,y:96,width:64,height:64},{x:17984,y:448,width:64,height:64},{x:27648,y:192,width:64,height:64},{x:31936,y:640,width:64,height:320},{x:30336,y:640,width:576,height:320},{x:22912,y:448,width:64,height:64},{x:23008,y:384,width:64,height:128},{x:18976,y:352,width:64,height:64},{x:15584,y:320,width:64,height:64},{x:12128,y:128,width:64,height:64}],platforms:[{x:32,y:512,width:3008,height:128},{x:3040,y:448,width:512,height:192},{x:5184,y:320,width:960,height:320},{x:6336,y:128,width:960,height:512},{x:7648,y:448,width:2080,height:192},{x:13088,y:448,width:960,height:192},{x:14336,y:384,width:320,height:256},{x:14944,y:320,width:384,height:320},{x:15584,y:384,width:384,height:256},{x:16224,y:512,width:576,height:128},{x:17184,y:512,width:320,height:128},{x:17984,y:512,width:960,height:128},{x:19264,y:512,width:5888,height:128},{x:3552,y:384,width:544,height:256},{x:4096,y:320,width:608,height:320},{x:9248,y:160,width:608,height:64},{x:10080,y:192,width:352,height:64},{x:10560,y:192,width:704,height:64},{x:11456,y:128,width:640,height:64},{x:13248,y:-96,width:1504,height:64},{x:14976,y:-192,width:13344,height:64},{x:25504,y:576,width:352,height:64},{x:25856,y:512,width:352,height:128},{x:26432,y:448,width:576,height:192},{x:27168,y:320,width:480,height:320},{x:27648,y:256,width:512,height:384},{x:28448,y:160,width:128,height:480},{x:28832,y:512,width:480,height:128},{x:14656,y:544,width:96,height:96},{x:9856,y:448,width:864,height:192},{x:9728,y:512,width:128,height:128},{x:10720,y:512,width:128,height:128},{x:10848,y:448,width:1984,height:192},{x:30016,y:512,width:352,height:128},{x:30880,y:512,width:352,height:128},{x:31360,y:512,width:608,height:128},{x:31232,y:576,width:128,height:64},{x:18944,y:416,width:96,height:224},{x:12224,y:128,width:608,height:64}]},w={obstacles:[{x:0,y:640,width:224,height:320},{x:1760,y:448,width:64,height:64},{x:1792,y:640,width:480,height:320},{x:4e3,y:192,width:64,height:64},{x:6784,y:128,width:64,height:128},{x:7872,y:192,width:64,height:64},{x:8e3,y:192,width:64,height:64},{x:8096,y:192,width:64,height:64},{x:8224,y:192,width:64,height:64},{x:9760,y:128,width:64,height:128},{x:9952,y:192,width:64,height:64},{x:10720,y:128,width:64,height:128},{x:10816,y:192,width:64,height:64},{x:12064,y:480,width:64,height:64},{x:12544,y:480,width:64,height:64},{x:13024,y:480,width:64,height:64},{x:13504,y:480,width:64,height:64},{x:13952,y:640,width:192,height:320},{x:14464,y:480,width:64,height:64},{x:15456,y:480,width:64,height:64},{x:14912,y:640,width:192,height:320},{x:16512,y:480,width:64,height:64},{x:15968,y:640,width:128,height:320},{x:16992,y:640,width:128,height:320},{x:17632,y:480,width:64,height:64},{x:18080,y:640,width:128,height:320},{x:18720,y:480,width:64,height:64},{x:19136,y:640,width:320,height:320},{x:19936,y:480,width:64,height:64},{x:21280,y:480,width:64,height:64},{x:20480,y:640,width:320,height:320},{x:22624,y:480,width:64,height:64},{x:21824,y:640,width:320,height:320},{x:23968,y:480,width:64,height:64},{x:23168,y:640,width:320,height:320},{x:25440,y:416,width:64,height:128},{x:24512,y:640,width:320,height:320},{x:29440,y:480,width:64,height:64},{x:31936,y:640,width:64,height:320},{x:30752,y:640,width:192,height:320},{x:29664,y:640,width:384,height:320},{x:28448,y:640,width:576,height:320},{x:25536,y:416,width:64,height:128},{x:25632,y:416,width:64,height:128},{x:26368,y:480,width:64,height:64},{x:26528,y:480,width:64,height:64},{x:26656,y:480,width:64,height:64},{x:26816,y:480,width:64,height:64},{x:27904,y:480,width:64,height:64},{x:27744,y:480,width:64,height:64},{x:27456,y:480,width:64,height:64},{x:27616,y:480,width:64,height:64}],platforms:[{x:32,y:512,width:1792,height:128},{x:2176,y:544,width:11808,height:96},{x:1920,y:416,width:320,height:64},{x:2752,y:288,width:736,height:64},{x:3552,y:256,width:960,height:64},{x:4608,y:224,width:352,height:64},{x:5024,y:160,width:320,height:64},{x:5504,y:96,width:384,height:64},{x:5984,y:256,width:864,height:64},{x:7072,y:256,width:1792,height:64},{x:9216,y:256,width:1824,height:64},{x:14112,y:544,width:832,height:96},{x:15072,y:544,width:896,height:96},{x:16096,y:544,width:896,height:96},{x:17120,y:544,width:960,height:96},{x:18208,y:544,width:960,height:96},{x:19424,y:544,width:1088,height:96},{x:20768,y:544,width:1088,height:96},{x:22112,y:544,width:1088,height:96},{x:23456,y:544,width:1088,height:96},{x:24800,y:544,width:4064,height:96},{x:28992,y:544,width:704,height:96},{x:30016,y:544,width:768,height:96},{x:30912,y:544,width:1056,height:96}]};class s{constructor(t=0,h=0,e=100,i=100,d=0,l=0,r=!0,a=1){this.x=this.xPrevious=t,this.y=this.yPrevious=h,this.width=e,this.height=i,this.vectorX=d,this.vectorY=l,this.obeysGravity=r,this.gravityScale=a}applyDelta(t,h){o(this,t,h)}createNewFromDelta(t,h){return n(this,t,h)}}const o=(t,h,e)=>{t.xPrevious=t.x,t.yPrevious=t.y,p(t,h,e),c(t,e)},n=(t,h,e)=>{let i=v(t);return o(i,h,e),i},c=(t,h)=>{t.x=t.x+t.vectorX*h,t.y=t.y+t.vectorY*h},p=(t,h,e)=>{t.obeysGravity&&(t.vectorY=Math.max(h.minVerticalVelocityPerSecond*t.gravityScale,t.vectorY+=h.gravityAccelerationPerSecond*e*t.gravityScale))},v=t=>({...t}),u=(t,h)=>({renderX:t.renderX,renderY:h.canvas.height-t.renderY-t.renderHeight}),f=(t,h)=>({renderX:t.renderX-h.x,renderY:t.renderY-h.y});class m extends s{constructor(t,h,e,i){super(t,h,e,i),this.colour="rgba(0, 0, 0, 0.3)",this.renderX=t,this.renderY=h,this.renderWidth=e,this.renderHeight=i}}const P=new class{constructor(){this.levels=[],this.getPlatformsForLevel=(t,h)=>{let e=[];for(let i of this.levels[t].platforms){let t=new m(.5*i.x+h,(500-i.height-i.y)*.5,.5*i.width,.5*i.height);t.colour="#3A980B",e.push(t)}return e},this.getObstaclesForLevel=(t,h)=>{let e=[];for(let i of this.levels[t].obstacles){let t=new m(.5*i.x+h,(500-i.height-i.y)*.5,.5*i.width,.5*i.height);t.colour="#D10000",e.push(t)}return e},this.levels.push(l),this.levels.push(r),this.levels.push(a),this.levels.push(y),this.levels.push(x),this.levels.push(g),this.levels.push(w)}},b=()=>P,D=()=>new X({x:150,y:350,height:16,width:25.6},{x:110,y:200,height:32,width:32});class S extends m{constructor(t,h,e,i){super(t,h,e,i),this.positionHistory=[],this.onTheGround=!1,this.alive=!0,this.lastDelta=0}applyDelta(t,h){this.lastDelta=h,super.applyDelta(t,h)}}class C extends m{constructor(t,h,e,i){super(t,h,e,i),this.onTheGround=!1,this.alive=!0,this.positionHistory=[]}}class X{constructor(t,h){this.clicked=()=>{if(0===this.leader.vectorX){this.leader.vectorX=400;let t=this.leader.x;for(;t>this.follower.x;)this.leader.positionHistory.unshift({x:t,y:this.leader.y}),t-=400*this.leader.lastDelta}else this.currentCombinedJumps<2&&(this.currentCombinedJumps++,this.leader.vectorY<0&&(this.leader.vectorY=0),this.leader.vectorY+=400,this.leader.onTheGround=!1)},this.landed=()=>{this.leader.onTheGround=!0,this.currentCombinedJumps=0},this.leader=new S(t.x,t.y,t.width,t.height),this.follower=new C(h.x,h.y,h.width,h.height),this.vortex=new C(h.x+h.width/2,h.y,h.width/2,h.height),this.vortex.alive=!1,this.currentCombinedJumps=2}}const Y=()=>({platforms:b().getPlatformsForLevel(0,0),obstacles:b().getObstaclesForLevel(0,0),player:D(),camera:{x:300,y:150},particles:[],snowClouds:[],snowFall:void 0,world:{gravity:640,minVerticalVelocityPerSecond:-2e3,gravityAccelerationPerSecond:-1280}});class M extends m{constructor(t,h,e,i,d,l,r,a,y,x,g,w,s,o){super(t,h,e,i),this.alive=!0,this.renderX=t-this.renderWidth/2,this.renderY=h-this.renderHeight/2,this.originalRenderX=t,this.originalRenderY=h,this.renderWidth=e,this.renderHeight=i,this.vectorX=r,this.vectorY=a,this.lifeDelta=0,this.lifetimeInSeconds=o,this.initialWidth=e,this.initialHeight=i,this.finalWidth=d,this.finalHeight=l,this.opacity=y,this.initialOpacity=y,this.finalOpacity=x,this.red=g,this.green=w,this.blue=s}applyDelta(t,h){this.lifeDelta+=h,this.lifeDelta>this.lifetimeInSeconds&&(this.alive=!1),super.applyDelta(t,h),this.renderX=this.x,this.renderY=this.y;let e=this.lifeDelta/this.lifetimeInSeconds;this.width=this.renderWidth=this.initialWidth+(this.finalWidth-this.initialWidth)*e,this.height=this.renderHeight=this.initialHeight+(this.finalHeight-this.initialHeight)*e,this.obeysGravity||(this.renderX=this.originalRenderX-this.renderWidth/2,this.renderY=this.originalRenderY-this.renderHeight/2),this.opacity=this.initialOpacity+(this.finalOpacity-this.initialOpacity)*e,this.colour=`rgba(${this.red},${this.green},${this.blue},${this.opacity})`}}class H{constructor(t){this.particles=[],this.lastParticleDelta=0,this.nextParticleDueAt=0,this.createNewParticle=(t,h)=>{let e=h.x+2500*Math.random(),i=t.canvas.height+10,d=5+5*Math.random(),l=new M(e,i,d,d,d,d,-30*Math.random(),-30*Math.random(),1,1,255,255,255,200);return l.gravityScale=.1+.2*Math.random(),l};for(let h=0;h<40;h++){let h=2500*Math.random(),e=(t.canvas.height+150)*Math.random(),i=-30*Math.random(),d=-30*Math.random(),l=.1+.2*Math.random(),r=5+5*Math.random(),a=new M(h,e,r,r,r,r,i,d,1,1,255,255,255,200);a.gravityScale=l,this.particles.push(a)}}applyDelta(t,h,e,i){for(let e=this.particles.length-1;e>=0;e--){let i=this.particles[e];i.applyDelta(t,h),i.alive||this.particles.splice(e,1)}this.lastParticleDelta>=this.nextParticleDueAt&&(this.lastParticleDelta=0,this.nextParticleDueAt=.02*Math.random(),this.particles.push(this.createNewParticle(e,i))),this.particles.length>500&&this.particles.splice(0,this.particles.length-500),this.lastParticleDelta+=h}}class L{constructor(){this.xOffset=-200,this.yOffset=50,this.executeDelta=(t,h)=>{h.canvasContext;let e=h.gameState,i={x:e.player.leader.x+this.xOffset,y:this.yOffset};e.camera.x=i.x,e.camera.y=i.y}}}class T{constructor(){this.lastLevelLoadedAtX=0,this.currentLevelIndex=0,this.executeDelta=(t,h)=>{h.canvasContext;let e=h.gameState;for(let t=e.platforms.length-1;t>=0;t--){let h=e.platforms[t];h.x+h.width<e.camera.x-2e3&&(e.platforms.splice(t,1),console.log(`${e.platforms.length} loaded platforms`))}e.camera.x%16e3>14e3&&this.lastLevelLoadedAtX<e.camera.x-3e3&&(this.lastLevelLoadedAtX=e.camera.x,this.loadNextLevel(e))},this.loadNextLevel=t=>{this.currentLevelIndex+=1;let h=this.currentLevelIndex;this.currentLevelIndex>6&&(h=6*Math.random()+1),console.log(`Loading level ${h}`);let e=b().getPlatformsForLevel(h,16e3*this.currentLevelIndex),i=b().getObstaclesForLevel(h,16e3*this.currentLevelIndex);console.log(`Loaded ${i.length} obstacles and ${e.length} plastforms`),t.platforms.push(...e),t.obstacles.push(...i)}}}!function(t){t.Bottom="BOTTOM",t.Top="TOP",t.Left="LEFT",t.Right="RIGHT"}(ti||(ti={}));const F=(t,h,e,i,d,l,r,a)=>{let y=!1;return t<d+r&&t+e>d&&h<l+a&&h+i>l&&(y=!0),y},R=(t,h,e,i,d,l,r,a,y,x)=>{let g=e-t,w=i-h;if(0===g&&0===w)return null;if(0==g){let t=w>0?ti.Bottom:ti.Top;return t}if(0==w){let t=g>0?ti.Left:ti.Right;return t}if(g>0&&w<0){let l=t+d,y=e+d,{xFactor:g,offset:w}=I(l,h,y,i),s=W(g,w,r),o=a+x<=s?ti.Top:ti.Left;return o}if(g<0&&w<0){let d=r+y,{xFactor:l,offset:g}=I(t,h,e,i),w=W(l,g,d);return a+x<=w?ti.Top:ti.Right}if(g>0&&w>0){let y=t+d,x=h+l,g=e+d,w=i+l,{xFactor:s,offset:o}=I(y,x,g,w),n=W(s,o,r),c=a>=n?ti.Bottom:ti.Left;return c}if(g<0&&w>0){let d=r+y,x=h+l,g=i+l,{xFactor:w,offset:s}=I(t,x,e,g),o=W(w,s,d);return a>=o?ti.Bottom:ti.Right}return null},I=(t,h,e,i)=>{let d=(i-h)/(e-t);return{xFactor:d,offset:h-d*t}},W=(t,h,e)=>h+e*t,O=ti,G=(t,h)=>F(t.x,t.y,t.width,t.height,h.x,h.y,h.width,h.height),V=(t,h)=>{let e=!1;return!1===F(t.xPrevious,t.yPrevious,t.width,t.height,h.xPrevious,h.yPrevious,h.width,h.height)&&(e=F(t.x,t.y,t.width,t.height,h.x,h.y,h.width,h.height)),e},k=(t,h)=>R(t.xPrevious,t.yPrevious,t.x,t.y,t.width,t.height,h.x,h.y,h.width,h.height);class A{constructor(){this.executeDelta=(t,h)=>{h.canvasContext;let e=h.gameState;for(let t=0;t<e.platforms.length;t++){let h=e.platforms[t];h.x,e.player.leader.x,h.x,h.width,e.player.leader.x,G(e.player.leader,h)&&(k(e.player.leader,h),e.player.leader.alive&&k(e.player.leader,h)!==O.Top?e.player.leader.alive=!1:k(e.player.leader,h)===O.Top&&(e.player.leader.onTheGround||e.player.landed(),e.player.leader.y=h.y+h.height,e.player.leader.vectorY=0)),G(e.player.follower,h)&&(e.player.follower.alive&&k(e.player.follower,h)!==O.Top||k(e.player.follower,h)===O.Top&&(e.player.follower.onTheGround||(e.player.follower.onTheGround=!0),e.player.follower.y=h.y+h.height,e.player.follower.vectorY=0))}for(let t=0;t<e.obstacles.length;t++){let h=e.obstacles[t];h.x,e.player.leader.x,h.x,h.width,e.player.leader.x,G(e.player.leader,h)&&e.player.leader.alive&&(e.player.leader.alive=!1)}}}}class B{constructor(){this.executeDelta=(t,h)=>{h.canvasContext;let e=h.gameState;if(!e.player.leader.alive&&!e.player.follower.alive){e.player.vortex.alive=!1;return}if(e.player.leader.alive&&(e.player.leader.applyDelta(h.gameState.world,t),e.player.leader.renderX=e.player.leader.x,e.player.leader.renderY=e.player.leader.y),0==e.player.leader.vectorX)e.player.follower.applyDelta(h.gameState.world,t),e.player.follower.renderX=e.player.follower.x,e.player.follower.renderY=e.player.follower.y;else{let t=e.player.follower,i=e.player.leader,d=e.player.vortex;if(i.positionHistory.length>0){e.player.leader.alive&&i.positionHistory.push({x:i.x,y:i.y}),t.xPrevious=t.x,t.yPrevious=t.y;let h=i.positionHistory.shift();if(void 0!==h&&(i.alive?t.x=i.x-40:t.x=h.x,t.y=h.y,t.renderX=t.x,t.renderY=t.y,t.positionHistory.push(h)),e.player.follower.positionHistory.length>=e.player.leader.positionHistory.length/2&&(e.player.vortex.alive=!0),e.player.vortex.alive){let h=t.positionHistory.shift();void 0!==h&&(d.x=h.x,d.y=h.y,d.renderX=d.x,d.renderY=d.y)}}else t.alive=!1,h.snow={x:e.player.leader.x+e.player.leader.width/2,y:e.player.leader.y+e.player.leader.height/2}}}}}class ${constructor(){this.xVectorImpact=20,this.yVectorImpact=50,this.executeDelta=(t,h)=>{h.canvasContext;let e=h.gameState;if(e.player.vortex.alive&&e.snowFall)for(let t=0;t<e.snowFall.particles.length;t++){let h=e.snowFall.particles[t];G(e.player.leader,h)&&(h.vectorX+=Math.random()*this.xVectorImpact,h.vectorY+=Math.random()*this.yVectorImpact)}}}}class E{constructor(t,h){this.particles=[];for(let e=0;e<25;e++){let e=t-17.5+35*Math.random(),i=h-17.5+35*Math.random(),d=5+50*Math.random(),l=d/2.5,r=.2+.5*Math.random(),a=1+.5*Math.random(),y=100*Math.random()*e-17.5,x=100*Math.random()*i-17.5,g=new M(e,i,l,l,d,d,y,x,r,0,255,255,255,a);g.obeysGravity=!1,this.particles.push(g)}for(let e=0;e<45;e++){let e=t-17.5+35*Math.random(),i=h-17.5+35*Math.random(),d=5+5*Math.random(),l=-50+100*Math.random(),r=50+100*Math.random(),a=new M(e,i,d,d,d,d,l,r,1,1,255,255,255,30);a.gravityScale=.2,this.particles.push(a)}}applyDelta(t,h){for(let e=this.particles.length-1;e>=0;e--){let i=this.particles[e];i.applyDelta(t,h),i.alive||this.particles.splice(e,1)}}}class N{constructor(){this.executeDelta=(t,h)=>{h.canvasContext;let e=h.gameState;if(h.snow){let t=h.snow;e.snowClouds.push(new E(t.x,t.y))}for(let h=e.snowClouds.length-1;h>=0;h--){let i=e.snowClouds[0];if(i.particles.length>0){for(let h of(i.applyDelta(e.world,t),i.particles))if(h.obeysGravity){for(let t of e.platforms)if(G(h,t)){V(h,t)||(h.alive=!1);let e=k(h,t);e===O.Top?(h.vectorX=0,h.vectorY=0,h.y=t.y+t.height):e===O.Bottom?(h.vectorY=0,h.y=t.y-h.height):e===O.Right?(h.vectorX=0,h.x=t.x+t.width):(h.vectorX=0,h.x=t.x-h.width)}}}else e.snowClouds.splice(h,1)}}}}class z{constructor(){this.executeDelta=(t,h)=>{let e=h.canvasContext,i=h.gameState,d=i.snowFall;if(d&&d.particles.length>0){for(let h of(d.applyDelta(i.world,t,e,i.camera),d.particles))if(h.obeysGravity){for(let t of i.platforms)if(G(h,t)){let e=k(h,t);e===O.Top?(h.vectorX=0,h.vectorY=0,h.y=t.y+t.height):e===O.Bottom?(h.vectorY=0,h.y=t.y-h.height):e===O.Right?(h.vectorX=0,h.x=t.x+t.width):(h.vectorX=0,h.x=t.x-h.width)}}}}}}class J{constructor(t){this.executeDelta=(t,h)=>{let e=h.canvasContext;e.fillStyle=this.color,e.fillRect(0,0,e.canvas.width,e.canvas.height)},this.color=t}}class q{constructor(){this.executeDelta=(t,h)=>{let e=h.canvasContext,i=h.gameState;e.translate(-i.camera.x,-i.camera.y)}}}class U{constructor(){this.direction=1,this.x=130,this.minX=100,this.maxX=200,this.executeDelta=(t,h)=>{let e=h.canvasContext;e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height)}}}class j{executeDelta(t,h){let e=h.canvasContext,i=h.gameState,d=i.camera;h.gameState.obstacles?.forEach(t=>{if(t.x>d.x+2e3||t.x+t.width<d.x-100)return;e.beginPath(),e.fillStyle=t.colour;let h=f(u(t,e),d);e.fillRect(h.renderX,h.renderY,t.width,t.height)})}}class K{executeDelta(t,h){let e=h.canvasContext,i=h.gameState,d=i.camera;h.gameState.platforms?.forEach(t=>{if(t.x>d.x+2e3||t.x+t.width<d.x-100)return;e.beginPath(),e.fillStyle=t.colour,e.strokeStyle=t.colour;let h=f(u(t,e),d);e.fillRect(h.renderX,h.renderY,t.width,t.height)})}}class Q{executeDelta(t,h){let e=h.canvasContext;e.fillStyle="#D10000";let i=h.gameState,d=i.camera;if(!i.player.leader.alive&&!i.player.follower.alive)return;e.beginPath();let l=_(i.player.leader.vectorY,Math.abs(i.world.minVerticalVelocityPerSecond));l*=i.player.leader.vectorX/400,Z(i.player.leader,l,e,d);let r=_((i.player.follower.y-i.player.follower.yPrevious)/t,Math.abs(i.world.minVerticalVelocityPerSecond)),a=(i.player.follower.x-i.player.follower.xPrevious)/t;r*=a/400,Z(i.player.follower,r,e,d),e.fillStyle="rgba(255,0,0,0.3)"}}const Z=(t,h,e,i)=>{let d=f(u(t,e),i);e.save(),e.translate(d.renderX+t.renderWidth/2,d.renderY+t.renderHeight/2),e.rotate((360-h)*Math.PI/180),e.fillRect(-t.renderWidth/2,-t.renderHeight/2,t.renderWidth,t.renderHeight),e.restore()},_=(t,h)=>90*(t/h);class tt{executeDelta(t,h){let e=h.canvasContext,i=h.gameState,d=i.camera;for(let t of i.snowClouds)for(let h of t.particles){let t=f(u(h,e),d);e.beginPath(),e.fillStyle=h.colour,e.fillRect(t.renderX,t.renderY,h.renderWidth,h.renderHeight)}}}class th{executeDelta(t,h){let e=h.canvasContext,i=h.gameState,d=i.camera,l=i.snowFall;l&&l.particles.forEach(t=>{if(t.x>d.x+2e3||t.x<d.x-100)return;let h=f(u(t,e),d);e.beginPath(),e.fillStyle=t.colour,e.fillRect(h.renderX,h.renderY,t.renderWidth,t.renderHeight)})}}class te{constructor(t,h){this.stop=()=>{this.runnerStopCallback()},this.step=t=>{this.resizeCallback(),this.pipeline.execute(t,this.gameState)},this.bindUICapture=()=>{this.canvasContext.canvas.addEventListener("pointerdown",this.userClicked,!0)},this.userClicked=()=>{this.gameState.player.clicked()},this.canvasContext=t,this.resizeCallback=h,this.pipeline=new i(this.canvasContext),this.setup()}setup(){this.gameState=Y(),this.gameState.snowFall=new H(this.canvasContext),this.pipeline.addPipe(new B),this.pipeline.addPipe(new A),this.pipeline.addPipe(new N),this.pipeline.addPipe(new z),this.pipeline.addPipe(new $),this.pipeline.addPipe(new L),this.pipeline.addPipe(new T),this.pipeline.addPipe(new q),this.pipeline.addPipe(new U),this.pipeline.addPipe(new J("#1e2640")),this.pipeline.addPipe(new K),this.pipeline.addPipe(new j),this.pipeline.addPipe(new Q),this.pipeline.addPipe(new tt),this.pipeline.addPipe(new th),this.bindUICapture(),this.runnerStopCallback=d(this.step,25)}}var ti,td=(t,h)=>{new te(t,h)};(()=>{let h=document.body,{canvas:e,context:i,resizeCallback:d}=t("game-canvas",h);d(),td(i,d)})();