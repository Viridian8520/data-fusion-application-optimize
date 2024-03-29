import axios from 'axios';

export const queryOptimizeData = () => new Promise((resolve, reject) => {
    return axios({
        url: 'http://8.134.59.53:8080/rest/optimized/element/threshold/query',
        method: 'get',
    }).then(res => {
        if (res && res.status === 200) {
            // console.log('get',res.data);
            localStorage.setItem('optimizeData', JSON.stringify(res.data));
            resolve(res);
        } else {
            reject(res);
        }
    }).catch(err => {
        console.log(err);
    })
});