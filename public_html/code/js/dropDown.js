var kingdoms = ['Animalia', 'Fungi', 'Plantae'];

var phyla={};
phyla['Animalia'] = ['Arthropoda', 'Chordata', 'Cnidaria', 'Ctenophora', 'Mollusca', 'Platyhelminthes'];
phyla['Fungi'] = ['Ascomycota', 'Basidiomycota'];
phyla['Plantae'] = ['Bryophyta', 'Charophyta', 'Marchantiophyta', 'Tracheophyta'];

var classes={};
classes['Arthropoda'] = ['Arachnida', 'Branchiopoda', 'Chilopoda', 'Insecta', 'Malacostraca'];
classes['Ascomycota'] = ['Geoglossomycetes', 'Pezizomycetes'];
classes['Basidiomycota'] = ['Agaricomycetes', 'Microbotryomycetes', 'Pucciniomycetes', 'Ustilaginomycetes'];
classes['Bryophyta'] = ['Bryopsida', 'Sphagnopsida'];
classes['Charophyta'] = ['Zygnematophyceae'];
classes['Chordata'] = ['Actinopterygii', 'Amphibia', 'Aves', 'Elasmobranchii', 'Mammalia', 'Reptilia'];
classes['Cnidaria'] = ['Anthozoa', 'Scyphozoa'];
classes['Ctenophora'] = ['Tentaculata'];
classes['Marchantiophyta'] = ['Jungermanniopsida'];
classes['Mollusca'] = ['Bivalvia', 'Gastropoda'];
classes['Platyhelminthes'] = ['NA', 'Trematoda'];
classes['Tracheophyta'] = ['Equisetopsida', 'Liliopsida', 'Lycopodiopsida', 'Magnoliopsida', 'Pinopsida', 'Polypodiopsida'];

var orders={};
orders['Actinopterygii'] = ['Clupeiformes', 'Gadiformes', 'Gasterosteiformes', 'Osmeriformes', 'Perciformes', 'Pleuronectiformes', 'Scorpaeniformes', 'Stomiiformes', 'Syngnathiformes'];
orders['Agaricomycetes'] = ['Agaricales', 'Boletales', 'Cantharellales', 'Polyporales', 'Russulales'];
orders['Amphibia'] = ['Anura', 'Caudata'];
orders['Anthozoa'] = ['Actiniaria', 'Zoantharia'];
orders['Arachnida'] = ['Araneae', 'Prostigmata'];
orders['Aves'] = ['Accipitriformes', 'Anseriformes', 'Charadriiformes', 'Ciconiiformes', 'Columbiformes', 'Coraciiformes', 'Falconiformes', 'Galliformes', 'Gruiformes', 'Passeriformes', 'Pelecaniformes', 'Piciformes', 'Strigiformes'];
orders['Bivalvia'] = ['Myida', 'Mytilida', 'Ostreida', 'Unionida'];
orders['Branchiopoda'] = ['Diplostraca'];
orders['Bryopsida'] = ['Hypnales', 'Leucodontales'];
orders['Chilopoda'] = ['Lithobiomorpha'];
orders['Elasmobranchii'] = ['Rajiformes', 'Squaliformes'];
orders['Equisetopsida'] = ['Equisetales'];
orders['Gastropoda'] = ['Architaenioglossa', 'Hygrophila', 'NA'];
orders['Geoglossomycetes'] = ['Geoglossales'];
orders['Insecta'] = ['Coleoptera', 'Diptera', 'Ephemeroptera', 'Hemiptera', 'Hymenoptera', 'Lepidoptera', 'Mecoptera', 'Odonata', 'Orthoptera', 'Plecoptera', 'Trichoptera'];
orders['Jungermanniopsida'] = ['Metzgeriales'];
orders['Liliopsida'] = ['Alismatales', 'Asparagales', 'Dioscoreales', 'Poales'];
orders['Lycopodiopsida'] = ['Lycopodiales'];
orders['Magnoliopsida'] = ['Apiales', 'Aquifoliales', 'Asterales', 'Caryophyllales', 'Celastrales', 'Cornales', 'Dipsacales', 'Ericales', 'Fabales', 'Fagales', 'Gentianales', 'Lamiales', 'Laminales', 'Malpighiales', 'Malvales', 'Myrtales', 'Ranunculales', 'Rosales', 'Sapindales', 'Saxifragales', 'Solanales'];
orders['Malacostraca'] = ['Decapoda'];
orders['Mammalia'] = ['Carnivora', 'Cetacea', 'Chiroptera', 'Erinaceomorpha', 'Rodentia', 'Soricomorpha'];
orders['Microbotryomycetes'] = ['Microbotryales'];
orders['NA'] = ['NA'];
orders['Pezizomycetes'] = ['Pezizales'];
orders['Pinopsida'] = ['Pinales'];
orders['Polypodiopsida'] = ['Polypodiales'];
orders['Pucciniomycetes'] = ['Pucciniales'];
orders['Reptilia'] = ['Squamata'];
orders['Scyphozoa'] = ['Semaeostomeae'];
orders['Sphagnopsida'] = ['Sphagnales'];
orders['Tentaculata'] = ['Lobata'];
orders['Trematoda'] = ['Plagiorchiida'];
orders['Ustilaginomycetes'] = ['Ustilaginales'];
orders['Zygnematophyceae'] = ['Zygnematales'];

var families={};
families['Accipitriformes'] = ['Accipitridae'];
families['Actiniaria'] = ['Edwardsiidae'];
families['Agaricales'] = ['Agaricaceae', 'Bolbitiaceae', 'Cortinariaceae', 'Hygrophoraceae', 'Hymenogastraceae', 'Inocybaceae', 'Marasmiaceae', 'Mycenaceae', 'Physalacriaceae', 'Pleurotaceae', 'Pluteaceae', 'Psathyrellaceae', 'Strophariaceae', 'Tricholomataceae'];
families['Alismatales'] = ['Hydrocharitaceae', 'Potamogetonaceae', 'Zosteraceae'];
families['Anseriformes'] = ['Anatidae'];
families['Anura'] = ['Bombinatoridae', 'Bufonidae', 'Hylidae', 'Ranidae'];
families['Apiales'] = ['Apiaceae', 'Araliaceae'];
families['Aquifoliales'] = ['Aquifoliaceae'];
families['Araneae'] = ['Amaurobiidae', 'Araneidae', 'Dictynidae', 'Hahniidae', 'Linyphiidae', 'Pholcidae', 'Pisauridae', 'Salticidae'];
families['Architaenioglossa'] = ['Viviparidae'];
families['Asparagales'] = ['Asparagaceae', 'Orchidaceae'];
families['Asterales'] = ['Asteraceae', 'Campanulaceae'];
families['Boletales'] = ['Boletaceae'];
families['Cantharellales'] = ['Cantharellaceae'];
families['Carnivora'] = ['Canidae', 'Mustelidae', 'Phocidae'];
families['Caryophyllales'] = ['Amaranthaceae', 'Caryophyllaceae', 'Droseraceae', 'Plumbaginaceae', 'Polygonaceae'];
families['Caudata'] = ['Salamandridae'];
families['Celastrales'] = ['Celastraceae'];
families['Cetacea'] = ['Balaenopteridae', 'Delphinidae', 'Physeteridae'];
families['Charadriiformes'] = ['Charadriidae', 'Laridae', 'Scolopacidae'];
families['Chiroptera'] = ['Vespertilionidae'];
families['Ciconiiformes'] = ['Ciconiidae'];
families['Clupeiformes'] = ['Clupeidae', 'Engraulidae'];
families['Coleoptera'] = ['Aphodiidae', 'Bostrichidae', 'Carabidae', 'Curculionidae', 'Elmidae', 'Geotrupidae', 'Hydrophilidae', 'Lampyridae', 'Lucanidae', 'Melolonthidae', 'Silphidae', 'Staphylinidae'];
families['Columbiformes'] = ['Columbidae'];
families['Coraciiformes'] = ['Meropidae'];
families['Cornales'] = ['Cornaceae'];
families['Decapoda'] = ['Astacidae', 'Nephropidae', 'Panopeidae'];
families['Dioscoreales'] = ['Nartheciaceae'];
families['Diplostraca'] = ['Lynceidae'];
families['Dipsacales'] = ['Adoxaceae', 'Caprifoliaceae'];
families['Diptera'] = ['Agromyzidae', 'Anisopodidae', 'Anthomyiidae', 'Asilidae', 'Athericidae', 'Bibionidae', 'Calliphoridae', 'Cecidomyiidae', 'Clusiidae', 'Culicidae', 'Dolichopodidae', 'Drosophilidae', 'Dryomyzidae', 'Empididae', 'Ephydridae', 'Fanniidae', 'Heleomyzidae', 'Hybotidae', 'Keroplatidae', 'Lauxaniidae', 'Limoniidae', 'Lonchaeidae', 'Micropezidae', 'Milichiidae', 'Muscidae', 'Mycetophilidae', 'NA', 'Phoridae', 'Pipunculidae', 'Platystomatidae', 'Psilidae', 'Ptychopteridae', 'Rhagionidae', 'Rhinophoridae', 'Sarcophagidae', 'Scathophagidae', 'Scatopsidae', 'Sciomyzidae', 'Sepsidae', 'Sphaeroceridae', 'Stratiomyidae', 'Syrphidae', 'Tabanidae', 'Tachinidae', 'Tephritidae', 'Tipulidae'];
families['Ephemeroptera'] = ['Baetidae', 'Ephemerellidae', 'Ephemeridae', 'Heptageniidae'];
families['Equisetales'] = ['Equisetaceae'];
families['Ericales'] = ['Ericaceae', 'Primulaceae'];
families['Erinaceomorpha'] = ['Erinaceidae'];
families['Fabales'] = ['Fabaceae', 'Polygalaceae'];
families['Fagales'] = ['Betulaceae', 'Fagaceae', 'Myricaceae'];
families['Falconiformes'] = ['Falconidae'];
families['Gadiformes'] = ['Gadidae'];
families['Galliformes'] = ['Phasianidae'];
families['Gasterosteiformes'] = ['Gasterosteidae'];
families['Gentianales'] = ['Rubiaceae'];
families['Geoglossales'] = ['Geoglossaceae'];
families['Gruiformes'] = ['Gruidae', 'Rallidae'];
families['Hemiptera'] = ['Aphelocheiridae', 'Cimicidae', 'Pentatomidae'];
families['Hygrophila'] = ['Lymnaeidae'];
families['Hymenoptera'] = ['Andrenidae', 'Apidae', 'Colletidae', 'Crabronidae', 'Dryinidae', 'Formicidae', 'Halictidae', 'Masaridae', 'Megachilidae', 'Melittidae', 'Mutillidae', 'Pompilidae', 'Sapygidae', 'Sphecidae', 'Tiphiidae', 'Vespidae'];
families['Hypnales'] = ['Hylocomiaceae', 'Hypnaceae'];
families['Lamiales'] = ['Lamiaceae', 'Lentibulariaceae', 'Oleaceae', 'Orobanchaceae', 'Plantaginaceae'];
families['Laminales'] = ['Oleaceae'];
families['Lepidoptera'] = ['Eriocraniidae', 'Gelechiidae', 'Hesperiidae', 'Nolidae', 'Nymphalidae', 'Pterophoridae', 'Tineidae', 'Tortricidae'];
families['Leucodontales'] = ['Neckeraceae'];
families['Lithobiomorpha'] = ['Lithobiidae'];
families['Lobata'] = ['Bolinopsidae'];
families['Lycopodiales'] = ['Lycopodiaceae'];
families['Malpighiales'] = ['Salicaceae'];
families['Malvales'] = ['Malvaceae'];
families['Mecoptera'] = ['Panorpidae'];
families['Metzgeriales'] = ['Metzgeriaceae'];
families['Microbotryales'] = ['Microbotryaceae'];
families['Myida'] = ['Myidae'];
families['Myrtales'] = ['Lythraceae', 'Onagraceae'];
families['Mytilida'] = ['Mytilidae'];
families['NA'] = ['Lymnaeidae', 'NA', 'Planorbidae'];
families['Odonata'] = ['Gomphidae'];
families['Orthoptera'] = ['Tettigoniidae'];
families['Osmeriformes'] = ['Osmeridae'];
families['Ostreida'] = ['Ostreidae'];
families['Passeriformes'] = ['Alaudidae', 'Corvidae', 'Emberizidae', 'Fringillidae', 'Laniidae', 'Motacillidae', 'Muscicapidae', 'Paridae', 'Phylloscopidae', 'Sylviidae'];
families['Pelecaniformes'] = ['Ardeidae'];
families['Perciformes'] = ['Ammodytidae', 'Anarhichadidae', 'Callionymidae', 'Gobiidae', 'Labridae', 'Pholidae', 'Scombridae', 'Stichaeidae', 'Trachinidae', 'Zoarcidae'];
families['Pezizales'] = ['Helvellaceae', 'Pyronemataceae'];
families['Piciformes'] = ['Picidae'];
families['Pinales'] = ['Cupressaceae', 'Pinaceae', 'Taxaceae'];
families['Plagiorchiida'] = ['Fasciolidae'];
families['Plecoptera'] = ['Capniidae', 'Chloroperlidae', 'Leucitridae', 'Perlodidae', 'Taeniopterygidae'];
families['Pleuronectiformes'] = ['Bothidae', 'Pleuronectidae', 'Scophthalmidae', 'Soleidae'];
families['Poales'] = ['Cyperaceae', 'Juncaceae', 'Poaceae'];
families['Polypodiales'] = ['Dryopteridaceae', 'Polypodiaceae'];
families['Polyporales'] = ['Meripilaceae', 'Polyporaceae'];
families['Prostigmata'] = ['Eriophyidae'];
families['Pucciniales'] = ['Pcciniaceae'];
families['Rajiformes'] = ['Rajidae'];
families['Ranunculales'] = ['Ranunculaceae'];
families['Rodentia'] = ['Cricetidae', 'Dipodidae', 'Gliridae', 'Muridae', 'Sciuridae'];
families['Rosales'] = ['Rhamnaceae', 'Rosaceae', 'Ulmaceae'];
families['Russulales'] = ['Russulaceae'];
families['Sapindales'] = ['Sapindaceae'];
families['Saxifragales'] = ['Grossulariaceae'];
families['Scorpaeniformes'] = ['Agonidae', 'Cottidae', 'Cyclopteridae', 'Sebastidae', 'Triglidae'];
families['Semaeostomeae'] = ['Ulmaridae'];
families['Solanales'] = ['Convolvulaceae'];
families['Soricomorpha'] = ['Soricidae', 'Talpidae'];
families['Sphagnales'] = ['Sphagnaceae'];
families['Squaliformes'] = ['Etmopteridae'];
families['Squamata'] = ['Anguidae', 'Lacertidae', 'Viperidae'];
families['Stomiiformes'] = ['Sternoptychidae'];
families['Strigiformes'] = ['Strigidae'];
families['Syngnathiformes'] = ['Syngnathidae'];
families['Trichoptera'] = ['Brachycentridae', 'Glossosomatidae', 'Goeridae', 'Hydropsychidae', 'Hydroptilidae', 'Lepidostomatidae', 'Leptoceridae', 'Limnephilidae', 'Odontoceridae', 'Philopotamidae', 'Psychomyiidae', 'Sericostomatidae'];
families['Unionida'] = ['Unionidae'];
families['Ustilaginales'] = ['Anthracoideaceae'];
families['Zoantharia'] = ['Parazoanthidae'];
families['Zygnematales'] = ['Closteriaceae', 'Desmidiaceae', 'Mesotaeniaceae', 'Peniaceae'];

