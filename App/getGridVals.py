import json

data_root = "/home/shyamsg/DNAMark/App/data/"

def getOccurrencesCoords(skingdom, sphylum, sclass, sorder, sfamily, sgenus, sspecies):
    """This function gets the occurrences so that match the chosen criteria.
    """
    KINCOL = 23
    PHYCOL = 24
    CLACOL = 25
    ORDCOL = 26
    FAMCOL = 27
    GENCOL = 28
    SPECOL = 29
    LATCOL = 17
    LNGCOL = 18
    DMDCOL = 1
    CNTRYCOL = 13
    GENCOL = 31
    FASCOL = 32
    infile = data_root + "DNAmark_Masterfile_webpage.csv"
    fh = open(infile)
    header = fh.readline()
    header = header.strip().split(';')
    nToks = len(header)
    lats = []
    lngs = []
    kngs = []
    countries = []
    dmds = []
    spcs = []
    gens = []
    fsts = []
    for line in fh:
        toks = line.strip().split(';')
        if len(toks) != nToks:
            return("Number of tokens error. Contact website owner.")
        if skingdom != "Reset" and skingdom != toks[KINCOL]:
            continue
        if sphylum != "Reset" and sphylum != toks[PHYCOL]:
            continue
        if sclass != "Reset" and sclass != toks[CLACOL]:
            continue
        if sorder != "Reset" and sorder != toks[ORDCOL]:
            continue
        if sfamily != "Reset" and sfamily != toks[FAMCOL]:
            continue
        if sgenus != "Reset" and sgenus != toks[GENCOL]:
            continue
        if sspecies != "Reset" and sspecies != toks[SPECOL]:
            continue
        lats.append(toks[LATCOL])
        lngs.append(toks[LNGCOL])
        kngs.append(toks[KINCOL])
        countries.append(toks[CNTRYCOL])
        dmds.append(toks[DMDCOL])
        spcs.append(toks[SPECOL])
        gens.append(toks[GENCOL])
        fsts.append(toks[FASCOL])
    fh.close()
    return (json.dumps((lats, lngs, kngs, dmds, countries, spcs), ensure_ascii=False))
