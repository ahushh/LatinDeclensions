function Word(nomS, nomP, genS, genP, datS, datP, accS, accP, ablS, ablP, def, decl) {
    this["singularis nominativus"] = nomS;
    this["pluralis nominativus"] = nomP;
    this["singularis genetivus"] = genS;
    this["pluralis genetivus"] = genP;
    this["singularis dativus"] = datS;
    this["pluralis dativus"] = datP;
    this["singularis accusativus"] = accS;
    this["pluralis accusativus"] = accP;
    this["singularis ablativus"] = ablS;
    this["pluralis ablativus"] = ablP;
    this.definition = def;
    this.declension = decl;
}

var words = [
    ////////////////////////////////
    // Declinatio prima
    ////////////////////////////////
    new Word("femina", "feminae", "feminae", "feminarum", "feminae", "feminis", "feminam", "feminas", "femina", "feminis", "woman", 1),
    new Word("aqua", "aquae", "aquae", "aquarum", "aquae", "aquis", "aquam", "aquas", "aqua", "aquis", "water", 1),
    new Word("amica", "amicae", "amicae", "amicarum", "amicae", "amicis", "amicam", "amicas", "amica", "amicis", "friend (female)" ),
    new Word("porta", "portae", "portae", "portarum", "portae", "portis", "portam", "portas", "porta", "portis", "gate",1),
    new Word("fenestra", "fenestrae", "fenestrae", "fenestrarum", "fenestrae", "fenestris", "fenestram", "fenestras", "fenestra", "fenestris", "window",1 ),
    new Word("umbra", "umbrae", "umbrae", "umbrarum", "umbrae", "umbris", "umbram", "umbras", "umbra", "umbris", "shadow", 1),
    new Word("terra", "terrae", "terrae", "terrarum", "terrae", "terris", "terram", "terras", "terra", "terris", "land", 1),
    new Word("taberna", "tabernae", "tabernae", "tabernarum", "tabernae", "tabernis", "tabernam", "tabernas", "taberna", "tabernis", "shop", 1),
    new Word("charta", "chartae", "chartae", "chartarum", "chartae", "chartis", "chartam", "chartas", "charta", "chartis", "map", 1),
    new Word("lacrima", "lacrimae", "lacrimae", "lacrimarum", "lacrimae", "lacrimis", "lacrimam", "lacrimas", "lacrima", "lacrimis", "tear", 1),
    new Word("domina", "dominae", "dominae", "dominarum", "dominae", "dominis", "dominam", "dominas", "domina", "dominis", "mistress",1),
    new Word("gemma", "gemmae", "gemmae", "gemmarum", "gemmae", "gemmis", "gemmam", "gemmas", "gemma", "gemmis", "gem",1),
    new Word("filia", "filiae", "filiae", "filiarum", "filiae", "filiabus", "filiam", "filias", "filia", "filiabus", "daughter",1),
    new Word("incola", "incolae", "incolae", "incolarum", "incolae", "incolis", "incolam", "incolas", "incola", "incolis", "inhabitant",1),
    new Word("insula", "insulae", "insulae", "insularum", "insulae", "insulis", "insulam", "insulas", "insula", "insulis", "island",1),
    new Word("mensa", "mensae", "mensae", "mensarum", "mensae", "mensis", "mensam", "mensas", "mensa", "mensis", "table",1),
    new Word("poeta", "poetae", "poetae", "poetarum", "poetae", "poetis", "poetam", "poetas", "poeta", "poetis", "poet",1),
    new Word("puella", "puellae", "puellae", "puellarum", "puellae", "puellis", "puellam", "puellas", "puella", "puellis", "girl",1),
    new Word("silva", "silvae", "silvae", "silvarum", "silvae", "silvis", "silvam", "silvas", "silva", "silvis", "forest",1),
    new Word("stella", "stellae", "stellae", "stellarum", "stellae", "stellis", "stellam", "stellas", "stella", "stellis", "star",1),
    ////////////////////////////////
    // Declinatio secunda
    ////////////////////////////////
    new Word("ager", "agri", "agri", "agrorum", "agro", "agris", "agrum", "agros", "agro", "agris", "field",2),
    new Word("nasus", "nasi", "nasi", "nasorum", "naso", "nasis", "nasum", "nasos", "naso", "nasis", "nose",2),
    new Word("servus", "servi", "servi", "servorum", "servo", "servis", "servum", "servos", "servo", "servis", "slave",2),
    new Word("vestigium", "vestigia", "vestigii", "vestigiorum", "vestigio", "vestigiis", "vestigium", "vestigia", "vestigio", "vestigiis", "footprint",2),
    new Word("caelum", "caela", "caeli", "caelorum", "caelo", "caelis", "caelum", "caela", "caelo", "caelis", "heaven",2),
    new Word("campus", "campi", "campi", "camporum", "campo", "campis", "campum", "campos", "campo", "campis", "field",2),
    new Word("nummus", "nummi", "nummi", "nummorum", "nummo", "nummis", "nummum", "nummos", "nummo", "nummis", "coin",2),
    new Word("deus", "dei", "dei", "deorum", "deo", "deis", "deum", "deos", "deo", "deis", "god",2),
    new Word("dominus", "domini", "domini", "dominorum", "domino", "dominis", "dominum", "dominos", "domino", "dominis", "lord",2),
    new Word("baculum", "bacula", "baculi", "baculorum", "baculo", "baculis", "baculum", "bacula", "baculo", "baculis", "staff",2),
    new Word("equus", "equi", "equi", "equorum", "equo", "equis", "equum", "equos", "equo", "equis", "horse",2),
    new Word("murus", "muri", "muri", "murorum", "muro", "muris", "murum", "muros", "muro", "muris", "wall",2),
    new Word("hortus", "horti", "horti", "hortorum", "horto", "hortis", "hortum", "hortos", "horto", "hortis", "garden",2),
    new Word("liber", "libri", "libri", "librorum", "libro", "libris", "librum", "libros", "libro", "libris", "book",2),
    new Word("oculus", "oculi", "oculi", "oculorum", "oculo", "oculis", "oculum", "oculos", "oculo", "oculis", "eye",2),
    new Word("puer", "pueri", "pueri", "puerorum", "puero", "pueris", "puerum", "pueros", "puero", "pueris", "boy",2),
    new Word("osculum", "oscula", "osculi", "osculorum", "osculo", "osculis", "osculum", "oscula", "osculo", "osculis", "kiss",2),
    new Word("templum", "templa", "templi", "templorum", "templo", "templis", "templum", "templa", "templo", "templis", "temple",2),
    new Word("vesper", "vesperi", "vesperi", "vesperorum", "vespero", "vesperis", "vesperum", "vesperos", "vespere", "vesperis", "evening",2),
    new Word("vir", "viri", "viri", "virorum", "viro", "viris", "virum", "viros", "viro", "viris", "man",2),
    ////////////////////////////////
    // Declinatio tertia
    ////////////////////////////////
    new Word("ovis", "oves", "ovis", "ovium", "ovi", "ovibus", "ovem", "oves", "ove", "ovibus", "sheep",3),
    new Word("animal", "animalia", "animalis", "animalium", "animali", "animalibus", "animal", "animalia", "animali", "animalibus", "animal",3),
    new Word("pastor", "pastores", "pastoris", "pastorum", "pastori", "pastoribus", "pastorem", "pastores", "pastore", "pastoribus", "shepherd",3),
    new Word("ars", "artes", "artis", "artium", "arti", "artibus", "artem", "artes", "arte", "artibus", "art",3),
    new Word("arbor", "arbores", "arboris", "arborum", "arbori", "arboribus", "arborem", "arbores", "arbore", "arboribus", "tree",3),
    new Word("clamor", "clamores", "clamoris", "clamorum", "clamori", "clamoribus", "clamorem", "clamores", "clamore", "clamoribus", "shout",3),
    new Word("dens", "dentes", "dentis", "dentium", "denti", "dentibus", "dentem", "dentes", "dente", "dentibus", "tooth",3),
    new Word("mons", "montes", "montis", "montium", "monti", "montibus", "montem", "montes", "monte", "montibus", "mountain",3),
    new Word("dux", "duces", "ducis", "ducum", "duci", "ducibus", "ducem", "duces", "duce", "ducibus", "leader",3),
    new Word("leo", "leones", "leonis", "leonum", "leoni", "leonibus", "leonem", "leones", "leone", "leonibus", "lion",3),
    new Word("mare", "maria", "maris", "marium", "mari", "maribus", "mare", "maria", "mari", "maribus", "sea",3),
    new Word("vallis", "valles", "vallis", "vallium", "valli", "vallibus", "vallem", "valles", "valle", "vallibus", "valley",3),
    new Word("mors", "mortes", "mortis", "mortium", "morti", "mortibus", "mortem", "mortes", "morte", "mortibus", "death",3),
    new Word("navis", "naves", "navis", "navium", "navi", "navibus", "navem", "naves", "nave", "navibus", "ship",3),
    new Word("nomen", "nomina", "nominis", "nominum", "nomini", "nominibus", "nomen", "nomina", "nomine", "nominibus", "name",3),
    new Word("nox", "noctes", "noctis", "noctium", "nocti", "noctibus", "noctem", "noctes", "nocte", "noctibus", "night",3),
    new Word("pater", "patres", "patris", "patrum", "patri", "patribus", "patrem", "patres", "patre", "patribus", "father",3),
    new Word("mater", "matres", "matris", "matrum", "matri", "matribus", "matrem", "matres", "matre", "matribus", "mother",3),
    new Word("flumen", "flumina", "fluminis", "fluminum", "flumini", "fluminibus", "flumen", "flumina", "flumine", "fluminibus", "river",3),
    new Word("vox", "voces", "vocis", "vocum", "voci", "vocibus", "vocem", "voces", "voce", "vocibus", "voice",3),
    ////////////////////////////////
    // Declinatio quarta
    ////////////////////////////////
    new Word("cantus", "cantus", "cantus", "cantuum", "cantui", "cantibus", "cantum", "cantus", "cantu", "cantibus", "music",4),
    new Word("casus", "casus", "casus", "casuum", "casui", "casibus", "casum", "casus", "casu", "casibus", "chance",4),
    new Word("cornu", "cornua", "cornus", "cornuum", "cornu", "cornibus", "cornu", "cornua", "cornu", "cornibus", "horn",4),
    new Word("domus", "domus", "domus", "domuum", "domui", "domibus", "domum", "domus", "domu", "domibus", "house",4),
    new Word("exercitus", "exercitus", "exercitus", "exercituum", "exercitui", "exercitibus", "exercitum", "exercitus", "exercitu", "exercitibus", "army",4),
    new Word("fructus", "fructus", "fructus", "fructuum", "fructui", "fructibus", "fructum", "fructus", "fructu", "fructibus", "fruit",4),
    new Word("genu", "genua", "genus", "genuum", "genu", "genibus", "genu", "genua", "genu", "genibus", "knee",4),
    new Word("ictus", "ictus", "ictus", "ictuum", "ictui", "ictibus", "ictum", "ictus", "ictu", "ictibus", "blow",4),
    new Word("consulatus", "consulatus", "consulatus", "consulatuum", "consulatui", "consulatibus", "consulatum", "consulatus", "consulatu", "consulatibus", "consulship",4),
    new Word("magistratus", "magistratus", "magistratus", "magistratuum", "magistratui", "magistratibus", "magistratum", "magistratus", "magistratu", "magistratibus", "magistrate",4),
    new Word("manus", "manus", "manus", "manuum", "manui", "manibus", "manum", "manus", "manu", "manibus", "hand",4),
    new Word("nurus", "nurus", "nurus", "nuruum", "nurui", "nuribus", "nurum", "nurus", "nuru", "nuribus", "daughter-in-law",4),
    new Word("porticus", "porticus", "porticus", "porticuum", "porticui", "porticibus", "porticum", "porticus", "porticu", "porticibus", "colonnade",4),
    new Word("portus", "portus", "portus", "portuum", "portui", "portibus", "portum", "portus", "portu", "portibus", "harbor",4),
    new Word("senatus", "senatus", "senatus", "senatuum", "senatui", "senatibus", "senatum", "senatus", "senatu", "senatibus", "senate",4),
    new Word("manus", "manus", "manus", "manuum", "manui", "manibus", "manum", "manus", "manu", "manibus", "hand",4),
    ////////////////////////////////
    // Declinatio quinta
    ////////////////////////////////
    new Word("acies", "acies", "aciei", "acierum", "aciei", "aciebus", "aciem", "acies", "acie", "aciebus", "edge",5),
    new Word("dies", "dies", "diei", "dierum", "diei", "diebus", "diem", "dies", "die", "diebus", "day",5),
    new Word("effigies", "effigies", "effigiei", "effigierum", "effigiei", "effigiebus", "effigiem", "effigies", "effigie", "effigiebus", "copy",5),
    new Word("facies", "facies", "faciei", "facierum", "faciei", "faciebus", "faciem", "facies", "facie", "faciebus", "face",5),
    new Word("fides", "fides", "fidei", "fiderum", "fidei", "fidebus", "fidem", "fides", "fide", "fidebus", "trust",5),
    new Word("glacies", "glacies", "glaciei", "glacierum", "glaciei", "glaciebus", "glaciem", "glacies", "glacie", "glaciebus", "ice",5),
    new Word("meridies", "meridies", "meridiei", "meridierum", "meridiei", "meridiebus", "meridiem", "meridies", "meridie", "meridiebus", "mid-day",5),
    new Word("rabies", "rabies", "rabiei", "rabierum", "rabiei", "rabiebus", "rabiem", "rabies", "rabie", "rabiebus", "anger",5),
    new Word("res", "res", "rei", "rerum", "rei", "rebus", "rem", "res", "re", "rebus", "thing",5),
    new Word("series", "series", "seriei", "serierum", "seriei", "seriebus","seriem", "series", "serie", "seriebus", "row",5),
    new Word("species", "species", "speciei", "specierum", "speciei", "speciebus", "speciem", "species", "specie", "speciebus", "sight",5),
    new Word("spes", "spes", "spei", "sperum", "spei", "spebus", "spem", "spes", "spe", "spebus", "hope",5),
];

