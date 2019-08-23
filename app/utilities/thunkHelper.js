export default function thunkHelper(dispatch, types, config) {
    const $http = getService('$http');
    const $q = getService('$q');
    const [requestType, successType, errorType] = types;
    const deferred = $q.defer();
    //Dispatch BEGIN action
    dispatch({type: requestType});

    let postList = [];
    if(config.notSaved){
        postList = config.postList.map(post => {
            config.data = post;
            return $http(config)
        })
    } else  {
        postList.push($http(config))
    }

    // $http(config)
    $q.all(postList)
    .then(response => {
        //Dispatch SUCCESS action
        let payload;
        if(response[0]){
            payload = response[0].data
        } else {
            payload = response.data
        }
        dispatch({
            type: successType,
            payload
        });
        deferred.resolve(response);
    }).catch(error => {
        //Dispatch ERROR action
        dispatch({
            type: errorType,
            payload: error
        });
        deferred.reject(error);
    });

    deferred.promise;
}

const getInjector = () => {
    return angular.element(document.querySelector('[ng-app]') || document.querySelector('[ng-controller]')).injector();
};

const getService = (service) => {
    return getInjector().get(service);
};