import { environment } from "src/environments/environment";

export class UploadAdapter {
    public loader: any;
    public url: string;
    public xhr: XMLHttpRequest;
    public token: string;
    public arrSrcImg: string;

    constructor(loader) {
        this.loader = loader;

        // change "environment.BASE_URL" key and API path
        this.url = `${environment.apiUrl}/api/v1/diaries/images`;

        // change "token" value with your token
        this.token = localStorage.getItem("token");
    }

    upload() {
        return new Promise(async (resolve, reject) => {
            this.loader.file.then((file) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            });
        });
    }

    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    _initRequest() {
        const xhr = (this.xhr = new XMLHttpRequest());
        xhr.open("POST", this.url, true);

        // change "Authorization" header with your header
        xhr.setRequestHeader("Authorization", this.token);

        xhr.responseType = "json";
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = "Couldn't upload file:" + ` ${file.name}.`;

        xhr.addEventListener("error", () => reject(genericErrorText));
        xhr.addEventListener("abort", () => reject());

        xhr.addEventListener("load", () => {
            const response = xhr.response;

            if (!response || response.error) {
                return reject(
                    response && response.error ? response.error.message : genericErrorText
                );
            }

            resolve({
                default: response,
            });
        });

        if (xhr.upload) {
            xhr.upload.addEventListener("progress", (evt) => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    _sendRequest(file) {
        const data = new FormData();

        // change "attachments" key
        data.append("files", file);

        this.xhr.send(data);
    }
}
