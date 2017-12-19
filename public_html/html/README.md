Map Functionality
=================

Use of the map
--------------
This map is used to display the genetic diversity measure, computed in the paper (Miraldo et al.). One can
use this website to see the diversity of one or many species on a map of the world. It lets you explore the
data underlying the paper in an interactive manner.
Additionally, the site is based on google maps, so any functionality that google maps supports (such as zooming,
terrain and national boundaies) can be used in this map.

Species Input Controls
----------------------
There are two controls in the species control section of the site. The species type radio button lets you choose
between mammals and amphibians. Upon choosing one of these two, you will get a list of all the species in that group
that have any data that can be plotted. This means that any species that does not have plottable data is not displayed.
From the list of species, one can choose as many species as one wants plotted on the map.

Plotting Controls
-----------------
There are many controls in this section that let you control the plotting of the data on the map.

1. here are default color schemes one can choose from. You can pick these schemes by clicking on their names.
One may also choose a linear color gradient by choosing the starting and ending color of the linear gradient scheme.
This can be done by clicking on the color name (e.g. FFFFFF or 000000), which opens a small color palette where one
can click on the desired color. You can also enter the name of the color (in RGB hex) in the color name text box.

2. You can control the opacity of the plotting symbols by using the plotting opacity slider, with 0 corresponding
to completely transparent symbols and 1 corresponding to completely opaque symbols (default 0.8).

3. You can choose the symbol that you want to use for plotting. You can choose between circles and rectangles. The
radius of the circle is proportional to the number of sequences in that grid cell. The radius of a circle is given
as log(nseqs\_i + 1)/log(nseqs\_max + 1) where nseqs\_i is the number of sequences in the current grid cell and
nseqs\_max is the maximum number of sequence among all the grids. This scaling is applied among only the data used
to plot the current selection of species. So the scaling changes as you change your selection of species.

4. You can choose to display the latitude-longitude grid on the map. This displays the grid of cells that were used
to compute the diversity values.s

5. You can choose to display the IUCN species range of a species. This option is valid only if single species is
selected.

Updating/Resetting the map
--------------------------
The "Reset Map" button is used to clear the map and reset the species selections.
The "Refresh Map" button is used to plot the details for the selected specie(s) on the map.
Although all the plotting controls are asynchronous -- they do not need access to the server,
the choice of species type and species list require access to the server and require background computation.
In light of this, changing the species or the species type does __NOT__ automatically update the map. You need
to use the "Refresh Map" button to update the map after changing the choice of species or species type.

Plotting data on the map
------------------------
The data on the map is plotted in 4x4 latitude and longitude grid cells. The data is the same as the data used in
figure 1 of the paper, it uses the sequences of the CYTB gene to compute the genetic diversity values for each
species in the grid cell. More details can be found in the paper.
The color of the symbol reflects the genetic diversity value for that grid cell. One important thing to note about the
plot: when a single species is chosen from the list, the genetic diversity value for that species is shown in the grid
cells, when mutliple species are chosen, then the genetic diversity value for a grid cell is computed as the average
genetic diversity value for all the species that have a genetic diversity value for that cell.

Information of a particular grid cell
-------------------------------------
Further information on a grid cell can be obtained by clicking on the symbol for that grid cell. Statistics about the
number of species, sequences, bases and segregating sites are displayed. Additionally, all the sequences that have
been used to compute the genetic diversity measures for the chosen species are displayed in a table with a link to their
GenBank information. Clicking on the link opens up another tab with the GenBank information.

Download data
-------------
1. You can extract data of grid cells shown on current map by clicking "Download" at the bottom-right of the map.

2. You can download all sequences information (incl. species name, coordinates, accession number) we used in this study by
clicking the link provided on the homepage of iMapGenes or at the bottom of the map or directly acess:
http://macroecology.ku.dk/resources/imapgenes/seqs_info_tsv.zip