function random(min, max) {
    return Math.round(Math.random() * (max-min)) + min;
}

function randomWord() {
    var decls = {
        1: $("#firstDeclension").is(':checked'),
        2: $("#secondDeclension").is(':checked'),
        3: $("#thirdDeclension").is(':checked'),
        4: $("#fourthDeclension").is(':checked'),
        5: $("#fifthDeclension").is(':checked')
    };
    var checkDeclension = function(word, i, arr) {
        return decls[word.declension];
    };
    var filtered = words.filter(checkDeclension);
    return filtered[random(0, filtered.length-1)];
}

function showWord(w) {
    $("input[type=text]").val("");
    $(".singularis.nominativus").val(w["singularis nominativus"]);
    $(".singularis.genetivus").focus();
    $("#wordDefinition").text(w.definition);
}

function newWord() {
    $(".answer").hide();
    word = randomWord();
    if (word) {
        showWord(word);
        $("input[type=text], small").removeClass('error');
        $(".answer").show().text("Invalid");
        $("#checkWord").show();
        $("#showAnswers").hide();
    }
}

function checkWord() {
    var n = ["singularis","pluralis"];
    var d = ["nominativus","genetivus","dativus","accusativus","ablativus"];
    for (var i in n) {
        for (var j in d) {
            if ( $("."+n[i]+"."+d[j]).val() == word[ n[i]+" "+d[j] ] ) {
                $("."+n[i]+"."+d[j]).removeClass('error');
                $("."+n[i]+"."+d[j]).parent().find('small').removeClass('error');
            }
            else {
                $("."+n[i]+"."+d[j]).addClass('error');
                $("."+n[i]+"."+d[j]).parent().find('small').addClass('error');
            }
        }
    }
    $("#showAnswers").show();
}

function showAnswers() {
    var n = ["singularis","pluralis"];
    var d = ["nominativus","genetivus","dativus","accusativus","ablativus"];
    for (var i in n) {
        for (var j in d) {
            $("."+n[i]+"."+d[j]).parent().find('.answer').text(word[ n[i]+" "+d[j] ]);
        }
    }
    $(".answer").show();
}

var word = randomWord();
if (word) showWord(word);

$("#showAnswers").click(showAnswers);
$("#newWord").click(newWord);
$("#checkWord").click(checkWord);
