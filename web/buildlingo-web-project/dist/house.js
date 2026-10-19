(() => {
const byId=Object.fromEntries(window.BUILDING_DATA.words.map(w=>[w.id,w]));
function obj(id,room,markup){const w=byId[id];if(!w)throw Error('Unknown house word: '+id);return `<g class="house-object" data-word="${id}" data-room="${room}" data-category="${w.category}" role="button" tabindex="0" aria-label="Learn ${w.term}"><title>${w.term} — click to learn</title>${markup}</g>`;}
const R=(x,y,w,h,fill,rx=0,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${extra}/>`;
const L=(d,stroke='#a3a58c',width=1,extra='')=>`<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
const P=(p,fill,extra='')=>`<polygon points="${p}" fill="${fill}" ${extra}/>`;
const E=(x,y,rx,ry,fill,extra='')=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" ${extra}/>`;
const windowDrawing=(x,y,w,h)=>`${R(x-3,y-3,w+6,h+6,'#d8d8c6',1)}${R(x,y,w,h,'#adc6c0',1)}${P(`${x},${y} ${x+w},${y} ${x},${y+h}`,'#c5d8cd')}${L(`M${x+w/2} ${y}v${h}M${x} ${y+h/2}h${w}`,'#f6f4e6',3)}${R(x-6,y+h,w+12,5,'#e3dfc9',1)}`;
let svg=`<svg xmlns="http://www.w3.org/2000/svg" id="houseSvg" viewBox="0 0 1000 680" width="1000" height="680" aria-label="Cutaway of a two-story house. Click the roof, fixtures, furniture, pipes, tools, and garden objects to learn their English names."><defs><pattern id="bricks" x="0" y="0" width="34" height="16" patternUnits="userSpaceOnUse"><rect width="34" height="16" fill="#bb947c"/><path d="M0 0H34M0 16H34M17 0V8M0 8H34M0 8v8M34 8v8" fill="none" stroke="#d8b69a" stroke-width="1"/></pattern><pattern id="bathTiles" width="25" height="22" patternUnits="userSpaceOnUse"><rect width="25" height="22" fill="#e1e7dc"/><path d="M25 0H0V22" stroke="#f4f4e8" stroke-width="1" fill="none"/></pattern><pattern id="floorboards" width="55" height="12" patternUnits="userSpaceOnUse" patternTransform="skewX(-50)"><rect width="55" height="12" fill="#dfcbb1"/><path d="M0 0H55M55 0V12" stroke="#cdb79a" stroke-width=".7" fill="none"/></pattern><pattern id="roofTiles" width="34" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(29)"><rect width="34" height="20" fill="#bd805c"/><path d="M0 0H34M0 20H34M17 0V20" stroke="#a9704d" stroke-width=".9" fill="none"/></pattern><filter id="groundShadow"><feGaussianBlur stdDeviation="9"/></filter><linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d4e2d8"/><stop offset="1" stop-color="#aac4bd"/></linearGradient></defs>
${E(525,609,382,29,'#869477','opacity=".12" filter="url(#groundShadow)"')}
${obj('lawn','garden',P('48,604 394,420 967,564 709,662 218,657','#e1e7cd'))}
${L('M81 610l64-31m663 65 71-28M160 633l20-9M915 577l20-11M140 572l25-13','#b9c6a3',1)}
${obj('walkway','garden',P('590,601 638,574 766,640 719,660','#d8d2bc')+L('M613 614l49-25M640 629l48-26M670 644l48-26','#eee8d7',2))}
${obj('fence','garden',L('M63 570l82-45M73 549v31M94 537v30M116 525v30M138 513v30M68 560l76-42','#b3bba0',4)+L('M887 532l72 36M890 515v30M911 525v31M932 535v31M954 546v32M887 522l72 36','#b3bba0',4))}
${obj('hedge','garden',E(855,595,38,12,'#a7ba85')+E(879,580,28,16,'#acbd89')+E(902,588,31,14,'#bdc798')+E(870,601,36,11,'#97ae7b'))}
${obj('flower-bed','garden',P('110,600 144,581 235,617 201,637','#c4b793')+E(143,600,13,8,'#9faf7b')+E(166,611,15,8,'#a2b481')+E(197,620,12,6,'#94aa74')+E(144,594,3,3,'#cfaa78')+E(171,606,3,3,'#c8947a')+E(195,616,3,3,'#d8bd7e'))}
${obj('foundation','structure',P('173,583 805,583 900,532 900,563 805,618 173,618','#b8bba9')+R(173,593,632,25,'#c4c6b3')+P('805,593 900,540 900,563 805,618','#a3ae98')+L('M173 605h632M230 593v24M342 593v24M454 593v24M566 593v24M678 593v24','#aeb49d',1))}
${obj('slab','structure',P('173,583 265,531 900,531 805,585','#e3ddc6')+R(173,583,632,10,'#d4ccb3'))}
${obj('cladding','exterior',P('799,270 894,216 894,539 799,594','#d6d8bf')+L('M799 301l95-54M799 330l95-54M799 360l95-54M799 389l95-54M799 419l95-54M799 449l95-54M799 479l95-54M799 509l95-54M799 539l95-54M799 569l95-54','#c3c8ae',1))}
${R(195,271,297,142,'#e8e4d2')}${R(514,271,278,142,'url(#bathTiles)')}${R(195,435,262,146,'#dce2cf')}${R(537,435,255,146,'#ebe5d3')}
${obj('wall','structure',R(181,270,15,313,'#d2d2b9')+R(790,267,15,317,'#d1d2b8'))}
${obj('partition-wall','structure',R(491,270,24,146,'#d3d4bc')+R(491,270,6,146,'#e8e4ce'))}
${obj('ceiling','structure',R(194,269,596,9,'#e9e1ca')+R(194,426,596,11,'#e6dfc8'))}
${obj('beam','structure',R(180,413,625,16,'#b69c76')+R(180,413,625,5,'#c7b08b')+P('805,413 896,363 896,379 805,429','#a18e70'))}
${obj('floorboard','structure',R(196,398,593,15,'url(#floorboards)')+R(196,572,593,11,'url(#floorboards)'))}
${obj('baseboard','bedroom',R(196,390,294,8,'#f1ead6'))}
`;
svg+=`
${obj('attic','attic',P('186,269 488,102 791,269','#e7dfc4')+P('211,261 488,113 769,261','#eee8d3'))}
${obj('rafter','attic',L('M201 262 488 106l289 156M341 184v77M634 184v77M489 107v153','#b69e74',7))}
${obj('insulation','attic',R(227,244,100,17,'#c5c69e',3)+L('M232 248c9-7 11 16 19 6s11-9 18 1 12-12 20-2 11 6 19-1 9 7 16 1','#b0b58d',2)+R(651,244,104,17,'#c5c69e',3))}
${obj('gable','attic',L('M181 269 488 99l310 170','#d3c49e',9))}
${obj('window','attic',R(451,190,75,64,'#c4bba0',2)+R(456,195,65,54,'url(#glass)',2)+L('M488 195v54M456 221h65','#e8e2cb',3))}
${obj('water-tank','attic',R(645,212,68,39,'#9fbbba',4)+E(679,212,34,9,'#bdd1c8')+E(679,251,34,7,'#88a8a5')+L('M647 216v29M652 215v30','#c9d9ce',1)+L('M710 229h19v33','#7d9b98',4))}
${obj('roof','attic',P('488,96 584,43 909,219 813,274','url(#roofTiles)')+P('171,270 488,89 500,101 181,283','#a87350')+P('488,89 584,36 919,218 909,226','#cf9b71')+L('M489 97l324 176','#d8ad81',5))}
${obj('ridge','attic',L('M488 90 583 38','#b17b53',8))}
${obj('fascia','attic',L('M813 274 911 220','#a97955',9))}
${obj('gutter','attic',L('M817 278 915 223','#c0c5ad',5)+L('M915 223v15','#a5b49d',4))}
${obj('downspout','garden',L('M890 239v306l12 7','#9caf99',5)+L('M888 240v302','#c8d2b5',1))}
${obj('solar-panel','attic',P('603,91 708,149 768,116 663,58','#5a7980')+L('M603 91 708 149 768 116 663 58Z','#d8dfcc',2)+L('M623 102l60-32M644 114l61-33M665 125l61-32M686 137l61-33M623 80l105 58M644 69l105 58','#9fbab5',1))}
${obj('skylight','attic',P('765,155 816,182 848,164 796,137','#c7d9ce')+L('M765 155l51 27 32-18-52-27Z','#8d9d8c',3)+L('M781 146l50 28','#eceddf',3))}
${obj('chimney','attic',P('725,92 749,78 749,145 725,158','#a77d65')+R(698,78,27,80,'url(#bricks)')+P('698,78 722,65 749,78 725,92','#c9a78c')+P('706,78 722,70 739,78 724,85','#7d7965')+P('695,74 721,60 753,76 726,91 726,97 695,81','#c6b49a'))}
<!-- Bedroom -->
${obj('casement-window','bedroom',windowDrawing(225,296,69,67))}
${obj('curtains','bedroom',L('M217 291h85','#9f9c7f',2)+P('218,293 235,293 229,365 213,365','#c2c8ac')+P('286,293 302,293 306,365 290,365','#c2c8ac')+L('M223 296l-5 64M295 296l6 64','#b2bb9a',1))}
${obj('wardrobe','bedroom',R(415,301,53,87,'#d4c3a3',1)+P('468,301 483,294 483,381 468,388','#b9ab8e')+P('415,301 430,294 483,294 468,301','#e3d4b5')+L('M442 303v82','#b7a787',1)+L('M436 337v10M448 337v10','#8f9176',2))}
${obj('bed','bedroom',R(326,326,75,41,'#bfa788',4)+P('292,358 364,358 405,335 333,335','#eae4d0')+P('292,358 364,358 364,386 292,386','#c4b18e')+P('364,358 405,335 405,363 364,386','#ad9d7e')+R(295,382,7,16,'#9e9375')+R(355,382,7,16,'#9e9375'))}
${obj('mattress','bedroom',P('291,353 364,353 407,330 334,330','#faf4df')+R(291,353,73,10,'#f3ecd7')+P('364,353 407,330 407,339 364,363','#ddd9bf')+P('299,346 367,346 386,336 318,336','#a7b799')+P('299,346 367,346 367,368 299,368','#a5b396')+P('367,346 386,336 386,356 367,368','#90a585'))}
${P('336,331 358,331 370,324 348,324','#fdf7e5')}${P('364,331 386,331 398,324 376,324','#f7f0db')}
${obj('drawer','bedroom',R(300,330,20,23,'#c0ad8a')+P('300,330 314,323 334,323 320,330','#ded0b1')+L('M301 341h18M309 337h4','#9c9479',1))}
${obj('light-bulb','bedroom',L('M315 323v-17','#a19d83',2)+P('304,305 326,305 322,293 309,293','#eee3bd')+E(315,325,9,3,'#b9ae8e'))}
<text x="333" y="294" class="room-label">BEDROOM</text>
<!-- Bathroom -->
${obj('window-frame','bathroom',windowDrawing(708,293,53,47))}
${obj('bathtub','bathroom',E(566,379,38,10,'#c7ccb9')+R(534,357,67,22,'#f6f3e4',7)+E(567,357,37,12,'#fffdf2')+E(567,356,29,8,'#cadcd1')+L('M545 379v9M591 379v9','#b2b7a0',3))}
${obj('showerhead','bathroom',L('M539 352v-36q0-10 10-10h13','#99aca2',3)+P('553,307 570,307 573,312 550,312','#bac9bc')+L('M555 318v15M562 318v15M569 318v15','#cad9cd',1,'stroke-dasharray="1 4"'))}
${obj('shower-screen','bathroom',R(596,305,5,73,'#ccddd0')+L('M598 305v73M598 305h-31','#b1c5b9',1))}
${obj('vanity','bathroom',R(628,359,43,31,'#c9bd9e')+P('671,359 687,350 687,380 671,390','#b5ad8c')+R(629,359,41,4,'#e7dfc6')+L('M649 365v23M642 371h2M654 371h2','#a59e7e',1))}
${obj('washbasin','bathroom',P('625,357 671,357 690,347 644,347','#fcfaed')+E(653,351,16,5,'#c8d7c9')+L('M650 345v-7q0-5 6-5h3','#9faf9f',2))}
${obj('mirror','bathroom',R(633,304,37,31,'#c0bba0',3)+R(636,307,31,25,'#b7cfc2',2)+L('M640 311l20 17','#d7e4d5',1))}
${obj('toilet-tank','bathroom',R(739,338,26,27,'#f8f5e8',3)+E(752,338,13,3,'#e4e5d4')+R(748,334,7,3,'#c0c7b4',1))}
${obj('toilet','bathroom',P('731,369 751,369 752,390 735,390','#e4e7da')+E(741,367,24,10,'#f6f4e9')+E(741,367,16,6,'#d6ded0')+P('726,370 755,370 754,380 732,380','#f3f2e6'))}
${obj('toilet-seat','bathroom',E(741,365,24,10,'#fbfaee')+E(741,365,16,6,'#b4c8b9')+E(741,365,11,4,'#dce7d9'))}
${obj('towel-rail','bathroom',L('M611 315v28M608 319h6M608 339h6','#a1ad97',2)+R(610,321,10,18,'#bcbea0',1))}
<text x="604" y="291" class="room-label">BATHROOM</text>
<!-- Living room -->
${obj('windowpane','living',windowDrawing(220,454,67,55))}
${obj('blinds','living',L('M220 454h67M220 461h67M220 468h67M220 475h67','#e8e4ce',3)+L('M284 454v37','#bfc5ae',1))}
${obj('bookshelf','living',R(404,455,33,68,'#b8a987')+R(408,460,25,18,'#e8ddc1')+R(408,483,25,17,'#e5dabe')+R(408,505,25,14,'#e5dabe')+R(410,462,5,15,'#a0af8e')+R(417,465,4,12,'#b6886c')+R(423,461,5,16,'#c5b27d')+R(410,487,19,4,'#9cac91')+R(412,491,18,4,'#c3a783'))}
${obj('rug','living',P('252,556 337,510 450,555 366,593','#c0c8a8')+P('269,556 339,519 433,555 364,584','#d1d5b8')+L('M281 550l78 31M295 543l79 31M310 535l79 31M324 528l79 31','#bbc3a1',1))}
${obj('sofa','living',R(238,509,113,48,'#8fa68a',6)+R(234,526,123,31,'#91a68a',6)+P('357,526 379,514 379,545 357,557','#7f997d')+P('242,528 354,528 374,517 262,517','#afbea0')+R(235,520,12,36,'#8fa488',5)+R(345,522,13,34,'#7c967a',5)+R(252,514,37,18,'#adbd9d',4)+R(294,514,38,18,'#b2bea0',4)+L('M244 557v8M350 557v8','#a69977',3))}
${obj('coffee-table','living',P('347,549 391,526 433,543 390,567','#ddc8a4')+L('M347 549v24M390 567v20M433 543v23','#b1a07b',4)+P('347,549 390,567 390,571 347,553','#c5b18c'))}
${R(377,541,20,3,'#9eaa8b')}${R(381,538,20,3,'#e9dfc1')}${E(411,542,5,3,'#d3b68e')}
${obj('armchair','living',R(214,540,26,28,'#b6b99a',4)+P('215,540 232,531 250,537 233,546','#c7c9ac')+R(216,548,19,18,'#c3c6a5',3)+P('235,546 250,537 250,555 235,566','#a2ad8b'))}
${obj('light-fixture','living',L('M351 438v27','#aaa78b',1.5)+P('335,465 366,465 359,451 342,451','#d6c39a')+E(350,465,16,4,'#e9d6ab'))}
<text x="310" y="452" class="room-label">LIVING ROOM</text>
<!-- Stairs and service area -->
${obj('staircase','structure',P('451,576 478,576 535,438 507,438','#c6b897')+Array.from({length:10},(_,i)=>P(`${452+i*5.7},${574-i*13.7} ${479+i*5.7},${574-i*13.7} ${484+i*5.7},${563-i*13.7} ${457+i*5.7},${563-i*13.7}`,'#e3d6b7')+L(`M${453+i*5.7} ${575-i*13.7}h27`,'#baaa88',1)).join(''))}
${obj('handrail','structure',L('M448 564 505 425M448 564v-25M462 529v-24M476 495v-23M490 461v-23M505 425v-20M448 539l57-139','#afaa88',2))}
${obj('electrical-panel','electrical',R(497,514,28,43,'#c6cdbb',2)+R(501,519,20,32,'#b1bda8',1)+R(504,522,5,5,'#687f69')+R(512,522,5,5,'#7f9077')+R(504,531,5,5,'#7a8f73')+R(512,531,5,5,'#667f65')+R(504,540,13,4,'#d8ddc9'))}
<!-- Kitchen -->
${obj('backsplash','kitchen',R(546,480,194,27,'#c7d1b7')+L('M546 489h194M546 498h194M563 480v9M596 480v9M629 480v9M662 480v9M695 480v9M728 480v9M579 489v9M612 489v9M645 489v9M678 489v9M711 489v9','#e6e9d4',1))}
${obj('cabinet','kitchen',R(548,451,91,30,'#c6b897')+L('M578 453v26M608 453v26','#ab9e7e',1)+L('M572 461v7M584 461v7M614 461v7','#91977a',1.5)+R(549,509,144,58,'#b8c1a1')+L('M582 513v48M620 513v48M656 513v48','#a0ad8a',1)+L('M574 522v8M590 522v8M612 522v8M628 522v8M648 522v8M665 522v8','#849572',1.5))}
${obj('countertop','kitchen',P('544,506 711,506 733,494 566,494','#eee4cb')+R(544,506,167,6,'#d9cdb2'))}
${obj('sink','kitchen',E(584,502,23,6,'#8fa69c')+E(584,501,17,4,'#b0c8b9')+E(585,502,2,1,'#718c82'))}
${obj('faucet','kitchen',L('M592 496v-13q0-9 8-9h4v7','#8a9e91',3)+L('M599 490v6','#8a9e91',2))}
${obj('stove','kitchen',R(666,511,45,54,'#c4c8b3',2)+R(672,529,33,28,'#6f8274',2)+R(676,533,25,20,'#85988a',1)+R(671,523,34,3,'#a2aa92')+E(675,517,2,2,'#82927c')+E(687,517,2,2,'#82927c')+E(699,517,2,2,'#82927c'))}
${obj('cooktop','kitchen',P('662,506 710,506 732,494 685,494','#7f9281')+E(677,502,6,2,'#c2c9b3')+E(699,502,6,2,'#c2c9b3')+E(691,496,5,1.5,'#c2c9b3')+E(713,496,5,1.5,'#c2c9b3'))}
${obj('range-hood','kitchen',R(684,441,12,22,'#d0d2bc')+P('674,463 707,463 716,475 666,475','#b6bfa7')+R(666,475,50,4,'#9daa93'))}
${obj('refrigerator','kitchen',R(746,454,34,108,'#d9dec9',2)+P('780,454 791,447 791,555 780,562','#c0cbb3')+P('746,454 757,447 791,447 780,454','#e7e8d5')+L('M748 488h30M752 470v11M752 499v23','#a6b59c',2))}
${obj('kitchen-island','kitchen',R(614,551,84,37,'#c9b899')+P('698,551 725,537 725,575 698,588','#b4a88a')+P('608,549 699,549 729,532 639,532','#e4d5b6')+R(608,549,91,4,'#d1bea0'))}
${obj('pendant-light','kitchen',L('M656 438v31','#aca88a',1.5)+P('641,469 671,469 664,457 648,457','#c6ac80')+E(656,469,15,3,'#e7d5aa'))}
${obj('dishwasher','kitchen',R(549,513,32,51,'#d1d7c1')+R(553,517,24,5,'#a9b89e')+L('M555 530h21','#94a58a',2))}
${obj('electrical-outlet','kitchen',R(633,486,9,11,'#f3f0dc',1)+L('M636 489v3M640 489v3','#8e9b81',1))}
<text x="554" y="444" class="room-label">KITCHEN</text>
<!-- Exterior entry and utility corner -->
${obj('door','garden',P('824,480 867,456 867,552 824,576','#a6b390')+P('829,484 862,466 862,516 829,534','#b7ccbc')+L('M845 477v48M830 509l30-17','#d2d9c2',2)+P('829,542 862,523 862,548 829,567','#91a67f'))}
${obj('door-frame','garden',L('M822 578v-99l47-27v100','#e6e4cc',5))}
${obj('doorknob','garden',E(858,527,3,3,'#be9f69'))}
${obj('porch','garden',P('805,582 870,546 894,558 831,594','#cfcab1')+P('831,594 894,558 894,565 831,601','#b8bba0'))}
${obj('air-conditioner','bedroom',P('823,319 871,292 871,317 823,345','#e5e7d7')+P('823,339 871,312 871,317 823,345','#b6c7ae')+L('M829 338l34-19M829 333l34-19','#a5b9a0',1))}
${obj('water-heater','utility',R(119,431,42,69,'#d9dfcb',9)+E(140,431,21,7,'#e6e8d9')+E(140,498,21,6,'#bdcbb3')+R(133,450,14,16,'#b1c5b1',2)+L('M130 426v-15h29M149 426v-19h14','#a4b4a1',3)+L('M131 499v17M150 499v17','#98afa0',3))}
${obj('washing-machine','utility',R(119,526,49,53,'#e2e6d6',3)+P('168,526 184,518 184,571 168,579','#c3cfba')+P('119,526 135,518 184,518 168,526','#eff0df')+E(143,554,15,15,'#bbcdbd')+E(143,554,11,11,'#93aea0')+L('M126 534h15','#9dae94',2)+E(159,534,3,3,'#a1b397'))}
${obj('hose','garden',L('M103 519c-24-15-31 27-10 29 32 5 32-37 7-35-24 1-22 26-5 29 24 5 30-27 11-27-12-1-22 15-8 20M103 519v-15h16','#96aa84',3))}
${obj('water-meter','utility',R(111,506,15,9,'#b7c3aa',2)+E(119,510,4,3,'#e7e9d8'))}
${obj('toolbox','garden',R(212,586,47,24,'#b29c76',2)+P('212,586 227,577 274,577 259,586','#ceb58a')+P('259,586 274,577 274,601 259,610','#9a8f6a')+L('M231 579v-7h14v7','#9a8c68',3)+R(233,591,6,6,'#ddd0a9',1))}
`;
svg+=`
${obj('hammer','garden',L('M288 606l17-21','#ad9871',5)+P('299,580 304,576 318,586 315,591 309,588 307,593 301,590 304,585','#99a58c'))}
${obj('paint-roller','garden',L('M322 608v-15h14v-9','#b5a47c',2)+R(328,579,23,8,'#a9b894',3)+L('M322 609v8','#b49b75',4))}
${obj('light-switch','living',R(200,478,10,14,'#f7f1dc',1)+R(203,481,4,8,'#c9d2b7',1))}
${obj('windowsill','bedroom',R(220,363,79,5,'#ddd6bb',1))}
<!-- Extra service details revealed in the plumbing layer -->
<g class="layer-pipes" data-overlay="plumbing">
${obj('pipe','utility',L('M125 510H172V605H780M172 565H584V512M624 565V350M752 565V355M680 252V284H625V350','#729eac',4)+L('M151 505H181V557H593V487M181 557H635V337','#bb8c78',2,'stroke-dasharray="6 4"'))}
${obj('p-trap','kitchen',L('M584 510v13q0 8 9 8t9-8v-3h16v47','#a5b5a1',5)+L('M584 511v11q0 8 9 8t9-8v-2h16','#d3ddc6',1))}
${obj('shutoff-valve','kitchen',L('M584 549h15','#7c9fa0',4)+E(592,549,5,5,'#b7c4ab')+L('M592 543v-5M587 538h10','#9f8f6a',2))}
${obj('main-shutoff-valve','utility',L('M170 585h17','#95b3ad',5)+E(177,584,8,7,'#a2b5a0')+L('M177 577v-9M169 568h16','#c1a174',3))}
${obj('drainpipe','utility',L('M653 357v35H726V590H801','#9caa94',6)+L('M750 384v8M570 374v18h156','#9caa94',5))}
${obj('elbow','utility',L('M726 577v17h17','#7b8f78',7))}
${obj('tee','utility',L('M614 565h22M625 565v-13','#638b8d',6))}
</g>
<g class="layer-wiring" data-overlay="electrical">
${obj('cable','electrical',L('M510 519V441H351V458M510 441H656V457M510 441V293H315V300M510 441H635V488M510 441V282H747V302M510 519V596H210','#c3a35d',3,'stroke-dasharray="5 4"'))}
${obj('junction-box','electrical',R(504,434,13,14,'#d1bd86',2)+L('M507 438l7 6M514 438l-7 6','#aa9258',1))}
${obj('circuit-breaker','electrical',R(504,521,7,7,'#5e7862',1)+R(506,522,3,4,'#d8c387'))}
${obj('air-vent','electrical',R(549,287,31,13,'#d5ddc9',2)+L('M553 291h23M553 295h23','#9fae94',1))}
</g>
<g id="housePins"></g>
<g aria-hidden="true"><text x="97" y="654" style="font:8px var(--sans);letter-spacing:2px;fill:#9ca58a">A HOME, FROM THE INSIDE OUT.</text><path d="M850 637h43m-8-5 8 5-8 5M872 617v41" fill="none" stroke="#afb99d" stroke-width="1"/><text x="869" y="612" style="font:8px var(--sans);fill:#9ca58a">N</text></g>
</svg>`;
const pins=[
{id:'roof',x:829,y:196,room:'attic',main:true},
{id:'solar-panel',x:691,y:112,room:'attic'},
{id:'chimney',x:719,y:119,room:'attic'},
{id:'rafter',x:344,y:210,room:'attic',main:true},
{id:'insulation',x:279,y:248,room:'attic'},
{id:'water-tank',x:681,y:235,room:'attic',main:true},
{id:'gutter',x:879,y:252,room:'attic'},
{id:'bed',x:349,y:353,room:'bedroom',main:true},
{id:'wardrobe',x:442,y:330,room:'bedroom'},
{id:'casement-window',x:258,y:327,room:'bedroom',main:true},
{id:'bathtub',x:566,y:361,room:'bathroom',main:true},
{id:'washbasin',x:651,y:353,room:'bathroom'},
{id:'mirror',x:652,y:319,room:'bathroom'},
{id:'showerhead',x:561,y:310,room:'bathroom'},
{id:'toilet',x:743,y:367,room:'bathroom',main:true},
{id:'sofa',x:291,y:535,room:'living',main:true},
{id:'bookshelf',x:420,y:480,room:'living'},
{id:'coffee-table',x:390,y:550,room:'living'},
{id:'light-switch',x:205,y:483,room:'living'},
{id:'staircase',x:494,y:488,room:'structure',main:true},
{id:'foundation',x:415,y:605,room:'structure',main:true},
{id:'beam',x:372,y:422,room:'structure'},
{id:'countertop',x:635,y:506,room:'kitchen',main:true},
{id:'faucet',x:599,y:483,room:'kitchen',main:true},
{id:'refrigerator',x:765,y:507,room:'kitchen'},
{id:'range-hood',x:692,y:470,room:'kitchen'},
{id:'kitchen-island',x:659,y:554,room:'kitchen'},
{id:'electrical-panel',x:510,y:542,room:'electrical',main:true},
{id:'electrical-outlet',x:638,y:490,room:'kitchen'},
{id:'pendant-light',x:655,y:464,room:'kitchen'},
{id:'door',x:849,y:507,room:'garden',main:true},
{id:'water-heater',x:141,y:463,room:'utility',main:true},
{id:'washing-machine',x:144,y:552,room:'utility'},
{id:'toolbox',x:234,y:594,room:'garden',main:true},
{id:'hedge',x:877,y:590,room:'garden'},
{id:'hose',x:94,y:528,room:'garden'},
{id:'p-trap',x:596,y:532,room:'kitchen',layer:'plumbing'},
{id:'main-shutoff-valve',x:178,y:581,room:'utility',layer:'plumbing'},
{id:'pipe',x:344,y:566,room:'utility',layer:'plumbing'},
{id:'drainpipe',x:726,y:471,room:'utility',layer:'plumbing'},
{id:'junction-box',x:510,y:441,room:'electrical',layer:'electrical'},
{id:'cable',x:581,y:441,room:'electrical',layer:'electrical'}
];
const rooms=[
{id:'all',name:'All rooms',icon:'house',view:'0 0 1000 680',categories:[]},
{id:'living',name:'Living room',icon:'sofa',view:'185 425 280 183',categories:['rooms','electrical','openings']},
{id:'kitchen',name:'Kitchen',icon:'kitchen',view:'530 428 276 183',categories:['kitchen','plumbing','electrical']},
{id:'bathroom',name:'Bathroom',icon:'bath',view:'512 267 287 162',categories:['bathroom','plumbing']},
{id:'bedroom',name:'Bedroom',icon:'bed',view:'187 269 309 157',categories:['rooms','openings']},
{id:'attic',name:'Roof & attic',icon:'roof',view:'162 24 760 270',categories:['roofing','structure']},
{id:'utility',name:'Utility corner',icon:'droplet',view:'58 400 160 204',categories:['plumbing','climate','kitchen']},
{id:'garden',name:'Garden',icon:'leaf',view:'38 457 934 212',categories:['exterior','tools']}
];
function pinMarkup(p){const w=byId[p.id],width=Math.max(54,w.term.length*5.9+16);return `<g class="house-pin" data-word="${p.id}" data-room="${p.room}" role="button" tabindex="0" aria-label="Learn ${w.term}" transform="translate(${p.x} ${p.y})"><title>${w.term}</title><circle class="pin-ring" r="9"/><path class="pin-plus" d="M-3.5 0h7M0-3.5v7"/><g class="pin-label" transform="translate(${-width/2} -32)"><rect width="${width}" height="19" rx="4"/><text x="${width/2}" y="13" text-anchor="middle">${w.term}</text></g></g>`;}
function illustration(word){const cat=word.category;
let draw='';
if(cat==='roofing'||['roof','chimney','solar-panel'].includes(word.id))draw=P('41,99 109,61 178,98 111,134','#d4d8bf')+R(59,69,93,35,'#e5dfc9')+P('59,69 105,42 152,68 152,104 105,130 105,81','#dbd8bd')+P('105,38 132,23 189,56 162,71','url(#miniRoof)')+P('43,72 105,36 163,69 155,75 105,47 51,79','#b28357')+L('M105 40l57 32','#d5af80',3)+R(71,72,17,20,'#b3c9bb')+L('M79 72v20M71 82h17','#f4eed7',2)+P('130,45 140,40 140,20 130,25','#a18362')+R(120,20,10,25,'#c4a37a')+P('120,20 130,15 140,20 130,25','#d3b68f');
else if(cat==='plumbing'||cat==='problems')draw=P('38,108 111,66 185,108 112,143','#e3e5d3')+L('M72 98V60q0-22 24-22h24q15 0 15 15v11','#9db9ad',13)+L('M72 99V61q0-17 20-17h28q10 0 10 10v9','#cbd9c6',4)+E(134,67,11,5,'#91afa3')+L('M97 38v-9M87 29h21','#b39c74',6)+L('M134 81v17','#9cbec1',2,'stroke-dasharray="2 5"')+E(134,109,19,6,'#c8d8ca');
else if(cat==='electrical')draw=P('47,106 111,69 175,105 112,141','#e4e5d5')+R(74,26,74,85,'#d9deca',8)+R(80,31,61,72,'#f3f0dc',5)+R(91,48,9,21,'#83967e',2)+R(121,48,9,21,'#83967e',2)+E(110,86,6,6,'#83967e');
else if(cat==='bathroom')draw=P('29,102 107,59 190,103 112,147','#e2e7da')+R(55,64,110,33,'#e7e9db',17)+E(110,65,57,20,'#f9f7e9')+E(110,63,45,13,'#c0d5c7')+L('M70 95v17M152 94v17','#aab79e',4)+L('M153 51V33q0-10 12-10h5','#9fb4a4',5);
else if(cat==='rooms')draw=P('31,108 105,67 188,109 115,148','#d9dfc7')+R(53,49,104,59,'#9caf90',8)+P('157,64 177,54 177,98 157,111','#8a9f81')+R(47,74,118,34,'#a4b795',7)+R(44,66,13,44,'#94a98c',5)+R(153,67,14,43,'#829a7d',5)+R(65,57,37,27,'#b7c4a3',5)+R(108,57,36,27,'#b1c09e',5)+L('M56 108v10M155 109v9','#ad9d77',4);
else if(cat==='kitchen')draw=P('32,106 112,62 189,106 109,150','#dedfca')+R(59,58,90,59,'#b0bea0')+P('149,58 172,45 172,103 149,117','#96ac8b')+P('53,55 148,55 178,39 84,39','#e9dfc5')+R(53,55,95,6,'#d2c4a4')+E(104,48,22,7,'#a6bdae')+L('M107 42V25q0-12 12-12h5v7','#96ad9c',4)+L('M102 66v47M93 77v10M111 77v10','#899a76',2);
else if(cat==='openings')draw=P('42,113 111,73 182,112 110,151','#e2e4d1')+R(67,20,89,89,'#d2c6a5',2)+R(74,27,75,76,'#b7cdbd')+P('74,27 149,27 74,103','#cddbc7')+L('M111 27v76M74 64h75','#f8f1d9',5)+R(61,108,103,7,'#e4d5b2',2);
else if(cat==='exterior')draw=P('32,111 108,68 188,110 111,153','#dde4c9')+P('70,86 149,86 139,124 82,124','#c4a984')+E(110,85,40,10,'#b49c78')+L('M110 87V35M111 65l-26-17M111 76l24-23','#8fa077',3)+E(90,46,18,10,'#a1b284','transform="rotate(25 90 46)"')+E(130,52,20,11,'#b1c193','transform="rotate(-28 130 52)"')+E(110,29,14,20,'#9bab7d');
else if(cat==='materials')draw=P('39,103 107,64 184,103 116,143','#e3dfcd')+R(61,68,88,39,'#b79779')+P('61,68 89,52 177,52 149,68','#d6b58f')+P('149,68 177,52 177,91 149,107','#9e876b')+L('M61 88h88M105 68v20M82 88v19M127 88v19M149 87l28-16','#e5c49d',2);
else if(cat==='tools'||cat==='actions')draw=P('36,110 113,65 188,108 111,152','#e4e0cd')+L('M80 112l53-68','#bd9e70',13)+P('111,36 126,24 168,55 156,70 140,60 134,70 121,61 127,51','#9cafa0')+L('M81 111l41-53','#d1b186',3);
else if(cat==='plans')draw=P('35,99 116,51 190,95 109,142','#d7dfd5')+P('35,94 116,46 190,90 109,137','#f4f1dd')+L('M57 94l57-33 51 29-57 33ZM83 80l50 29M113 62l-28 45M131 90l19-11','#93aaa2',1.5)+L('M51 101l56 32M58 108l6-3M73 116l6-3M89 125l6-3','#b8c6ad',1);
else if(cat==='climate')draw=P('32,110 111,65 189,109 110,154','#e1e5d1')+R(56,36,113,55,'#e6e8d6',7)+R(61,70,103,13,'#bdccb4',3)+L('M66 75h93M66 79h93','#98af98',1)+L('M83 99q-5 8 0 16M112 99q-5 8 0 16M141 99q-5 8 0 16','#a8bda3',2);
else if(cat==='safety')draw=P('34,111 111,68 189,111 112,154','#e4e1c9')+E(111,97,59,19,'#c1af72')+`<path d="M64 94c0-66 93-66 93 0Z" fill="#d8c68b"/>`+L('M111 47v45','#bdab70',6)+L('M76 78q5-24 19-28','#e9d79f',4);
else draw=P('31,107 109,62 191,107 112,153','#e0e4cf')+R(91,46,27,73,'#c7c5aa')+P('118,46 138,35 138,108 118,119','#a7b596')+R(56,43,111,13,'#bca780')+P('56,43 78,31 189,31 167,43','#d9c7a2')+P('167,43 189,31 189,43 167,56','#a99670');
return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 155" aria-hidden="true"><defs><pattern id="miniRoof" width="17" height="10" patternUnits="userSpaceOnUse"><rect width="17" height="10" fill="#bd8b60"/><path d="M0 0h17M8 0v10" stroke="#aa7952" stroke-width=".6" fill="none"/></pattern></defs>${draw}</svg>`;
}
window.BUILDING_HOUSE={svg,pins,rooms,pinMarkup,illustration};
})();
