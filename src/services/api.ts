const baseUrl = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/"

interface IRequestParams {
    endpoint: string;
    config?: RequestInit;
    params?: Record<string, string>;
}

export default class AppFetch {
    public static request({ endpoint, config, params }: IRequestParams): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = new URL(`${baseUrl}${endpoint}`);

            let searchParams = params || {};

            searchParams = {
                ...searchParams,
            };

            url.search = new URLSearchParams(searchParams).toString();

            fetch(url.toString(), config)
                .then(res => res.json())
                .then(json => {
                    resolve(json);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}