var genera={};
genera['Accipitridae'] = ['Accipiter', 'Buteo', 'Milvus'];
genera['Adoxaceae'] = ['Sambucus', 'Viburnum'];
genera['Agaricaceae'] = ['Phaeolepiota', 'Tulostoma'];
genera['Agonidae'] = ['Agonus'];
genera['Agromyzidae'] = ['Cerodontha', 'Melanagromyza', 'Phytobia'];
genera['Alaudidae'] = ['Lullula'];
genera['Amaranthaceae'] = ['Atriplex'];
genera['Amaurobiidae'] = ['Amaurobius'];
genera['Ammodytidae'] = ['Ammodytes'];
genera['Anarhichadidae'] = ['Anarhichas'];
genera['Anatidae'] = ['Anser', 'Aythya', 'Cygnus'];
genera['Andrenidae'] = ['Andrena'];
genera['Anguidae'] = ['Anguis'];
genera['Anisopodidae'] = ['Sylvicola'];
genera['Anthomyiidae'] = ['Azelia', 'Botanophila', 'Delia', 'Drymeia', 'Egle', 'Hydrophoria', 'Hylemya', 'Hylemyza', 'Lasiomma', 'Leucophora', 'Pegomya', 'Pegoplata', 'Zaphne'];
genera['Anthracoideaceae'] = ['Anthracoidea'];
genera['Aphelocheiridae'] = ['Aphelocheirus'];
genera['Aphodiidae'] = ['Acrossus', 'Aphodius', 'Otophorus', 'Rhodaphodius', 'Teuchestes'];
genera['Apiaceae'] = ['Aegopodium', 'Cicuta', 'Sanicula', 'Torilis'];
genera['Apidae'] = ['Apis', 'Bombus'];
genera['Aquifoliaceae'] = ['Ilex'];
genera['Araliaceae'] = ['Hedera'];
genera['Araneidae'] = ['Araneus', 'Argiope', 'Nuctenea'];
genera['Ardeidae'] = ['Ardea'];
genera['Asilidae'] = ['Leptogaster'];
genera['Asparagaceae'] = ['Convallaria'];
genera['Astacidae'] = ['Astacus', 'Pontastacus'];
genera['Asteraceae'] = ['Achillea', 'Arnica', 'Cirsium', 'Jacobaea', 'Logfia', 'Pilosella'];
genera['Athericidae'] = ['Atherix'];
genera['Baetidae'] = ['Nigrobaetis'];
genera['Balaenopteridae'] = ['Balaenoptera'];
genera['Betulaceae'] = ['Betula', 'Carpinus', 'Corylus'];
genera['Bibionidae'] = ['Dilophus'];
genera['Bolbitiaceae'] = ['Bolbitius'];
genera['Boletaceae'] = ['Aureoboletus'];
genera['Bolinopsidae'] = ['Bolinopsis', 'Mnemiopsis'];
genera['Bombinatoridae'] = ['Bombina'];
genera['Bostrichidae'] = ['Bostrichus'];
genera['Bothidae'] = ['Arnoglossus'];
genera['Brachycentridae'] = ['Brachycentrus'];
genera['Bufonidae'] = ['Bufo'];
genera['Callionymidae'] = ['Callionymus'];
genera['Calliphoridae'] = ['Calliphora', 'Cynomya', 'Lucilia', 'Morinia', 'Pollenia'];
genera['Campanulaceae'] = ['Campanula', 'Lobelia', 'Phyteuma'];
genera['Canidae'] = ['Vulpes'];
genera['Cantharellaceae'] = ['Cantharellus', 'Craterellus'];
genera['Capniidae'] = ['Zwicknia'];
genera['Caprifoliaceae'] = ['Knautia', 'Lonicera', 'Scabiosa', 'Valeriana'];
genera['Carabidae'] = ['Abax', 'Acupalpus', 'Anisodactylus', 'Carabus', 'Cychrus', 'Loricera', 'Nebria', 'Oxypselaphus', 'Pterostichus'];
genera['Caryophyllaceae'] = ['Silene', 'Stellaria'];
genera['Cecidomyiidae'] = ['Contarinia', 'Dasineura', 'Neomikiella', 'Rabdophaga'];
genera['Celastraceae'] = ['Euonymus'];
genera['Charadriidae'] = ['Pluvialis'];
genera['Chloroperlidae'] = ['Siphonoperla'];
genera['Ciconiidae'] = ['Ciconia'];
genera['Cimicidae'] = ['Cimex'];
genera['Closteriaceae'] = ['Closterium'];
genera['Clupeidae'] = ['Alosa', 'Clupea', 'Sprattus'];
genera['Clusiidae'] = ['Clusiodes'];
genera['Colletidae'] = ['Hylaeus'];
genera['Columbidae'] = ['Columba'];
genera['Convolvulaceae'] = ['Cuscuta'];
genera['Cornaceae'] = ['Cornus'];
genera['Cortinariaceae'] = ['Cortinarius'];
genera['Corvidae'] = ['Corvus'];
genera['Cottidae'] = ['Taurulus'];
genera['Crabronidae'] = ['Crabro', 'Mellinus', 'Philanthus'];
genera['Cricetidae'] = ['Arvicola', 'Microtus', 'Myodes'];
genera['Culicidae'] = ['Tipula'];
genera['Cupressaceae'] = ['Juniperus', 'Thuja'];
genera['Curculionidae'] = ['Cryphalus'];
genera['Cyclopteridae'] = ['Cyclopterus'];
genera['Cyperaceae'] = ['Carex', 'Eriophorum', 'Isolepis', 'Schoenoplectus', 'Scirpus'];
genera['Delphinidae'] = ['Delphinus', 'Lagenorhynchus'];
genera['Desmidiaceae'] = ['Cosmarium', 'Euastrum', 'Hyalotheca', 'Micrasterias', 'Staurastrum', 'Staurodesmus', 'Teilingia'];
genera['Dictynidae'] = ['Mastigusa'];
genera['Dipodidae'] = ['Sicista'];
genera['Dolichopodidae'] = ['Chrysotimus', 'Chrysotus', 'Dolichopus', 'Micromorphus', 'Microphor', 'Poecilobothrus', 'Sympycnus'];
genera['Droseraceae'] = ['Drosera'];
genera['Drosophilidae'] = ['Scaptomyza'];
genera['Dryinidae'] = ['Aphelopus'];
genera['Dryomyzidae'] = ['Dryomyza'];
genera['Dryopteridaceae'] = ['Dryopteris'];
genera['Edwardsiidae'] = ['Edwardsia'];
genera['Elmidae'] = ['Limnius'];
genera['Emberizidae'] = ['Emberiza'];
genera['Empididae'] = ['Phyllodromia', 'Rhamphomyia'];
genera['Engraulidae'] = ['Engraulis'];
genera['Ephemerellidae'] = ['Ephemerella'];
genera['Ephemeridae'] = ['Ephemera'];
genera['Ephydridae'] = ['Hydrellia', 'Paracoenia'];
genera['Equisetaceae'] = ['Equisetum'];
genera['Ericaceae'] = ['Empetrum', 'Erica'];
genera['Erinaceidae'] = ['Erinaceus'];
genera['Eriocraniidae'] = ['Eriocrania'];
genera['Eriophyidae'] = ['Aceria'];
genera['Etmopteridae'] = ['Etmopterus'];
genera['Fabaceae'] = ['Genista', 'Lathyrus', 'Lotus', 'Medicago', 'Ornithopus', 'Trifolium', 'Vicia'];
genera['Fagaceae'] = ['Fagus', 'Quercus'];
genera['Falconidae'] = ['Falco'];
genera['Fanniidae'] = ['Fannia', 'Piezura'];
genera['Fasciolidae'] = ['Fasciola'];
genera['Formicidae'] = ['Formica', 'Lasius', 'Leptothorax', 'Tetramorium'];
genera['Fringillidae'] = ['Carpodacus', 'Fringilla'];
genera['Gadidae'] = ['Gadus', 'Merlangius', 'Trisopterus'];
genera['Gasterosteidae'] = ['Gasterosteus', 'Spinachia'];
genera['Gelechiidae'] = ['Gnorimoschema'];
genera['Geoglossaceae'] = ['Trichoglossum'];
genera['Geotrupidae'] = ['Anoplotrupes', 'Geotrupes'];
genera['Gliridae'] = ['Eliomys', 'Muscardinus'];
genera['Glossosomatidae'] = ['Agapetus'];
genera['Gobiidae'] = ['Crystallogobius', 'Neogobius', 'Pomatoschistus'];
genera['Goeridae'] = ['Lithax'];
genera['Gomphidae'] = ['Gomphus', 'Ophiogomphus'];
genera['Grossulariaceae'] = ['Ribes'];
genera['Gruidae'] = ['Grus'];
genera['Hahniidae'] = ['Iberina'];
genera['Halictidae'] = ['Lasioglossum'];
genera['Heleomyzidae'] = ['Neoleria', 'Suillia'];
genera['Helvellaceae'] = ['Helvella'];
genera['Heptageniidae'] = ['Electrogena'];
genera['Hesperiidae'] = ['Pyrgus'];
genera['Hybotidae'] = ['Bicellaria', 'Drapetis', 'Empis', 'Hybos', 'Leptopeza', 'Platypalpus', 'Tachydromia', 'Trichina'];
genera['Hydrocharitaceae'] = ['Elodea'];
genera['Hydrophilidae'] = ['Sphaeridium'];
genera['Hydropsychidae'] = ['Cheumatopsyche', 'Hydropsyche'];
genera['Hydroptilidae'] = ['Ithytrichia'];
genera['Hygrophoraceae'] = ['Hygrophorus'];
genera['Hylidae'] = ['Hyla'];
genera['Hylocomiaceae'] = ['Pleurozium'];
genera['Hymenogastraceae'] = ['Gymnopilus', 'Hebeloma', 'Stropharia'];
genera['Hypnaceae'] = ['Hypnum'];
genera['Inocybaceae'] = ['Crepidotus'];
genera['Juncaceae'] = ['Juncus'];
genera['Keroplatidae'] = ['Orfelia'];
genera['Labridae'] = ['Labrus'];
genera['Lacertidae'] = ['Zootoca'];
genera['Lamiaceae'] = ['Prunella'];
genera['Lampyridae'] = ['Lampyris'];
genera['Laniidae'] = ['Lanius'];
genera['Laridae'] = ['Hydroprogne', 'Larus'];
genera['Lauxaniidae'] = ['Homoneura'];
genera['Lentibulariaceae'] = ['Utricularia'];
genera['Lepidostomatidae'] = ['Lepidostoma'];
genera['Leptoceridae'] = ['Ylodes'];
genera['Leucitridae'] = ['Leuctra'];
genera['Limnephilidae'] = ['Ecclisopteryx', 'Ironoquia', 'Limnephilus', 'Potamophylax'];
genera['Limoniidae'] = ['Dicranomyia', 'Euphylidorea', 'Metalimnobia'];
genera['Linyphiidae'] = ['Linyphia'];
genera['Lithobiidae'] = ['Lithobius'];
genera['Lonchaeidae'] = ['Helina'];
genera['Lucanidae'] = ['Dorcus', 'Sinodendron'];
genera['Lycopodiaceae'] = ['Lycopodiella'];
genera['Lymnaeidae'] = ['Galba', 'Lymnaea', 'Radix', 'Stagnicola'];
genera['Lynceidae'] = ['Lynceus'];
genera['Lythraceae'] = ['Lythrum'];
genera['Malvaceae'] = ['Tilia'];
genera['Marasmiaceae'] = ['Marasmius'];
genera['Masaridae'] = ['Chrysis'];
genera['Megachilidae'] = ['Coelioxys', 'Osmia'];
genera['Melittidae'] = ['Dasypoda'];
genera['Melolonthidae'] = ['Serica'];
genera['Meripilaceae'] = ['Meripilus'];
genera['Meropidae'] = ['Merops'];
genera['Mesotaeniaceae'] = ['Cylindrocystis', 'Mesotaenium'];
genera['Metzgeriaceae'] = ['Metzgeria'];
genera['Microbotryaceae'] = ['Microbotryum'];
genera['Micropezidae'] = ['Compsobata'];
genera['Milichiidae'] = ['Phyllomyza'];
genera['Motacillidae'] = ['Anthus'];
genera['Muridae'] = ['Apodemus', 'Micromys', 'Mus', 'Rattus'];
genera['Muscicapidae'] = ['Luscinia', 'Phoenicurus', 'Turdus'];
genera['Muscidae'] = ['Coenosia', 'Haematobosca', 'Hydrotaea', 'Limnophora', 'Mesembrina', 'Morellia', 'Muscina', 'Mydaea', 'Myospila', 'Phaonia', 'Polietes', 'Schoenomyza'];
genera['Mustelidae'] = ['Lutra', 'Martes', 'Meles', 'Mustela'];
genera['Mutillidae'] = ['Mutilla', 'Smicromyrme'];
genera['Mycenaceae'] = ['Mycena'];
genera['Mycetophilidae'] = ['Acnemia', 'Dynatosoma', 'Monoclona', 'Mycomya', 'Synapha', 'Tarnania'];
genera['Myidae'] = ['Mya'];
genera['Myricaceae'] = ['Myrica'];
genera['Mytilidae'] = ['Mytilus'];
genera['NA'] = ['Fasciola', 'Xylophagus'];
genera['Nartheciaceae'] = ['Narthecium'];
genera['Neckeraceae'] = ['Neckera'];
genera['Nephropidae'] = ['Nephrops'];
genera['Nolidae'] = ['Nola'];
genera['Nymphalidae'] = ['Aglais'];
genera['Odontoceridae'] = ['Odontocerum'];
genera['Oleaceae'] = ['Fraxinus'];
genera['Onagraceae'] = ['Epilobium'];
genera['Orchidaceae'] = ['Anacamptis', 'Dactylorhiza', 'Neottia', 'Orchis', 'Platanthera'];
genera['Orobanchaceae'] = ['Lathraea', 'Melampyrum', 'Rhinanthus'];
genera['Osmeridae'] = ['Osmerus'];
genera['Ostreidae'] = ['Magallana'];
genera['Panopeidae'] = ['Rhithropanopeus'];
genera['Panorpidae'] = ['Panorpa'];
genera['Parazoanthidae'] = ['Isozoanthus'];
genera['Paridae'] = ['Poecile'];
genera['Pcciniaceae'] = ['Uromyces'];
genera['Peniaceae'] = ['Penium'];
genera['Pentatomidae'] = ['Palomena'];
genera['Perlodidae'] = ['Isoperla', 'Perlodes'];
genera['Phasianidae'] = ['Perdix'];
genera['Philopotamidae'] = ['Philopotamus'];
genera['Phocidae'] = ['Halichoerus', 'Phoca'];
genera['Pholcidae'] = ['Pholcus'];
genera['Pholidae'] = ['Pholis'];
genera['Phoridae'] = ['Chaetopleurophora', 'Diplonevra'];
genera['Phylloscopidae'] = ['Phylloscopus'];
genera['Physalacriaceae'] = ['Mucidula'];
genera['Physeteridae'] = ['Physeter'];
genera['Picidae'] = ['Dendrocopos'];
genera['Pinaceae'] = ['Abies', 'Larix', 'Picea', 'Pinus', 'Pseudotsuga'];
genera['Pipunculidae'] = ['Cephalops', 'Dorylomorpha', 'Tomosvaryella'];
genera['Pisauridae'] = ['Pisaura'];
genera['Planorbidae'] = ['Ancylus'];
genera['Plantaginaceae'] = ['Linaria', 'Littorella', 'Plantago', 'Veronica'];
genera['Platystomatidae'] = ['Nemopoda', 'Rivellia'];
genera['Pleuronectidae'] = ['Glyptocephalus', 'Hippoglossoides', 'Limanda', 'Microstomus', 'Pleuronectes'];
genera['Pleurotaceae'] = ['Pleurotus'];
genera['Plumbaginaceae'] = ['Limonium'];
genera['Pluteaceae'] = ['Pluteus', 'Volvopluteus'];
genera['Poaceae'] = ['Agrostis', 'Briza', 'Calamagrostis', 'Dactylis', 'Elymus', 'Festuca', 'Lolium', 'Melica', 'Molinia', 'Parapholis', 'Phleum', 'Poa', 'Spartina', 'Sporobolus'];
genera['Polygalaceae'] = ['Polygala'];
genera['Polygonaceae'] = ['Persicaria', 'Rumex'];
genera['Polypodiaceae'] = ['Polypodium'];
genera['Polyporaceae'] = ['Lenzites'];
genera['Pompilidae'] = ['Anoplius', 'Episyron'];
genera['Potamogetonaceae'] = ['Potamogeton'];
genera['Primulaceae'] = ['Lysimachia', 'Primula', 'Trientalis'];
genera['Psathyrellaceae'] = ['Coprinellus', 'Lacrymaria'];
genera['Psilidae'] = ['Psila'];
genera['Psychomyiidae'] = ['Lype', 'Psychomyia', 'Tinodes'];
genera['Pterophoridae'] = ['Platyptilia'];
genera['Ptychopteridae'] = ['Ptychoptera'];
genera['Pyronemataceae'] = ['Tarzetta'];
genera['Rajidae'] = ['Dipturus'];
genera['Rallidae'] = ['Fulica'];
genera['Ranidae'] = ['Pelophylax'];
genera['Ranunculaceae'] = ['Anemone', 'Ficaria', 'Myosurus', 'Ranunculus'];
genera['Rhagionidae'] = ['Rhagio'];
genera['Rhamnaceae'] = ['Frangula', 'Rhamnus'];
genera['Rhinophoridae'] = ['Tachina'];
genera['Rosaceae'] = ['Argentina', 'Comarum', 'Crataegus', 'Filipendula', 'Malus', 'Prunus', 'Pyrus', 'Rosa', 'Sorbus'];
genera['Rubiaceae'] = ['Galium'];
genera['Russulaceae'] = ['Lactarius', 'Russula'];
genera['Salamandridae'] = ['Ichthyosaura', 'Lissotriton', 'Triturus'];
genera['Salicaceae'] = ['Populus', 'Salix'];
genera['Salticidae'] = ['Marpissa'];
genera['Sapindaceae'] = ['Acer'];
genera['Sapygidae'] = ['Sapyga'];
genera['Sarcophagidae'] = ['Sarcophaga'];
genera['Scathophagidae'] = ['Anthomyia', 'Cordilura', 'Nanna', 'Norellisoma', 'Scathophaga'];
genera['Scatopsidae'] = ['Parascatopse'];
genera['Sciomyzidae'] = ['Limnia', 'Pherbellia', 'Renocera', 'Sciomyza', 'Tetanocera'];
genera['Sciuridae'] = ['Sciurus', 'Tamias'];
genera['Scolopacidae'] = ['Calidris', 'Gallinago', 'Tringa'];
genera['Scombridae'] = ['Scomber'];
genera['Scophthalmidae'] = ['Scophthalmus'];
genera['Sebastidae'] = ['Helicolenus'];
genera['Sepsidae'] = ['Sepsis', 'Themira'];
genera['Sericostomatidae'] = ['Notidobia', 'Sericostoma'];
genera['Silphidae'] = ['Nicrophorus', 'Oiceoptoma'];
genera['Soleidae'] = ['Buglossidium', 'Solea'];
genera['Soricidae'] = ['Neomys', 'Sorex'];
genera['Sphaeroceridae'] = ['Leptocera', 'Opacifrons', 'Spelobia'];
genera['Sphagnaceae'] = ['Sphagnum'];
genera['Sphecidae'] = ['Ammophila'];
genera['Staphylinidae'] = ['Lathrobium', 'Lordithon', 'Ocypus', 'Othius', 'Philonthus', 'Quedius', 'Rugilus', 'Staphylinus', 'Tachinus', 'Tasgius'];
genera['Sternoptychidae'] = ['Argyropelecus', 'Maurolicus'];
genera['Stichaeidae'] = ['Leptoclinus'];
genera['Stratiomyidae'] = ['Beris', 'Microchrysa', 'Nemotelus', 'Sargus'];
genera['Strigidae'] = ['Aegolius', 'Asio', 'Athene', 'Bubo', 'Strix'];
genera['Strophariaceae'] = ['Pholiota'];
genera['Sylviidae'] = ['Sylvia'];
genera['Syngnathidae'] = ['Entelurus', 'Nerophis', 'Syngnathus'];
genera['Syrphidae'] = ['Cheilosia', 'Chrysotoxum', 'Episyrphus', 'Ferdinandea', 'Helophilus', 'Melanostoma', 'Musca', 'Orthonevra', 'Pipizella', 'Platycheirus', 'Syritta', 'Tropidia'];
genera['Tabanidae'] = ['Haematopota', 'Hybomitra', 'Tabanus'];
genera['Tachinidae'] = ['Cyzenis', 'Eriothrix', 'Lydina', 'Prosena', 'Zophomyia'];
genera['Taeniopterygidae'] = ['Brachyptera'];
genera['Talpidae'] = ['Talpa'];
genera['Taxaceae'] = ['Taxus'];
genera['Tephritidae'] = ['Euleia'];
genera['Tettigoniidae'] = ['Pholidoptera'];
genera['Tineidae'] = ['Karsholtia', 'Nemapogon'];
genera['Tiphiidae'] = ['Tiphia'];
genera['Tipulidae'] = ['Nephrotoma', 'Nigrotipula'];
genera['Tortricidae'] = ['Eucosma'];
genera['Trachinidae'] = ['Trachinus'];
genera['Tricholomataceae'] = ['Clitocybe', 'Collybia', 'Lepista', 'Mycenella', 'Tricholoma'];
genera['Triglidae'] = ['Eutrigla'];
genera['Ulmaceae'] = ['Ulmus'];
genera['Ulmaridae'] = ['Aurelia'];
genera['Unionidae'] = ['Unio'];
genera['Vespertilionidae'] = ['Eptesicus', 'Myotis', 'Nyctalus', 'Pipistrellus', 'Plecotus', 'Vespertilio'];
genera['Vespidae'] = ['Vespa', 'Vespula'];
genera['Viperidae'] = ['Vipera'];
genera['Viviparidae'] = ['Viviparus'];
genera['Zoarcidae'] = ['Lycodes'];
genera['Zosteraceae'] = ['Zostera'];

