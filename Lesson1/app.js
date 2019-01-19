var lyricsArray = ["Was ist des Deutschen Vaterland?","Ist's Preußenland? Ist's Schwabenland?","Ist's wo am Rhein die Rebe blüht?","Ist's wo am Belt die Möwe zieht?","O nein, nein, nein!",
"Sein Vaterland muss größer sein!","Was ist des Deutschen Vaterland?","Ist's Bayerland? Ist's Steierland?","Ist's, wo des Marsen Rind sich streckt?",
"Ist's, wo der Märker Eisen reckt?","O nein, nein, nein!","Sein Vaterland muss größer sein!","Was ist des Deutschen Vaterland?",
"Ist's Pommerland? Westfalenland?","Ist's, wo der Sand der Dünen weht?","Ist's, wo die Donau brausend geht?","O nein, nein, nein!",
"Sein Vaterland muss größer sein!","Was ist des Deutschen Vaterland?","So nenne mir das große Land!","Ist's Land der Schweizer? Ist's Tirol?",
"Das Land und Volk gefiel mir wohl.","Doch nein, nein, nein!","Sein Vaterland muss größer sein!","Was ist des Deutschen Vaterland?",
"So nenne mir das große Land!","Gewiss, es ist das Österreich,","An Ehren und an Siegen reich?","O nein, nein, nein!","Sein Vaterland muss größer sein!",
"Was ist des Deutschen Vaterland?","So nenne endlich mir das Land!","So weit die deutsche Zunge klingt","Und Gott im Himmel Lieder singt:",
"Das soll es sein! Das soll es sein!","Das wackrer Deutscher, Nenne dein!","Das nenne dein!","Das ganze Deutschland soll es sein!",
"O Gott vom Himmel, sieh darein","Und gib uns rechten deutschen Mut,","Dass wir es lieben treu und gut!","Das soll es sein! Das soll es sein!",
"Das ganze Deutschland soll es sein!","Das soll es sein!","Das ganze Deutschland soll es sein!"];

var lyric = 0;

$("#lyrics").click(function(){
	$(this).text(lyricsArray[lyric]);
	lyric = lyric+1;
});

$("#background").click(function(){
	$(this).toggle();
})