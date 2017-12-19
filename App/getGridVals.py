import json
from scipy.stats import percentileofscore

data_root = "/home/imapgenes/diversityMap/App/data/"

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
    rangeGridIds = []
    for line in data:
        toks = line.strip().split()
        if toks[chosenSpecieIndex] == "1":
            rangeGridIds.append(toks[0])
    data.close()
    return rangeGridIds

def getGenbankSeqsIds(speciesType, chosenSpecies, gene, chosenGrid):
    """This function returns the information on the genbank ids for the chosen
    species. It returns a dictionary with the lat, lng as key and an array of
    genbank accession numbers as value.
    """
    if (speciesType == "mammals"):
        if (gene == "cytb"):
            dldir = data_root+"cytb_equaldis_mammals/"
        elif (gene == "coi"):
            dldir = data_root+"coi_equaldis_mammals/"
    elif (speciesType == "amphibians"):
        dldir = data_root+"cytb_equaldis_amphs/"
    htmlLines = ""
    for specie in chosenSpecies:
        coordfile = open(dldir+specie+".coords")
        for line in coordfile:
            toks = line.strip().split()
            gridid = str(int(toks[5])+1)
            if chosenGrid != gridid:
                continue
            curhtml = "<tr><td width='50%' class='spName'>"
            curhtml += specie.replace("_", " ")
            curhtml += "</td><td width='25%'><a href='http://www.google.com/maps/place/"
            curhtml += ",".join(toks[0:2])
            curhtml += "' target='_blank'><span class='location'>"
            curhtml += ", ".join([str(round(float(x),2)) for x in toks[0:2]])
            curhtml += "</span></a></td><td width='25%'>"
            if len(toks) == 8: ## genbank accession available
                curhtml += "<a href='http://www.ncbi.nlm.nih.gov/nuccore/"+toks[7]+"' target='_blank'>"+toks[7]+"</a>"
            elif len(toks) == 7: ## use the bold id
                curhtml += "<a href='http://www.boldsystems.org/index.php/Public_RecordView?processid="+toks[6]+"' target='_blank'>"+toks[6]+"</a>"
            else:
                curhtml += "NA"
            curhtml += "</td><td width='5%'></td></tr>"
            htmlLines += curhtml
        coordfile.close()
    return(json.dumps([htmlLines]))

def getMapBoxes(speciesType, chosenSpecies, gene, gdCol = 4, nseqCol = 2,
                nsegCol = 3, nbpCol = 5):
    """This function gets the details on the map boxes
    and returns them to the web page, so that the map
    can be colored appropriately.
    """
    if (speciesType == "mammals"):
        if (gene == "cytb"):
            infile = data_root+"mammals_cytb_ss_400_noNaN_noSingleSeq.txt"
        elif (gene == "coi"):
            infile = data_root+"mammals_coi_ss_400_noNaN_noSingleSeq.txt"
    elif (speciesType == "amphibians"):
        infile = data_root+"amphs_cytb_ss_400_noNaN_noSingleSeq.txt"
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
            gridId = toks[1]
            if (gridId in measureDict):
                measureDict[gridId] += float(toks[gdCol])
                numSeqsDict[gridId] += int(toks[nseqCol])
                numSegSitesDict[gridId] += int(toks[nsegCol])
                numBasePairDict[gridId] += int(toks[nbpCol])
                if (toks[0] not in numSpeciesDict[gridId]):
                    numSpeciesDict[gridId].append(toks[0])
            else:
                measureDict[gridId] = float(toks[gdCol])
                numSeqsDict[gridId] = int(toks[nseqCol])
                numSegSitesDict[gridId] = int(toks[nsegCol])
                numBasePairDict[gridId] = int(toks[nbpCol])
                numSpeciesDict[gridId] = [toks[0]]
    rangeGridIds = []
    if len(chosenSpecies) == 1:
        rangeGridIds = getSpeciesBoxes(speciesType, chosenSpecies[0])

#    htmls = getGenbankSeqsIds(dldir, chosenSpecies)

    gridIds = []
    measures = []
    nsps = []
    nseqs = []
    nsegs = []
    nbps = []
    infoHtml = []
    for gridId in measureDict.keys():
        gridIds.append(gridId)
        measures.append(round(measureDict[gridId]/len(numSpeciesDict[gridId]), 4))
        nseqs.append(numSeqsDict[gridId])
        nsegs.append(numSegSitesDict[gridId])
        nbps.append(numBasePairDict[gridId])
        nsps.append(len(numSpeciesDict[gridId]))
#        if gridId in htmls:
#            infoHtml.append(htmls[gridId])
#            infoHtml.append("")
    quantmeasures = normalize(measures)
    return(json.dumps([gridIds, measures, nseqs, nsps, nsegs, nbps, rangeGridIds, quantmeasures]))
