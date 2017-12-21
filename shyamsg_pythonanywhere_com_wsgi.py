# This file contains the WSGI configuration required to serve up your
# web application at http://shyamsg.pythonanywhere.com/
# It works by setting the variable 'application' to a WSGI handler of some
# description.
#

# +++++++++++ GENERAL DEBUGGING TIPS +++++++++++
# getting imports and sys.path right can be fiddly!
# We've tried to collect some general tips here:
# https://www.pythonanywhere.com/wiki/DebuggingImportError


HOME_PAGE = """<html>
  <head>
    <meta http-equiv="refresh" content="0; /html/DNAMark.shtml">
  </head>
</html>
"""

DOWNLOAD_PAGE = """<html>
  <head>
    <meta http-equiv="refresh" content="0; /downloads/index.html">
  </head>
</html>
"""


import os
import sys

sys.path.append('/home/shyamsg/DNAMark/App/')

os.environ['PYTHON_EGG_CACHE'] = '/home/shyamsg/DNAMark/App/.python-egg'

#def application(environ, start_response):
#    if environ.get('PATH_INFO') == '/':
#        status = '200 OK'
#        content = HELLO_WORLD
#    else:
#        status = '404 NOT FOUND'
#        content = 'Page not found.'
#    response_headers = [('Content-Type', 'text/html'), ('Content-Length', str(len(content)))]
#    start_response(status, response_headers)
#    yield content.encode('utf8')

def application(environ, start_response):
    import cgi
    import getGridVals
#    status = '200 OK'
#    content = HELLO_WORLD
#    response_headers = [('Content-Type', 'text/html'), ('Content-Length', str(len(content)))]
#    start_response(status, response_headers)
    if environ.get('PATH_INFO') == '/remap':
        post_env = environ.copy()
        post_env['QUERY_STRING'] = ''
        post = cgi.FieldStorage(
            fp=environ['wsgi.input'],
            environ=post_env,
            keep_blank_values=True
        )
        # Get the form data
        spType = post.getvalue("spType")
        species = post.getvalue("species[]")
        gene = post.getvalue("gene")
        # If the species is a single one, then it is a string, convert it to a list
        if type(species) is str:
            species = [species]
        output = getGridVals.getMapBoxes(spType, species, gene)
        status = '200 OK'
        response_headers = [('Content-type', 'application/text')]
        start_response(status,response_headers)
        yield output.encode('utf8')
    elif environ.get('PATH_INFO') == '/download':
        post_env = environ.copy()
        post_env['QUERY_STRING'] = ''
        post = cgi.FieldStorage(
            fp=environ['wsgi.input'],
            environ=post_env,
            keep_blank_values=True
        )
        # Get the form data
        spType = post.getvalue("spType")
        species = post.getvalue("species[]")
        gene = post.getvalue("gene")
        gridId = post.getvalue("grid")
        # If the species is a single one, then it is a string, convert it to a list
        if type(species) is str:
            species = [species]
        output = getGridVals.getGenbankSeqsIds(spType, species, gene, gridId)
        status = '200 OK'
        response_headers = [('Content-type', 'application/text')]
        start_response(status,response_headers)
        yield output.encode('utf8')
    else:
        status = '200 OK'
        content = HOME_PAGE
        response_headers = [('Content-Type', 'text/html'), ('Content-Length', str(len(content)))]
        start_response(status, response_headers)
        yield content.encode('utf8')

