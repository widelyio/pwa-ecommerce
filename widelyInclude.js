		var _config = {};
		_config.service_worker_url = './service-worker.js'; 
		_config.hashId = '<YOUR HASHID>'; 
        _config.service_worker_scope = '/pwa-ecommerce/';
        _config.views = {};
        _config.views.notification = {};
        _config.views.notification.position = 'bottom-left';
		Widely.pwa(_config); 
	