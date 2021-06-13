/* eslint-disable no-unused-vars */
// import { stringify } from "qs";
// import { toast } from "react-toastify";
// import forIn from "lodash/forIn";
// import React from "react";
// import Cookie from "js-cookie";
// import { get, STORAGE } from "../utils/storage";
// import ErrorMessage from "../../components/Form/ErrorMessage";
// import { isFunc } from "../../utils/util";

const SYSTEM_ERROR = 1;
const API_ERROR = 2;
export const UNAUTHORIZE_ERROR = "UNAUTHORIZED";

class ApiError extends Error {
  constructor(message, error, type) {
    super(message);
    this.error = error;
    this.type = type;
  }
}

function logError(error) {
  throw error;
}

/**
 * Error: {name, code, message}
 * @param response
 * @returns {{ok}|*}
 */
async function validateResponse(response) {
  if (!response.ok) {
    let error = null;
    let type = API_ERROR;
    switch (response.status) {
      case 400:
        error = await response.json();
        break;
      case 401:
        error = {
          name: "path",
          code: UNAUTHORIZE_ERROR,
          message: UNAUTHORIZE_ERROR,
        };
        break;
      case 403:
        error = {
          name: "path",
          code: "ACCESS_DENIED",
          message: "FUNCTION_HAS_BLOCKED",
        };
      // return toast.error("機能がブロックされました。");
      case 404:
        error = await response.json();
        break;
      default:
        type = 1;
        error = {
          name: "path",
          code: "INTERNAL_ERROR",
          message: response.statusText,
        };
      // return toast.error(<ErrorMessage error={error} />, {
      //   toastId: error.code,
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    }

    if (error) {
      throw new ApiError(response.statusText, error, type);
    } else {
      throw Error(response.statusText);
    }
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function getAuthHeader() {
  // const token =
  //   get(STORAGE.JWT) && get(STORAGE.JWT) !== "null"
  //     ? get(STORAGE.JWT)
  //     : Cookie.get(STORAGE.JWT);

  // key JWT, authenticate, authorize, oauth...

  return {
    // OAUTH need key / token
    // Authorization: `Bearer ${encodeURIComponent(token)}`,

    // JSON, BLOB ...
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export function fetchWithAuth(pathToResource) {
  return fetch(pathToResource, { headers: getAuthHeader() });
}

export function fetchJSON(pathToResource) {
  // HTTP: GET, POST, PUT, DELETE, PATCH
  // GET REQUEST
  // ERORR code
  // AXIOS is library not Built in funciton like fetch
  return fetch(pathToResource, { headers: getAuthHeader() })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);
}

// REST, RESTful, postman, cURL, ...
export function postJSON(pathToResource, body) {
  return fetch(pathToResource, {
    method: "POST",
    headers: getAuthHeader(),
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);
}

export function putJSON(pathToResource, body) {
  return fetch(pathToResource, {
    method: "PUT",
    headers: getAuthHeader(),
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);
}

export function deleteRequest(pathToResource) {
  return fetch(pathToResource, {
    method: "DELETE",
    headers: getAuthHeader(),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);
}

// export function createSearchApi(url, extQuery) {
//   /**
//    * Search query include page,size,filter
//    * @param params: {
//    *   page: number,
//    *   size: number,
//    *   sorts: [],
//    *   filter:{
//    *     search: '',
//    *     id: number,
//    *     ...
//    *   }
//    * }
//    */
//   return (params) => {
//     const { page, size, sorts, filter } = params;
//     const mapSorts = [];
//     forIn(sorts, function mapItem(val, key) {
//       if (val && val.length && key && key.length) {
//         mapSorts.push([`${key}:${val}`]);
//       }
//     });
//     const body = {
//       page,
//       size,
//       sorts: mapSorts,
//       ...filter,
//     };

//     let endpoint = `${isFunc(url) ? url() : url}?${stringify(body, {
//       arrayFormat: "repeat",
//     })}`;

//     if (extQuery) {
//       endpoint = `${endpoint}&${extQuery}`;
//     }
//     return fetchJSON(endpoint);
//   };
// }

export function createCRUDApi(url) {
  const create = (form) => postJSON(`${url}`, form);
  // const search = createSearchApi(url);
  const read = (id) => fetchJSON(`${url}/${id}`);
  const update = (id, form) => putJSON(`${url}/${id}`, form);
  const remove = (id) => deleteRequest(`${url}/${id}`);
  return {
    // search,
    create,
    read,
    update,
    remove,
  };
}

export const download = (url, name) =>
  fetchWithAuth(url)
    .then((response) => response.blob())
    .then((blobby) => {
      const objectUrl = window.URL.createObjectURL(blobby);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = name;
      anchor.click();

      window.URL.revokeObjectURL(objectUrl);
      return objectUrl;
    });
