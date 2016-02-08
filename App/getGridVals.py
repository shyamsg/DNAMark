import json

def getSpeciesBoxes(speciesType, chosenSpecie):
    """This function gets the lats and longs of the boxes where the species is
    found using the matrix with the IUCN ranges. This information is then used
    to draw a border around the grid cells where the species is found according
    to the IUCN database.
    """
    if (speciesType == "mammals"):
        infile = "/home/shyam/Work/diversityMap/App/data/PAMatrix_mammals.txt"
    elif (speciesType == "amphibians"):
        infile = "/home/shyam/Work/diversityMap/App/data/PAMatrix_amphibs.txt"
    data = open(infile)
    speciesNames = data.readline().strip().split()
    if chosenSpecie in speciesNames:
        chosenSpecieIndex = speciesNames.index(chosenSpecie)
    else:
        return ([],[])
    rangeLats = []
    rangeLngs = []
    for line in data:
        toks = line.strip().split()
        if toks[chosenSpecieIndex] == "1":
            rangeLats.append(int(toks[0]))
            rangeLngs.append(int(toks[1]))
    data.close()
    return (rangeLats, rangeLngs)

def getGenbankSeqsIds(gidfile, chosenSpecies):
    """This function returns the information on the genbank ids for the chosen
    species. It returns a dictionary with the lat, lng as key and an array of
    genbank accession numbers as value.
    """
    gid = open(gidfile)
    htmlLines = {}
    for line in gid:
        toks = line.strip().split()
        if toks[5] in chosenSpecies:
            curhtml = "<tr><td width='60%'>"
            curhtml += toks[5].replace("_", " ")
            curhtml += "</td><td width='40%'><a href='http://www.ncbi.nlm.nih.gov/nuccore/"
            curhtml += toks[4]
            curhtml += "' target='_blank'>"+toks[4]
            curhtml += "</a></td></tr>"
            if (int(toks[0]), int(toks[1])) in htmlLines:
                htmlLines[(int(toks[0]), int(toks[1]))] += curhtml
            else:
                htmlLines[(int(toks[0]), int(toks[1]))] = curhtml
    gid.close()
    return htmlLines

def getMapBoxes(speciesType, chosenSpecies, gdCol = 5, nseqCol = 3,
                nsegCol = 4, nbpCol = 6):
    """This function gets the details on the map boxes
    and returns them to the web page, so that the map
    can be colored appropriately.
    """
    if (speciesType == "mammals"):
        infile = "/home/shyam/Work/diversityMap/App/data/mammals_cytb_ss_noNaN_noSingleSeq.txt"
        gidfile = "/home/shyam/Work/diversityMap/App/data/mammals_cytb_gids.txt"
    elif (speciesType == "amphibians"):
        infile = "/home/shyam/Work/diversityMap/App/data/amphs_cytb_ss_noNaN_noSingelSeq.txt"
        gidfile = "/home/shyam/Work/diversityMap/App/data/amphs_cytb_gids.txt"
    data = open(infile)
#   line = data.readline()
    measureDict = {}
    numSeqsDict = {}
    numSpeciesDict = {}
    numSegSitesDict = {}
    numBasePairDict = {}
    for line in data:
        toks = line.strip().split()
        if (toks[0] in chosenSpecies):
            lat = int(toks[1])
            lng = int(toks[2])
            if ((lat, lng) in measureDict):
                measureDict[(lat,lng)] += float(toks[gdCol])
                numSeqsDict[(lat,lng)] += int(toks[nseqCol])
                numSegSitesDict[(lat,lng)] += int(toks[nsegCol])
                numBasePairDict[(lat,lng)] += int(toks[nbpCol])
                if (toks[0] not in numSpeciesDict[(lat,lng)]):
                    numSpeciesDict[(lat,lng)].append(toks[0])
            else:
                measureDict[(lat,lng)] = float(toks[gdCol])
                numSeqsDict[(lat,lng)] = int(toks[nseqCol])
                numSegSitesDict[(lat,lng)] = int(toks[nsegCol])
                numBasePairDict[(lat,lng)] = int(toks[nbpCol])
                numSpeciesDict[(lat,lng)] = [toks[0]]

    rangeLats = []
    rangeLngs = [chosenSpecies]
    if len(chosenSpecies) == 1:
        rangeLats, rangeLngs = getSpeciesBoxes(speciesType, chosenSpecies[0])

    htmls = getGenbankSeqsIds(gidfile, chosenSpecies)

    lats = []
    lngs = []
    measures = []
    nsps = []
    nseqs = []
    nsegs = []
    nbps = []
    infoHtml = []
    for elem in measureDict.keys():
        lats.append(elem[0])
        lngs.append(elem[1])
        measures.append(round(measureDict[elem], 4))
        nseqs.append(numSeqsDict[elem])
        nsegs.append(numSegSitesDict[elem])
        nbps.append(numBasePairDict[elem])
        nsps.append(len(numSpeciesDict[elem]))
        if elem in htmls:
            infoHtml.append(htmls[elem])
    return(json.dumps([lats, lngs, measures, nseqs, infoHtml, nsps, nsegs, nbps, rangeLats, rangeLngs]))