var species={};
species['Abax'] = ['Abax parallelepipedus'];
species['Abies'] = ['Abies alba', 'Abies grandis', 'Abies nordmanniana', 'Abies procera'];
species['Accipiter'] = ['Accipiter gentilis', 'Accipiter nisus'];
species['Acer'] = ['Acer campestre', 'Acer platanoides', 'Acer pseudoplatanus'];
species['Aceria'] = ['Aceria squalida'];
species['Achillea'] = ['Achillea millefolium'];
species['Acnemia'] = ['Acnemia nitidicollis'];
species['Acrossus'] = ['Acrossus luridus'];
species['Acupalpus'] = ['Acupalpus parvulus'];
species['Aegolius'] = ['Aegolius funereus'];
species['Aegopodium'] = ['Aegopodium podagraria'];
species['Agapetus'] = ['Agapetus fuscipes', 'Agapetus ochripes'];
species['Aglais'] = ['Aglais urticae'];
species['Agonus'] = ['Agonus cataphractus'];
species['Agrostis'] = ['Agrostis canina'];
species['Alosa'] = ['Alosa fallax'];
species['Amaurobius'] = ['Amaurobius fenestralis'];
species['Ammodytes'] = ['Ammodytes marinus', 'Ammodytes tobianus'];
species['Ammophila'] = ['Ammophila sabulosa'];
species['Anacamptis'] = ['Anacamptis pyramidalis'];
species['Anarhichas'] = ['Anarhichas lupus'];
species['Ancylus'] = ['Ancylus fluviatilis'];
species['Andrena'] = ['Andrena flavipes'];
species['Anemone'] = ['Anemone nemorosa'];
species['Anguis'] = ['Anguis fragilis'];
species['Anisodactylus'] = ['Anisodactylus binotatus'];
species['Anoplius'] = ['Anoplius infuscatus'];
species['Anoplotrupes'] = ['Anoplotrupes stercorosus'];
species['Anser'] = ['Anser anser'];
species['Anthomyia'] = ['Anthomyia procellaris'];
species['Anthracoidea'] = ['Anthracoidea arenariae'];
species['Anthus'] = ['Anthus campestris'];
species['Aphelocheirus'] = ['Aphelocheirus aestivalis'];
species['Aphelopus'] = ['Aphelopus melaleucus'];
species['Aphodius'] = ['Aphodius pedellus'];
species['Apis'] = ['Apis mellifera'];
species['Apodemus'] = ['Apodemus agrarius', 'Apodemus flavicollis'];
species['Araneus'] = ['Araneus diadematus', 'Araneus quadratus'];
species['Ardea'] = ['Ardea cinerea'];
species['Argentina'] = ['Argentina anserina'];
species['Argiope'] = ['Argiope bruennichi'];
species['Argyropelecus'] = ['Argyropelecus olfersii'];
species['Arnica'] = ['Arnica montana'];
species['Arnoglossus'] = ['Arnoglossus laterna'];
species['Arvicola'] = ['Arvicola amphibius', 'Arvicola sp.'];
species['Asio'] = ['Asio flammeus', 'Asio otus'];
species['Astacus'] = ['Astacus astacus'];
species['Athene'] = ['Athene noctua'];
species['Atherix'] = ['Atherix ibis'];
species['Atriplex'] = ['Atriplex portulacoides'];
species['Aurelia'] = ['Aurelia aurita'];
species['Aureoboletus'] = ['Aureoboletus gentilis'];
species['Aythya'] = ['Aythya fuligula'];
species['Azelia'] = ['Azelia cilipes', 'Azelia zetterstedtii'];
species['Balaenoptera'] = ['Balaenoptera acutorostrata', 'Balaenoptera physalus'];
species['Beris'] = ['Beris chalybata', 'Beris vallata'];
species['Betula'] = ['Betula pendula', 'Betula pubescens'];
species['Bicellaria'] = ['Bicellaria simplicipes'];
species['Bolbitius'] = ['Bolbitius titubans'];
species['Bolinopsis'] = ['Bolinopsis sp.'];
species['Bombina'] = ['Bombina bombina'];
species['Bombus'] = ['Bombus terrestris'];
species['Bostrichus'] = ['Bostrichus piceae'];
species['Botanophila'] = ['Botanophila fugax'];
species['Brachycentrus'] = ['Brachycentrus maculatum'];
species['Brachyptera'] = ['Brachyptera risi'];
species['Briza'] = ['Briza media'];
species['Bubo'] = ['Bubo bubo'];
species['Bufo'] = ['Bufo bufo'];
species['Buglossidium'] = ['Buglossidium luteum'];
species['Buteo'] = ['Buteo buteo'];
species['Calamagrostis'] = ['Calamagrostis epigejos'];
species['Calidris'] = ['Calidris alpina'];
species['Callionymus'] = ['Callionymus lyra', 'Callionymus maculatus'];
species['Calliphora'] = ['Calliphora vicina', 'Calliphora vomitoria'];
species['Campanula'] = ['Campanula rotundifolia'];
species['Cantharellus'] = ['Cantharellus cibarius'];
species['Carabus'] = ['Carabus arcensis', 'Carabus coriaceus', 'Carabus granulatus', 'Carabus hortensis', 'Carabus nemoralis', 'Carabus violaceus'];
species['Carex'] = ['Carex arenaria', 'Carex echinata', 'Carex nigra', 'Carex panicea', 'Carex pulicaris'];
species['Carpinus'] = ['Carpinus betulus'];
species['Carpodacus'] = ['Carpodacus erythrinus'];
species['Cephalops'] = ['Cephalops aeneus'];
species['Cerodontha'] = ['Cerodontha fulvipes', 'Cerodontha muscina'];
species['Chaetopleurophora'] = ['Chaetopleurophora erythronota'];
species['Cheilosia'] = ['Cheilosia aenea'];
species['Cheumatopsyche'] = ['Cheumatopsyche lepida'];
species['Chrysis'] = ['Chrysis ignita'];
species['Chrysotimus'] = ['Chrysotimus molliculus'];
species['Chrysotoxum'] = ['Chrysotoxum bicinctum'];
species['Chrysotus'] = ['Chrysotus gramineus'];
species['Ciconia'] = ['Ciconia ciconia'];
species['Cicuta'] = ['Cicuta virosa'];
species['Cimex'] = ['Cimex najas'];
species['Cirsium'] = ['Cirsium palustre'];
species['Clitocybe'] = ['Clitocybe nebularis'];
species['Closterium'] = ['Closterium acutum', 'Closterium setaceum', 'Closterium venus'];
species['Clupea'] = ['Clupea harengus'];
species['Clusiodes'] = ['Clusiodes albimanus'];
species['Coelioxys'] = ['Coelioxys quadridentata'];
species['Coenosia'] = ['Coenosia mollicula', 'Coenosia pumila'];
species['Collybia'] = ['Collybia cirrhata'];
species['Columba'] = ['Columba palumbus'];
species['Comarum'] = ['Comarum palustre'];
species['Compsobata'] = ['Compsobata cibaria'];
species['Contarinia'] = ['Contarinia rumicis'];
species['Convallaria'] = ['Convallaria majalis'];
species['Coprinellus'] = ['Coprinellus micaceus'];
species['Cordilura'] = ['Cordilura albipes', 'Cordilura pubera'];
species['Cornus'] = ['Cornus sanguinea'];
species['Cortinarius'] = ['Cortinarius humolens', 'Cortinarius mucifluus', 'Cortinarius violaceipes'];
species['Corvus'] = ['Corvus corax', 'Corvus cornix'];
species['Corylus'] = ['Corylus avellana'];
species['Cosmarium'] = ['Cosmarium amoenum', 'Cosmarium blyttii', 'Cosmarium cataractarum', 'Cosmarium formosulum', 'Cosmarium humile', 'Cosmarium impressulum', 'Cosmarium obtusatum', 'Cosmarium ochthodes', 'Cosmarium ornatum', 'Cosmarium pachydermum', 'Cosmarium perforatum', 'Cosmarium quadratum', 'Cosmarium regnellii', 'Cosmarium reniforme', 'Cosmarium subprotumidum', 'Cosmarium thwaitesii', 'Cosmarium turpinii'];
species['Crabro'] = ['Crabro peltarius'];
species['Crataegus'] = ['Crataegus laevigata', 'Crataegus monogyna', 'Crataegus rhipidophylla'];
species['Craterellus'] = ['Craterellus lutescens'];
species['Crepidotus'] = ['Crepidotus mollis'];
species['Cryphalus'] = ['Cryphalus abietis'];
species['Crystallogobius'] = ['Crystallogobius linearis'];
species['Cuscuta'] = ['Cuscuta epithymum'];
species['Cychrus'] = ['Cychrus caraboides'];
species['Cyclopterus'] = ['Cyclopterus lumpus'];
species['Cygnus'] = ['Cygnus olor'];
species['Cylindrocystis'] = ['Cylindrocystis brebissonii'];
species['Cynomya'] = ['Cynomya mortuorum'];
species['Cyzenis'] = ['Cyzenis albicans'];
species['Dactylis'] = ['Dactylis glomerata'];
species['Dactylorhiza'] = ['Dactylorhiza fuchsii'];
species['Dasineura'] = ['Dasineura ulmaria'];
species['Dasypoda'] = ['Dasypoda altercator'];
species['Delia'] = ['Delia platura'];
species['Delphinus'] = ['Delphinus delphis'];
species['Dendrocopos'] = ['Dendrocopos major'];
species['Dicranomyia'] = ['Dicranomyia modesta'];
species['Dilophus'] = ['Dilophus febrilis'];
species['Diplonevra'] = ['Diplonevra concinna', 'Diplonevra florescens'];
species['Dipturus'] = ['Dipturus batis'];
species['Dolichopus'] = ['Dolichopus brevipennis', 'Dolichopus latilimbatus', 'Dolichopus nubilus', 'Dolichopus plumipes', 'Dolichopus simplex', 'Dolichopus ungulatus'];
species['Dorcus'] = ['Dorcus parallelipipedus'];
species['Dorylomorpha'] = ['Dorylomorpha xanthopus'];
species['Drapetis'] = ['Drapetis ephippiata'];
species['Drosera'] = ['Drosera intermedia', 'Drosera rotundifolia'];
species['Drymeia'] = ['Drymeia vicana'];
species['Dryomyza'] = ['Dryomyza anilis'];
species['Dryopteris'] = ['Dryopteris dilatata', 'Dryopteris filix-mas'];
species['Dynatosoma'] = ['Dynatosoma fuscicorne'];
species['Ecclisopteryx'] = ['Ecclisopteryx dalecarlica'];
species['Edwardsia'] = ['Edwardsia danica'];
species['Egle'] = ['Egle inermis'];
species['Electrogena'] = ['Electrogena lateralis'];
species['Eliomys'] = ['Eliomys quercinus'];
species['Elodea'] = ['Elodea canadensis', 'Elodea nuttallii'];
species['Elymus'] = ['Elymus repens'];
species['Emberiza'] = ['Emberiza citrinella'];
species['Empetrum'] = ['Empetrum nigrum'];
species['Empis'] = ['Empis caudatula', 'Empis livida', 'Empis nigripes', 'Empis opaca', 'Empis stercorea', 'Empis tessellata', 'Empis trigramma'];
species['Engraulis'] = ['Engraulis encrasicolus'];
species['Entelurus'] = ['Entelurus aequoreus'];
species['Ephemera'] = ['Ephemera danica', 'Ephemera vulgata'];
species['Ephemerella'] = ['Ephemerella notata'];
species['Epilobium'] = ['Epilobium palustre'];
species['Episyron'] = ['Episyron rufipes'];
species['Episyrphus'] = ['Episyrphus balteatus'];
species['Eptesicus'] = ['Eptesicus serotinus'];
species['Equisetum'] = ['Equisetum palustre', 'Equisetum telmateia'];
species['Erica'] = ['Erica tetralix'];
species['Erinaceus'] = ['Erinaceus europaeus'];
species['Eriocrania'] = ['Eriocrania semipurpurella'];
species['Eriophorum'] = ['Eriophorum angustifolium'];
species['Eriothrix'] = ['Eriothrix rufomaculatus'];
species['Etmopterus'] = ['Etmopterus spinax'];
species['Euastrum'] = ['Euastrum ansatum', 'Euastrum binale', 'Euastrum lapponicum', 'Euastrum pectinatum'];
species['Eucosma'] = ['Eucosma krygeri'];
species['Euleia'] = ['Euleia heraclei'];
species['Euonymus'] = ['Euonymus europaeus'];
species['Euphylidorea'] = ['Euphylidorea dispar'];
species['Eutrigla'] = ['Eutrigla gurnardus'];
species['Fagus'] = ['Fagus sylvatica'];
species['Falco'] = ['Falco tinnunculus'];
species['Fannia'] = ['Fannia armata', 'Fannia genualis', 'Fannia lepida', 'Fannia sociella'];
species['Fasciola'] = ['Fasciola hepatica', 'Fasciola punctata'];
species['Ferdinandea'] = ['Ferdinandea cuprea'];
species['Festuca'] = ['Festuca rubra'];
species['Ficaria'] = ['Ficaria verna'];
species['Filipendula'] = ['Filipendula ulmaria'];
species['Formica'] = ['Formica fusca', 'Formica polyctena', 'Formica rufa', 'Formica rufibarbis'];
species['Frangula'] = ['Frangula alnus'];
species['Fraxinus'] = ['Fraxinus excelsior'];
species['Fringilla'] = ['Fringilla coelebs'];
species['Fulica'] = ['Fulica atra'];
species['Gadus'] = ['Gadus morhua'];
species['Galba'] = ['Galba truncatula'];
species['Galium'] = ['Galium odoratum'];
species['Gallinago'] = ['Gallinago gallinago'];
species['Gasterosteus'] = ['Gasterosteus aculeatus'];
species['Genista'] = ['Genista anglica'];
species['Geotrupes'] = ['Geotrupes stercorarius'];
species['Glyptocephalus'] = ['Glyptocephalus cynoglossus'];
species['Gnorimoschema'] = ['Gnorimoschema bodillum'];
species['Gomphus'] = ['Gomphus vulgatissimus'];
species['Grus'] = ['Grus grus'];
species['Gymnopilus'] = ['Gymnopilus penetrans', 'Gymnopilus spectabilis'];
species['Haematobosca'] = ['Haematobosca stimulans'];
species['Haematopota'] = ['Haematopota pluvialis', 'Haematopota subcylindrica'];
species['Halichoerus'] = ['Halichoerus grypus'];
species['Hebeloma'] = ['Hebeloma sinapizans'];
species['Hedera'] = ['Hedera helix'];
species['Helicolenus'] = ['Helicolenus dactylopterus'];
species['Helina'] = ['Helina allotalla', 'Helina impuncta', 'Helina lasiophthalma', 'Helina latitarsis'];
species['Helophilus'] = ['Helophilus pendulus'];
species['Helvella'] = ['Helvella lacunosa'];
species['Hippoglossoides'] = ['Hippoglossoides platessoides'];
species['Homoneura'] = ['Homoneura interstincta'];
species['Hyalotheca'] = ['Hyalotheca dissiliens'];
species['Hybomitra'] = ['Hybomitra bimaculata'];
species['Hybos'] = ['Hybos culiciformis'];
species['Hydrellia'] = ['Hydrellia maura'];
species['Hydrophoria'] = ['Hydrophoria lancifer', 'Hydrophoria linogrisea'];
species['Hydroprogne'] = ['Hydroprogne caspia'];
species['Hydropsyche'] = ['Hydropsyche angustipennis', 'Hydropsyche fulvipes', 'Hydropsyche pellucidula', 'Hydropsyche saxonica', 'Hydropsyche siltalai'];
species['Hydrotaea'] = ['Hydrotaea albipuncta', 'Hydrotaea armipes', 'Hydrotaea ignava', 'Hydrotaea irritans'];
species['Hygrophorus'] = ['Hygrophorus discoxanthus', 'Hygrophorus hypothejus'];
species['Hyla'] = ['Hyla arborea'];
species['Hylaeus'] = ['Hylaeus communis'];
species['Hylemya'] = ['Hylemya vagans', 'Hylemya variata'];
species['Hylemyza'] = ['Hylemyza partita'];
species['Hypnum'] = ['Hypnum cupressiforme'];
species['Iberina'] = ['Iberina montana'];
species['Ichthyosaura'] = ['Ichthyosaura alpestris'];
species['Ilex'] = ['Ilex aquifolium'];
species['Ironoquia'] = ['Ironoquia dubia'];
species['Isolepis'] = ['Isolepis fluitans', 'Isolepis setacea'];
species['Isoperla'] = ['Isoperla grammatica'];
species['Isozoanthus'] = ['Isozoanthus danicus'];
species['Ithytrichia'] = ['Ithytrichia lamellaris'];
species['Jacobaea'] = ['Jacobaea aquatica'];
species['Juncus'] = ['Juncus articulatus', 'Juncus conglomeratus', 'Juncus subnodulosus'];
species['Juniperus'] = ['Juniperus communis'];
species['Karsholtia'] = ['Karsholtia marianii'];
species['Knautia'] = ['Knautia arvensis'];
species['Labrus'] = ['Labrus bergylta'];
species['Lacrymaria'] = ['Lacrymaria lacrymabunda'];
species['Lactarius'] = ['Lactarius aquizonatus', 'Lactarius pallidus', 'Lactarius vellereus'];
species['Lagenorhynchus'] = ['Lagenorhynchus acutus', 'Lagenorhynchus albirostris'];
species['Lampyris'] = ['Lampyris noctiluca'];
species['Lanius'] = ['Lanius collurio', 'Lanius excubitor'];
species['Larix'] = ['Larix decidua'];
species['Larus'] = ['Larus argentatus', 'Larus canus', 'Larus marinus', 'Larus ridibundus'];
species['Lasioglossum'] = ['Lasioglossum morio'];
species['Lasiomma'] = ['Lasiomma seminitidum'];
species['Lasius'] = ['Lasius niger'];
species['Lathraea'] = ['Lathraea squamaria'];
species['Lathrobium'] = ['Lathrobium brunnipes'];
species['Lathyrus'] = ['Lathyrus sphaericus'];
species['Lenzites'] = ['Lenzites betulina'];
species['Lepidostoma'] = ['Lepidostoma basale'];
species['Lepista'] = ['Lepista nuda'];
species['Leptocera'] = ['Leptocera cryptochaeta'];
species['Leptoclinus'] = ['Leptoclinus maculatus'];
species['Leptogaster'] = ['Leptogaster cylindrica'];
species['Leptopeza'] = ['Leptopeza ruficollis'];
species['Leptothorax'] = ['Leptothorax acervorum'];
species['Leucophora'] = ['Leucophora obtusa'];
species['Leuctra'] = ['Leuctra Fusca'];
species['Limanda'] = ['Limanda limanda'];
species['Limnephilus'] = ['Limnephilus germanus'];
species['Limnia'] = ['Limnia unguicornis'];
species['Limnius'] = ['Limnius volckmari'];
species['Limnophora'] = ['Limnophora nigripes', 'Limnophora tigrina'];
species['Limonium'] = ['Limonium vulgare'];
species['Linaria'] = ['Linaria vulgaris'];
species['Linyphia'] = ['Linyphia triangularis'];
species['Lissotriton'] = ['Lissotriton vulgaris'];
species['Lithax'] = ['Lithax obscurus'];
species['Lithobius'] = ['Lithobius forficatus'];
species['Littorella'] = ['Littorella uniflora'];
species['Lobelia'] = ['Lobelia dortmanna'];
species['Logfia'] = ['Logfia minima'];
species['Lolium'] = ['Lolium perenne'];
species['Lonicera'] = ['Lonicera xylosteum'];
species['Lordithon'] = ['Lordithon lunulatus'];
species['Loricera'] = ['Loricera pilicornis'];
species['Lotus'] = ['Lotus corniculatus', 'Lotus pedunculatus'];
species['Lucilia'] = ['Lucilia illustris', 'Lucilia silvarum'];
species['Lullula'] = ['Lullula arborea'];
species['Luscinia'] = ['Luscinia luscinia', 'Luscinia svecica'];
species['Lutra'] = ['Lutra lutra'];
species['Lycodes'] = ['Lycodes gracilis'];
species['Lycopodiella'] = ['Lycopodiella inundata'];
species['Lydina'] = ['Lydina aenea'];
species['Lymnaea'] = ['Lymnaea stagnalis'];
species['Lynceus'] = ['Lynceus brachyurus'];
species['Lype'] = ['Lype reducta'];
species['Lysimachia'] = ['Lysimachia vulgaris'];
species['Lythrum'] = ['Lythrum salicaria'];
species['Magallana'] = ['Magallana gigas'];
species['Malus'] = ['Malus sylvestris'];
species['Marasmius'] = ['Marasmius hudsonii', 'Marasmius wynnei'];
species['Marpissa'] = ['Marpissa muscosa'];
species['Martes'] = ['Martes foina', 'Martes martes'];
species['Mastigusa'] = ['Mastigusa arietina'];
species['Maurolicus'] = ['Maurolicus muelleri'];
species['Medicago'] = ['Medicago lupulina'];
species['Melampyrum'] = ['Melampyrum pratense'];
species['Melanagromyza'] = ['Melanagromyza aenea'];
species['Melanostoma'] = ['Melanostoma mellinum', 'Melanostoma scalare'];
species['Meles'] = ['Meles meles'];
species['Melica'] = ['Melica uniflora'];
species['Mellinus'] = ['Mellinus arvensis'];
species['Meripilus'] = ['Meripilus giganteus'];
species['Merlangius'] = ['Merlangius merlangus'];
species['Merops'] = ['Merops apiaster'];
species['Mesembrina'] = ['Mesembrina meridiana'];
species['Mesotaenium'] = ['Mesotaenium caldariorum'];
species['Metalimnobia'] = ['Metalimnobia quadrinotata'];
species['Metzgeria'] = ['Metzgeria furcata'];
species['Micrasterias'] = ['Micrasterias americana', 'Micrasterias papillifera', 'Micrasterias rotata', 'Micrasterias semiradiata', 'Micrasterias truncata'];
species['Microbotryum'] = ['Microbotryum stellariae'];
species['Microchrysa'] = ['Microchrysa flavicornis'];
species['Micromorphus'] = ['Micromorphus albipes'];
species['Micromys'] = ['Micromys minutus'];
species['Microphor'] = ['Microphor holosericeus'];
species['Microstomus'] = ['Microstomus kitt'];
species['Microtus'] = ['Microtus agrestis'];
species['Milvus'] = ['Milvus milvus'];
species['Mnemiopsis'] = ['Mnemiopsis leidyi'];
species['Molinia'] = ['Molinia caerulea'];
species['Monoclona'] = ['Monoclona rufilatera'];
species['Morellia'] = ['Morellia hortorum', 'Morellia simplex'];
species['Morinia'] = ['Morinia doronici'];
species['Mucidula'] = ['Mucidula mucida'];
species['Mus'] = ['Mus musculus'];
species['Musca'] = ['Musca autumnalis', 'Musca cristatus', 'Musca larvarum', 'Musca pallida'];
species['Muscardinus'] = ['Muscardinus avellanarius'];
species['Muscina'] = ['Muscina levida'];
species['Mustela'] = ['Mustela putorius'];
species['Mutilla'] = ['Mutilla europaea'];
species['Mya'] = ['Mya arenaria'];
species['Mycena'] = ['Mycena arcangeliana', 'Mycena crocata', 'Mycena galopus', 'Mycena inclinata', 'Mycena leptocephala', 'Mycena pura'];
species['Mycenella'] = ['Mycenella trachyspora'];
species['Mycomya'] = ['Mycomya fimbriata'];
species['Mydaea'] = ['Mydaea urbana'];
species['Myodes'] = ['Myodes glareolus'];
species['Myospila'] = ['Myospila meditabunda'];
species['Myosurus'] = ['Myosurus minimus L.'];
species['Myotis'] = ['Myotis bechsteinii', 'Myotis brandtii', 'Myotis dasycneme', 'Myotis daubentonii', 'Myotis mystacinus', 'Myotis nattereri'];
species['Myrica'] = ['Myrica gale'];
species['Mytilus'] = ['Mytilus edulis'];
species['Nanna'] = ['Nanna fasciata', 'Nanna flavipes'];
species['Narthecium'] = ['Narthecium ossifragum'];
species['Nebria'] = ['Nebria brevicollis'];
species['Neckera'] = ['Neckera complanata'];
species['Nemapogon'] = ['Nemapogon falstriella'];
species['Nemopoda'] = ['Nemopoda nitidula'];
species['Nemotelus'] = ['Nemotelus notatus'];
species['Neogobius'] = ['Neogobius melanostomus'];
species['Neoleria'] = ['Neoleria inscripta'];
species['Neomikiella'] = ['Neomikiella lychnidis'];
species['Neomys'] = ['Neomys fodiens'];
species['Neottia'] = ['Neottia ovata'];
species['Nephrops'] = ['Nephrops norvegicus'];
species['Nephrotoma'] = ['Nephrotoma flavescens', 'Nephrotoma quadrifaria'];
species['Nerophis'] = ['Nerophis ophidion'];
species['Nicrophorus'] = ['Nicrophorus vespilloides'];
species['Nigrobaetis'] = ['Nigrobaetis niger'];
species['Nigrotipula'] = ['Nigrotipula nigra'];
species['Nola'] = ['Nola aerugula', 'Nola holsatica'];
species['Norellisoma'] = ['Norellisoma spinimanum'];
species['Notidobia'] = ['Notidobia ciliaris'];
species['Nuctenea'] = ['Nuctenea umbratica'];
species['Nyctalus'] = ['Nyctalus noctula'];
species['Ocypus'] = ['Ocypus brunnipes', 'Ocypus olens'];
species['Odontocerum'] = ['Odontocerum albicorne'];
species['Oiceoptoma'] = ['Oiceoptoma thoracicum'];
species['Opacifrons'] = ['Opacifrons humida'];
species['Ophiogomphus'] = ['Ophiogomphus cecilia'];
species['Orchis'] = ['Orchis purpurea'];
species['Orfelia'] = ['Orfelia nemoralis'];
species['Ornithopus'] = ['Ornithopus perpusillus'];
species['Orthonevra'] = ['Orthonevra geniculata'];
species['Osmerus'] = ['Osmerus eperlanus'];
species['Osmia'] = ['Osmia rufa'];
species['Othius'] = ['Othius lapidicola'];
species['Otophorus'] = ['Otophorus haemorrhoidalis'];
species['Oxypselaphus'] = ['Oxypselaphus obscurus'];
species['Palomena'] = ['Palomena prasina'];
species['Panorpa'] = ['Panorpa communis'];
species['Paracoenia'] = ['Paracoenia fumosa'];
species['Parapholis'] = ['Parapholis strigosa'];
species['Parascatopse'] = ['Parascatopse litorea'];
species['Pegomya'] = ['Pegomya bicolor'];
species['Pegoplata'] = ['Pegoplata infirma'];
species['Pelophylax'] = ['Pelophylax esculentus'];
species['Penium'] = ['Penium exiguum'];
species['Perdix'] = ['Perdix perdix'];
species['Perlodes'] = ['Perlodes microcephalus'];
species['Persicaria'] = ['Persicaria hydropiper'];
species['Phaeolepiota'] = ['Phaeolepiota aurea'];
species['Phaonia'] = ['Phaonia errans', 'Phaonia fuscata', 'Phaonia perdita', 'Phaonia tuguriorum'];
species['Pherbellia'] = ['Pherbellia dubia'];
species['Philanthus'] = ['Philanthus triangulum'];
species['Philonthus'] = ['Philonthus decorus'];
species['Philopotamus'] = ['Philopotamus montanus'];
species['Phleum'] = ['Phleum pratense'];
species['Phoca'] = ['Phoca vitulina'];
species['Phoenicurus'] = ['Phoenicurus phoenicurus'];
species['Pholcus'] = ['Pholcus phalangioides'];
species['Pholidoptera'] = ['Pholidoptera griseoaptera'];
species['Pholiota'] = ['Pholiota gummosa', 'Pholiota squarrosa'];
species['Pholis'] = ['Pholis gunnellus'];
species['Phyllodromia'] = ['Phyllodromia melanocephala'];
species['Phyllomyza'] = ['Phyllomyza securicornis'];
species['Phylloscopus'] = ['Phylloscopus sibillatrix'];
species['Physeter'] = ['Physeter macrocephalus'];
species['Phyteuma'] = ['Phyteuma spicatum'];
species['Phytobia'] = ['Phytobia cambii'];
species['Picea'] = ['Picea abies', 'Picea glauca', 'Picea sitchensis'];
species['Piezura'] = ['Piezura pardalina'];
species['Pilosella'] = ['Pilosella officinarum'];
species['Pinus'] = ['Pinus contorta', 'Pinus nigra', 'Pinus sylvestris'];
species['Pipistrellus'] = ['Pipistrellus nathusii', 'Pipistrellus pipistrellus', 'Pipistrellus pygmaeus'];
species['Pipizella'] = ['Pipizella viduata'];
species['Pisaura'] = ['Pisaura mirabilis'];
species['Plantago'] = ['Plantago major', 'Plantago maritima'];
species['Platanthera'] = ['Platanthera chlorantha'];
species['Platycheirus'] = ['Platycheirus angustatus', 'Platycheirus clypeatus', 'Platycheirus fulviventris', 'Platycheirus granditarsis', 'Platycheirus peltatus'];
species['Platypalpus'] = ['Platypalpus agilis', 'Platypalpus candicans', 'Platypalpus cursitans', 'Platypalpus laticinctus', 'Platypalpus longicornis'];
species['Platyptilia'] = ['Platyptilia sp.'];
species['Plecotus'] = ['Plecotus auritus'];
species['Pleuronectes'] = ['Pleuronectes platessa'];
species['Pleurotus'] = ['Pleurotus ostreatus'];
species['Pleurozium'] = ['Pleurozium schreberi'];
species['Pluteus'] = ['Pluteus romellii', 'Pluteus salicinus'];
species['Pluvialis'] = ['Pluvialis apricaria'];
species['Poa'] = ['Poa pratensis'];
species['Poecile'] = ['Poecile montanus'];
species['Poecilobothrus'] = ['Poecilobothrus nobilitatus'];
species['Polietes'] = ['Polietes lardaria'];
species['Pollenia'] = ['Pollenia angustigena', 'Pollenia rudis', 'Pollenia vagabunda'];
species['Polygala'] = ['Polygala vulgaris'];
species['Polypodium'] = ['Polypodium vulgare'];
species['Pomatoschistus'] = ['Pomatoschistus microps', 'Pomatoschistus minutus'];
species['Pontastacus'] = ['Pontastacus leptodactylus'];
species['Populus'] = ['Populus alba', 'Populus balsamifera', 'Populus berolinensis', 'Populus canadensis', 'Populus canescens', 'Populus nigra', 'Populus tremula'];
species['Potamogeton'] = ['Potamogeton lucens', 'Potamogeton natans', 'Potamogeton pectinatus', 'Potamogeton praelongus'];
species['Potamophylax'] = ['Potamophylax rotundipennis'];
species['Primula'] = ['Primula veris'];
species['Prosena'] = ['Prosena siberita'];
species['Prunella'] = ['Prunella vulgaris'];
species['Prunus'] = ['Prunus avium', 'Prunus cerasifera', 'Prunus mahaleb', 'Prunus padus', 'Prunus serotina'];
species['Pseudotsuga'] = ['Pseudotsuga menziesii'];
species['Psila'] = ['Psila hennigi'];
species['Psychomyia'] = ['Psychomyia pusilla'];
species['Pterostichus'] = ['Pterostichus diligens', 'Pterostichus melanarius', 'Pterostichus niger', 'Pterostichus oblongopunctatus'];
species['Ptychoptera'] = ['Ptychoptera contaminata', 'Ptychoptera minuta', 'Ptychoptera scutellaris'];
species['Pyrgus'] = ['Pyrgus armoricanus'];
species['Pyrus'] = ['Pyrus communis'];
species['Quedius'] = ['Quedius cinctus', 'Quedius fuliginosus', 'Quedius lateralis', 'Quedius mesomelinus'];
species['Quercus'] = ['Quercus petraea', 'Quercus robur', 'Quercus rubra'];
species['Rabdophaga'] = ['Rabdophaga marginemtorquens'];
species['Radix'] = ['Radix labiata'];
species['Ranunculus'] = ['Ranunculus bulbosus', 'Ranunculus flammula'];
species['Rattus'] = ['Rattus rattus'];
species['Renocera'] = ['Renocera pallida'];
species['Rhagio'] = ['Rhagio lineola', 'Rhagio tringarius'];
species['Rhamnus'] = ['Rhamnus cathartica'];
species['Rhamphomyia'] = ['Rhamphomyia barbata', 'Rhamphomyia crassirostris', 'Rhamphomyia geniculata', 'Rhamphomyia physoprocta'];
species['Rhinanthus'] = ['Rhinanthus serotinus'];
species['Rhithropanopeus'] = ['Rhithropanopeus harrisii'];
species['Rhodaphodius'] = ['Rhodaphodius foetens'];
species['Ribes'] = ['Ribes alpinum', 'Ribes rubrum', 'Ribes spicatum', 'Ribes uva-crispa'];
species['Rivellia'] = ['Rivellia syngenesiae'];
species['Rosa'] = ['Rosa canina', 'Rosa rugosa', 'Rosa tomentosa'];
species['Rugilus'] = ['Rugilus rufipes'];
species['Rumex'] = ['Rumex acetosella', 'Rumex sanguineus'];
species['Russula'] = ['Russula grata', 'Russula ochroleuca', 'Russula olivacea'];
species['Salix'] = ['Salix alba', 'Salix cinerea', 'Salix myrsinifolia', 'Salix pentandra'];
species['Sambucus'] = ['Sambucus nigra'];
species['Sanicula'] = ['Sanicula europaea'];
species['Sapyga'] = ['Sapyga quinquepunctata'];
species['Sarcophaga'] = ['Sarcophaga haemorrhoa', 'Sarcophaga sinuata'];
species['Sargus'] = ['Sargus flavipes'];
species['Scabiosa'] = ['Scabiosa canescens'];
species['Scaptomyza'] = ['Scaptomyza pallida'];
species['Scathophaga'] = ['Scathophaga furcata', 'Scathophaga inquinata', 'Scathophaga stercoraria', 'Scathophaga suilla'];
species['Schoenomyza'] = ['Schoenomyza litorella'];
species['Schoenoplectus'] = ['Schoenoplectus lacustris'];
species['Sciomyza'] = ['Sciomyza simplex'];
species['Scirpus'] = ['Scirpus sylvaticus'];
species['Sciurus'] = ['Sciurus vulgaris'];
species['Scomber'] = ['Scomber scombrus'];
species['Scophthalmus'] = ['Scophthalmus maximus'];
species['Sepsis'] = ['Sepsis punctum'];
species['Serica'] = ['Serica brunnea'];
species['Sericostoma'] = ['Sericostoma personatum'];
species['Sicista'] = ['Sicista betulina'];
species['Silene'] = ['Silene dioica', 'Silene flos-cuculi', 'Silene nutans', 'Silene otites'];
species['Sinodendron'] = ['Sinodendron cylindricum'];
species['Siphonoperla'] = ['Siphonoperla burmeisteri'];
species['Smicromyrme'] = ['Smicromyrme rufipes'];
species['Solea'] = ['Solea solea'];
species['Sorbus'] = ['Sorbus aria', 'Sorbus aucuparia', 'Sorbus intermedia', 'Sorbus rupicola', 'Sorbus torminalis'];
species['Sorex'] = ['Sorex araneus', 'Sorex minutus'];
species['Spartina'] = ['Spartina alterniflora x maritima'];
species['Spelobia'] = ['Spelobia clunipes'];
species['Sphaeridium'] = ['Sphaeridium lunatum'];
species['Sphagnum'] = ['Sphagnum fallax'];
species['Spinachia'] = ['Spinachia spinachia'];
species['Sporobolus'] = ['Sporobolus townsendii'];
species['Sprattus'] = ['Sprattus sprattus'];
species['Stagnicola'] = ['Stagnicola palustris'];
species['Staphylinus'] = ['Staphylinus punctulatus'];
species['Staurastrum'] = ['Staurastrum brachiatum', 'Staurastrum furcigerum', 'Staurastrum margaritaceum', 'Staurastrum paradoxum', 'Staurastrum polytrichum', 'Staurastrum scabrum'];
species['Staurodesmus'] = ['Staurodesmus convergens', 'Staurodesmus triangularis'];
species['Stellaria'] = ['Stellaria holostea'];
species['Strix'] = ['Strix aluco'];
species['Stropharia'] = ['Stropharia cyanea'];
species['Suillia'] = ['Suillia affinis', 'Suillia bicolor', 'Suillia flava', 'Suillia notata'];
species['Sylvia'] = ['Sylvia atricapilla'];
species['Sylvicola'] = ['Sylvicola punctatus'];
species['Sympycnus'] = ['Sympycnus pulicarius'];
species['Synapha'] = ['Synapha fasciata'];
species['Syngnathus'] = ['Syngnathus acus', 'Syngnathus rostellatus', 'Syngnathus typhle'];
species['Syritta'] = ['Syritta pipiens'];
species['Tabanus'] = ['Tabanus autumnalis'];
species['Tachina'] = ['Tachina fera'];
species['Tachinus'] = ['Tachinus rufipennis'];
species['Tachydromia'] = ['Tachydromia umbrarum'];
species['Talpa'] = ['Talpa europaea'];
species['Tamias'] = ['Tamias sibiricus'];
species['Tarnania'] = ['Tarnania fenestralis'];
species['Tarzetta'] = ['Tarzetta cupularis'];
species['Tasgius'] = ['Tasgius morsitans'];
species['Taurulus'] = ['Taurulus bubalis'];
species['Taxus'] = ['Taxus baccata'];
species['Teilingia'] = ['Teilingia granulata'];
species['Tetanocera'] = ['Tetanocera elata'];
species['Tetramorium'] = ['Tetramorium caespitum'];
species['Teuchestes'] = ['Teuchestes fossor'];
species['Themira'] = ['Themira lucida'];
species['Thuja'] = ['Thuja plicata'];
species['Tilia'] = ['Tilia cordata', 'Tilia europea', 'Tilia platyphyllos'];
species['Tinodes'] = ['Tinodes unicolor'];
species['Tiphia'] = ['Tiphia femorata'];
species['Tipula'] = ['Tipula fascipennis', 'Tipula flavolineata', 'Tipula paludosa', 'Tipula varipennis'];
species['Tomosvaryella'] = ['Tomosvaryella palliditarsis'];
species['Torilis'] = ['Torilis japonica'];
species['Trachinus'] = ['Trachinus draco'];
species['Trichina'] = ['Trichina bilobata'];
species['Trichoglossum'] = ['Trichoglossum variabile'];
species['Tricholoma'] = ['Tricholoma cingulatum', 'Tricholoma squarrulosum', 'Tricholoma ustale'];
species['Trientalis'] = ['Trientalis europaea'];
species['Trifolium'] = ['Trifolium repens'];
species['Tringa'] = ['Tringa totanus'];
species['Trisopterus'] = ['Trisopterus luscus'];
species['Triturus'] = ['Triturus cristatus'];
species['Tropidia'] = ['Tropidia scita'];
species['Tulostoma'] = ['Tulostoma brumale'];
species['Turdus'] = ['Turdus merula'];
species['Ulmus'] = ['Ulmus laevis'];
species['Unio'] = ['Unio crassus'];
species['Uromyces'] = ['Uromyces dactylidis'];
species['Utricularia'] = ['Utricularia minor'];
species['Valeriana'] = ['Valeriana dioica'];
species['Veronica'] = ['Veronica chamaedrys'];
species['Vespa'] = ['Vespa crabro', 'Vespa parietum'];
species['Vespertilio'] = ['Vespertilio murinus'];
species['Vespula'] = ['Vespula rufa'];
species['Viburnum'] = ['Viburnum opulus'];
species['Vicia'] = ['Vicia sativa'];
species['Vipera'] = ['Vipera berus'];
species['Viviparus'] = ['Viviparus viviparus'];
species['Volvopluteus'] = ['Volvopluteus gloiocephalus'];
species['Vulpes'] = ['Vulpes vulpes'];
species['Xylophagus'] = ['Xylophagus ater'];
species['Ylodes'] = ['Ylodes simulans'];
species['Zaphne'] = ['Zaphne divisa'];
species['Zootoca'] = ['Zootoca vivipara'];
species['Zophomyia'] = ['Zophomyia temula'];
species['Zostera'] = ['Zostera marina'];
species['Zwicknia'] = ['Zwicknia bifrons'];


