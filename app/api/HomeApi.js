import ApiService from './ApiService';

const getHomeScreenInfo = (accountId, accountType) => {
    return ApiService.get(`HomeScreenInfo?functionName=GetHomeInfo&accountId=${accountId}&accountType=${accountType}`);
};

export default {
    getHomeScreenInfo
};
