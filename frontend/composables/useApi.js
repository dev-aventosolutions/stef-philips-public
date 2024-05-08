import axios from 'axios'
export default function () {
    // const apiBaseURL = process.env.VITE_APP_API_URL;
    const runtimeConfig = useRuntimeConfig();
    const apiBaseURL = runtimeConfig.public.VITE_APP_API_URL;

    class API {
        async request(route, payload = null, method = "GET", contentType = "application/json") {
            let options = {
                method: method,
                headers: {
                    "Accept": 'application/json',
                },
            };

            if (contentType == 'application/json') {
                options.headers['Content-Type'] = contentType;
            }

            //payload will be sent as form data if content type is multipart/form-data
            if (options.method !== "GET") {
                if (contentType.toLowerCase() == "multipart/form-data") {
                    options.data = convertToFormData(payload);
                } else if (payload && typeof payload === "object") {
                    options.data = JSON.stringify(payload);
                }
            } else if (payload) {
                // payload will be appended to the url  if method is GET
                route = this.appendParams(route, payload);
            }
            options.url = this.url(route);

            try {
                let response = await axios(options);
                // F
                return { ...(await response) }
            } catch (error) {
                return { ...(await error.response) }
            }
        }



        async get(route, payload = null) {
            return await this.request(route, payload, "GET");
        }

        async post(route, payload = null) {
            return await this.request(route, payload, "POST");
        }

        async put(route, payload = null) {
            return await this.request(route, payload, "PUT");
        }

        async delete(route, payload = null) {
            return await this.request(route, payload, "DELETE");
        }

        async patch(route, payload = null) {
            return await this.request(route, payload, "PATCH");
        }

        async upload(route, payload = null) {
            return await this.request(route, payload, "POST", "multipart/form-data");
        }

        async formData(route, payload = null) {
            return await this.request(route, payload, "POST", "multipart/form-data");
        }

        appendParams(route, payload) {
            let url = new URL(this.url(route));
            let params = new URLSearchParams(url.search.slice(1));

            if (payload && typeof payload === "object") {
                for (let key in payload) {
                    params.append(key, payload[key]);
                }
            }
            route = route.split("?")[0] + "?" + params.toString();
            return route;
        }

        url(route) {
            return `${apiBaseURL}${apiBaseURL && apiBaseURL.slice(apiBaseURL.length - 1) == "/" ? "" : "/"
                }${route}`;
        }
    }


    function convertToFormData(payload) {
        const formData = new FormData();
        for (const key in payload) {
            if (Array.isArray(payload[key])) {
                for (let i = 0; i < payload[key].length; i++) {
                    formData.append(key + "[]", payload[key][i]);
                }
            }
            else
                formData.append(key, payload[key]);
        }
        return formData;
    }

    return new API();
}