var nameLists = [kingdoms, phyla, classes, orders, families, genera, species];
var taxonomyLevels = ["kingdom", "phylum", "class", "order", "family",
                      "genus", "species"];
var numTaxonomyLevels = taxonomyLevels.length;
var prettyDropdownList = [];

function initializeDropdowns () {
    var opt = new Option("", "Reset");
    $("#kingdom").append(opt);
    for (var key in kingdoms) {
        var opt = new Option(kingdoms[key], kingdoms[key]);
        $("#kingdom").append(opt);
    }
    $('#kingdom').change(function(){dropdownUpdated("kingdom")});
    var select = $("#kingdom").prettyDropdown({width: 290});
    prettyDropdownList.push(select);

    var opt = new Option("", "Reset");
    $("#phylum").append(opt);
    for (var key in phyla) {
        var chosenPhyla = phyla[key];
        for (var phy in chosenPhyla) {
            var opt = new Option(chosenPhyla[phy], chosenPhyla[phy]);
            $("#phylum").append(opt);
        }
    }
    $('#phylum').change(function(){dropdownUpdated("phylum")});
    select = $("#phylum").prettyDropdown({width: 290});
    prettyDropdownList.push(select);

    var opt = new Option("", "Reset");
    $("#class").append(opt);
    for (var key in classes) {
        var chosenClass = classes[key];
        for (var cla in chosenClass) {
            var opt = new Option(chosenClass[cla], chosenClass[cla]);
            $("#class").append(opt);
        }
    }
    $('#class').change(function(){dropdownUpdated("class")});
    select = $("#class").prettyDropdown({width: 290});
    prettyDropdownList.push(select);

    var opt = new Option("", "Reset");
    $("#order").append(opt);
    for (var key in orders) {
        var chosenOrder = orders[key];
        for (var ord in chosenOrder) {
            var opt = new Option(chosenOrder[ord], chosenOrder[ord]);
            $("#order").append(opt);
        }
    }
    $('#order').change(function(){dropdownUpdated("order")});
    select = $("#order").prettyDropdown({width: 290});
    prettyDropdownList.push(select);

    var opt = new Option("", "Reset");
    $("#family").append(opt);
    for (var key in families) {
        var chosenFam = families[key];
        for (var fam in chosenFam) {
            var opt = new Option(chosenFam[fam], chosenFam[fam]);
            $("#family").append(opt);
        }
    }
    $('#family').change(function(){dropdownUpdated("family")});
    select = $("#family").prettyDropdown({width: 290});
    prettyDropdownList.push(select);

    var opt = new Option("", "Reset");
    $("#genus").append(opt);
    for (var key in genera) {
        var chosenGenus = genera[key];
        for (var gen in chosenGenus) {
            var opt = new Option(chosenGenus[gen], chosenGenus[gen]);
            $("#genus").append(opt);
        }
    }
    $('#genus').change(function(){dropdownUpdated("genus")});
    select = $("#genus").prettyDropdown({width: 290});
    prettyDropdownList.push(select);

    var opt = new Option("", "Reset");
    $("#species").append(opt);
    for (var key in species) {
        var chosenSpecies = species[key];
        for (var spe in chosenSpecies) {
            var opt = new Option(chosenSpecies[spe], chosenSpecies[spe]);
            $("#species").append(opt);
        }
    }
    $('#species').change(function(){dropdownUpdated("species")});
    select = $("#species").prettyDropdown({width: 290});
    prettyDropdownList.push(select);
}

