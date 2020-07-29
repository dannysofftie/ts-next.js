export interface ICookie {
    /**
     * Cookie key
     *
     * @type {string}
     * @memberof ICookie
     */
    key: string;

    /**
     * Cookie value
     *
     * @type {string}
     * @memberof ICookie
     */
    value: string;

    /**
     * Duration in hours. If not specified, `cookie will expire at the end of the session`
     *
     * @type {number}
     * @memberof ICookie
     */
    expires: number;

    /**
     * Cookie path. Default to `'/'` if not specified
     *
     * @type {string}
     * @memberof ICookie
     */
    path?: string;

    /**
     * Cookie to only be transmitted over secure protocol as `https`. Defaults to `false`
     *
     * @type {boolean}
     * @memberof ICookie
     */
    secure?: boolean;

    /**
     * SameSite prevents the browser from sending this cookie along with cross-site requests. Possible values for the flag are `lax` or `strict`.
     * - The strict value will prevent the cookie from being sent by the browser to the target site in all cross-site browsing context, even when following a regular link.
     * - The lax value will only send cookies for TOP LEVEL navigation GET requests. This is sufficient for user tracking, but it will prevent many CSRF attacks.
     *
     * @type {boolean}
     * @memberof ICookie
     */
    samesite?: boolean;
}

export const setCookie = (opts: ICookie) => {
    if (typeof window === 'undefined') {
        return false;
    }

    const date = new Date();
    date.setTime(date.getTime() + opts.expires * 60 * 60 * 1000);

    const duration = date.toUTCString();

    let cookieString = `${opts.key}=${opts.value};path=${opts.path || '/'};expires=${duration};`;

    opts.secure && (cookieString += 'secure;');
    opts.samesite && (cookieString += 'samesite;');

    document.cookie = cookieString;

    return true;
};

/**
 * Read cookie value from cookies
 *
 * @param {string} key - key to read from cookies
 */
export const getCookie = (key: string, cookieString: string = '') => {
    const c = decodeURIComponent(typeof window === 'undefined' ? cookieString : document.cookie);
    let d: string | string[];

    const e = {};
    if (c.length < 1) {
        return false;
    }
    if (c.indexOf(';') !== -1) {
        d = c.split(';');
    } else {
        d = c;
    }

    if (typeof d === 'string') {
        e[d.split('=')[0].trim()] = d.split('=')[1].trim();
    } else {
        d.map((p) => (e[p.split('=')[0].trim()] = p.split('=')[1].trim()));
    }

    if (typeof key !== 'undefined') {
        return e[key];
    }

    return e;
};

/**
 * Delete a cookie from browser cookies
 *
 * @export
 * @param {string} cookie
 * @returns
 */
export function deleteCookie(cookie: string) {
    return (document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);
}
