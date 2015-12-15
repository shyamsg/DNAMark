import os
import sys

sys.path.append('/home/shyam/Work/diversityMap/App/')

os.environ['PYTHON_EGG_CACHE'] = '/home/shyam/Work/diversityMap/App/.python-egg'

def application(environ, start_response):
    import cgi, json
    import getGridVals

    post_env = environ.copy()
    post_env['QUERY_STRING'] = ''
    post = cgi.FieldStorage(
        fp=environ['wsgi.input'],
        environ=post_env,
        keep_blank_values=True
    )

    # Get the form data
    d={}
    spType = post.getvalue("spType")
    species = post.getvalue("species[]")

    output = getGridVals.getMapBoxes(spType, species)

    status = '200 OK'

    response_headers = [('Content-type', 'application/text')]
    start_response(status,response_headers)
    return [output]