function resetDropdown(elNum) {
    document.getElementById(taxonomyLevels[elNum]).selectedIndex = 0;
    prettyDropdownList[elNum].refresh();
}

function updateDropdownsBelow(elNum, keyValueList=[]) {
    // get the pretty list from the list
    chosenPretty = prettyDropdownList[elNum];
    // empty the list except for the reset bit.
    var numOpts = chosenPretty[0].options.length;
    for (var i = 1; i < numOpts; i++) {
        chosenPretty[0].options.remove(1);
    }
    // childList is the list of things we want to give to the
    // dropdown below that it should keep (keys in the list below).
    var childList = [];
    // keyvaluelist is the list of the options from parent that are valid
    // these are names of the parent taxa that are keys in the current list
    for (var parentName of keyValueList) {
        // chosenList is the list of the current taxa that I should show
        var chosenList = nameLists[elNum][parentName];
        for (var curTaxon of chosenList) {
            childList.push(curTaxon);
            opt = new Option(curTaxon, curTaxon);
            chosenPretty[0].append(opt);
        }
    }
    if (elNum < 6 ) {
        updateDropdownsBelow(elNum+1, childList);
    }
    resetDropdown(elNum);
}


function updateDropdownsAbove(elNum, chosenTaxon) {
    // chosenTaxon is the taxon that is chosen in this select
    var chosenPretty = prettyDropdownList[elNum];
    if (chosenPretty[0].selectedIndex > 0) {
        return(null);
    }
    // kingdom specific handling.
    if (elNum === 0) {
        document.getElementById(taxonomyLevels[elNum]).selectedIndex = nameLists[elNum].indexOf(chosenTaxon)+1;
        chosenPretty.refresh();
        return(null);
    }
    // this selects name list.
    var currentTaxaList = nameLists[elNum];
    var chosenParent = "";
    // first empty the current select
    var numOpts = chosenPretty[0].options.length;
    for (var i = 1; i < numOpts; i++) {
        chosenPretty[0].options.remove(1);
    }
    // iterate over this selects taxa list
    // if the chosenTaxon is present in a key, then
    // that key is what we want to propagate
    for (var curTaxon in currentTaxaList) {
        // found the list of items which has the chosenTaxon,
        // so build this select up, and then call the parent's thing
        var taxonIndex = currentTaxaList[curTaxon].indexOf(chosenTaxon);
        if ( taxonIndex >= 0) {
            chosenParent = curTaxon;
            var chosenTaxonList = currentTaxaList[curTaxon];
            numOpts = chosenTaxonList.length;
            for (var i = 0; i < numOpts; i++){
                // add all the options
                var opt = new Option(chosenTaxonList[i], chosenTaxonList[i]);
                chosenPretty[0].append(opt);
            }
            // set selected
            document.getElementById(taxonomyLevels[elNum]).selectedIndex = (taxonIndex+1);
            break;
        }
    }
    chosenPretty.refresh();
    if (elNum > 0) {
        updateDropdownsAbove(elNum-1, chosenParent);
    }
}

