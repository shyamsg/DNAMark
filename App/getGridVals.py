import json
from scipy.stats import percentileofscore

data_root = "/home/shyamsg/diversityMap/App/data/"

def normalize(measures):
    """This function changes a numpy array to a uniform normal array.
    """
    return([percentileofscore(measures, x) for x in measures])

def getSpeciesBoxes(speciesType, chosenSpecie):
    """This function gets the lats and longs of the boxes where the species is
    found using the matrix with the IUCN ranges. This information is then used
    to draw a border around the grid cells where the species is found according
    to the IUCN database.
    """
    if (speciesType == "mammals"):
        infile = data_root+"Mammals_4deg_Behrmann.csv"
    elif (speciesType == "amphibians"):
        infile = data_root+"Amphibians_4deg_Behrmann.csv"
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
#    if (len(rangeLats) == 0):
#        rangeLats.append("Nan")
#        rangeLngs.append("Nan")
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
            curhtml = "<tr><td width='50%'>"
            curhtml += toks[5].replace("_", " ")
            curhtml += "</td><td width='25%'><a href='http://www.google.com/maps/place/"
            curhtml += ",".join(toks[2:4])
            curhtml += "' target='_blank'><span class='location'>"
            curhtml += ", ".join([str(round(float(x),2)) for x in toks[2:4]])
            curhtml += "</span></a></td><td width='25%'><a href='http://www.ncbi.nlm.nih.gov/nuccore/"
            curhtml += toks[4]
            curhtml += "' target='_blank'>"+toks[4]
            curhtml += "</a></td><td width='5%'></td></tr>"
            if (int(toks[0]), int(toks[1])) in htmlLines:
                htmlLines[(int(toks[0]), int(toks[1]))] += curhtml
            else:
                htmlLines[(int(toks[0]), int(toks[1]))] = curhtml
    gid.close()
    return htmlLines

def getMapBoxes(speciesType, chosenSpecies, gdCol = 6, nseqCol = 3,
                nsegCol = 4, nbpCol = 7):
    """This function gets the details on the map boxes
    and returns them to the web page, so that the map
    can be colored appropriately.
    """
    if (speciesType == "mammals"):
        infile = data_root+"mammals_cytb_noNaN_noSingleSeq_noZoo.txt"
        gidfile = data_root+"mammals_cytb_gids.txt"
    elif (speciesType == "amphibians"):
        infile = data_root+"amphs_cytb_noNaN_noSingleSeq_noZoo.txt"
        gidfile = data_root+"amphs_cytb_gids.txt"
    data = open(infile)
    # Read and discard header
    line = data.readline()
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
        measures.append(round(measureDict[elem]/len(numSpeciesDict[elem]), 4))
        nseqs.append(numSeqsDict[elem])
        nsegs.append(numSegSitesDict[elem])
        nbps.append(numBasePairDict[elem])
        nsps.append(len(numSpeciesDict[elem]))
        if elem in htmls:
            infoHtml.append(htmls[elem])
    quantmeasures = normalize(measures)
    return(json.dumps([lats, lngs, measures, nseqs, infoHtml, nsps, nsegs, nbps, rangeLats, rangeLngs, quantmeasures]))
