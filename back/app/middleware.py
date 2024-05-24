from django.http import JsonResponse

import json
class MiddlewareExemple:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        response = self.get_response(request)

        if request.method == 'POST':
            data = json.loads(request.body)
            connected = data.get('connected')
            path = request.path

            if path in ['/api/login', "/"]:
                if connected == True:
            
                    return JsonResponse({'status' : 'middleware', 
                                        "message" : 'block by middleware, allready connected',
                                        'connected':connected,
                                        'path': path})
                else:
                    return response
        return response
            
      

        
        