function dropdownUpdated(elementName){
    var elNum = taxonomyLevels.indexOf(elementName);
    // update the selects below
    if (elNum < 6) {
        var keyList = [];
        if ((prettyDropdownList[elNum][0]).selectedIndex < 1) {
            // this is a reset of the chosen box, so udpate the select
            // below with all the options here.
            var numOptions = (prettyDropdownList[elNum][0]).options.length;
            for (var i = 1; i < numOptions; i++) {
                keyList.push((prettyDropdownList[elNum][0]).options[i].value);
            }
        } else {
            keyList.push((prettyDropdownList[elNum][0]).options[(prettyDropdownList[elNum][0]).selectedIndex].value);
        }
        updateDropdownsBelow(elNum+1, keyList);
    }
    // update the selects above
    if (elNum > 0) {
        var chosenIndex = (prettyDropdownList[elNum][0]).selectedIndex;
        if (chosenIndex == 0) {
            return(null);
        }
        var chosenParent = "";
        var chosenVal = (prettyDropdownList[elNum][0]).options[(prettyDropdownList[elNum][0]).selectedIndex].value;
        // this selects name list.
        var currentTaxaList = nameLists[elNum];
        // first empty the current select
        var numOpts = (prettyDropdownList[elNum][0]).options.length;
        for (var i = 1; i < numOpts; i++) {
            (prettyDropdownList[elNum][0]).options.remove(1);
        }
        // iterate over this selects taxa list
        // if the chosenTaxon is present in a key, then
        // that key is what we want to propagate
        for (var curTaxon in currentTaxaList) {
            // found the list of items which has the chosenTaxon,
            // so build this select up, and then call the parent's thing
            var taxonIndex = currentTaxaList[curTaxon].indexOf(chosenVal);
            if ( taxonIndex >= 0) {
                chosenParent = curTaxon;
                var chosenTaxonList = currentTaxaList[curTaxon];
                numOpts = chosenTaxonList.length;
                for (var i = 0; i < numOpts; i++){
                    // add all the options
                    var opt = new Option(chosenTaxonList[i], chosenTaxonList[i]);
                    (prettyDropdownList[elNum][0]).append(opt);
                }
                // set selected
                document.getElementById(taxonomyLevels[elNum]).selectedIndex = (taxonIndex+1);
                (prettyDropdownList[elNum]).refresh();
                break;
            }
        }
        updateDropdownsAbove(elNum-1, chosenParent);
    }
    $('#SampleSearch').val("");
    $.when(getOccurrence()).done(function () {
        overlay.draw();
    });
}


