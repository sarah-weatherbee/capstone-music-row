const buildings = [
  {
    id: 'building1',
    name: 'house',
    mapViewBefore: 'https://www.google.com/maps/place/811+18th+Ave+S,+Nashville,+TN+37203/@36.1494549,-86.7946182,3a,75y,276.35h,98.62t/data=!3m6!1e1!3m4!1sou1L6T7KNOO3JwIYhBjCTQ!2e0!7i13312!8i6656!4m13!1m7!3m6!1s0x886466917c9c2c8b:0xf006868c17631414!2s811+18th+Ave+S,+Nashville,+TN+37203!3b1!8m2!3d36.149488!4d-86.794941!3m4!1s0x886466917c9c2c8b:0xf006868c17631414!8m2!3d36.149488!4d-86.794941',
    yearDemolished: '2013',
    address: '811 18th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building2',
    name: 'Fireside Recording Studios',
    mapViewBefore: 'https://www.google.com/maps/place/813+18th+Ave+S,+Nashville,+TN+37203/@36.1492695,-86.7946517,3a,75y,282.98h,84.73t/data=!3m6!1e1!3m4!1sHrZPye38QC-CfZM_CVPiTw!2e0!7i13312!8i6656!4m5!3m4!1s0x886466917b22ac2d:0x149c0313382dc78a!8m2!3d36.149349!4d-86.7949639',
    yearDemolished: '2013',
    address: '813 18th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building3',
    name: 'Pete Drake Studio',
    mapViewBefore: 'https://www.google.com/maps/place/815+18th+Ave+S,+Nashville,+TN+37203/@36.1491667,-86.7946323,3a,75y,279.67h,89.61t/data=!3m6!1e1!3m4!1sA-TsdVedF5564DXmdebzfA!2e0!7i13312!8i6656!4m5!3m4!1s0x886466917aa6f283:0x467255b36bf66bcc!8m2!3d36.149223!4d-86.7949621',
    yearDemolished: '2013',
    address: '815 18th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building4',
    name: 'house',
    mapViewBefore: 'https://www.google.com/maps/place/816+18th+Ave+S,+Nashville,+TN+37203/@36.1490677,-86.7946491,3a,75y,265.34h,93.25t/data=!3m6!1e1!3m4!1scNrt4EHklmZdX19x7SijHQ!2e0!7i13312!8i6656!4m5!3m4!1s0x886466919d649563:0x42f0528a1ccb9524!8m2!3d36.1489737!4d-86.7943538',
    yearDemolished: '2013',
    address: '816-819 18th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building5',
    name: 'Pilcher Hamilton House',
    mapViewBefore: 'https://www.google.com/maps/place/1+Music+Square+W,+Nashville,+TN+37203/@36.1517437,-86.7929013,3a,90y,273.84h,95.91t/data=!3m6!1e1!3m4!1sUGoM8xQuTTZ9Z1gSZVsqDQ!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669242a8040b:0x256ea06247bcc67c!8m2!3d36.1517388!4d-86.7931372',
    yearDemolished: '2014',
    address: '1 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building6',
    name: 'Hummingbird Productions',
    mapViewBefore: 'https://www.google.com/maps/place/7+Music+Square+W,+Nashville,+TN+37203/@36.1513844,-86.7929622,3a,75y,277.29h,93.99t/data=!3m6!1e1!3m4!1spKlV0_SmbtJtfpEnL8DnrQ!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669241eb1c3f:0xe1265bd2df08511b!8m2!3d36.1514057!4d-86.7932417',
    yearDemolished: '2014',
    address: '7 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building7',
    name: 'Music Productions',
    mapViewBefore: 'https://www.google.com/maps/place/8+Music+Square+W,+Nashville,+TN+37203/@36.1512703,-86.7930358,3a,90y,250.02h,85.22t/data=!3m6!1e1!3m4!1slvCC2zJ42L4IqQIHbVYdow!2e0!7i3328!8i1664!4m5!3m4!1s0x886466926da83dc3:0xeebc6bcd3a972429!8m2!3d36.1512383!4d-86.7926466',
    yearDemolished: '2014',
    address: '9 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building8',
    name: 'Cedarwood Publishing/Combine',
    mapViewBefore: 'https://www.google.com/maps/place/35+Music+Square+E,+Nashville,+TN+37203/@36.1491964,-86.7920858,3a,90y,281.87h,104.54t/data=!3m6!1e1!3m4!1saaFzcaD7OrFZFVju-DFTHg!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691faf60085:0x8cd8f39abd130120!8m2!3d36.1492201!4d-86.79247',
    yearDemolished: '2014',
    address: '35 Music Square East, Nashville, TN 37203',
  },
  {
    id: 'building9',
    name: 'Combine Group',
    mapViewBefore: 'https://www.google.com/maps/place/39+Music+Square+E,+Nashville,+TN+37203/@36.1488764,-86.7921404,3a,75y,291.31h,90.94t/data=!3m6!1e1!3m4!1sSm2q_JfUwQrQJalDt9iqCg!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691e56d0819:0x24b0920a1b95265f!8m2!3d36.148952!4d-86.79246',
    yearDemolished: '2014',
    address: '39 Music Square East, Nashville, TN 37203',
  },
  {
    id: 'building10',
    name: 'JAG Management',
    mapViewBefore: 'https://www.google.com/maps/place/41+Music+Square+E,+Nashville,+TN+37203/@36.1487972,-86.7921697,3a,75y,285.51h,90t/data=!3m6!1e1!3m4!1sOV0ddNQR5bbEPXFrDHQATg!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691e5b620d3:0x216a753f0c3d8e5f!8m2!3d36.1488365!4d-86.7923915',
    yearDemolished: '2014',
    address: '41 Music Square East, Nashville, TN 37203',
  },
  {
    id: 'building11',
    name: 'Sound Shop Studio',
    mapViewBefore: 'https://www.google.com/maps/place/1309+Division+St,+Nashville,+TN+37203/@36.1515103,-86.7881237,3a,75y,181.89h,85.63t/data=!3m6!1e1!3m4!1sESVLkV9ZwZjhXfQmuh2EGg!2e0!7i13312!8i6656!4m5!3m4!1s0x8864668c6829e6fd:0xa39d93e23aca14d!8m2!3d36.1512028!4d-86.7880387',
    yearDemolished: '2015',
    address: '1307 Division St., Nashville, TN 37203',
  },
  {
    id: 'building12',
    name: 'Nashville Music Group, Pura Vida Vintage Clothing/Tailor Shop',
    mapViewBefore: 'https://www.google.com/maps/place/19+Music+Square+W,+Nashville,+TN+37203/@36.1505125,-86.7931178,3a,75y,285.51h,90t/data=!3m6!1e1!3m4!1san_KZhRXC0vKKfLDKIlTEg!2e0!7i13312!8i6656!4m5!3m4!1s0x886466923c92691d:0x8ad5b41dd48ba2f6!8m2!3d36.150581!4d-86.7934315',
    yearDemolished: '2015',
    address: '19 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building13',
    name: 'Speer Building',
    mapViewBefore: 'https://www.google.com/maps/place/54+Music+Square+W,+Nashville,+TN+37203/@36.1479837,-86.7935817,3a,75y,106.2h,97.46t/data=!3m6!1e1!3m4!1sZImJL3_IIrN2oywZDiE6iQ!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691b91abc47:0xb465deff81e2f7ec!8m2!3d36.1480687!4d-86.7934021',
    yearDemolished: '2015',
    address: '54 Music Square West, Nahsville, TN 37203',
  },
  {
    id: 'building14',
    name: 'Vibe Studio',
    mapViewBefore: 'https://www.google.com/maps/place/56+Music+Square+W,+Nashville,+TN+37203/@36.1478964,-86.7935967,3a,75y,105.25h,97.4t/data=!3m6!1e1!3m4!1sL13FwjtHrOnaO-jvKBEJ2w!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691b9c62799:0x7fcc8fc836639c14!8m2!3d36.1480254!4d-86.7931715',
    yearDemolished: '2015',
    address: '56 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building15',
    name: 'Hi-Fi Fusion',
    mapViewBefore: 'https://www.google.com/maps/place/58+Music+Square+W,+Nashville,+TN+37203/@36.1477175,-86.7936288,3a,75y,99h,90t/data=!3m6!1e1!3m4!1s4pwEQyzrPU_dI53uRDOrCA!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691b740f839:0xca61b36180df3f30!8m2!3d36.1477904!4d-86.7929017',
    yearDemolished: '2015',
    address: '58 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building16',
    name: 'Sure Fire Music Co.',
    mapViewBefore: 'https://www.google.com/maps/place/60+Music+Square+W,+Nashville,+TN+37203/@36.1475314,-86.7936638,3a,75y,98.35h,95.34t/data=!3m6!1e1!3m4!1siv5etLRKg1IEW9QfiYB6rA!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691b6c3a1ab:0xc3f7eeaf345d5d38!8m2!3d36.1480169!4d-86.7930489',
    yearDemolished: '2015',
    address: '60 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building17',
    name: 'Sharp Objects Entertainment',
    mapViewBefore: 'https://www.google.com/maps/place/62+Music+Square+W,+Nashville,+TN+37203/@36.1474366,-86.7936815,3a,75y,102.32h,90t/data=!3m6!1e1!3m4!1sg89RgzayHWZgtMR1qBw-qw!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691b402ff4f:0xb6dcb5fef1b54646!8m2!3d36.1470191!4d-86.79299',
    yearDemolished: '2015',
    address: '62 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building18',
    name: 'Merit Music/SESAC',
    mapViewBefore: 'https://www.google.com/maps/place/64+Music+Square+W,+Nashville,+TN+37203/@36.1471554,-86.7937343,3a,75y,98.41h,90t/data=!3m6!1e1!3m4!1slvEJJzG50brTaZ2DSJ4Ecw!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691b4b86a8f:0x819d0608c175dad9!8m2!3d36.14711!4d-86.793397',
    yearDemolished: '2015',
    address: '64 Music Square West, Nashville, TN 37203',
  },
  {
    id: 'building19',
    name: 'Kelso Herston Enterprises',
    mapViewBefore: 'https://www.google.com/maps/place/1202+16th+Ave+S,+Nashville,+TN+37212/@36.1430877,-86.7931887,3a,75y,101.35h,91.06t/data=!3m6!1e1!3m4!1sSHQf5y0wqWFQL2hNTEgDMA!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669abf46d17f:0x14b1581e724835df!8m2!3d36.1430426!4d-86.7929017',
    yearDemolished: '2015',
    address: '1202 16th Ave. S., Nashville, TN 37212',
  },
  {
    id: 'building20',
    name: 'Studio 19',
    mapViewBefore: 'https://www.google.com/maps/place/821+19th+Ave+S,+Nashville,+TN+37203/@36.1492232,-86.7959045,3a,75y,283.96h,90t/data=!3m6!1e1!3m4!1sHvQri8v-A3HFlLC8dbb-ZA!2e0!7i13312!8i6656!4m5!3m4!1s0x886466915ae8a3eb:0x2b0d2229a0e823c8!8m2!3d36.1493!4d-86.7962572',
    yearDemolished: '2015',
    address: '821 19th Ave. S., Nahsville, TN 37203',
  },
  {
    id: 'building21',
    name: 'House',
    mapViewBefore: 'https://www.google.com/maps/place/111+17th+Ave+S,+Nashville,+TN+37203/@36.1527306,-86.7936246,3a,75y,244.52h,95.89t/data=!3m6!1e1!3m4!1swifwUZ9ycpaJw7wwoOqZvg!2e0!7i13312!8i6656!4m5!3m4!1s0x88646692f74993e1:0x385d06812cbf36a9!8m2!3d36.1527055!4d-86.793809',
    yearDemolished: '2015',
    address: '111 17th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building22',
    name: 'Acquire Digital/Top Tracks Recording',
    mapViewBefore: 'https://www.google.com/maps/place/113+17th+Ave+S,+Nashville,+TN+37203/@36.1527306,-86.7936246,3a,75y,243.34h,90.11t/data=!3m6!1e1!3m4!1swifwUZ9ycpaJw7wwoOqZvg!2e0!7i13312!8i6656!4m13!1m7!3m6!1s0x886466933afb44c5:0x44366dfb6bd6dd2a!2s113+17th+Ave+S,+Nashville,+TN+37203!3b1!8m2!3d36.152691!4d-86.79368!3m4!1s0x886466933afb44c5:0x44366dfb6bd6dd2a!8m2!3d36.152691!4d-86.79368',
    yearDemolished: '2015',
    address: '113 17th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building23',
    name: 'LeVans Guitar Repair',
    mapViewBefore: 'https://www.google.com/maps/place/115+17th+Ave+S,+Nashville,+TN+37203/@36.1525574,-86.7934964,3a,90y,234.79h,90.93t/data=!3m6!1e1!3m4!1siLV-_7YiHMNzb5quECdzYQ!2e0!7i13312!8i6656!4m5!3m4!1s0x88646692e20191e9:0xd1b1c804db351bc7!8m2!3d36.1524687!4d-86.7936679',
    yearDemolished: '2015',
    address: '115 17th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building24',
    name: 'Marty Stuart Tours/Olesen Music',
    mapViewBefore: 'https://www.google.com/maps/place/119+17th+Ave+S,+Nashville,+TN+37203/@36.1523143,-86.7933565,3a,90y,229.51h,99.46t/data=!3m6!1e1!3m4!1sspAb8Lq7gxd1YLMZYerQUg!2e0!7i13312!8i6656!4m5!3m4!1s0x88646692e2114663:0x19b8f10a5cd60f45!8m2!3d36.1522591!4d-86.7934366',
    yearDemolished: '2015',
    address: '119 17th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building25',
    name: 'Encore Entertainment/Southern Ground Artists',
    mapViewBefore: 'https://www.google.com/maps/place/121+17th+Ave+S,+Nashville,+TN+37203/@36.1521724,-86.7932156,3a,90y,243.37h,95.75t/data=!3m6!1e1!3m4!1sakmyR6Ksfy9L7uJn2-e0Ig!2e0!7i13312!8i6656!4m5!3m4!1s0x886466925c0b0777:0x2001961933590387!8m2!3d36.1520863!4d-86.7934511',
    yearDemolished: '2015',
    address: '121 17th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building26',
    name: 'AEG Live/Messina Group/Lyric Street Records/Tracking Room 2',
    mapViewBefore: 'https://www.google.com/maps/place/824+19th+Ave+S,+Nashville,+TN+37203/@36.1489534,-86.795958,3a,75y,90.57h,96.69t/data=!3m6!1e1!3m4!1skJNim4BrD0rDijxEdBbfmg!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669143f9fc27:0x42bb2b2fc9dad3b5!8m2!3d36.1488554!4d-86.795642',
    yearDemolished: '2015',
    address: '824 19th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building27',
    name: 'houses/offices',
    mapViewBefore: 'https://www.google.com/maps/place/822+19th+Ave+S,+Nashville,+TN+37203/@36.1490428,-86.7959366,3a,75y,93.85h,93.83t/data=!3m6!1e1!3m4!1s2-Qb4xF8QPXfVl-8zf3U1g!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669169f1c623:0x6cd4f543ed88c503!8m2!3d36.1489921!4d-86.7956692',
    yearDemolished: '2015',
    address: '822 19th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building28',
    name: 'Dale Morris Office',
    mapViewBefore: 'https://www.google.com/maps/place/818+19th+Ave+S,+Nashville,+TN+37203/@36.1492232,-86.7959045,3a,75y,59.14h,96.3t/data=!3m6!1e1!3m4!1sHvQri8v-A3HFlLC8dbb-ZA!2e0!7i13312!8i6656!4m5!3m4!1s0x88646691420f3a3b:0x248b1ed726165a99!8m2!3d36.1494093!4d-86.79559',
    yearDemolished: '2015',
    address: '818-820 19th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building29',
    name: 'Track 2',
    mapViewBefore: 'https://www.google.com/maps/place/816+19th+Ave+S,+Nashville,+TN+37203/@36.1495034,-86.795855,3a,90y,97.95h,88.75t/data=!3m6!1e1!3m4!1s3nt1tDrJb84LL7lR5Y9t0g!2e0!7i13312!8i6656!4m5!3m4!1s0x886466915ced09af:0x8e51fe97f560682f!8m2!3d36.1493709!4d-86.7955671',
    yearDemolished: '2015',
    address: '816 19th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building30',
    name: 'Charm Salon',
    mapViewBefore: 'https://www.google.com/maps/place/814+19th+Ave+S,+Nashville,+TN+37203/@36.1495597,-86.7958458,3a,75y,85.43h,100.24t/data=!3m6!1e1!3m4!1sTgNR3E2C-bptOi4kYP2iiA!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669167b09423:0xfe869e2c4b0f53b0!8m2!3d36.1495152!4d-86.7955261',
    yearDemolished: '2015',
    address: '814 19th Ave S., Nashville, TN 37203',
  },
  {
    id: 'building31',
    name: 'Wyatt House',
    mapViewBefore: 'https://www.google.com/maps/place/827+19th+Ave+S,+Nashville,+TN+37203/@36.1487039,-86.7960988,3a,75y,320.32h,89.89t/data=!3m6!1e1!3m4!1s8g5WN29ApN5f2QEKUQIerg!2e0!7i13312!8i6656!4m13!1m7!3m6!1s0x8864669145e47b71:0xb2bb8e52b233908c!2s827+19th+Ave+S,+Nashville,+TN+37203!3b1!8m2!3d36.1488543!4d-86.7962376!3m4!1s0x8864669145e47b71:0xb2bb8e52b233908c!8m2!3d36.1488543!4d-86.7962376',
    yearDemolished: '2016',
    address: '827 19th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building32',
    name: 'Warner/Crittenton Building',
    mapViewBefore: 'https://www.google.com/maps/place/1815+Division+St,+Nashville,+TN+37203/@36.1503979,-86.795735,3a,45y,96.57h,102.17t/data=!3m6!1e1!3m4!1s64ku6iS6v17VjF1kY6pDBQ!2e0!7i13312!8i6656!4m5!3m4!1s0x88646693db7c8f0f:0x4f716c6f03c4c269!8m2!3d36.1504596!4d-86.7952368',
    yearDemolished: '2016',
    address: '1815 Division St., Nashville, TN 37203',
  },
  {
    id: 'building33',
    name: 'Hi-Fi Fusion',
    mapViewBefore: 'https://www.google.com/maps/place/820+18th+Ave+S,+Nashville,+TN+37203/@36.1490463,-86.7946972,3a,75y,102.37h,103.69t/data=!3m6!1e1!3m4!1sO7pbEWzjHVkQJqLs8bL5PQ!2e0!7i13312!8i6656!4m5!3m4!1s0x886466919e1c81b1:0xd874cf3d0db59dbc!8m2!3d36.1487204!4d-86.7943931',
    yearDemolished: '2016',
    address: '816 18th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building34',
    name: 'McFadden Building',
    mapViewBefore: 'https://www.google.com/maps/place/818+18th+Ave+S,+Nashville,+TN+37203/@36.148875,-86.794728,3a,75y,81.11h,101.35t/data=!3m6!1e1!3m4!1szEGbv4jkmbhThU6brdLsUw!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669176419b41:0xcad8b8909a0e06f3!8m2!3d36.1488931!4d-86.7945108',
    yearDemolished: '2016',
    address: '818 18th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building35',
    name: 'Apartments',
    mapViewBefore: 'https://www.google.com/maps/place/812+18th+Ave+S,+Nashville,+TN+37203/@36.1493031,-86.7946465,3a,75y,109.7h,90t/data=!3m6!1e1!3m4!1soIWusN-3po-VDIjkCWvUZg!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669178487f29:0xbda89db547de757e!8m2!3d36.1490882!4d-86.794367',
    yearDemolished: '2016',
    address: '812 18th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building36',
    name: 'Fender Guitars and Music Publishing',
    mapViewBefore: 'https://www.google.com/maps/place/20+Music+Square+W,+Nashville,+TN+37203/@36.1504792,-86.7931182,3a,75y,98.64h,93.61t/data=!3m6!1e1!3m4!1spUUjABcCU5fkm0Eg9-H4AA!2e0!7i13312!8i6656!4m5!3m4!1s0x88646692178cf0c3:0x77b4cb7f0d60bdbb!8m2!3d36.1505257!4d-86.7929411',
    yearDemolished: '2016',
    address: '20 Music Square W., Nashville, TN 37203',
  },
  {
    id: 'building37',
    name: 'Sammy Bs/Figlios/Gra-Mar Talent',
    mapViewBefore: 'https://www.google.com/maps/place/26+Music+Square+E,+Nashville,+TN+37203/@36.1498486,-86.7919545,3a,75y,94.82h,95.92t/data=!3m6!1e1!3m4!1sjzpgWZb9YBWfGOs7PE10Jg!2e0!7i13312!8i6656!4m5!3m4!1s0x8864668dfe6cbc2f:0x3caf535a5d47f200!8m2!3d36.1498339!4d-86.7916457',
    yearDemolished: '2017',
    address: '26 Music Square E., Nashville, TN 37203',
  },
  {
    id: 'building38',
    name: 'Studio 20',
    mapViewBefore: 'https://www.google.com/maps/place/823+19th+Ave+S,+Nashville,+TN+37203/@36.1491124,-86.795944,3a,75y,269.4h,92.47t/data=!3m6!1e1!3m4!1sPTUvu-IqiRgG_SkYgZKy5g!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669145576a95:0xceff10f5c88ecdc0!8m2!3d36.149136!4d-86.796282',
    yearDemolished: '2018',
    address: '823 19th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building39',
    name: 'Studio 20 songwriters',
    mapViewBefore: 'https://www.google.com/maps/place/825+19th+Ave+S,+Nashville,+TN+37203/@36.1489461,-86.7959756,3a,90y,280.34h,103.46t/data=!3m6!1e1!3m4!1sV6Riew9QJjkb8UKgl-o-Cw!2e0!7i13312!8i6656!4m5!3m4!1s0x8864669145a018ab:0x85c4adea064a22e8!8m2!3d36.1489826!4d-86.7962768',
    yearDemolished: '2018',
    address: '825 19th Ave. S., Nashville, TN 37203',
  },
  {
    id: 'building40',
    name: 'Spirit Music',
    mapViewBefore: 'https://www.google.com/maps/place/808+19th+Ave+S,+Nashville,+TN+37203/@36.1499809,-86.795766,3a,90y,95.74h,97.97t/data=!3m6!1e1!3m4!1sla6hb-atWflzitXHjASUgQ!2e0!7i13312!8i6656!4m5!3m4!1s0x88646693dfa87e3b:0x411789af1511b6a0!8m2!3d36.1499593!4d-86.7955508',
    yearDemolished: '2018',
    address: '808 19th Ave. S., Nashville, TN ',
  },

];
export default buildings;
