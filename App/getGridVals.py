import json

def getMapBoxes(speciesType, chosenSpecies, measureCol = 5, nseqCol = 3):
    """This function gets the details on the map boxes
    and returns them to the web page, so that the map
    can be colored appropriately.
    """
    if (speciesType == "mammals"):
        infile = "/home/shyam/Work/diversityMap/App/data/cytb_4x4_geo_rm.txt"
    elif (speciesType == "amphibians"):
        infile = "/home/shyam/Work/diversityMap/App/data/cytb_4x4_geo_rm.txt"
    data = open(infile)
    line = data.readline()
    measureDict = {}
    numSeqsDict = {}
    numSpeciesDict = {}
    for line in data:
        toks = line.strip().split()
        if (toks[0] in chosenSpecies):
            lat = int(toks[1])
            lng = int(toks[2])
            if ((lat, lng) in measureDict):
                measureDict[(lat,lng)] += float(toks[measureCol])
                numSeqsDict[(lat,lng)] += int(toks[nseqCol])
                if (toks[0] not in numSpeciesDict[(lat,lng)]):
                    numSpeciesDict[(lat,lng)].append(toks[0])
            else:
                measureDict[(lat,lng)] = float(toks[measureCol])
                numSeqsDict[(lat,lng)] = int(toks[nseqCol])
                numSpeciesDict[(lat,lng)] = [toks[0]]

    lats = []
    lngs = []
    measures = []
    nsps = []
    nseqs = []
    infoHtml = []
    for elem in measureDict.keys():
        lats.append(elem[0])
        lngs.append(elem[1])
        measures.append(round(measureDict[elem], 4))
        nseqs.append(numSeqsDict[elem])
        nsps.append(len(numSpeciesDict[elem]))
        infoHtml.append("Not implemented yet.")
    return(json.dumps([lats, lngs, measures, nseqs, infoHtml, nsps]))
