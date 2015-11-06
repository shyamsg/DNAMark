from mod_python import apache

def getMapBoxes(speciesType, chosenSpecies):
    """This function gets the details on the map boxes
    and returns them to the web page, so that the map
    can be colored appropriately.
    """
    print (speciesType)
    if (speciesType == "mammals"):
        infile = "../../data/cytb_4x4_geo_rm.txt"
    elif (speciesType == "amphibians"):
        infile = "../../data/cytb_4x4_geo_rm.txt"
    data = open(infile)
    strout = ""
    outdict = {}
    line = data.readline()
    for line in data:
        toks = line.strip().split()
        if (toks[0] in chosenSpecies):
            if ((toks[1], toks[2]) in outdict):
                outdict[(toks[1],toks[2])] += float(toks[5])
            else:
                outdict[(toks[1],toks[2])] = float(toks[5])
    for elem in outdict.keys():
        strout += elem[0]+":"+elem[1]+":"+outdict[elem]
    return strout
